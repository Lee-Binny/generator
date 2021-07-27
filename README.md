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
<img width="821" alt="createUser" src="https://user-images.githubusercontent.com/25112694/127180072-b0d3110a-344a-41b9-ab3f-7873b7409a20.png">

### Selete User
![findUser](https://user-images.githubusercontent.com/25112694/127178883-2942070b-a43b-489a-8ec8-fec4ad99255b.gif)
![findNotfoundUser](https://user-images.githubusercontent.com/25112694/127178875-c8cdc3f6-83df-4749-bee8-79b24b2c63c7.gif)

### Update User Stat
![updateStat](https://user-images.githubusercontent.com/25112694/127180858-6e305c96-4f7c-48da-a9d7-823e3d7e682d.gif)
<img width="821" alt="updateStat" src="https://user-images.githubusercontent.com/25112694/127180799-78ae7e99-cad2-4f89-8529-0a226ebc664f.png">

### Delete User
![deleteUser](https://user-images.githubusercontent.com/25112694/127181461-ada11edf-ff4e-4a6c-a9cb-dc6738ece14a.gif)
<img width="891" alt="deleteUser" src="https://user-images.githubusercontent.com/25112694/127181438-1723db14-c7dd-4e5b-bf2d-a570bfbc0725.png">
