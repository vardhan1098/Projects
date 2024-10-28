import React from 'react'

function Button({children,clickHandler}) {
  return (
    <div onClick={clickHandler}>{children}</div>
  )
}

export default Button