import React           from 'react'
import * as ReactAsync from 'use-reducer-async'
import * as Styles     from '@material-ui/core/styles'
import Layout          from './Layout'
import * as States     from '../states'
import * as Reducers   from '../reducers'
import * as Name       from '../constants/name'
import * as Theme      from '../styles/theme'

export default () => {
    const [ state, dispatch ] = ReactAsync.useReducerAsync(
        Reducers.reduce,
        States.initialState,
        Reducers.asyncActionHandlers
    )

    React.useEffect(() =>
        dispatch({ type: 'INIT' })
    , [])

    return (
        <div className={Name.getQualifiedName('root')}>
            <Styles.ThemeProvider theme={Theme.theme}>
                <Layout state={state} dispatch={dispatch}/>
            </Styles.ThemeProvider>
        </div>
    )
}
