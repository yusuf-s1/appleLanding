import React from 'react'
import Module from './Module';
import Module1 from './Module1';
import Slides from './Slides';
import Note from './Note';

export default function Main() {
  return (
    <main>
        <Module />
        <Module1 />
        <Slides />
        <Note />
    </main>
  )
}
