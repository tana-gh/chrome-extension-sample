import React             from 'react'
import * as ReducerAsync from 'use-reducer-async'
import * as Styles       from '@material-ui/core/styles'
import * as Mui          from '@material-ui/core'
import * as Reducers     from './reducers'
import * as States       from './states'
import * as Theme        from './styles/theme'

export default () => {
    const [ state, dispatch ] = ReducerAsync.useReducerAsync(
        Reducers.reduce,
        States.initialState,
        Reducers.asyncActionHandlers
    )

    React.useEffect(() => {
        dispatch({ type: 'INIT' })
    }, [])

    const onOriginChanged = React.useCallback((e: React.SyntheticEvent<any, Event>) => {
        dispatch({ type: 'SET_ORIGIN', origin: e.currentTarget.value })
    }, [])

    const onNameChanged = React.useCallback((e: React.SyntheticEvent<any, Event>) => {
        dispatch({ type: 'SET_NAME', name: e.currentTarget.value })
    }, [])
    
    const onApplyClick = React.useCallback(() => {
        dispatch({ type: 'APPLY', origin: state.origin, name: state.name })
    }, [ state ])
    
    const onModalClose = React.useCallback(() => {
        dispatch({ type: 'CLOSE_MODAL' })
    }, [])

    return (
        <Styles.ThemeProvider theme={Theme.theme}>
            <div>
                <Mui.AppBar position="sticky">
                    <Mui.Toolbar>
                        <Mui.Typography>
                            Chrome Extension Sample - Options
                        </Mui.Typography>
                    </Mui.Toolbar>
                </Mui.AppBar>
                <div className="container">
                    <div>
                        <Mui.TextField
                            label="Origin"
                            value={state.origin}
                            onChange={onOriginChanged}
                        />
                    </div>
                    <div>
                        <Mui.TextField
                            label="Your name"
                            value={state.name}
                            onChange={onNameChanged}
                        />
                    </div>
                    <div>
                        <Mui.Button
                            variant="contained"
                            color="primary"
                            disabled={state.isLoading}
                            onClick={onApplyClick}
                        >
                            Apply
                        </Mui.Button>
                    </div>
                </div>
                <Mui.Modal
                    open={state.modal.isOpen}
                    onClose={onModalClose}
                    closeAfterTransition
                    BackdropComponent={Mui.Backdrop}
                    BackdropProps={{ timeout: 500 }}
                >
                    <Mui.Fade in={state.modal.isOpen}>
                        <Mui.Paper className="modal">
                            <div>
                                <Mui.Typography>{ state.modal.message }</Mui.Typography>
                            </div>
                            <div>
                                <Mui.Button variant="contained" color="primary" onClick={onModalClose}>
                                    OK
                                </Mui.Button>
                            </div>
                        </Mui.Paper>
                    </Mui.Fade>
                </Mui.Modal>
            </div>
        </Styles.ThemeProvider>
    )
}
