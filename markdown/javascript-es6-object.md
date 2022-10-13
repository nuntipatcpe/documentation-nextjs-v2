# Object

<code language="javascript">
const customer = {
    id : "123",
    email : "nuntipatcpe@gmail.com",
    userName : "boom"
}
console.log(customer);
</code>

- same variable name
    <code language="javascript">
    const email = "nuntipatcpe@gmail.com";
    const id = "123";
    const userName = "boom";
    const customer = {
        id,
        email,
        userName,
    }
    console.log(customer);</code>

- can set method
    <code language="javascript">
    const email = "nuntipatcpe@gmail.com";
    const customer = {
        id : "123",
        showEmail(name){
            console.log(\`Email ${name} = ${email}\`)
        },
        userName : "boom"
    }
    customer.showEmail("boom");
    </code>
