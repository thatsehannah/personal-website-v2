import React from "react"
import MemojiWrapper from "../../../components/layout/MemojiWrapper"

const Memojis = () => {
  const memojis = [
    {
      src: "/images/memojis/story-1.png",
      alt: "peace sign memoji",
    },
    {
      src: "/images/memojis/story-2.png",
      styles: [["top", "-45px"]],
      alt: "memoji and computer",
    },
    {
      src: "/images/memojis/story-3.png",
      alt: "winking memoji",
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
