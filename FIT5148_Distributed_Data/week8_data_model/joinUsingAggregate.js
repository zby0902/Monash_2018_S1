db.FIT.aggregate(
	[ 
		{$lookup: 
			{
				from: "unit",
				localField: "result.unit_code",
				foreignField: "_id",
				as: "enrolled_unit"
			}
		},
		{$out:"studUnit"}	
	]
)

