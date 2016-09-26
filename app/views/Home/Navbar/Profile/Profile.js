import React from 'react'
import { connect } from 'react-redux'

import FlatButton from 'material-ui/FlatButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

import { logout } from '../../../../actions'

import style from './Profile.scss'

function Profile ({ dispatch }) {
  return (
    <div className={style.profile}>
      <IconMenu
        iconButtonElement={<FlatButton className={style.profileButton} label="Profil" />}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        <MenuItem primaryText="Zmień hasło" />
        <MenuItem primaryText="Wyloguj" onClick={() => dispatch(logout())} />
      </IconMenu>
    </div>
  )
}

export default connect()(Profile)
