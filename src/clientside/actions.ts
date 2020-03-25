import React       from 'react'
import * as States from './states'

export type Action = SyncAction | AsyncAction

export type SyncAction =
    SetState      |
    OpenMainPage  |
    CloseMainPage |
    OpenModal     |
    CloseModal

export type AsyncAction = Init

export interface SetState {
    type : 'SET_STATE'
    state: States.State
}

export interface OpenMainPage {
    type: 'OPEN_MAIN_PAGE'
}

export interface CloseMainPage {
    type: 'CLOSE_MAIN_PAGE'
}

export interface OpenModal {
    type      : 'OPEN_MODAL'
    key       : string
    components: React.FunctionComponent<{ dispatch: React.Dispatch<Action> }>[]
}

export interface CloseModal {
    type: 'CLOSE_MODAL'
}

export interface Init {
    type: 'INIT'
}
