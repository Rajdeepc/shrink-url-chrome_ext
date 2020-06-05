document.addEventListener("DOMContentLoaded", function (event) {

  const inputUrl = document.getElementById("urlshortneer")

  let bgPage = chrome.extension.getBackgroundPage();
  let word = bgPage.word;
  inputUrl.value = word;

  let btnToClick = document.getElementById('shrinkrul');
  
  btnToClick.addEventListener('click', function(){
    console.log('i am inside onlick');
    callShrinkUrl();
  })

  console.log(inputUrl.value)

  async function callShrinkUrl() {
    let url = 'https://razorurl.herokuapp.com';
    const rawResponse = await fetch(`${url}/shrinkUrl`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: "", longUrl: word || inputUrl.value})
    });
    const content = await rawResponse.json();
    const shortenedUrl = content.shrinkUrl.shortUrl
    const urlShortener = `${url}/${shortenedUrl}`;
    document.getElementById('shorturl').textContent = urlShortener;
    document.getElementById('shorturl').href = urlShortener;
  }
  

});
