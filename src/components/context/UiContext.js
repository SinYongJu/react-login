import React, { createContext, useMemo, useState, useEffect } from 'react'

const UiContext = createContext(null)

const THROTTLE_TIMER = 30

function getPosition(el) {
  const { height } = el.getBoundingClientRect()
  return {
    top: el.offsetTop,
    height,
    bottom: el.offsetTop + height,
    target: el,
  }
}

/**
 *
 * getBouncing을 이용한 checker
 */
const isInViewPortByBouncingRect = target => {
  let { top, bottom } = getPosition(target)
  let upside = bottom < 0
  let downSide = bottom > 0 && top > window.innerHeight
  if (upside || downSide) {
    // target.classList.remove('red')
    // target.style.backgroundColor = 'blue'
    return false
  } else {
    // target.classList.add('red')
    // target.style.backgroundColor = 'red'
    return true
  }
}

function throttle(callback, time) {
  let lastFunction
  let lastTimeStamp

  return function() {
    let ctx = this
    let arg = arguments
    if (!lastTimeStamp) {
      callback.apply(ctx, arg)
      lastTimeStamp = Date.now()
    } else {
      clearTimeout(lastFunction)
      lastFunction = setTimeout(() => {
        if (Date.now() - lastTimeStamp >= time) {
          callback(ctx, arg)
          lastTimeStamp = Date.now()
        }
      })
    }
  }
}

const UiProvider = props => {
  const { children, ...rest } = props

  const [scroll, setScroll] = useState({
    scrollY: null,
    viewport: null,
    targets: [],
  })

  useMemo(() => {
    const onScroll = event => {
      let viewport = window.scrollY + window.innerHeight
      let tmp = {
        scrollY: window.scrollY,
        viewport,
      }
      setScroll(ctx => ({ ...ctx, ...tmp }))
    }
    window.addEventListener('load', onScroll)
    document.addEventListener('scroll', throttle(onScroll, THROTTLE_TIMER))
    return document.removeEventListener(
      'scroll',
      throttle(onScroll, THROTTLE_TIMER),
    )
  }, [])

  /*
    target 등록 , 
    클래스 든 머든 등록 가능한 애들로 등록 할 수 있도록 하자 

   */
  const getTopPositionInViewport = elem => {
    return elem.getBoundingClientRect().y
  }
  const compareUiwithTargetsOffset = target => {
    const result = scroll.targets.filter(item => {
      return (
        getTopPositionInViewport(target) > getTopPositionInViewport(item.target)
      )
    })
    let index = result.length - 1
    if (index > -1) {
      return result[index].target
    } else {
      return null
    }
  }

  const registUiTargets = elem => {
    let arr = Array.from(document.querySelectorAll(elem))
    const infos = arr.map(target => {
      return getPosition(target)
    })
    setScroll(ctx => {
      return {
        ...ctx,
        targets: [...infos],
      }
    })
  }

  const isInViewPort = target => {
    const { top, bottom, height } = getPosition(target)
    const { scrollY, viewport } = scroll
    if (top < scrollY - height || top > viewport) {
      target.classList.add('red')
      target.style.backgroundColor = 'red'
      return true
    } else {
      target.classList.remove('red')
      target.style.backgroundColor = 'blue'
      return false
    }
  }

  const value = {
    isInViewPort,
    registUiTargets,
    compareUiwithTargetsOffset,
  }
  return (
    <UiContext.Provider {...rest} value={value}>
      {children}
    </UiContext.Provider>
  )
}

export { UiContext, UiProvider }
