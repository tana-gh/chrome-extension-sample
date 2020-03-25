import React        from 'react'
import * as Mui     from '@material-ui/core'
import * as States  from '../states'
import * as Actions from '../actions'
import * as Name    from '../constants/name'

interface Props {
    modal   : States.Modal
    dispatch: React.Dispatch<Actions.Action>
}

export default (props: Props) => {
    const onClose = React.useCallback(() => 
        props.dispatch({ type: 'CLOSE_MODAL' })
    , [])

    return (
        <span className={Name.getQualifiedName('modal')}>
            <Mui.Modal
                    open={props.modal.isOpen}
                    onClose={onClose}
                    closeAfterTransition
                    BackdropComponent={Mui.Backdrop}
                    BackdropProps={{ timeout: 500 }}
                    style={{ zIndex: 2000000 }}
                >
                    <Mui.Fade in={props.modal.isOpen}>
                        <Mui.Paper className={Name.getQualifiedName('modal__paper')}>
                            <div className={Name.getQualifiedName('modal__content')}>
                                {
                                    props.modal.components?.map((cmp, i) =>
                                        <div key={`${props.modal.key}-${i}`}>
                                            { cmp({ dispatch: props.dispatch }) }
                                        </div>
                                    )
                                }
                            </div>
                        </Mui.Paper>
                    </Mui.Fade>
                </Mui.Modal>
        </span>
    )
}
