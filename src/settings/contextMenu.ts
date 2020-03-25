import * as Url from '../constants/url'

export const init = (origin: string) => (
    new Promise<void>((res, rej) => {
        chrome.contextMenus.removeAll(() => {
            chrome.contextMenus.create({
                id: menuItemId,
                title: 'Apply Chrome Extension Sample',
                contexts: [ 'page' ],
                documentUrlPatterns: [ Url.getUrlPattern(origin) ]
            }, () => {
                res()
            })
        })
    })
)

export const addListener = () => {
    chrome.contextMenus.onClicked.addListener(onClicked)
}

let isBusy = false

const onClicked = (
    info: chrome.contextMenus.OnClickData,
    tab : chrome.tabs.Tab | undefined
) => {
    if (info.menuItemId !== menuItemId || !tab?.id) return

    if (isBusy) return
    isBusy = true

    chrome.storage.local.get('name', result => {
        chrome.tabs.executeScript({ file: './contentScript.js' }, () => {
            chrome.tabs.sendMessage(tab.id!, { name: result.name }, () => isBusy = false)
        })
    })
}

const menuItemId = 'applierMenuItem'
