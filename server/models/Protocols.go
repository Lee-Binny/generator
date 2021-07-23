package models

type SearchName struct {
	Name string `json:"name"`
}

type EditUserName struct {
	OriginName string `json:"originName"`
	EditName   string `json:"editName"`
}
