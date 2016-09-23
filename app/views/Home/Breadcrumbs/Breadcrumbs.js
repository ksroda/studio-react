import _ from 'lodash'
import React, { PropTypes } from 'react'

import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right'
import HomeIcon from 'material-ui/svg-icons/action/home'

import { pomadka } from '../../../shared/colors'

import style from '../Home.scss'

function translate (input) {
  switch (input) {
    case 'About':
      return 'O nas'
    case 'Administration':
      return 'Administracja'
    case 'Users':
      return 'Użytkownicy'
    case 'Questions':
      return 'Pytania'
    case 'All':
      return 'Wszystkie'
    case 'Create':
      return 'Dodawanie'
    case 'Edit':
      return 'Edycja'
    default:
      return input
  }
}

function Breadcrumbs ({ path }) {
  const breadcrumbs = [
    <HomeIcon color={pomadka} style={{ position: 'relative', top: 1 }} />
  ].concat(path.split('/').slice(2))
  return (
    <div className={style.breadcrumbs}>
      {
        breadcrumbs.map((item, i) => (
          <div key={`breadcrumb-${i}`} style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              {typeof item === 'string' ? translate(_.capitalize(item)) : item}
            </div>
            {
              i !== breadcrumbs.length - 1
                ? <ChevronRightIcon color={pomadka} style={{ height: 15 }} />
                : null
            }
          </div>
        ))
      }
    </div>
  )
}

Breadcrumbs.propTypes = {
  path: PropTypes.string
}

export default Breadcrumbs
