const apiUrl = 'https://dummyjson.com/quotes/random'

let generateBtn = document.querySelector('.generate-quote')
let quoteText = document.querySelector('blockquote')
let authorText = document.querySelector('.author')
let twitter = document.querySelector('.tweet')


async function getQuote(url) {
    const response = await fetch(url)
    let data = await response.json()

    quoteText.textContent = data.quote
    authorText.textContent = data.author
   
}

generateBtn.addEventListener('click',() => getQuote(apiUrl))

twitter.addEventListener('click' , () => {
    window.open(`https://twitter.com/intent/tweet?text= ${quoteText.textContent} -- by ${authorText.textContent}`,'tweet Window ' , 'width = 600 , height = 300')
}) // this will open a twitter window with the quote ready to be tweeted


