package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Id    int64  `json:"id" gorm:"primaryKey"`
	Name  string `json:"name"`
	Level int    `json:"level" gorm:"DEFAULT:1"`
	Exp   int64  `json:"exp" gorm:"DEFAULT:0"`
	UserProperty
	UserStat
}

func (u *User) SetUserName(name string) {
	u.Name = name
}

func (u *User) IsNotUserName(name string) bool {
	return u.Name != name
}

type UserProperty struct {
	Dia    int `json:"dia" gorm:"DEFAULT:50"`
	Coin   int `json:"coin" gorm:"DEFAULT:5000"`
	Clover int `json:"clover" gorm:"DEFAULT:15"`
	Key    int `json:"key" gorm:"DEFAULT:10"`
}

type UserStat struct {
	Hp  int `json:"hp" gorm:"DEFAULT:150"`
	Mp  int `json:"mp" gorm:"DEFAULT:100"`
	Atk int `json:"atk" gorm:"DEFAULT:10"`
	Def int `json:"def" gorm:"DEFAULT:10"`
}

func NewUser(name string) *User {
	return &User{
		Name: name,
	}
}

func CreateUser(db *gorm.DB, user *User) error {
	err := db.Create(user).Error
	if err != nil {
		return err
	}

	return nil
}

func FindUser(db *gorm.DB, name string) (*User, error) {
	var user User
	err := db.Where("name = ?", name).First(&user).Error
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func UpdateUserName(db *gorm.DB, user *User, userName string) error {
	return db.Model(User{}).Where("id = ?", user.Id).Updates(User{Name: userName}).Error
}

func DeleteUser(db *gorm.DB, id int64) error {
	return db.Where("id = ?", id).Delete(&User{}).Error
}
