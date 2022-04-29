import React from 'react'
import { useState } from 'react'

import Choice from '../../../src/components/Choices/index'
import quizData from '../../data'

type Question = {
  question_number: number
}

const Question = ({ question_number }: Question) => {
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
    choiceBackgroundColor.map((color, index) => {
      if (index === answerIndex) {
        choiceBackgroundColor[index].color = 'blue'
        return
      }
      if (index === chosenIndex) {
        choiceBackgroundColor[index].color = 'red'
      }
    })
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
        // うまく動かせていないが最終的にはこちらを使う
        // return (
        //   <Choice
        //     key={index}
        //     name={`${choice}`}
        //     color={choiceBackgroundColor[index].color}
        //     showAnswerBox={showAnswerBox}
        //   />
        // )
        return (
          <div
            key={index}
            style={{ backgroundColor: choiceBackgroundColor[index].color }}
            onClick={() => showAnswerBox(index)}
          >
            <p>{choice}</p>
          </div>
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
