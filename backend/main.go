package main

import (
	"encoding/json"
	"net/http"
)

type Todo struct {
	ID          string `json:"id"`
	Description string `json:"description"`
}

var todos []Todo

func main() {
	http.HandleFunc("/todos", ToDoListHandler)
	http.HandleFunc("/", AddTodoHandler) // Changed from "/todos/add" to "/"
	http.ListenAndServe(":8080", nil)
}

func ToDoListHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	if r.Method == http.MethodGet {
		json.NewEncoder(w).Encode(todos)
	}
}

func AddTodoHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	if r.Method == http.MethodPost {
		var newTodo Todo
		json.NewDecoder(r.Body).Decode(&newTodo)
		todos = append(todos, newTodo)
		json.NewEncoder(w).Encode(todos)
	}
}
