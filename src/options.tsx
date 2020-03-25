import React     from 'react'
import ReactDOM  from 'react-dom'
import View      from './options/View'
import './options/styles/style.sass'

(() => {
    const root = document.getElementById('root')
    ReactDOM.render(<View/>, root)
})()
