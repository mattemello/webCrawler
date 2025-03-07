package main

import (
	"fmt"
	"golang.org/x/net/html"
	"net/http"
	"strings"
)

var linkVisited = make(map[string]bool)

func StartSearchLink(baseUrl string) {
	searchLink(baseUrl, baseUrl, 10)
}

func searchLink(baseUrl, currentUrl string, count int) {

	if !strings.Contains(currentUrl, baseUrl) || count == 0 {
		return
	}

	res, err := http.Get(currentUrl)
	if err != nil {
		fmt.Println("Error - ", err)
		return
	}

	doc, err := html.Parse(res.Body)
	res.Body.Close()
	if err != nil {
		fmt.Println("Error - ", err)
		return
	}

	for n := range doc.Descendants() {
		if n.Data == "a" {
			for _, elem := range n.Attr {
				if elem.Key == "href" {
					controlledLink := controlLink(elem.Val)
					if controlledLink[0] == '/' && !linkVisited[controlledLink] {
						linkVisited[controlledLink] = true
						searchLink(baseUrl, currentUrl+controlledLink, count-1)
						return
					}
				}
			}
		}
	}
}

func controlLink(str string) string {
	controlledLink := strings.Split(str, ":")[0]
	return strings.Split(controlledLink, "?")[0]
}
