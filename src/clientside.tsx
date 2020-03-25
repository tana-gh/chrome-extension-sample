import React     from 'react'
import ReactDOM  from 'react-dom'
import Root      from './clientside/components/Root'
import * as Name from './clientside/constants/name'
import './clientside/styles/style.sass'

(() => {
    const root = document.createElement('div')
    root.className = Name.getQualifiedName('react-root')
    document.body.appendChild(root)

    ReactDOM.render(<Root/>, root)
})()
