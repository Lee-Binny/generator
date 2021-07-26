package main

import (
	"server/controllers"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("../client/build", true)))

	userRepo := controllers.NewUserRepo()
	user := router.Group("/user")
	{
		user.POST("/create", userRepo.CreateUser)
		user.POST("/search", userRepo.SearchUser)
		user.POST("/editName", userRepo.EditUserName)
	}
	router.Run()
}
