const { Client } = require('pg')
const uuid = require('uuid')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432,
})
client.connect()

let obj = Object.create({
    name: 'tom',
    gender: 'man',
    age: 37,
})

let sql = `INSERT INTO bei.table_patient
(id, mrid, name, in_date, out_date, main_diagnosis_code, main_diagnosis_name, total_fee, ext_json)
VALUES('${uuid.v4()}', 'W223032', '刘思思', '2021-01-27', '2021-01-28', 'J00.X02', '病毒性感冒', 121.68, '${JSON.stringify(
    obj
)}')`

client
    .query(sql)
    .then((res) => console.log(JSON.stringify(res)))
    .catch((err) => console.error(err))