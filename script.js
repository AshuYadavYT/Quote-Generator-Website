const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".volume"),
copyBtn = document.querySelector(".copy"),
shareBtn = document.querySelector(".share");
shareBtn2 = document.querySelector(".share2");

quoteBtn.addEventListener("click", randomQuote)

function randomQuote(){
    quoteBtn.innerText = "Loading Please Wait...."
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content
        authorName.innerText = result.author
        quoteBtn.innerText = "Next"
    });

}

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
    alert("Text is Copied")
})

shareBtn.addEventListener("click", ()=>{
    let whatsapp = `https://web.whatsapp.com://send?text=${quoteText.innerText}`;
    window.open(whatsapp)
})

shareBtn2.addEventListener("click", ()=>{
    let whatsapp = `whatsapp://send?text=*"${quoteText.innerText}"*  _- ${authorName.innerText}_`;
    window.open(whatsapp)
})
