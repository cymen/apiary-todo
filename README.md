FORMAT: 1A
HOST: http://www.google.com

# todo
Notes API is a *short texts saving* service similar to its physical paper presence on your table.

# Group Notes
Notes related resources of the **Notes API**

## Notes Collection [/notes]
### List all Notes [GET]
+ Response 200 (application/json)

        [{
          "id": 1, "title": "Jogging in park"
        }, {
          "id": 2, "title": "Pick-up posters from post-office"
        }]

### Create a Note [POST]
+ Request (application/json)

        { "title": "Buy cheese and bread for breakfast." }

+ Response 201 (application/json)

        { "id": 3, "title": "Buy cheese and bread for breakfast." }

## Note [/notes/{id}]
A single Note object with all its details

+ Parameters
    + id (required, number, `2`) ... Numeric `id` of the Note to perform action with. Has example value.

### Retrieve a Note [GET]
+ Response 200 (application/json)

    + Header

            x-my-header: the value

    + Body

            { "id": 2, "title": "Pick-up posters from post-office" }

### Remove a Note [DELETE]
+ Parameters
    + id (required, number, `3`) ... Numeric `id` of the Note to perform action with. Has example value.

+ Response 204
