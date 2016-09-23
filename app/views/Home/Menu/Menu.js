import React from 'react'

import Paper from 'material-ui/Paper'

import MenuItem from './MenuItem/MenuItem'

import style from './Menu.scss'

export const menuTree = [
  {
    name: 'O nas',
    path: '/home',
    icon: 'fa-home',
    active: true,
    access: ['admin', 'teacher', 'student']
  },
  {
    name: 'Administracja',
    access: ['admin'],
    submenu: [
      {
        name: 'Użytkownicy',
        path: '/home/administration/users'
      },
      {
        name: 'Przedmioty',
        path: '/home/subjects'
      }
    ]
  },
  {
    name: 'Pytania',
    target: 'baza',
    submenu: [
      {
        name: 'Wszystkie',
        path: '/home/questions/all',
        access: ['admin', 'teacher']
      },
      {
        name: 'Dodaj pytanie',
        path: '/home/questions/create',
        access: ['admin', 'teacher']
      }
    ]
  },
  {
    name: 'Egzamin',
    target: 'egzamin',
    access: ['admin', 'teacher'],
    submenu: [
      {
        name: 'Aktualny egzamin',
        path: '/aktualne_pytania'
      },
      {
        name: 'Generuj nowy egzamin',
        path: '/generuj_egzamin'
      },
      {
        name: 'Generuj raporty',
        path: '/generuj_raporty'
      }
    ]
  },
  {
    name: 'Webcam',
    icon: 'fa-video-camera',
    path: '/webcam',
    access: ['admin', 'teacher']
  }
]

function Menu () {
  return (
    <div className={style.menuContainer} zDepth={2}>
      {
        menuTree.map((menuItem, index) => (
          <MenuItem key={index} menuItem={menuItem} />
        ))
      }
    </div>
  )
}

export default Menu
