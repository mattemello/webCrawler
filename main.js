const { argv } = require('node:process')
const { crawlPage, normalizeURL } = require('./crawl')
const { printReport } = require('./report')

let pages = {
    page: [],
    num: []
}

const main = () => {
    if(argv.length != 3){
        console.error("! > Error: Too many or too low arguments, you can only pass one arg")
        return
    }

    console.log("> arg thake")
    console.log("> start the process")
    const baseURL = normalizeURL(argv[2])
    pages = crawlPage(baseURL, argv[2], pages)
    console.log("valore num pages ", pages.num, " valore pages: ", pages.page)
    printReport(pages)
}

main()
