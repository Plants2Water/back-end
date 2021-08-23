#  Build Week - unit 4 - Water My Plants

## Base URL
https://bw-water-my-plants-01.herokuapp.com/



## API endpoints

### login/register

| Auth | Endpoint           | Required                  | Restrictions | Notes                                             |
| -----| ------------------ | --------------------------| -------------| ------------------------------------------------- |
| POST | /api/auth/register | username, lastName, firstName, password, telephone, email | Username: unique,min 3 & max 25 chars, password:min 8 & max 25 chars & phone: unique string| Creates a new user with auto Id.|
| POST | /api/auth/login    | username, password        | None         | Returns a welcome message and the JSON Web Token. |


<!--### Users

| Auth | Endpoint              | Required            | Restrictions      -| Notes                                    |
| -----| --------------------- | --------------------| -------------------|------------------------------------------|
| GET  | /api/users/:user_id        | None           | authenticated user | Returns the specified user object.       |
| GET  | /api/users/:user_id/plants | None           | authenticated user | Returns array of users plants.           |
| PUT  | /api/users/:user_id        | username, lastName, firstName, telephone, email |authenticated user| Returns updated user object.  |


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

*expects* 

   

    
    
    
    {
    	username,
    	password,
      	lastName,
      	firstName,
      	telephone,
      	email
    }

*returns* 

   

    
    
    
    {
    	"email": "test@test.com",
    	"first_name": "Ralph",
    	"last_name": "Kramden",
    	"password": "$2a$08$ygzd0thWCBPXGKHwNAPHxOKqvgm4L6OBubG/3BuRuUeQjdlHN./Im",
    	"telephone": "215.898.9876",
    	"user_id": 11,
    	"username": "plantlover"
    }

[POST] LOGIN (/api/auth/login). 
---------------------
  *expects*   
    {
    	username,
    	password
    }


*returns*      

    {
    "message": "welcome, plantlover",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMSwidXNlcm5hbWUiOiJtdXJyYXkzIiwiaWF0IjoxNjI5NzI3NzMyLCJleHAiOjE2Mjk4MTQxMzJ9.thk6t2OtKZr0pvmOxmZ0J45eWAsg19Q_xyyOFdD_fA0"
    }


<!-- <!--[GET] user by ID *restricted* (api/users/:userId)   
---------------------

*returns*    

{  

    user_id,
    username,
    password,
    user_email,
    user_phone,
    created_at  
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
    
} -->
-->-->   
Login_credential: these credentials can be used to test the login and end points, if you did not register yet                                                      
username: 
		doej
		brownthumb
		janesmith
		plantlover                                                                                                                                   
password: 1234