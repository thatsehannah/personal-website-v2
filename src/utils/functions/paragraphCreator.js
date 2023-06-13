export const paragraphCreator = (text, numOfParagraphs) => {
  let sentences = text.match(/[^.!?]+[.!?]+/g)
  let paragraphs = []
  for (let i = 0; i < sentences.length; i += numOfParagraphs) {
    let paragraph = sentences.slice(i, i + numOfParagraphs).join(" ")
    paragraphs.push(paragraph)
  }

  return paragraphs
}
