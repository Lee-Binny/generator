package db

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() *gorm.DB {
	return connectDB()
}

func connectDB() *gorm.DB {
	dsn := "root:root1234@tcp(localhost:3306)/go_admin?charseturf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println("DB Connecting Error: ", err)
		return nil
	}
	return db
}
