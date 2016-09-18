import React from 'react'

import FlatButton from 'material-ui/FlatButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

import style from './Profile.scss'

function Profile () {
  return (
    <div className={style.profile}>
      <IconMenu
        iconButtonElement={<FlatButton className={style.profileButton} label="Profil" />}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        <MenuItem value="1" primaryText="Zmień hasło" />
        <MenuItem value="4" primaryText="Wyloguj" />
      </IconMenu>
    </div>
  )
}

export default Profile
