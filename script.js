const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url) {
    const response = await fetch(url);
    const data = await response.json();
    
    
    quote.innerHTML = data.content;

    
    const icon = '<img src="flower.png" alt="Heart Icon" class="icon">'; 
    
   
    author.innerHTML = icon + data.author;
}


getquote(api_url);
