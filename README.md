# webCrawler
A web Crawler written in golang (there is a version of it in js but it's not working). 

## Functionality

```Bash
./webCrawler <flags> <link> <n>
```

This web crawler search the link in a page that you pass as a param, It search for the first "n" link (default 10).

|Flag|description |
|:---:|:-----|
| p | it start searching from the page that u pass |
| i | it goes to the infinity (it continues for all the link in the ammount of page that u declare it) |

