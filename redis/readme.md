# redis in node

redis 中，带有生存时间的 key 被称为 `volatile`。

**插入一个 k/v**

client.set('fk', 'hello redis', (err, res) => console.log(res))

**获取一个 k/v**

client.get('fk', (err, res) => console.log(res))

**设置超时时间**

client.expire('fk', 10) // 10s 后自动清理 fk
