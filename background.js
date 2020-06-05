
// chrome.browserAction.onClicked.addListener(buttonClicked);

// function buttonClicked (tab){
//     console.log(tab)
//     let msg = {
//         value: 'open',
//         url: tab.url
//       }
//     chrome.tabs.sendMessage(tab.id, msg);
// }

chrome.runtime.onMessage.addListener(receiver);

window.word = "";


function receiver(request, sender, sendResponse){
    window.word = request.text
}