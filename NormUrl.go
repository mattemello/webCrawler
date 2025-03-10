package main

import (
	"strings"
)

var base string

func NormalizeUrl(defUrl string) string {
	defUrl = strings.ToLower(defUrl)

	domain := strings.Split(defUrl, "/")

	base = domain[0] + "//" + domain[2]

	return (domain[0] + "//" + domain[2])

}
