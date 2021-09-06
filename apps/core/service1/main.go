package main

import (
	"fmt"
	"log"
	"net/http"
)

type Article struct {
	Title   string `json:"title"`
	Desc    string `json:"desc"`
	Content string `json:"content"`
}

type Articles []Article

func homePage(w http.ResponseWriter, r *http.Request) {
	// log.Fatal(w, "aris")
	fmt.Fprint(w, "Homepage Endpoint Hit")
}

func handleRequest() {
	http.HandleFunc("/", homePage)
	log.Fatal(http.ListenAndServe(":8081", nil))
}

func Hello(name string) string {
	result := "Hello " + name
	return result
}

func main() {
	handleRequest()
	// 	fmt.Println(Hello("core-service1"))
}
