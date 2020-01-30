import React from 'react'

function NavBar(props){

  const colors = {
    black: 'navbar-inverse',
    white: 'navbar-default'
  }
  
  return (
    <nav className={`navbar ${colors[props.color]}`} >
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a href="http://localhost:3000" className='navbar-brand'>
            { props.title }
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
