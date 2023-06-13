import React from "react"
import MemojiWrapper from "../../../components/layout/MemojiWrapper"

const Memojis = () => {
  const memojis = [
    {
      src: "/images/memojis/story-1.png",
    },
    {
      src: "/images/memojis/story-2.png",
      styles: [["top", "-45px"]],
    },
    {
      src: "/images/memojis/story-3.png",
    },
  ]

  return (
    <>
      {memojis.map((memoji, index) => {
        const threshold = Math.min(0.1 * (index + 1), 1)
        return (
          <MemojiWrapper key={index} threshold={threshold} memoji={memoji} />
        )
      })}
    </>
  )
}

export default Memojis
