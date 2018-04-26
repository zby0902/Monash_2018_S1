db.logMsg.aggregate(
	[ 
		{$lookup: 
			{
				from: "host",
				localField: "host",
				foreignField: "_id",
				as: "host_msg"
			}
		},
		{$out:"host_msg"}	
	]
)
