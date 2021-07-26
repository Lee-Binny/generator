package controllers

import (
	"fmt"
	"net/http"
	"server/db"
	"server/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type UserRepo struct {
	DB *gorm.DB
}

func NewUserRepo() *UserRepo {
	database := db.InitDB()
	database.AutoMigrate(&models.User{})
	return &UserRepo{DB: database}
}

func (repo *UserRepo) CreateUser(c *gin.Context) {
	req := &models.SearchName{}
	err := c.Bind(req)
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	user := models.NewUser(req.Name)
	err = models.CreateUser(repo.DB, user)
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"ok":   "true",
		"user": user,
	})
}

func (repo *UserRepo) SearchUser(c *gin.Context) {
	req := &models.SearchName{}
	err := c.Bind(req)
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	user, err := models.FindUser(repo.DB, req.Name)
	if err == gorm.ErrRecordNotFound {
		c.JSON(http.StatusOK, gin.H{
			"ok":      "false",
			"message": "not found user",
		})
		return
	}

	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"ok":   "true",
		"user": user,
	})
}

func (repo *UserRepo) EditUserName(c *gin.Context) {
	req := &models.EditUserName{}
	err := c.Bind(req)
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	user, err := models.FindUser(repo.DB, req.OriginName)
	if err == gorm.ErrRecordNotFound {
		c.JSON(http.StatusOK, gin.H{
			"ok":      "false",
			"message": "not found user",
		})
		return
	}

	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	err = models.UpdateUserName(repo.DB, user, req.EditName)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	user.SetUserName(req.EditName)
	c.JSON(http.StatusOK, gin.H{
		"ok":   "true",
		"user": user,
	})
}
