import * as Storage     from './storage'
import * as PageAction  from './pageAction'
import * as ContextMenu from './contextMenu'

export const init = () => (
    new Promise((res, rej) => {
        Storage.getSettings().then(settings => {
            PageAction.init(settings.origin).then(() => {
                ContextMenu.init(settings.origin).then(() => res())
            })
        })
    })
)
