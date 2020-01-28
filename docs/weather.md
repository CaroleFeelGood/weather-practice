# /Weather

## GET /weather

Get data for the current weather at a location

### Example Request

#### Endpoint 

`GET /weather?lat=45.50884&long=-73.58781`

#### Parameters

Field|Required|description
:-----:|:-----:|:-----:
lat|yes|Location latitude
long|yes|Location longitude

#### Response

If the api call is successful
`200 Success`
```json
{
 "city": "Montreal",
 "temperature": "19",
 "prepareForRain": true,
}
 ```

If something went wrong because of bad or missing inputs
`400 Bad Request`
```json
{
   "code": 400,
   "message": "Missing paramater: lat"
}
```

If somthing went wrong with the api call
`502 Bad Gateway`
```json
{ 
  "code": 502,
  "message": "<Add error stack here>"
}
```

If something unexpected happens
`500 Internal Server Error`
```json
{
    "code": 500,
    "message": "<Add error stack here>"
}
```
