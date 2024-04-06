const normalizeURL = (theURL) =>{
    let url = new URL(theURL);
    const dimProt = url.protocol.length + 2;

    let urlNoProt = url.href.slice(dimProt);

    if (urlNoProt[urlNoProt.length - 1] == "/") {
        return urlNoProt.slice(0, urlNoProt.length - 1);
    }
    return urlNoProt;
}

const { JSDOM } = require('jsdom')

const getURLsFromHTML = (htmlBody, baseURL) =>{
    const dom = new JSDOM(htmlBody, {includeNodeLocations: true})
   
    let primeURL = dom.window.document.querySelectorAll("a")
    let allURL = []
    for (let i = 0; i < primeURL.length; i++) {
        if (primeURL[i].href.includes('https://') || primeURL[i].href.includes('https//')) {
            allURL[i] = primeURL[i].href;
        }else{
            allURL[i] = baseURL + primeURL[i].href
        }
    }

    return allURL

}


const crawlPage = (currenURL) => {
    let htmlPage
    try{
        htmlPage = fetch(currenURL)

        if(htmlPage == null){
            throw ("errore")
        }

        console.log(htmlPage)

    }catch(err){
        console.error(err)
    }


}

module.exports = {
  normalizeURL,
  getURLsFromHTML,
  crawlPage
}
