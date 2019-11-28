import React, { useEffect, useMemo, useContext, useRef, useState } from 'react'
import './ScrollProgress.scss'
import { UiContext } from '../context/UiContext'

/**
 *
 * 추후 보정
 * @param {*} classList
 * @param {*} target
 */
function findClassName(classList, target) {
  let array = classList.split(' ')
  return array[1]
}

function ScrollProgress(props) {
  const { compareUiwithTargetsOffset } = useContext(UiContext)

  const [target, setTarget] = useState({})
  let ref = useRef(null)

  useEffect(() => {
    setTarget(ctx => {
      let target = compareUiwithTargetsOffset(ref.current)
      if (target === null) return { ...ctx }

      let { offsetTop, className } = target
      let targetClass = findClassName(className)
      return {
        ...ctx,
        target,
        offsetTop,
        targetClass,
      }
    })
  }, [compareUiwithTargetsOffset])
  return (
    <div ref={ref} className="ScrollProgress">
      <ul>
        {Array.from(Array(5).fill(null)).map((item, i) => {
          return (
            <ProgressItem
              key={i}
              // isActive={i === 1}
              target={target.targetClass}
              children={i}
            />
          )
        })}
      </ul>
    </div>
  )
}

function ProgressItem(props) {
  const { i, target, children } = props

  return (
    <li key={i} className={target === 'red' ? 'on' : ''}>
      {children}
    </li>
  )
}

export default ScrollProgress
