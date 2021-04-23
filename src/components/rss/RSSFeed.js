import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import React, { useState, useEffect } from "react"
// import { parse } from 'fast-xml-parser';

const RssPage = () => {

  const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.ycombinator.com%2Frss`;
  const [newsTitle, setNewsTitle] = useState(0)
  const [newsItems, setNewsItems] = useState(1)
  useEffect(() => {
    fetch(rssUrl)
    // .then( textResponse => parse(textResponse) )
    .then(response =>  response.json() ) 
    .then( resultData => {
      setNewsTitle(resultData.feed.title);
      setNewsItems(resultData.items)
    })
    .catch((error) => { console.log(error);})

  }, [])

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
            
            <h1>{newsTitle}</h1>
            <ul>
            {newsItems.map && newsItems.map((data, index) => {
            return (
              <li>
                <Link to={data.link}>{data.title}</Link>
              </li>
              )
            })}

            {/* {edges.map((data, index) => {
            return( 
                <li>
                    <Link to={data.node.link}>{data.node.title}</Link>
                </li>
                )
            })} */}

            </ul>

        </div>

  )}
export default RssPage