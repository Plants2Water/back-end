#  Build Week - unit 4 - Water My Plants

## Base URL
https://bw-water-my-plants-01.herokuapp.com/



## API endpoints

### login/register

| Auth | Endpoint           | Required                  | Restrictions | Notes                                             |
| -----| ------------------ | --------------------------| -------------| ------------------------------------------------- |
| POST | /api/auth/register | username, last_name, first_name, password, telephone, email | Username: unique,min 3 & max 25 chars, password:min 8 & max 25 chars & phone: unique string| Creates a new user with auto Id.|
| POST | /api/auth/login    | username, password        | None         | Returns a welcome message and the JSON Web Token. |


<### Users

| Auth | Endpoint              | Required            | Restrictions      -| Notes                                    |
| -----| --------------------- | --------------------| -------------------|------------------------------------------|
| GET  | /api/users/:user_id        | None           | authenticated user | Returns the specified user object.       |
| GET  | /api/users/:user_id/plants | None           | authenticated user | Returns array of users plants.           |
| PUT  | /api/users/:user_id        | username, last_name, first_name, telephone, email |authenticated user| Returns updated user object.  |


### Plants

| Auth   | Endpoint        | Required            | Restrictions          | Notes                                       |
| -------| --------------- | --------------------| ----------------------| ------------------------------------------- |
| GET    | /api/plants/    | None                | authenticated user    |  Returns specified plant object.            |
| GET    | /api/plants/:plant_id | None          | authenticated user    |  Returns array of All plants.               |
| POST   | /api/plants/    | plant_nickname, plant_species, h2ofrequency, user_id | authenticated user        | Returns new plant object. |
| PUT    | /api/plants/:plant_id | user_id, plant_nickname, plant_species, h2ofrequency | authenticated user        | Returns updated plant object.  |
| DELETE | /api/plants/:plant_id | plant_id      | authenticated user | Returns deleted record if successfully deleted. |

-->
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
    	username,
    	password,
    {


*returns*      

    {
    "message": "welcome, plantlover",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMSwidXNlcm5hbWUiOiJtdXJyYXkzIiwiaWF0IjoxNjI5NzI3NzMyLCJleHAiOjE2Mjk4MTQxMzJ9.thk6t2OtKZr0pvmOxmZ0J45eWAsg19Q_xyyOFdD_fA0"
    }


[GET] user by ID *restricted* (api/users/:userId)   
---------------------
*expects*
/users/:id

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
 
<!-- [GET] plants by userId *restricted* (/api/users/:userId/plants)
---------------------

*returns*  

[
    
    {
        user_id,
        username,
        plant_id,
        plant_nickname,
        plant_species,
        h2ofrequency,
        plant_image
    },
    {
        user_id,
        username,
        plant_id,
        plant_nickname,
        plant_species,
        h2ofrequency,
        plant_image
    }
]

[PUT] user *restricted* (/api/users/:userId)
---------------------

*receives*  

{  

    username,          
    user_phone,                                                                    
    user_email,                                    
}

*returns*    
{  

    user_id,
    username,                                 
    user_phone,                                 
    user_email,                                      
    created_at                                  
}
[GET] plants (/api/plants/)

*returns*
[

    {
        plant_id,
        plant_nickname,
        plant_species,
        h2ofrequency,
        plant_image,
        user_id,
        created_at,
        updated_at
    },
    {
        plant_id,
        plant_nickname,
        plant_species,
        h2ofrequency,
        plant_image,
        user_id,
        created_at,
        updated_at
    },
 ]
 
 [GET] plant by ID restricted (api/plants/:plantId)
 
 *returns*
 
 {
 
    user_id,
    plant_nickname,
    plant_species,
    h2ofrequency,
    plant_image
}

[POST] plants (/api/plants/)

*receives*

{

    user_id,
    plant_nickname,
    plant_species,
    h2ofrequency,
    plant_image
}

*returns*

{

    user_id,
    plant_id,
    plant_nickname,
    plant_species,
    h2ofrequency,
    plant_image
}

[PUT] plant restricted (/api/plants/:plantId)

*receives*

{

    user_id,
    plant_nickname,
    plant_species,
    h2ofrequency,
    plant_image
}

*returns*

{

    user_id,
    plant_nickname,
    plant_species,
    h2ofrequency,
    plant_image
}


[DELETE] plant restricted (/api/plants/:plantId)

*returns*                                       

{      

        plant_id,                            
        plant_nickname,                        
        plant_species,                
        h2ofrequency,                         
        plant_image,                         
        user_id,                              
        created_at,               
        updated_at
    
}
-->-->   
Login_credential: these credentials can be used to test the login and end points, if you did not register yet                                                      
username: 
		doej
		brownthumb
		janesmith
		plantlover                                                                                                                                   
password: 1234