import type React from 'react'

type Choice = {
  name: string
  color: string
  index: number
  showAnswerBox(index: number): void
}

const Choice: React.VFC = (props: Choice) => {
  return <div onClick={() => props.showAnswerBox(0)}>{props.name}</div>
}

export default Choice
