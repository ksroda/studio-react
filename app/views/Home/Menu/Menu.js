import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import MenuItem from './MenuItem/MenuItem'

import style from './Menu.scss'

export const menuTree = [
  {
    name: 'Strona główna',
    path: '/',
    icon: 'fa-home',
    active: true,
    access: ['admin', 'teacher', 'student']
  },
  {
    name: 'Panel',
    access: ['admin'],
    submenu: [
      {
        name: 'Użytkownicy',
        path: '#/panel'
      },
      {
        name: 'Przedmioty',
        path: '#/przedmioty'
      }
    ]
  },
  {
    name: 'Baza pytań',
    target: 'baza',
    submenu: [
      {
        name: 'Przeglądaj',
        path: '#/moje_pytania',
        access: ['admin', 'teacher']
      },
      {
        name: 'Dodaj pytanie',
        path: '#/dodaj_pytanie',
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
        path: '#/aktualne_pytania'
      },
      {
        name: 'Generuj nowy egzamin',
        path: '#/generuj_egzamin'
      },
      {
        name: 'Generuj raporty',
        path: '#/generuj_raporty'
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

class Menu extends Component {
  render () {
    return (
      <Paper className={style.menuContainer} zDepth={2}>
        {
          menuTree.map((menuItem, index) => (
            <MenuItem key={index} menuItem={menuItem} />
          ))
        }
      </Paper>
    )
  }
}

export default Menu
