async function fetchData() {
    try {       
        const quotesResponse = await fetch("quotes.json");
        const quotes = await quotesResponse.json();
        const quote = getRandomQuote(quotes);

        document.getElementById("quote").textContent = quote.quote;
        document.getElementById("author").textContent = quote.author;
    } catch (error) {
        console.error("Error fetching quotes:", error);
    }
}

function getRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

window.onload = fetchData;