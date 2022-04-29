import { Container } from '@mui/material'
import type React from 'react'

import Question from '../src/components/Question/index'
import QuizTitle from '../src/components/Titles/quizTitle'
import quizData, {Quiz} from '../src/data'

const AllQuiz: React.FC = () => {
  return (
    <Container>
      <QuizTitle />
      {quizData.map((quiz) => {
        return <Question key={quiz.id} question_number={quiz.id} />
      })}
      <Question question_number={1} />
    </Container>
  )
}

export default AllQuiz
