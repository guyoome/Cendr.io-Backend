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
    "email": "gui@gmail.com",
    "firstname": "guillaume",
    "lastname": "maurin",
    "password": "Password123&",
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
    "email": "gui@gmail.com",
    "password": "Password123&"
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

## ReadAshtray

```javascript
/* POSTMAN
/api/ashtray/read
*/
```

## ReadOneAshtray

```javascript
:id===ObjectID();

/* POSTMAN
/api/ashtray/read/:id
*/
```

## ResetAshtray

```javascript
:id===ObjectID();
{
    location:string,
    userID:string,
}

/* POSTMAN
/api/ashtray/reset/:id
{
    "location":"{79,97}",
    "userID":"ObjectID(5dc002f4c8b9dc24c84a31ce)"
}
*/
```

## UpdateAshtray

```javascript
:id===ObjectID();

{
    buttNumber:number,
}

/* POSTMAN
/api/ashtray/update/:id
{
    "buttNumber":"44"
}
*/
```

## DeleteAshtray

```javascript
:id===ObjectID();

/* POSTMAN
/api/ashtray/delete/:id
*/
```

## CreateQuestion

```javascript
{
    text:string,
    userID:string,
    proposal_a:string,
    proposal_b:string,
    lifeTime: date

}

/* POSTMAN
{
    "text":"Ceci est un question ?",
    "userID":"ObjectID(5dc426e59963700c116b1081)",
    "proposal_a":"Oui",
    "proposal_b":"Non",
    "lifeTime":"05/03/2020"
}
*/
```

## ReadQuestions

```javascript
{
}

/* POSTMAN
req
{}
res
[{       "_id": "5dc43aa8809e2a11a8a19aba",
        "userID": "objectid(5dc426e59963700c116b1081)",
        "text": "Ceci est un question ?",
        "proposal_a": "oui",
        "proposal_b": "non",
        "lifeTime": "05/03/2020",
        "__v": 0
}]
*/
```

## ReadQuestion

```javascript
{
}

/* POSTMAN
req
{
    params {
        id : Number
    }
}
res
{        "_id": "5dc43aa8809e2a11a8a19aba",
        "userID": "objectid(5dc426e59963700c116b1081)",
        "text": "Ceci est un question ?",
        "proposal_a": "oui",
        "proposal_b": "non",
        "lifeTime": "05/03/2020",
        "__v": 0
}
*/
```

## UpdateQuestion

```javascript
{
    text:string,
    userID:string,
    proposal_a:string,
    proposal_b:string,
    lifeTime: date

}

/* POSTMAN
req {
        "text":"Ceci est un question ?",
        "userID":"ObjectID(5dc426e59963700c116b1081)",
        "proposal_a":"Oui",
        "proposal_b":"Non",
        "lifeTime":"05/03/2020"
}
*/
```

## ReadQuestion

```javascript
{
}

/* POSTMAN
req
{
    params {
        id : Number
    }
}
res
{        "_id": "5dc43aa8809e2a11a8a19aba",
        "userID": "objectid(5dc426e59963700c116b1081)",
        "text": "Ceci est un question ?",
        "proposal_a": "oui",
        "proposal_b": "non",
        "lifeTime": "05/03/2020",
        "__v": 0
}
*/
```
