import React        from 'react'
import * as Mui     from '@material-ui/core'
import * as Icon    from '@material-ui/icons'
import * as Actions from '../actions'
import * as Name    from '../constants/name'

interface Props {
    dispatch: React.Dispatch<Actions.Action>
}

export default (props: Props) => {
    const onClick = React.useCallback(() =>
        props.dispatch({ type: 'OPEN_MAIN_PAGE' })
    , [])

    return (
        <Mui.Fab
            className={Name.getQualifiedName('open-page-button')}
            size="small"
            color="primary"
            onClick={onClick}
        >
            <Icon.ChatBubble/>
        </Mui.Fab>
    )
}
