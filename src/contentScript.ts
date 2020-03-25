import * as Name from './clientside/constants/name'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const element = document.getElementById(scriptId)
    if (element) {
        sendResponse(false)
    }
    else {
        chrome.storage.local.get('name', ({ name }) => {
            enable(name)
        })
        sendResponse(true)
    }
})

const enable = (name: string) => {
    const script        = document.createElement('script')
    script.id           = scriptId
    script.src          = chrome.runtime.getURL('./clientside.js')
    script.dataset.name = name
    getInjectee().appendChild(script)
}

const scriptId = Name.getQualifiedName('script')

const getInjectee = () => {
    return document.head || document.documentElement
}
