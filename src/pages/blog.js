import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql, useStaticQuery } from "gatsby"

const Blog = () => {
    return (
      <Layout>
        <Head page="Blog" />
        <h1>Blog</h1>
        <p>Welcome To My Blog!</p>
      </Layout>
    )
  }
  
  export default Blog