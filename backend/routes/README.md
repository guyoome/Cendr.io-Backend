# Routes

## RegisterUser

```javascript
{
    lastname:string,
    firstname:string,
    username:xxxx,
    CreatedAt:time,
    UpdatedAt:time,
    email:string,
    company:string,
    password:string
}

/* POSTMAN
/api/register
{
    "email": "guimau@gmail.com",
    "firstname": "guillaume",
    "lastname": "maurin",
    "password": "password123",
    "company": "amazon"
}
*/
```

## LoginUser

```javascript
{
    email:string,
    password:string
}

/* POSTMAN
/api/login
{
    "email": "guimau@gmail.com",
    "password": "password123"
}
*/
```

## CreateAshtray

```javascript
{
    location:string,
    userID:string,
    questionID:string,
}

/* POSTMAN
/api/ashtray/create
{
    "location":"{79,97}",
    "userID":"ObjectID(5dc002f4c8b9dc24c84a31ce)",
    "questionID":"ObjectID(5dc001fda43e0b49543c45b1)"
}
*/
```
