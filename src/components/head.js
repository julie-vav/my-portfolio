import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStateQuery, useStaticQuery } from "gatsby"

const Head = ({ page }) => {
    const { site: {siteMetadata: { title, description }}} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    return (
        <Helmet>
            <title>{`${page} | ${title}`}</title>
        </Helmet>
    )
}
   

export default Head