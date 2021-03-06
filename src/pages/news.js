import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RSS from "../components/rss/RSSFeed"

export default () => (
  <Layout>
    <SEO title="News" />
    <RSS/>
  </Layout>
)