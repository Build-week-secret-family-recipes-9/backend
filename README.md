<h2>ENDPOINTS</h2>

<b></b>
<br/>
POST:

<b>/b>
<br/>
POST: 

<b>LOGOUT A USER</b>
<br/>
DELETE: 

  
<b>GET RECIPES</b>
<br/>
GET: 

<b>GET RECIPES BY ID</b>
<br/>
GET: 

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


# Advanced Dev Topics

1] Do we need posts to be public or do we need role restricted private posts?

2] For the recipes post at instructions value- Does front end need new lines for each direction? Do we need a way to map threw each step of the recipe? If so should this get changed to an array or a name value pair? Like an auto incrementing field within a record. Something where each step is a new element and is easily mapped threw to give you a new line on every step of that direction?


## Future

1] Work on validating and making middleware so each request or response based off the users session validity.

2] Work on Testing. 

3] Lets all make different styling skins once its done. 
<b>ADD A NEW RECIPE</b>
<br/>
POST: https://secret-family-recipes-157.herokuapp.com/api/recipes

<b>UPDATE A RECIPE</b>
<br/>
PUT: https://secret-family-recipes-157.herokuapp.com/api/recipes/:id

<b>DELETE A RECIPE</b>
<br/>
DELETE: https://secret-family-recipes-157.herokuapp.com/api/recipes/:id
