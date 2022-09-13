const quoteText = document.querySelector(".quote"),
auhtorName = document.querySelector(".name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn =document.querySelector(".twitter");

function randomQuote(){
        quoteBtn.classList.add("loading");
        quoteBtn.innerText = "Loading quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        auhtorName.innerText = result.author;
        quoteBtn.innerText = "New quote";
        quoteBtn.classList.remove("loading");
   });
}
quoteBtn.addEventListener("click",randomQuote);



soundBtn.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${auhtorName.innerText}`);
    speechSynthesis.speak(utterance);
});


copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});


twitterBtn.addEventListener("click",()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank");
})