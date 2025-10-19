import React from 'react'
import TextComponent from './TextComponent'


const Demo = (props) => {
  return (
    <>
    <div className='container'>
      <h1>hi this is {props.name}</h1>
      <h2>my age {props.age}</h2>
      <TextComponent />
    </div>
    </>
  )
}

export default Demo
