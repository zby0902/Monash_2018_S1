
db.host.insertMany(
		[
			{
			"_id":ObjectId(),
			"name":"moodle.monash",
			"ipaddr":"127.66.66.66"
			},
			{
			"_id": ObjectId(),
			"name":"alexandria.monash",
			"ipaddr":"127.66.66.88"
			}
		]
)
	
db.logMsg.insertOne(
	{
	"_id":ObjectId().getTimestamp(),
	"msg" : "permission denied",
	"host" : ObjectId("5ad4490d8854cf68ccb546fa")
	}
)

db.logMsg.insertOne(
	{
	"_id":ObjectId().getTimestamp(),
	"msg" : "object not found",
	"host" : ObjectId("5ad4490d8854cf68ccb546fa")
	}
)