# Trips Api test Mi aguila
## Installation

This is a api rest test for backend developer. Instalation is done using the npm install comand: 

```bash
[path/to/miaguila] $ npm install
```
### Run App

Run the api using the npm run dev comand, this app run be in port 8000

```bash
[path/to/miaguila] $ npm run dev
```

### Methods

#### GET
The method GET for list trips recive the param city, page  and limit per page, this can be run in the browser
Ex: 
```bash
$ http://localhost:8000/api/v1/trips?city=Medellin&page=1&limit=1
```
#### GET Count
The method get count all trips by cities or send param city and then count trips by city, this can be run in the browser
Ex: 
```bash
$ http://localhost:8000/api/v1/trips/count?city=Medellin
```

#### POST
The method post create a new trip item sending the next structure in json format:
```bash
    {
        "start": {
            "date":  "2019-01-25T19:06:27.936+0000",
            "pickup_address": "Cl. 90 #19-41, Bogotá, Colombia",
            "pickup_location": {
                "type": "Point",
                "coordinates": [
                    -74.0565192,
                    4.6761959
                ]
            }
        },
        "end": {
            "date": null,
            "pickup_address": "Ac. 100 #13-21, Bogotá, Colombia",
            "pickup_location": {
                "type": "Point",
                "coordinates": [
                    -74.0465655,
                    4.6830892
                ]
            }
        },
        "country": {
            "name": "Colombia"
        },
        "city": {
            "name": "Bogotá"
        },
            "passenger": {
            "first_name": "Ricardo",
            "last_name": "Sarmiento"
        },
        "driver": {
            "first_name": "Julio Alberto",
            "last_name": "Mesa Rodriguez"
        },
        "car": {
            "plate": "ESM308"
        },
        "status": "started",
        "check_code": "66",
        "createdAt": "2019-01-25T19:03:53.251+0000",
        "updatedAt": "2019-01-25T19:47:04.397+0000",
        "price": 13800.0,
        "driver_location": {
            "type": "Point",
            "coordinates": [
                -74.06017631292343,
                4.669553302335373
            ]
        }
    }
```
This can be run in postman tool.

```bash
$ http://localhost:8000/api/v1/trips
```

#### PUT
The method put send fields that i want to change in document, this send in json format by postman tool:
```bash
    {
        "city": {
            "name": "Bucaramanga"
        }
    }
```
This can be run in postman tool.

```bash
$ http://localhost:8000/api/v1/trips
```

### Documentation in Swagger

[Link](https://app.swaggerhub.com/apis/NATALIAGJ/Trips/1.0.0)

