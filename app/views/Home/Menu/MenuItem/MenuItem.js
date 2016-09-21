import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import MenuItemMUI from 'material-ui/MenuItem'
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import ExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less'

import style from './MenuItem.scss'

class MenuItem extends Component {
  constructor () {
    super()

    this.handleTouchTap = this.handleTouchTap.bind(this)

    this.state = {
      expanded: false
    }
  }

  handleTouchTap (path) {
    if (path) {
      browserHistory.push(path)
    } else {
      const { expanded } = this.state
      this.setState({
        expanded: !expanded
      })
    }
  }

  render () {
    const { menuItem: { name, submenu, path } } = this.props
    const { expanded } = this.state
    return (
      <div>
        <MenuItemMUI
          primaryText={name}
          onTouchTap={() => this.handleTouchTap(path)}
          style={{
            backgroundColor: expanded ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0)',
            color: 'white'
          }}
          {
            ...(
              submenu
                ?
                  {
                    rightIcon: expanded
                      ? <ExpandLessIcon color="white" />
                      : <ExpandMoreIcon color="white" />
                  }
                : null
            )
          }
        />
        {
          submenu
            ?
              <div
                className={style.submenu}
                style={{ height: expanded ? submenu.length * 48 : 0, overflow: 'hidden' }}
              >
                {
                  submenu.map((submenuItem, index) => (
                    <MenuItemMUI
                      key={index}
                      innerDivStyle={{
                        paddingLeft: 30,
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        color: 'white'
                      }}
                      primaryText={submenuItem.name}
                      onTouchTap={() => this.handleTouchTap(submenuItem.path)}
                    />
                  ))
                }
              </div>
            : null
        }
      </div>
    )
  }
}

export default MenuItem
