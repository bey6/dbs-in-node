const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://192.168.1.104:27017'

MongoClient.connect(url, function (err, connection) {
    if (err) throw err
    const pkg = connection.db('bei-mongo').collection('packages')
    // pkg.insertOne({ name: 'new pkg', age: 1, gender: '2' })
    pkg.findOne({}, (err, res) => {
        if (err) throw err
        console.log(res)
        connection.close()
    })
})