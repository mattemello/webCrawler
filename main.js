const { argv } = require('node:process')
const { crawlPage } = require('./crawl')

const main = () => {
    if(argv.length != 3){
        console.error("! > Error: Too many or too low arguments, you can only pass one arg")
        return
    }

    console.log("> arg thake")
    console.log("> start the process")
    crawlPage(argv[2])
}

main()