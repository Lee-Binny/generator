package controllers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
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

func getUserData() (*models.User, error) {
	jsonFile, err := os.Open("user_data.json")
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	byteValue, _ := ioutil.ReadAll(jsonFile)

	user := &models.User{}
	err = json.Unmarshal(byteValue, user)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	return user, nil
}

func (repo *UserRepo) EditUserName(c *gin.Context) {
	req := &models.EditUserName{}
	err := c.Bind(req)
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	fmt.Println(req)

	user, err := getUserData()
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	user.SetUserName(req.EditName)
	byteValue, err := json.Marshal(user)
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	err = ioutil.WriteFile("user_data.json", byteValue, 0644)
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"ok":   "true",
		"user": user,
	})
}
