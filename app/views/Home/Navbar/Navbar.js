import React from 'react'

import Profile from './Profile/Profile'

import style from './Navbar.scss'

function Navbar () {
  return (
    <nav className={style.navbar}>
      <div style={{ flex: 1 }}>
        <img className={style.logo} alt="" src="/images/logo.png" width="90" />
      </div>
      <Profile />
    </nav>
  )
}

export default Navbar
