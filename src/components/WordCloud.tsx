import React from 'react'
import D3WordCloud from 'react-d3-cloud'

type Props = {}

const data = [
    {
        text: "Food",
        value: 3,
    },
    {
        text: "Animals",
        value: 5,
    },
    {
        text: "Java",
        value: 9,
    },
    {
        text: "Programming",
        value: 11,
    },

];

const fontSizeMapper = (word: { value: number }) => {
    return Math.log2(word.value) * 5 + 16;
}

const WordCloud = (props: Props) => {
    
  return (
      <>
          <D3WordCloud
              data={data}
              height={480}
              font="Times"
              fontSize={fontSizeMapper}
              rotate={0}
              padding={10}
              
          />  
      </>
  )
}

export default WordCloud