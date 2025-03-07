const printReport = (pages) => {
    pages = sort(pages)

    console.log("> The print of the report is starting")

    for(let i = 0; i < pages.page.length; i++){
        console.log("Found ${count} internal links to ${url}")
    }

}

const sort = (pages) => {
    console.log("PAGES", pages)
    for(let i = 0; i < pages.num.length; i++){
        for(let j = i; j < pages.num.length; j++){
            if(pages.num[j] > pages.num[i]){
                let swapnum = pages.num[i]
                pages.num[i] = pages.num[j]
                pages.num[j] = swapnum
                let swappage = pages.page[i]
                pages.page[i] = pages.page[j]
                pages.page[j] = swappage
            }
        }
    }

    return pages
}

module.exports = {
    printReport,
    sort
}
