import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={['gatsby', 'application', 'react']} />
    <div>
      <Header />
      <div className='Hero'>
        <div className='HeroGroup'>
          <h1>Learn to <br />design and code React apps</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to='/video'>Watch the video</Link><br />
          <Link to='/page-2/'>Go to page 2</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
