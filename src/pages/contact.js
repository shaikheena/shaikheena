import React from 'react'
import Layout from '../components/layout'

var contact = {
    name: "contact",
    email: ["heena@heena.me", "shaikheena579@gmail.com"],
    phone: 9490955950
}

export default () => (
    <Layout>
        <div class="container  text-center">
            <h1 className="display-4 text-warning">{contact.name}</h1>
            <p className="pl-3 text-primary">{contact.email[0]}</p>
            <p className="pl-3"> <strong>Phone</strong>: <span >{contact.phone}</span></p>
            <p className="pl-3"> <strong>Email</strong>:<span>{contact.email[1]}}</span></p>
        </div>
    </Layout>

)



