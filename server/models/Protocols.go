package models

type ReqSearchName struct {
	Name string `json:"name"`
}

type ReqEditUserName struct {
	OriginName string `json:"originName"`
	EditName   string `json:"editName"`
}

type ReqUpdateProperty struct {
	Name string `json:"name"`
	UserProperty
}

type ReqUpdateStat struct {
	Name string `json:"name"`
	UserStat
}
