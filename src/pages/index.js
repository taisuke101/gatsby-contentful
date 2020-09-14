import React from 'react';


import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero/hero';
import Food from '../components/food/food';
import RecentPosts from '../components/recent-posts/recent-posts';
import Photo from '../components/photo/photo';




const Index = () => {
  return (
      <Layout>
        <SEO title='ホームページ' />
        <Hero />
        <Food />
        <Photo />
      </Layout>
  )
}

export default Index
