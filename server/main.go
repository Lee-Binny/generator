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
		user.POST("/update/name", userRepo.EditUserName)
		user.POST("/update/stat", userRepo.UpdateStat)
		user.POST("/update/property", userRepo.UpdateProperty)
		user.POST("/delete", userRepo.DeleteUser)
	}
	router.Run()
}
