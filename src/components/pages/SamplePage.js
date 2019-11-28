import React, { useContext, useEffect, useCallback } from 'react'
import SingleTemplate from '../template/SingleTemplate'
import SampleOganism from '../organisms/SampleOganism'
import ScrollProgress from '../molecules/ScrollProgress'
import { UiContext } from '../context/UiContext'

function getRandomHeight() {
  return Math.max(Math.floor(Math.random() * 700) + 1, 400)
}

function SamplePage(props) {
  const { registUiTargets } = useContext(UiContext)
  const samples = Array.from({ length: 20 }).map((item, index) => {
    return (
      <SampleOganism
        key={index}
        height={getRandomHeight()}
        className={index % 2 === 1 ? 'blue' : 'red'}
      >
        {index}
      </SampleOganism>
    )
  })
  useEffect(() => {
    registUiTargets('.SampleDiv')
  }, [])
  const contents = {
    header: <SampleOganism height={200} />,
    body: <>{samples}</>,
    progress: <ScrollProgress />,
  }
  return <SingleTemplate contents={contents} />
}

export default SamplePage
