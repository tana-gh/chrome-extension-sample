
export const initialState = {
    origin: '',
    name  : '',
    modal : {
        isOpen : false,
        message: ''
    },
    isLoading: true
}

export type State = typeof initialState
