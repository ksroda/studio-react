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
            backgroundColor: expanded ? '#D2D2D2' : 'white',
            borderLeft: expanded ? '3px solid cyan' : '3px white solid'
          }}
          {
            ...(
              submenu
                ? { rightIcon: expanded ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
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
                      innerDivStyle={{ paddingLeft: 30, backgroundColor: '#ebebeb' }}
                      primaryText={submenuItem.name}
                      onTouchTap={() => console.log('sdfds')}
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
