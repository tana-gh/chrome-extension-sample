import * as Settings    from './settings'
import * as Storage     from './settings/storage'
import * as ContextMenu from './settings/contextMenu'

chrome.runtime.onInstalled.addListener(() => {
    Storage.init().then(() => {
        Settings.init().then(() => {})
    })
})

ContextMenu.addListener()
