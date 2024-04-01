const client = require("./client")

async function string() {
    //* setting value message:7 is Key and Message from NodeJs is value
    // await client.set("message:7","Message from NodeJs")

    //* getting value of  message:7 Key
    const result = await client.get("message:7")

    //* expiring key after 10 seconds
    // await client.expire("message:7",10)

    console.log(result)
    return;
}

async function list() {
    //* pushing from left side
    await client.lpush("list:1", 1, 2, 3, 4, 5)

    //* pushing from right side
    await client.rpush("list:2", 12, 2, 4, 6)

    //* Removing 1 element from right side
    await client.rpop("list:2")

    //* Removing 1 element from left side
    await client.lpop("list:1")

    //* Length of list:1
    const len = await client.llen("list:1")
    console.log(len)

    //* Move elements from list:1 to list:2
    // One element from list:1 LEFT Side will move to list:2 RIGHT Side
    await client.lmove("list:1", "list:2", "LEFT", "RIGHT")

    //* Reduces the size of list from a range (start,stop)
    await client.ltrim("list:1", 1, 3)

    //* Get all elements from list:1 from  0 till end
    await client.lrange("list:1",0,-1)

    //* Get all elements from list:1 from  0 till 2
    await client.lrange("list:1",0,2)
}

string();
list();