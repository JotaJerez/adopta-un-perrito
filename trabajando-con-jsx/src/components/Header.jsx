import React from 'react'

const Header = ({titulo}) => {
  return (
    <header className='text-center my-5'>
      <h1>{titulo}</h1>
    </header>
  )
}

export default Header