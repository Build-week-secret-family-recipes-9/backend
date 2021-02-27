# Authentication using JSON Web Tokens (JWTs) Build Week Project Family Recipes

## Introduction

POST | /api/auth/login | Logs in the user and returns the session token

POST | /api/auth/register | Registers the user to the database & encrypts the password

POST | /api/recipes | Add another recipe

GET | /api/auth/users | Get User settings 

GET | /api/recipes | Get recipes by user or role

PUT | /api/auth/users | Edit User settings (change password)

DELETE | /api/recipes/:id | Delete recipe based by id

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


# Dev
Do we need departments and or roles? To create admins and moderators or should every one be the same type of users? 


## Future
Work on validating and making middleware so each recipe post or get is done by the user session's validity 

