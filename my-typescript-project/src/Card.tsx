import React from 'react'

const Card = (props: {name: string,age: string,number: number}) => {
  return (
    <>
    <div className='container'>
    <h1>my name is {props.name}</h1>
    <h1>my age is {props.age}</h1>
    <h1>my number is {props.number}</h1>
    </div>
    
    </>
  )
}

export default Card;
