db.evaluation.drop()

db.evaluation.insertMany(
   [	
	{ results: [ {"item": "content", "score": 9}, {"item": "presentation", "score": 6}]},
	{ results: [ {"item": "content", "score": 8}, {"item": "presentation", "score": 8}]},
	{ results: [ {"item": "content", "score": 7}, {"item": "presentation", "score": 7}]},
	{ results: [ {"item": "content", "score": 9}, {"item": "presentation", "score": 8}]},
	{ results: [ {"item": "content", "score": 7}, {"item": "presentation", "score": 6}]},
	{ results: [ {"item": "content", "score": 7}, {"item": "presentation", "score": 9}]},
	{ results: [ {"item": "content", "score": null}, {"item": "presentation", "score": 9}]},
	{ results: [ {"item": "content", "score": 7}, {"item": "presentation", "score": null}]},
	{ results: [ {"item": "content", "score": 7}]}

   ]
)

db.evaluation.find({"results.item":"content","results.score":9})

db.evaluation.find({results: {$elemMatch:{"item":"content","score":9}}}).count()

db.evaluation.find({"results.score" : null})

db.evaluation.find({"results.item": {$exists:false}})

db.evalution.find({"results.item.1" : {$exists:false}})