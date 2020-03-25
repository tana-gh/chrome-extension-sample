import React        from 'react'
import * as Actions from './actions'

export const initialState = {
    mainPageIsVisible : false,
    modal: {
        isOpen    : false,
        key       : '',
        components: <React.FunctionComponent<{ dispatch: React.Dispatch<Actions.Action> }>[] | undefined>undefined
    },
    name: ''
}

export type State = typeof initialState
export type Modal = typeof initialState.modal
