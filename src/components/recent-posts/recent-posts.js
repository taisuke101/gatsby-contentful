import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Img } from 'gatsby-image';

import { Container, Bar, Posts, Post } from './recent-posts.styles';



const RecentPosts = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost(
        sort: {fields: publishDate, order: DESC}, 
        skip: 0, 
        limit: 4
        ) {
            edges {
                node {
                    title
                    id
                    slug
                    eyecatch {
                        fluid(maxWidth: 573) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                }
            }
        }
    }
    `)

    console.log(data);

    return (
        <Container>
            <Bar>RECENT POSTS</Bar>
            <Posts>
                {data.allContentfulBlogPost.edges.map(({ node }) => (
                    <div key={node.id}>
                        <Link to={`/blog/post/${node.slug}`}>
                            <Post>
                                <figure>
                                </figure>
                                <h3>{node.title}</h3>
                            </Post>
                        </Link>
                    </div>

                ))}
            </Posts>
        </Container>
    )
}

export default RecentPosts
