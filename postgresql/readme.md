# postgresql in node

- PostgreSQL 是一个免费的对象-关系数据库服务器(ORDBMS)，在灵活的 BSD 许可证下发行。
- PostgreSQL 开发者把它念作 post-gress-Q-L。
- PostgreSQL 的 Slogan 是 "世界上最先进的开源关系型数据库"。

## install pg

```bash
# pull down
docker pull postgres
# run
docker run -dit --name postgres -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres
```

# test

```bash
docker exec -it postgres psql -U postgres -d postgres
```

## lib

i use [node-postgres](https://www.npmjs.com/package/pg) to connect to the PostgreSQL。

```bash
npm i pg
```

## document

[pg document](https://node-postgres.com/features/connecting)

简单的用法

```js
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
```
