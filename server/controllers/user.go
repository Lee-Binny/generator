package controllers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"server/models"

	"github.com/gin-gonic/gin"
)

func SearchUser(c *gin.Context) {
	req := &models.SearchName{}
	err := c.Bind(req)
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	usersMap, err := getUserData()
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	user, ok := usersMap[req.Name]
	if !ok {
		c.JSON(http.StatusOK, gin.H{
			"ok":  "false",
			"msg": "not found user",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"ok":   "true",
		"user": user,
	})
}

func getUserData() (map[string]models.User, error) {
	jsonFile, err := os.Open("user_data.json")
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	byteValue, _ := ioutil.ReadAll(jsonFile)

	var users models.Users
	err = json.Unmarshal(byteValue, &users)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	return users.MakeUserMap(), nil
}

func EditUserName(c *gin.Context) {
	req := &models.EditUserName{}
	err := c.Bind(req)
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	fmt.Println(req)

	usersMap, err := getUserData()
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}

	user, ok := usersMap[req.OriginName]
	if !ok {
		c.JSON(http.StatusOK, gin.H{
			"ok":  "false",
			"msg": "not found user",
		})
		return
	}

	user.Name = req.EditName
	// TODO json 수정부분 추가
	c.JSON(http.StatusOK, gin.H{
		"ok":   "true",
		"user": user,
	})
}
