import React from 'react'
import Layout from 'components/layout'

const HomePage = (props) => {
  return (
    <Layout location={props.location}>
      <h2 className="mb-0 display-4 py-5 text-center">Hello, my name is Heena. <br/> I am a Front End Developer, living in Hyderabad, INDIA </h2>
    </Layout>
  )
}

export default HomePage
