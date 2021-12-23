const {MongoClient, ObjectId } = require('mongodb')

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-app"

const id = new ObjectId()
console.log(id)
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {
  useNewUrlParser: true
}, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database");
  }

  // console.log("Connection Success");
  const db = client.db(databaseName)
  db.collection('users').insertOne({
    name: "Rohan",
    age: 19,
  })

  db.collection('users').insertMany([{
    name: "Rohit",
    age: 14,
  }, {
    name: "Rohan",
    age: 14,
  }], (error, result) => {
    if (error){
      return console.log("Unable to add user");
    }
    console.log(result)
  })

  db.collection('users').findOne({ _id: ObjectId("61c356e41e2e5bc5d028dfe4") }, (error, user) => {
     console.log(user)
    })

  db.collection('users').find({ age: 14 }).toArray((error, users) => {
      console.log(users)
  })

  db.collection('users').find({ age: 14 }).count((error, users) => {
    console.log(users)
  })

  const updatePromise = db.collection('users').updateOne({
    _id: ObjectId('61c356e41e2e5bc5d028dfe4')
  }, {
    $inc:{
      age: 1,
    }
  })

  updatePromise.then((result) => {
    console.log(result)
  }).then((error) => {
    console.log(error)
  })


  db.collection('users').deleteMany({
    age: 14
  }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })
}
)
