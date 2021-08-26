#  Build Week - unit 4 - Water My Plants

## Base URL
https://bw-water-my-plants-01.herokuapp.com/



## API endpoints

### login/register

| Auth | Endpoint           | Required                  | Restrictions | Notes                                             |
| -----| ------------------ | --------------------------| -------------| ------------------------------------------------- |
| POST | /api/auth/register | username, last_name, first_name, password, telephone, email | | Creates a new user with auto Id.|
| POST | /api/auth/login    | username, password        | None         | Returns a welcome message and the JSON Web Token. |


<### Users

| Auth | Endpoint              | Required            | Restrictions      -| Notes                                    |
| -----| --------------------- | --------------------| -------------------|------------------------------------------|
| GET  | /users/:user_id        | user_id           | authenticated user | Returns the specified user object.       |
| GET  | /users/:user_id/plants | user_id           | authenticated user | Returns array of user plants.           |
| PUT  | /users/:user_id        | user_id, username, last_name, first_name, telephone, email |authenticated user| Returns updated user object. Password must contain at least 8 characters; one uppercase, one number and one special case character (!@#$%^&*()\-_=+{};:,<.>) |


### Plants

| Auth   | Endpoint        | Required            | Restrictions          | Notes                                       |
| -------| --------------- | --------------------| ----------------------| ------------------------------------------- |
| GET    | /plants/:plant_id | None          | authenticated user    |  Returns specified plant object.               |
| POST   | /plants/    | plant_id, nickname, user_id | authenticated user        | Returns new plant object. |
| PUT    | /plants/ | plant_id, nickname, user_id | authenticated user        | Returns updated plant object.  |
| DELETE | /plants/ | plant_id      | authenticated user | Returns deleted record if successfully deleted. |

-->
DETAILED ENDPOINTS ARE MUCH MORE LEGIBLE IN VSCODE

### Detailed_endpoints

[POST] REGISTER (/api/auth/register). 
---------------------
* expects *

{   
    "username": "doej2", 
    "password": "1234",
    "last_name": "Doe",
    "first_name": "John",
    "telephone": "(208)-382-6393",
    "email": "jondoe@name.com"
}

*returns* 

{
    "user_id": 5,
    "username": "doej2",
    "password": "$2a$08$XZa0seByf.Q6.oLjvb.qeu1hIn1qhnGIAAs2cSE6ww4Q2Vre/LQQ.",
    "first_name": "John",
    "last_name": "Doe",
    "telephone": "(208)-382-6393",
    "email": "jondoe@name.com"
}


[POST] LOGIN (/api/auth/login). 
---------------------
    
    {
        "username": "plantlover",
        "password": "1234",

    {


*returns*      

    {
    "message": "welcome, plantlover",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMSwidXNlcm5hbWUiOiJtdXJyYXkzIiwiaWF0IjoxNjI5NzI3NzMyLCJleHAiOjE2Mjk4MTQxMzJ9.thk6t2OtKZr0pvmOxmZ0J45eWAsg19Q_xyyOFdD_fA0"
    }


[GET] user by ID *restricted* (/users/:user_id)   
---------------------
*expects*
/users/:user_id

*returns*    
{
    "user_id": 2,
    "username": "brownthumb",
    "password": "$2a$08$tjE6ebEFy7n7zUjsjD2IO.jilGy.RsS8dQEdJgk70XeDrKpnSVVtK",
    "last_name": "Jones",
    "first_name": "Pesticide",
    "telephone": "(208)-382-6786",
    "email": "brownie@kill.com",
    "created_at": "2021-08-23T14:42:11.045Z",
    "updated_at": "2021-08-23T14:42:11.045Z"
}

[PUT] user by ID *restricted* (/users/:user_id)   
---------------------
*expects body with all of of the following properties*

{
    "last_name": "Jones",
    "first_name": "Eddie",
    "telephone": "(208)-555-6556",
    "email": "brownie@kill.com"
}

*returns* 
{
    "user_id": 2,
    "username": "brownthumb",
    "password": "$2a$08$tjE6ebEFy7n7zUjsjD2IO.jilGy.RsS8dQEdJgk70XeDrKpnSVVtK",
    "last_name": "Jones",
    "first_name": "Eddie",
    "telephone": "(208)-555-6556",
    "email": "brownie@kill.com",
    "created_at": "2021-08-23T14:42:11.045Z",
    "updated_at": "2021-08-23T14:42:11.045Z"
}

 
[GET] plants by user_id *restricted* (/users/:user_id/plants)
---------------------

*returns array of plants*  

[
    {
        "plant_id": 6,
        "species": "Saintpaulia",
        "nickname": "African Violet",
        "h2oFrequency": 2,
        "last_watered": "2021-08-23T06:00:00.000Z",
        "photo_url": "https://www.houseplantsexpert.com/image-files/african-violet.jpg",
        "notes": "The African violet...",
        "user_id": 3,
        "created_at": "2021-08-23T14:42:11.049Z",
        "updated_at": "2021-08-23T14:42:11.049Z"
    }
]
 
[POST] plant *restricted* (/plants)

*receives*

{
    "species": "species of NewPlant",
    "nickname": "My New Plant"
    "h2oFrequency": 3,
    "last_watered": "2021-08-19",
    "photo_url": "https://www.houseplantsexpert.com/image-files/tillandsia-caputmedusae.jpg",
    "notes": "Happy about my new plant",
    "user_id": 3
}
NOTE: only nickname and user_id are required.

*returns*

{
    "plant_id": 11,
    "species": "species of NewPlant",
    "nickname": "My New Plant",
    "h2oFrequency": 3,
    "last_watered": "2021-08-19T06:00:00.000Z",
    "photo_url": "https://www.houseplantsexpert.com/image-files/tillandsia-caputmedusae.jpg",
    "notes": "Happy about my new plant",
    "user_id": 3
}

 [PUT] plant *restricted* (/plants)

*receives*

{
    "plant_id": 11,
    "species": "updated species of NewPlant",
    "nickname": "My New updated Plant",
    "h2oFrequency": 4,
    "last_watered": "2021-08-25",
    "photo_url": "https://www.houseplantsexpert.com/image-files/tillandsia-caputmedusae.jpg",
    "notes": "Happy about my new updated plant",
    "user_id": 3
}

*returns*

{
    "plant_id": 11,
    "species": "updated species of NewPlant",
    "nickname": "My New updated Plant",
    "h2oFrequency": 4,
    "last_watered": "2021-08-25T06:00:00.000Z",
    "photo_url": "https://www.houseplantsexpert.com/image-files/tillandsia-caputmedusae.jpg",
    "notes": "Happy about my new updated plant",
    "user_id": 3
}

[DELETE] plant *restricted* (/plants)
*expects*
{
    plant_id: 10
}

*returns*                                       

{
    "plant_id": 10,
    "species": "Tillandsia Caput Medusae",
    "nickname": "Medusa's Head ",
    "h2oFrequency": 7,
    "last_watered": "2021-08-19T06:00:00.000Z",
    "photo_url": "https://www.houseplantsexpert.com/image-files/tillandsia-caputmedusae.jpg",
    "notes": "This species is a flowering air plant from the bromeliads family and is one of the most popular of the Tillandsia genus.",
    "user_id": 1,
    "created_at": "2021-08-24T14:35:25.283Z",
    "updated_at": "2021-08-24T14:35:25.283Z"
}

Login_credential: these credentials can be used to test the login and end points, if you did not register yet                                                      
username: 
		doej
		brownthumb
		janesmith
		plantlover                                                                                                                                   
password: 1234