package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

var numberSearch int
var Flag Flags

func main() {
	args := os.Args[1:]
	var link string

	if len(args) < 1 {
		fmt.Println("Error in the args, you didn't pass enough arguments")
		os.Exit(1)
	}

	if len(args) > 1 {

		for _, elem := range args {
			if strings.Contains(elem, "/") {
				link = elem
			} else if strings.Contains(elem, "-") {
				for _, ff := range elem[1:] {
					switch ff {
					case 'p':
						Flag.Page = true
						break
					case 'i':
						Flag.Infinity = true
						break
					}
				}
			} else if m, err := strconv.Atoi(elem); err == nil {
				numberSearch = m
			} else {
				fmt.Println("simbol not valid", elem)
				os.Exit(1)
			}
		}

	} else {
		link = args[0]
	}

	if numberSearch == 0 {
		numberSearch = 10
	}

	var baseUrl string

	if Flag.Page {
		NormalizeUrl(link)
		baseUrl = link
	} else {
		baseUrl = NormalizeUrl(link)
	}

	StartSearchLink(baseUrl)

	fmt.Println("The url visited are: ")
	for elem, _ := range linkVisited {
		fmt.Println(">", elem)
	}

	fmt.Println("-------------------------------------------------------------------")
}
