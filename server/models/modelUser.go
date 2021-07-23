package models

type Users struct {
	Users []User `json:"users"`
}

func (u *Users) MakeUserMap() map[string]User {
	userMap := make(map[string]User, 0)
	for _, user := range u.Users {
		userMap[user.Name] = user
	}

	return userMap
}

type User struct {
	Id    int64  `json:"id"`
	Name  string `json:"name"`
	Level int    `json:"level"`
	Exp   int64  `json:"exp"`
	UserProperty
}

type UserProperty struct {
	Dia    int `json:"dia"`
	Coin   int `json:"coin"`
	Clover int `json:"clover"`
}
