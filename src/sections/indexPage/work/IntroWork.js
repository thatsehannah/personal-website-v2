import React from "react"
import { useWork } from "../../../utils/hooks/useWork"

const IntroWork = () => {
  const workData = useWork()

  const sliced = workData.slice(0, 2)

  return (
    <div>
      {sliced.map(({ node, index }) => (
        <p key={index}>{node.title}</p>
      ))}
    </div>
  )
}

export default IntroWork
