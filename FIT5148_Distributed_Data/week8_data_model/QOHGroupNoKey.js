db.qoh.aggregate([
	{$group: {_id: {"type":"$type","supplier":"$supplier"}, total: {$sum:"$qty"}}}
	])


db.item.aggregate([
	{$group:{_id:null,total:{$sum:"$qty"}}}
])


