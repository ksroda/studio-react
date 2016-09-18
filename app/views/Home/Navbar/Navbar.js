import React from 'react'

import Profile from './Profile/Profile'

import style from './Navbar.scss'

function Navbar () {
  return (
    <nav className={style.navbar}>
      <div style={{ flex: 1 }}>
        <img className={style.logo} alt="" src="../../../shared/images/logo.png" width="100" />
      </div>
      <div>tu będzie język</div>
      <Profile />
    </nav>
  )
}

export default Navbar
