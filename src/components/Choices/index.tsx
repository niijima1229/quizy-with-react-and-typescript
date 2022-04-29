import { Box } from '@mui/material'
import type { VFC } from 'react'

type Choice = {
  name: string
  backgroundColor: string
  textColor: string
  index: number
  showAnswerBox(index: number): void
}

const Choice: VFC<Choice> = ({
  name,
  backgroundColor,
  textColor,
  index,
  showAnswerBox,
}) => {
  return (
    <Box
      onClick={() => showAnswerBox(index)}
      mb={1}
      sx={{
        backgroundColor: backgroundColor,
        color: textColor,
        border: 'solid',
        borderColor: '#f0f0f0',
        padding: '10px',
        fontWeight: 'bold',
      }}
    >
      {name}
    </Box>
  )
}

export default Choice
