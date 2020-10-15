import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MusicProps } from '.'

const Rect = styled.rect`
  transition: all 0.3s linear;
`

export const Music = (props: MusicProps) => {
  const {
    bars = 5,
    colour,
    height = 20
  } = props

  const calcHeights = () => Array.from({ length: bars }, () => height * Math.random())

  const [barHeights, setBarHeights] = useState(calcHeights())

  useEffect(() => {
    const interval = setInterval(() => {
      setBarHeights(calcHeights())
    }, 200)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <svg viewBox={`0 0 ${(3 * bars) - 1} ${height}`}>
      {Array.from({ length: bars }, (_, index) => (
        <Rect
          key={index}
          fill={colour}
          x={3 * index}
          y={height - barHeights[index]}
          width={2}
          height={barHeights[index]}
          rx={1}
        />
      ))}
    </svg>
  )
}