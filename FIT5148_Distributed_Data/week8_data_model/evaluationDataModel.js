db.evaluation.drop()

db.evaluation.insertMany(
   [	
	{ "_id":1, results: [ {"item": "content", "score": 9}, {"item": "presentation", "score": 6}]},
	{ "_id":2,results: [ {"item": "content", "score": 8}, {"item": "presentation", "score": 8}]},
	{ "_id":3,results: [ {"item": "content", "score": 7}, {"item": "presentation", "score": 7}]},
	{ "_id":4,results: [ {"item": "content", "score": 9}, {"item": "presentation", "score": 8}]},
	{ "_id":5,results: [ {"item": "content", "score": 7}, {"item": "presentation", "score": 6}]},
	{ "_id":6,results: [ {"item": "content", "score": 7}, {"item": "presentation", "score": 9}]},
	{ "_id":7,results: [ {"item": "content", "score": null}, {"item": "presentation", "score": 9}]},
	{ "_id":8,results: [ {"item": "content", "score": 7}, {"item": "presentation", "score": null}]},
	{ "_id":9,results: [ {"item": "content", "score": 7}]}

   ]
)


//find content score of 9 and presentation score of 6
db.evaluation.find(
	{$and:[
			{"results":{$elemMatch:{"item":"content","score":9}}},
			{"results":{$elemMatch:{"item":"presentation","score":6}}}
			]
	}
)

// this will find only presentation with the value of null
db.evaluation.find({"results":{$elemMatch:{"item":"presentation","score":null}}})

//checking for presentation with the value of null and existence of the element where presentation is usually placed
db.evaluation.find({$or:[{"results.1":{$exists:false}},{"results":{$elemMatch:{"item":"presentation","score":null}}}]})

db.evaluation_1.insertMany(
   [	
	{ "_id":1,results: {"content": 9,"presentation":6}},
	{ "_id":2,results: {"content": 8,"presentation": 8}},	
	{ "_id":3,results: {"content": 7,"presentation": 7}},	
	{ "_id":4,results: {"content": 9,"presentation": 8}},	
	{ "_id":5,results: {"content": 7,"presentation": 6}},
	{ "_id":6,results: {"content": 7,"presentation": 9}},	
	{ "_id":7,results: {"content": null,"presentation": 9}},
	{ "_id":8,results: {"content": 7,"presentation": null}},
	{ "_id":9,results: {"content": 7}}
	]
)


//find content score of 9 and presentation score of 6
db.evaluation_1.find({"results.content":9,"results.presentation":6})


//this will find both null and when presentation does not exist
db.evaluation_1.find({"results.presentation":null})

db.evaluation_2.insertMany(
   [	
	{ "_id":1,results: [ {"content": 9}, {"presentation":6}]},
	{ "_id":2,results: [ {"content": 8}, {"presentation":8}]},
	{ "_id":3,results: [ {"content": 7}, {"presentation":7}]},
	{ "_id":4,results: [ {"content": 9}, {"presentation":8}]},
	{ "_id":5,results: [ {"content": 7}, {"presentation":6}]},
	{ "_id":6,results: [ {"content": 7}, {"presentation":9}]},
	{ "_id":7,results: [ {"content": null}, {"presentation":9}]},
	{ "_id":8,results: [ {"content": 7}, {"presentation":null}]},
	{ "_id":9,results: [ {"content": 7}]}
   ]
)

//find documents with the content is 9 and presentation is 6
db.evaluation_2.find({"results.content":9,"results.presentation":6})

//this will match to documents contains result array and within the array a document with field presentation is null
db.evaluation_2.find({"results":{"presentation":null}})

//this will match documents contain the missing document with the presentation field inside the array

db.evaluation_2.find({$and:[{"results":{$size:1}},{"results.presentation":{$exists:false}}]})






