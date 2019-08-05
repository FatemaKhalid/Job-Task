# jobtask

## Project setup
```
yarn install
```

### To run the program 
```
./runMe
```
### In another terminal run to create users
```
curl -i -X POST -H 'Content-Type: application/json' -d '{"email": "guest@test.com", "password": "pass"}' http://localhost:5000/auth/seedUser
curl -i -X POST -H 'Content-Type: application/json' -d '{"email": "admin@test.com", "password": "pass"}' http://localhost:5000/auth/seedUser

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
job Task
