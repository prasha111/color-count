import React from 'react'

function Box({data,onClick, id, green}) {
    console.log(green ,"gree")
  return (
    <div onClick={onClick} className={`box ${green?"green":"transparent"}`} id={id}>{data}</div>
  )
}

export default Box