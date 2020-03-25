import * as ReducerAsync from 'use-reducer-async'
import * as States       from './states'
import * as Actions      from './actions'
import * as Settings     from '../settings'

export const reduce = (state: States.State, action: Actions.ActionSync) => {
    switch (action.type) {
        case 'SET_ORIGIN':
            return <States.State>{ ...state, origin: action.origin }
        case 'SET_NAME':
            return <States.State>{ ...state, name: action.name }
        case 'OPEN_MODAL':
            return <States.State>{ ...state, modal: { isOpen: true, message: action.message } }
        case 'CLOSE_MODAL':
            return <States.State>{ ...state, modal: { ...state.modal, isOpen: false } }
        case 'SET_LOADING':
            return <States.State>{ ...state, isLoading: action.isLoading }
    }
}

export const asyncActionHandlers = <ReducerAsync.AsyncActionHandlers<typeof reduce, Actions.ActionAsync>>{
    INIT: ({ dispatch }) => async () => {
        chrome.storage.local.get([ 'origin', 'name' ], result => {
            dispatch({ type: 'SET_ORIGIN', origin: result.origin })
            dispatch({ type: 'SET_NAME'  , name  : result.name })
            dispatch({ type: 'SET_LOADING', isLoading: false })
        })
    },
    APPLY: ({ dispatch }) => async (action) => {
        dispatch({ type: 'SET_LOADING', isLoading: true })

        chrome.storage.local.set({ origin: action.origin, name: action.name }, () => {
            Settings.init().then(() => {
                dispatch({ type: 'SET_LOADING', isLoading: false })
                dispatch({ type: 'OPEN_MODAL', message: 'Option settings updated successfully.' })
            })
        })
    }
}
