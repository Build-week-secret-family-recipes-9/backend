# The family Recipes Site

Log the user in with a JWT token session which restricts their access based on if they are logged in and their role as admin or user. Once logged in posting recipes to the recipes list is done


<h2>ENDPOINTS</h2>


| End Point | Description |
| --- | --- |
| `DELETE https://secret-family-recipes-157.herokuapp.com/api/auth/logout` | Log the user out by destroying the session | 
| `POST https://secret-family-recipes-157.herokuapp.com/api/auth/login` | Logs in the user |
| `POST https://secret-family-recipes-157.herokuapp.com/api/auth/register ` | REGISTER A NEW USER |
| `GET https://secret-family-recipes-157.herokuapp.com/api/recipes/:id` | GET Recipe By ID |
| `GET /api/auth/users/:id` | Get User settings based on user id | 
| `GET https://secret-family-recipes-157.herokuapp.com/api/recipes` | Will get/put/post/delete **recipes**, log the user in/out, register the user, view other users as a user, view other users as admin, or view the currently logged in user only. |
| `GET https://secret-family-recipes-157.herokuapp.com/api/users/limited` | Get The Currently Logged in User who has the active Session |
| `GET https://secret-family-recipes-157.herokuapp.com/api/users/userlimited` | Only Show other Users when You are a user (not for admins) |
| `GET https://secret-family-recipes-157.herokuapp.com/api/users/adminlimited` | Only Show other admins when You are an admin (only for admins) |
| `GET https://secret-family-recipes-157.herokuapp.com/api/auth/users` | Get All Users (only for admins) | 

# Recipe Schema object

    {

        "id": 1,

        "title": "Eggwhites with ham",

        "source": "food.com",

        "ingredients": "fried shrimp with chocolate chips",

        "instructions": "Step 1 fry the shrimp step 2 batter the chocolate 3 other stuff as well here",

        "category": "c food",

        "img": "../../assets/img/shrimps.jpg"
    
    }

# User Schema
    {
        "id" : 32,
        
        "username" : "name",

        "password" : "thepassword3",

        "roles" : "1 admin or 2 user"
    }


# Roles Schema


    {
        "id" : 1,

        "name" "admin"
    }

     {
        "id" : 2,

        "name" "user"
    }
