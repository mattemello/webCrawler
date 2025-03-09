package main

import (
	"fmt"
	"os"
	"strconv"
)

var numberSearch int

func main() {
	args := os.Args[1:]

	if len(args) < 1 {
		fmt.Println("Error in the args, you didn't pass enough arguments")
		os.Exit(1)
	}

	if len(args) > 1 {
		var err error
		numberSearch, err = strconv.Atoi(args[1])
		if err != nil {
			fmt.Println("Number of iteration not valid")
			os.Exit(1)
		}
	} else {
		numberSearch = 10
	}

	baseUrl := NormalizeUrl(args[0])

	StartSearchLink(baseUrl)

	fmt.Println("The url visited are: ")
	for elem, _ := range linkVisited {
		fmt.Println(">", elem)
	}

	fmt.Println("-------------------------------------------------------------------")
}
