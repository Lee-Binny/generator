package main

import (
	"server/controllers"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("../client/build", true)))

	user := router.Group("/user")
	{
		user.POST("/search", controllers.SearchUser)
		user.POST("/editName", controllers.EditUserName)
	}
	router.Run()
}
