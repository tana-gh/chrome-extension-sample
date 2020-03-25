import * as Url from '../constants/url'

export const init = (origin: string) => (
    new Promise<void>((res, rej) => {
        chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
            chrome.declarativeContent.onPageChanged.addRules([{
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlMatches: Url.getUrlPattern(origin) }
                    })
                ],
                actions: [
                    new chrome.declarativeContent.ShowPageAction()
                ]
            }], () => res())
        })
    })
)
