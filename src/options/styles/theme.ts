import * as Styles from '@material-ui/core/styles'
import Pink        from '@material-ui/core/colors/pink'
import Teal        from '@material-ui/core/colors/teal'

export const theme = Styles.createMuiTheme({
    palette: {
        primary: {
            light: Pink['A200'],
            main : Pink['A400'],
            dark : Pink['A700']
        },
        secondary: {
            light: Teal['A200'],
            main : Teal['A400'],
            dark : Teal['A700']
        }
    } 
})
