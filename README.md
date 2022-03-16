# Our Neighbourhood API

This is an API that is accessible for our neighbourhood to see who is where, their details and their household details.

## Get a list of the neighbourhood

### Request

```
GET /neighbourhood/

```

### Query Parameters

- Parameter: age
- Description: Used to filter by age range. For example, ?age=20 will return houses whos owner is 24

- Parameter: numpeople
- Description: Used to filter by number of people within the house hold. For example, ?numpeople=2 will return houses who have 2 people living in them.

### Response

```
[{"id":1,"personName":"Kelvin","age":20,"numOfPeople":3,"house":{"houseNum":12,"address":{"street":"Street Street","postcode":"Q12 3RG"}}},{"id":2,"personName":"Tom","age":23,"numOfPeople":2,"house":{"houseNum":142,"address":{"street":"Street Road","postcode":"Q12 3RJ"}}}]
```

## Get information for a specific house number

### Request

```
GET /neighbourhood/<house number>
```

## URL Parameters

- Parameter = House number
- Description = The number of the house I want to view

### Response

```
{"id":2,"personName":"Tom","age":23,"numOfPeople":2,"house":{"houseNum":142,"address":{"street":"Street Road","postcode":"Q12 3RJ"}}}
```
##
