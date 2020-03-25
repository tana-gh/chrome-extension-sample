import React          from 'react'
import * as Mui       from '@material-ui/core'
import MainPage       from './MainPage'
import OpenPageButton from './OpenPageButton'
import Modal          from './Modal'
import * as States    from '../states'
import * as Actions   from '../actions'
import * as Name      from '../constants/name'

interface Props {
    state   : States.State
    dispatch: React.Dispatch<Actions.Action>
}

export default (props: Props) => (
    <span className={Name.getQualifiedName('layout')}>
        <Mui.Fade in={props.state.mainPageIsVisible}>
            <div className={Name.getQualifiedName('layout__main-page')}>
                <MainPage state={props.state} dispatch={props.dispatch}/>
            </div>
        </Mui.Fade>
        <Mui.Fade in={!props.state.mainPageIsVisible}>
            <div className={Name.getQualifiedName('layout__open-page-button')}>
                <OpenPageButton dispatch={props.dispatch}/>
            </div>
        </Mui.Fade>
        <Modal modal={props.state.modal} dispatch={props.dispatch}/>
    </span>
)