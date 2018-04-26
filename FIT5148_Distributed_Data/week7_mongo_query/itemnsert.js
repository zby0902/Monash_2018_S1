db.item.drop()

db.item.insertMany(
   [	
	{ "name":"small_nail","qty":25,"size":2},
	{ "name":"medium_nail","qty":15,"size":4},	
	{ "name":"big_nail","qty":25,"size":6},
	{ "name":"hammer","qty":2},
	{ "name":"screw","qty":40},
	{ "name":"ladder","qty":1}  
    ]
)
