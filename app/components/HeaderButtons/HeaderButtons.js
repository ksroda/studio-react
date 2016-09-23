import React, { PropTypes } from 'react'

import RaisedButton from 'material-ui/RaisedButton'

import style from './HeaderButtons.scss'

function HeaderButtons ({ title, buttons }) {
  return (
    <div className={style.container}>
      <h2 style={{ flex: 1 }}>{title}</h2>
      <div>
        {
          (buttons || []).map((button, i) => (
            <RaisedButton key={`key-${i}`} {...button} style={{ marginLeft: 10, ...button.style }} />
          ))
        }
      </div>
    </div>
  )
}

HeaderButtons.propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.array
}

export default HeaderButtons
