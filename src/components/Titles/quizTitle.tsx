import { Typography } from '@mui/material'
import type React from 'react'

const QuizTitle: React.FC = () => {
  return (
    <>
      <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        ガチで東京の人しか解けない難読地名クイズ
      </Typography>
    </>
  )
}

export default QuizTitle
