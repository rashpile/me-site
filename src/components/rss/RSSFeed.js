import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const RssPage = () => {

  const data = useStaticQuery(graphql`
  query RssQuery {
    
      allFeedRss {
        edges {
          node {
            title
            content
            link
          }
        }
      }
    
      }
`);
  const { edges } = data.allFeedRss;

  return (

        <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
            <h1>News</h1>
            <ul>
            {edges.map((data, index) => {
            return( 
                <li>
                    <Link to={data.node.link}>{data.node.title}</Link>
                </li>
                )
            })}

            </ul>
        </div>

  )}
export default RssPage