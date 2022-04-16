import { Box, Typography } from '@mui/material'
import { FC, useState } from 'react'

import { Quiz } from '../../data'
import Answer from '../Answer'
import ChoiceList from '../ChoiceList'

export type ButtonStyle = {
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  variant: 'text' | 'outlined' | 'contained'
}

type QuizProps = {
  quiz: Quiz
}

const Quiz: FC<QuizProps> = ({ quiz }) => {
  const [answerIsShown, setAnswerIsShown] = useState<boolean>(false)
  const [isRightAnswer, setIsRightAnswer] = useState<boolean>(false)

  const defaultButtonStyle: ButtonStyle[] = [
    { variant: 'outlined', color: 'primary' },
    { variant: 'outlined', color: 'primary' },
    { variant: 'outlined', color: 'primary' },
  ]
  const [buttonStyle, setButtonStyle] =
    useState<ButtonStyle[]>(defaultButtonStyle)

  const id = quiz.id
  const choices = quiz.choices
  const answerIndex = quiz.answerIndex

  const handleClick = (choiceIndex: number): void => {
    if (answerIsShown) return
    setAnswerIsShown(true)
    judgeAnswer(choiceIndex)
  }

  const judgeAnswer = (choiceIndex: number): void => {
    if (choiceIndex === answerIndex) {
      setIsRightAnswer(true)
    }
    const buttonStyleUpdated: ButtonStyle[] = defaultButtonStyle.map(
      (style, index) => {
        if (index === answerIndex)
          return { variant: 'contained', color: 'primary' }
        if (index === choiceIndex)
          return { variant: 'contained', color: 'secondary' }
        return style
      },
    )
    setButtonStyle(buttonStyleUpdated)
  }

  return (
    <>
      <Box sx={{ mb: 10 }}>
        <Typography fontWeight="bold">{id}. この地名はなんて読む？</Typography>
        <Box
          sx={{
            mt: 3,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img src={`/img/kuizy${('0' + id).slice(-2)}.png`} width="620" />
        </Box>
        <Box sx={{ width: '100%' }}>
          <ChoiceList
            choices={choices}
            buttonStyle={buttonStyle}
            handleClick={handleClick}
          />
          {answerIsShown && (
            <Answer
              isRightAnswer={isRightAnswer}
              answer={choices[answerIndex]}
            />
          )}
        </Box>
      </Box>
    </>
  )
}

export default Quiz
