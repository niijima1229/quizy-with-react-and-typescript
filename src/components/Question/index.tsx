import { Box, Typography } from '@mui/material'
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
  const [choiceColor, setChoiceColor] = useState([
    { backgroundColor: 'white', textColor: 'black' },
    { backgroundColor: 'white', textColor: 'black' },
    { backgroundColor: 'white', textColor: 'black' },
  ])
  const showAnswerBox = (index: number): void => {
    if (answerBox) return
    judgeAnswer(index)
    addingChoiceColor(index)
    setAnswerBox(true)
  }
  const judgeAnswer = (index: number): void => {
    if (index === answerIndex) {
      setResultText('正解')
    } else {
      setResultText('不正解')
    }
  }
  const addingChoiceColor = (chosenIndex: number): void => {
    for (let i = 0; i < 3; i++) {
      if (i === answerIndex) {
        choiceColor[i].backgroundColor = '#287dff'
        choiceColor[i].textColor = 'white'
        return
      }
      if (i === chosenIndex) {
        choiceColor[i].backgroundColor = '#ff5128'
        choiceColor[i].textColor = 'white'
      }
    }
    setChoiceColor(choiceColor)
  }
  return (
    <>
      <Typography mt={3} sx={{ fontWeight: 'bold' }}>
        {question_number}.この地名はなんて読む？
      </Typography>
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
            backgroundColor={choiceColor[index].backgroundColor}
            textColor={choiceColor[index].textColor}
            showAnswerBox={showAnswerBox}
          />
        )
      })}
      <Box
        sx={{
          display: answerBox ? 'block' : 'none',
          backgroundColor: '#f5f5f5',
          padding: '20px',
        }}
      >
        <Typography
          mb={3}
          sx={{
            display: 'inline-block',
            borderRadius: '2px',
            borderBottom: 'solid 2px',
            borderBottomColor: resultText === '正解' ? '#287dff' : '#ff5128',
            fontWeight: 'bold',
          }}
        >
          {resultText}
        </Typography>
        <Typography>
          正解は{quizData[questionNumberIndex].choices[answerIndex]}です
        </Typography>
      </Box>
    </>
  )
}

export default Question
