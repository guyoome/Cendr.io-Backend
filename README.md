# Cendr.io - Backend

# How does it work ?

- Push to master
- merge master to deploy/prod
- Push to deploy/prod

# How to connect if I don't have any user ?

You need to create a user.
With this user, you will be able to create new user.
To create a user

Open Postman and start this request
POST https://xxxxxxxxxxxxxxxx
{
"email": "xxxxx@boilerplate.com",
"password": "xxxxxxx",
"firstname": "Xxxx",
"lastname": "Xxxx"
}

# How to run it ?

1/ Start mongodb

2/ add the .env file

3/ Configure project:

Open _package.json_

- Windows:
  3.1/ Edit line _"dev": "npm run windows-dev"_
  3.2/ Edit line _"build": "npm run windows-build"_

- MacOS:
  3.1/ Edit line _"dev": "npm run macos-dev"_
  3.2/ Edit line _"build": "npm run macos-build"_

4/ Run command:
\$ npm run dev
_Note:_ For Windows users, open cmd as admin to run the command

# Alias

https://arunmichaeldsouza.com/blog/aliasing-module-paths-in-node-js

# Tests

- ./tests folder include the test environment and an emulation of mongodb (with a little seeder)
- ./tests folder also include the mongoose check connection test

# e2e tests vs unit tests ?

e2e tests:

- Should be for testing status, data returned is correct
  unit tests:
- Should be for testing if data registered is correct
  (thus we can test data never returned by API)

# How to run single .test ?

- Copy the .test path
- Paste it in test-x
- npm run test-x

# Sonarqube

- Sonarqube is integrate and configure for jest test and coverage in the project
- Allow to show the coverage and quality of code with reviews

# License

ISC
