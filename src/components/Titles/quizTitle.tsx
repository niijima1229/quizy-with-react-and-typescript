import { Box, Container, Typography } from '@mui/material'
import type React from 'react'

const QuizTitle: React.FC = () => {
  return (
    <>
      <Box>
        <Typography align="center" variant="h3">
          ガチで東京の人しか解けない難読地名クイズ
        </Typography>
      </Box>
    </>
  )
}

export default QuizTitle
