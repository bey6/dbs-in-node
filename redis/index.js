const redis = require('redis')
const client = redis.createClient()

client.on('error', err => {
    console.error(err)
})

client.set('obj', JSON.stringify({
    name: 'alice',
    age: 1,
    skill: {
        lv1: ['water shot', 'water area', 'water line'],
        lv2: ['fire ball', 'fire wall', 'fire hamer']
    }
}))

client.set('fk', 'hello redis', (err, res) => console.log(res))
client.get('fk', (err, res) => console.log(res))
client.expire('fk', 10)