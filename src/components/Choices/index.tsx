import type { VFC } from 'react'

type Choice = {
  name: string
  color: string
  index: number
  showAnswerBox(index: number): void
}

const Choice: VFC<Choice> = ({ name, color, index, showAnswerBox }) => {
  return (
    <div
      onClick={() => showAnswerBox(index)}
      style={{ backgroundColor: color }}
    >
      {name}
    </div>
  )
}

export default Choice
