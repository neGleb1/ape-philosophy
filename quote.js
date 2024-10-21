

async function fetchData() {
    // fetch("https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8")
    // .then(function(data) {
    //     return data.json();
    // })
    // .then(function(response) {
    //     document.getElementById("quote").textContent = response[0].name;
    //     console.log(JSON.stringify(response));
    // })
    // try {       
    //     const quotesResponse = await fetch("./quotes.json")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         const quote = getRandomQuote(data);

    //         document.getElementById("quote").textContent = quote.quote;
    //         document.getElementById("author").textContent = quote.author;
    //     });
    // } catch (error) {
    //     console.error("Error fetching quotes:", error);
    // }
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