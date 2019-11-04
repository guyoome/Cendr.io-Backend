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
{
    "email": "guimau@gmail.com",
    "password": "password123"
}
*/
```
