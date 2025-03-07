package main

import (
	"fmt"
	"os"
)

func main() {
	args := os.Args[1:]

	if len(args) < 1 {
		fmt.Println("Error in the args, you didn't pass enough arguments")
		os.Exit(1)
	}

	baseUrl := NormalizeUrl(args[0])

	StartSearchLink(baseUrl)

	fmt.Println("The url visited are: ")
	for elem, _ := range linkVisited {
		fmt.Println(">", elem)
	}

	fmt.Println("-------------------------------------------------------------------")
}
