package routes

import (
	"jobfinder/backend/controllers"
	"jobfinder/backend/middleware"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()
	r.POST("/register", controllers.Register)
	r.POST("/login", controllers.Login)

	auth := r.Group("/")
	auth.Use(middleware.JWTAuth())
	{
		auth.GET("/jobs", controllers.GetJobs)
		auth.POST("/jobs", controllers.PostJob)
		auth.POST("/apply", controllers.ApplyJob)
		auth.GET("/applications", controllers.GetApplications)
	}

	return r
}
