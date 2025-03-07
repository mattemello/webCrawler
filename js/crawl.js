const normalizeURL = (theURL) => {
    let url = new URL(theURL);
    const dimProt = url.protocol.length + 2;

    let urlNoProt = url.href.slice(dimProt);

    if (urlNoProt[urlNoProt.length - 1] == "/") {
        return urlNoProt.slice(0, urlNoProt.length - 1);
    }
    return urlNoProt;
}

const { JSDOM } = require('jsdom')

const getURLsFromHTML = (htmlBody, baseURL) => {
    const dom = new JSDOM(htmlBody, { includeNodeLocations: true })

    let primeURL = dom.window.document.querySelectorAll("a")
    let allURL = []
    for (let i = 0; i < primeURL.length; i++) {
        if (primeURL[i].href.includes('https://') || primeURL[i].href.includes('https//')) {
            allURL[i] = primeURL[i].href;
        } else {
            allURL[i] = baseURL + primeURL[i].href
        }
    }

    return allURL

}

/*let pages = {
    page: [],
    num: []
}*/

async function crawlPage(baseURL, currenURL, pages) {
    //currenURL = normalizeURL(currenURL)
    console.log("value curr normal: ", currenURL)
    if (!currenURL.includes(baseURL)) {
        return;
    }

    let oldURL = false

    for (let i = 0; i < pages.page.length; i++) {
        if (pages.page[i] == currenURL) {
            pages.num[i] += 1
            oldURL = true
            return pages
        }
    }

    if (!oldURL) {
        pages.page.push(currenURL)
        pages.num.push(1)
        console.log("> now we take the html page of ", currenURL, " ")
        let htmlPage
        try {

            const fetchPage = await fetch(currenURL)

            if (fetchPage.status > 399) {
                console.log("got http error: ", fetchPage.status)
                return pages
            }

            if ((fetchPage.header.get('content-type')).includes('text-content')) {
                console.log("type not valid")
                return pages
            }
            htmlPage = await fetchPage.text()

        } catch (err) {
            console.error("Error occured: ", err)
        }

        let allURL = getURLsFromHTML(htmlPage)
        console.log("allURL: ", allURL)
        for (let i = 0; i < allURL.length; i++) {
            pages = await crawlPage(baseURL, allURL[i], pages)
        }

        return pages


    } else {
        return pages
    }


}

module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage
}
