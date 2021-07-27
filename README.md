# go-admin
유저 생성, 검색, 스탯 수정, 재화 수정, 닉네임 수정, 삭제 기능이 있는 프로젝트 입니다.  
사용 언어 : golang, react  
운영 체제 : mac OS  
사용 툴 : visual stdio code, mysql workbench  

<img width="1440" alt="go-admin" src="https://user-images.githubusercontent.com/25112694/127175923-4818fbf6-3ffd-40fd-8e94-9434b46f79ba.png">

### Install
```shell
go get -u "github.com/gin-gonic/gin"
go get -u "gorm.io/gorm"
```

### Run Project
```shell
cd client
npm i
npm run build

cd ../server
go run .
```

http://localhost:8080/

### Create User
![createUser](https://user-images.githubusercontent.com/25112694/127179861-6f467513-1d5c-4698-be8a-b4f4bc345526.gif)

### Selete User
![findUser](https://user-images.githubusercontent.com/25112694/127178883-2942070b-a43b-489a-8ec8-fec4ad99255b.gif)
![findNotfoundUser](https://user-images.githubusercontent.com/25112694/127178875-c8cdc3f6-83df-4749-bee8-79b24b2c63c7.gif)
