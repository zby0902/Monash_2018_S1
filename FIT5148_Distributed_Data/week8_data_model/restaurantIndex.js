db.restaurant.insertMany([

{"_id": 1, "name":"Chic", "type": "french","ratings": [ 5, 8, 9 ] },
{"_id": 2, "name":"Ola", "type": "spanish","ratings": [ 5, 9 ] },
{"_id": 3, "name":"Rumah", "type": "indonesian","ratings": [ 5, 8, 9 ] },
{"_id": 4, "name":"Casa", "type": "mexican","ratings": [ 5, 8, 9 ] },
{"_id": 5, "name":"Burger", "type": "USA","ratings": [ 5, 8, 9 ] },

])

db.restaurant.createIndex( { ratings: 1 } )