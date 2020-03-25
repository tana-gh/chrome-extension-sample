import React           from 'react'
import * as Mui        from '@material-ui/core'
import * as Icon       from '@material-ui/icons'
import * as States     from '../../states'
import * as Actions    from '../../actions'
import * as Name       from '../../constants/name'

interface Props {
    state   : States.State
    dispatch: React.Dispatch<Actions.Action>
}

export default (props: Props) => {
    const onHelloModalButtonClick = React.useCallback(() => 
        props.dispatch({ type: 'CLOSE_MODAL' })
    , [])

    const onHelloButtonClick = React.useCallback(() =>
        props.dispatch({
            type      : 'OPEN_MODAL',
            key       : 'hello',
            components: [
                () => (
                    <Mui.Typography>
                        Hello, { props.state.name }!
                    </Mui.Typography>
                ),
                () => {
                    return (
                        <Mui.Button variant="contained" color="primary" onClick={onHelloModalButtonClick}>
                            OK
                        </Mui.Button>
                    )
                }
            ]
        })
    , [ props.state ])

    const onCloseButtonClick = React.useCallback(() =>
        props.dispatch({ type: 'CLOSE_MAIN_PAGE'})
    , [])

    return (
        <span className={Name.getQualifiedName('main-page')}>
            <Mui.Paper className={Name.getQualifiedName('main-page__background')}/>
            <div className={Name.getQualifiedName('main-page__layout')}>
                <div className={Name.getQualifiedName('main-page__hello-button')}>
                    <Mui.Button variant="contained" color="primary" onClick={onHelloButtonClick}>
                        Hello
                    </Mui.Button>
                </div>
                <div className={Name.getQualifiedName('main-page__page-buttons')}>
                    <Mui.IconButton
                        className={Name.getQualifiedName('main-page__close-page-button')}
                        color="primary"
                        onClick={onCloseButtonClick}
                    >
                        <Icon.Close/>
                    </Mui.IconButton>
                </div>
            </div>
        </span>
    )
}
