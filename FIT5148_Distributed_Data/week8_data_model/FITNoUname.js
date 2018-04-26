db.student.insertMany( 
[
    {  
      "_id": 123,
      "name": {
        "first": "Marie",
        "last": "Currie"
      },
      "course": "MIT",
      "result": [
        {
          "unit_code": "FIT9132",
          "semester": 1,
          "year": 2017,
          "mark": 85
        },
        {
          "unit_code": "FIT9131",
          "semester": 2,
          "year": 2017
        }
      ]
    },
    {
      "_id": 124,
      "name": {
        "first": "Albert",
        "last": "Einstein"
      },
      "course": "MBIS",
      "result": [
        {
          "unit_code": "FIT9131",
          "semester": 1,
          "year": 2017,
          "mark": 90
        }
       ]
    },
    {
      "_id": 125,
      "name": {
        "first": "Gordon",
        "last": "Bell"
      },
      "course": "MBIS",
      "result": [
        {
          "unit_code": "FIT9132",
          "semester": 2,
          "year": 2017
        }
      ]
    },
    {
      "_id": 126,
      "name": {
        "first": "John",
        "last": "von Neumann"
      },
      "course": "MDS",
      "result": [
        {
          "unit_code": "FIT9132",
          "semester": 1,
          "year": 2017,
          "mark": 99
        }
      ]
    },    
   {
      "_id": 127,
      "name": {
        "first": "Charles",
        "last": "Babbage"
      },
      "course": "MIT",
      "result": [
        {
          "unit_code": "FIT9132",
          "semester": 1,
          "year": 2017,
          "mark": 95
        }
      ]
    }, 
   {
      "_id": 126,
      "name": {
        "first": "Peter",
        "last": "Chen"
      },
      "course": "MBIS",
      "result": [
        {
          "unit_code": "FIT9132",
          "semester": 1,
          "year": 2017,
          "mark": 99
        }
      ]
    },     
],
    {
        "ordered": false 
    }
)
