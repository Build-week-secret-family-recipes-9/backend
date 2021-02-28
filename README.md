# Authentication using JSON Web Tokens (JWTs) Build Week Project Family Recipes
# Version 1
## End Points

POST | /api/auth/login | Logs in the user and returns the session token

POST | /api/auth/register | Registers the user to the database & encrypts the password

POST | /api/recipes | Add another recipe

GET | /api/auth/users | Get User settings 

GET | /api/auth/users/:id | Get User settings based on user id 

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


# Advanced Dev Topics
Do we need posts to be public or do we need role restricted private posts?

For the recipes post at instructions value- Does front end need new lines for each direction? Do we need a way to map threw each step of the recipe? If so should this get changed to an array or a name value pair? Like an auto incrementing field within a record. Something where each step is a new element and is easily mapped threw to give you a new line on every step of that direction?


## Future
Work on validating and making middleware so each recipe post or get is done by the user session's validity.
Work on Testing. 
Lets all make different styling skins once its done. 

