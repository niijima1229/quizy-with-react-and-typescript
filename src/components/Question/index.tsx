import { useState, VFC } from 'react'

import Choice from '../../../src/components/Choices/index'
import quizData from '../../data'

type Question = {
  question_number: number
}

const Question: VFC<Question> = ({ question_number }) => {
  const questionNumberIndex = question_number - 1
  const answerIndex = quizData[questionNumberIndex].answerIndex
  const [answerBox, setAnswerBox] = useState(false)
  const [resultText, setResultText] = useState('')
  const [choiceBackgroundColor, setChoiceBackgroundColor] = useState([
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
  ])
  const showAnswerBox = (index: number): void => {
    if (answerBox) return
    judgeAnswer(index)
    addingChoiceBackgroundColor(index)
    setAnswerBox(true)
  }
  const judgeAnswer = (index: number): void => {
    if (index === answerIndex) {
      setResultText('正解')
    } else {
      setResultText('不正解')
    }
  }
  const addingChoiceBackgroundColor = (chosenIndex: number): void => {
    for (let i = 0; i < 3; i++) {
      if (i === answerIndex) {
        choiceBackgroundColor[i].color = 'blue'
        return
      }
      if (i === chosenIndex) {
        choiceBackgroundColor[i].color = 'red'
      }
    }
    setChoiceBackgroundColor(choiceBackgroundColor)
  }
  return (
    <>
      <p>{question_number}.この地名はなんて読む？</p>
      {/* 10番目までは画像の先頭に0がつくので制御 */}
      <img
        src={`../../../img/kuizy${
          question_number < 10 ? '0' + question_number : question_number
        }.png`}
        alt="問題の写真"
      />
      {quizData[questionNumberIndex].choices.map((choice, index) => {
        return (
          <Choice
            key={index}
            index={index}
            name={choice}
            color={choiceBackgroundColor[index].color}
            showAnswerBox={showAnswerBox}
          />
        )
      })}
      <div style={{ display: answerBox ? 'block' : 'none' }}>
        <p>{resultText}</p>
        <p>正解は{quizData[questionNumberIndex].choices[answerIndex]}です</p>
      </div>
    </>
  )
}

export default Question
