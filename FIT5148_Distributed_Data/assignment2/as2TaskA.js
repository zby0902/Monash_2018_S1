/*A1*/
//This is the propmt command not mongo shell script
mongoimport -d fit5148_db -c Climate --type csv --file ClimateData-Part1.csv --headerline
mongoimport -d fit5148_db -c Fire --type csv --file FireData-Part1.csv --headerline

/*A2*/
//This is mongo shell script not javascript
use fit5148_db
db.getCollection('Climate').find({"Date":"2017-12-15"})

/*A3*/
db.getCollection('Fire').find({"Surface Temperature (Celcius)":{$gt:65,$lt:100}},{"Longitude":1,"Latitude":1,"Confidence":1,"_id":0})

/*A4*/
db.getCollection('Fire').aggregate([
{$lookup:{from:"Climate",
          localField:"Date",
          foreignField:"Date",
          as:"ClimateData"}
},
{
 $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$ClimateData", 0 ] }, "$$ROOT" ] } }
},
{ 
    $project: { ClimateData: 0}
 },
{
    $project: {"Date":1,"Surface Temperature (Celcius)": 1,
               "Air Temperature(Celcius)":1,"Relative Humidity":1,
               "Max Wind Speed":1,"_id":0} 
},
{
    $match:{$or:[{"Date":"2017-12-15"},{"Date":"2017-12-16"}]}
}
])

/*5*/
db.getCollection('Fire').aggregate([
{$lookup:{from:"Climate",
          localField:"Date",
          foreignField:"Date",
          as:"ClimateData"}
},
{
 $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$ClimateData", 0 ] }, "$$ROOT" ] } }
},
{ 
    $project: { ClimateData: 0,"_id":0}
 },
{ 
    $project: {"Datetime":1,"Air Temperature(Celcius)":1,
	"Surface Temperature (Celcius)": 1,"Confidence":1}
 },
{
    $match:{"Confidence":{$gt:80,$lt:100}}}

])