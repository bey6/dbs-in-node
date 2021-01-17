# redis in node

redis(**RE**mote **DI**ctionary **S**erver)远程字典服务器的缩写，它以字典结构存储数据，并允许其他应用通过 TCP 协议读写字典中的内容。

redis 是一个开元的高性能键值对内存数据库。

redis 的存储方式和程序原本的结构很像，而不是像像传统的关系型数据库的存储表结构那样一行一列类似的存储数据。

redis 数据库中的所有数据都存储在内存中，但是也会异步的将数据写入到硬盘里做持久化。

redis 虽然是一个数据库，但是经常被用来作为缓存、队列。

redis 可以为每个键设置生存时间，到期后自动删除。

redis 可以闲置数据最大占用内存，超过后自动销毁不需要的键。

redis 中，带有生存时间的 key 被称为 `volatile`。

**插入一个 k/v**

client.set('fk', 'hello redis', (err, res) => console.log(res))

**获取一个 k/v**

client.get('fk', (err, res) => console.log(res))

**设置超时时间**

client.expire('fk', 10) // 10s 后自动清理 fk
