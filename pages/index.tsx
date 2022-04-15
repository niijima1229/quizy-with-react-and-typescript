import { Box, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'

import Quiz from '../src/components/Quiz'
import quizData from '../src/data'

const Home: NextPage = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ mt: 5, mb: 6 }}>
          <Typography variant="h6" align="center" fontWeight="bold">
            ガチで東京の人しか解けない！ #東京の難読地名クイズ
          </Typography>
        </Box>
        {quizData.map((quiz) => {
          return <Quiz quiz={quiz} key={quiz.id} />
        })}
      </Container>
    </>
  )
}

export default Home
