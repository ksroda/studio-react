import React from 'react'

import Profile from './Profile/Profile'

import style from './Navbar.scss'

function Navbar () {
  return (
    <nav className={style.navbar}>
      <div style={{ flex: 1 }}>tu będzie logo</div>
      <div>tu będzie język</div>
      <Profile />
    </nav>
  )
}

export default Navbar
