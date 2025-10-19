import React from 'react'

const Button = (props: {name: string}) => {
  const {name} = props;
  return (
    <div>
      <button style={{backgroundColor:'blue',color:'white',padding:'auto',marginLeft:'10px',marginBottom:'20px',borderRadius:'100%',}} className='' >{name}</button>
    </div>
  )
}

export default Button;
