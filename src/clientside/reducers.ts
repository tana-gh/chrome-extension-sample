import * as ReactAsync from 'use-reducer-async'
import * as States     from './states'
import * as Actions    from './actions'
import * as Name       from './constants/name'

export const reduce: (state: States.State, action: Actions.SyncAction) => States.State =
(state: States.State, action: Actions.SyncAction) => {
    switch (action.type) {
        case 'SET_STATE':
            return { ...action.state }
        case 'OPEN_MAIN_PAGE':
            return { ...state, mainPageIsVisible: true }
        case 'CLOSE_MAIN_PAGE':
            return { ...state, mainPageIsVisible: false }
        case 'OPEN_MODAL':
            return {
                ...state,
                modal: {
                    isOpen    : true,
                    key       : action.key,
                    components: action.components
                }
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isOpen: false
                }
            }
    }
}

export const asyncActionHandlers = <ReactAsync.AsyncActionHandlers<typeof reduce, Actions.AsyncAction>>{
    INIT: ({ dispatch, getState }) => async () => {
        const name = document.getElementById(Name.getQualifiedName('script'))?.dataset?.name ?? ''
        dispatch({ type: 'SET_STATE', state: { ...getState(), name } })
    }
}
