package main

import (
	"strings"
)

func NormalizeUrl(defUrl string) string {
	defUrl = strings.ToLower(defUrl)

	domain := strings.Split(defUrl, "/")

	return (domain[0] + "//" + domain[2])

}
