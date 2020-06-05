// 

window.addEventListener('mouseup', wordSelected);

function wordSelected(){
    let selectedTxt = window.getSelection().toString().trim();
    console.log(selectedTxt);
    if(selectedTxt.length > 0){ // add validation of an url
        let msg = {
            text: selectedTxt
        }
        if(typeof chrome.app.isInstalled!=='undefined'){
            chrome.runtime.sendMessage(msg)
         }
    }
}