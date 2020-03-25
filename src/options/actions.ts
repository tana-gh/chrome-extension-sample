
export type Action = ActionSync | ActionAsync

export type ActionSync = SetOrigin | SetName | OpenModal | CloseModal | SetLoading

export type ActionAsync = Init | Apply

export interface SetOrigin {
    type  : 'SET_ORIGIN'
    origin: string
}

export interface SetName {
    type: 'SET_NAME'
    name: string
}

export interface OpenModal {
    type   : 'OPEN_MODAL'
    message: string
}

export interface CloseModal {
    type: 'CLOSE_MODAL'
}

export interface SetLoading {
    type     : 'SET_LOADING'
    isLoading: boolean
}

export interface Init {
    type: 'INIT'
}

export interface Apply {
    type  : 'APPLY'
    origin: string
    name  : string
}
