
const settingsKeys = [ 'origin', 'name' ] as const
type SettingsKeys  = typeof settingsKeys[number]
type Settings      = Record<SettingsKeys, string>

export const init = () => (
    new Promise<void>((res, rej) => {
        chrome.storage.local.get(settingsKeys, result => {
            if (Object.keys(result).length === settingsKeys.length) {
                res()
                return
            }

            chrome.storage.local.set({
                origin: 'https://*',
                name  : 'world'
            }, () => res())
        })
    })
)

export const getSettings = () => (
    new Promise<Settings>((res, rej) => {
        chrome.storage.local.get(settingsKeys, result => res(result as Settings))
    })
)
