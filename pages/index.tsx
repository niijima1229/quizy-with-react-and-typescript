import { Container } from '@mui/material'
import { VFC } from 'react'

import Question from '../src/components/Question/index'
import QuizTitle from '../src/components/Titles/quizTitle'
import quizData from '../src/data'

const AllQuiz: VFC = () => {
  return (
    <Container>
      <QuizTitle />
      {quizData.map((quiz) => {
        return <Question key={quiz.id} question_number={quiz.id} />
      })}
    </Container>
  )
}

export default AllQuiz
