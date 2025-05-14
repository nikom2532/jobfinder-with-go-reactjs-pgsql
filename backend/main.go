package main

import (
	"log"

	"jobfinder/backend/config"
	"jobfinder/backend/models"
	"jobfinder/backend/routes"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, using default env vars")
	}

	config.Connect()
	config.AutoMigrate(&models.User{}, &models.Job{}, &models.Application{})

	r := routes.SetupRouter()
	r.Run(":8080")
}
