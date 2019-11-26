import React from 'react'
import SingleTemplate from '../template/SingleTemplate'
import SampleOganism from '../organisms/SampleOganism'

function SamplePage(props) {
  const contents = {
    header: <SampleOganism height={200} />,
    body: (
      <>
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
        <SampleOganism />
      </>
    ),
  }
  return <SingleTemplate contents={contents} />
}

export default SamplePage
