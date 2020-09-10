import React from 'react'
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import useContentfulImage from '../utils/useContentfulImage'
import SEO from '../components/seo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';


export const query = graphql`
    query ($id: String!){
        contentfulBlogPost (id: {eq: $id}){
            title
            publishDateJP: publishDate(formatString: "YYYY年MM月DD日")
            publishDate
            category {
                category
                categorySlug
            }
            eyecatch {
                fluid(maxWidth: 1600) {
                    ...GatsbyContentfulFluid_withWebp
                }
                description
                file {
                    details {
                        image {
                            width
                            height
                        }
                    }
                url
                }
            }
            content {
                json
            }
        }
    }
`

const options = {
    renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => (
            <h2>
                <FontAwesomeIcon icon={faCheckSquare} />
                {children}
            </h2>
        ),
        [BLOCKS.EMBEDDED_ASSET]: node => (
            <Img
                fluid={useContentfulImage(node.data.target.fields.file['ja-JP'].url)}
                alt={
                    node.data.target.fields.description
                    ? node.data.target.fields.description['ja-JP']
                    : node.data.target.fields.title['ja-JP']
                }
            />
        )
    },
    renderText: text => {
        return text.split('\n').reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment]
        }, [])
    }
}

const BlogPost = ({data: {contentfulBlogPost}, pageContext, location}) => {
    const {
        title,
        publishDate,
        publishDateJP,
        category,
        eyecatch,
        content,
    } = contentfulBlogPost

    return (
        <Layout>
            <SEO 
                title={title}
                description={`${documentToPlainTextString(
                    content.json).slice(0, 70)}...`}
                pagePath={location.pathname}
                blogImg={`https:${eyecatch.file.url}`}
                pageImgw={eyecatch.file.details.image.width}
                pageImgh={eyecatch.file.details.image.height}
            />
            <div className="eyecatch">
                <figure>
                    <Img fluid={eyecatch.fluid} alt={eyecatch.description} />
                </figure>
            </div>
            <article className="content">
                <div className="container">
                    <h1 className="bar">{ title }</h1>
                    <aside className="info">
                        <time dateTime={ publishDate }>
                        <FontAwesomeIcon icon={faClock} />
                        { publishDateJP }
                        </time>
                        <div className="cat">
                            <FontAwesomeIcon icon={faFolderOpen} />
                            <ul>
                            {category.map(cat => (
                                <li className={cat.categorySlug} key={cat.id}>
                                <Link to={`/cat/${cat.categorySlug}/`}>{cat.category}</Link>
                                </li>
                            ))}
                            </ul>
                        </div>
                        
                    </aside>
                    <div className="postbody">
                        {documentToReactComponents(content.json, options)}
                    </div>
                    <ul className="postlink">
                    { pageContext.previous &&  (
                        <li className="prev">
                            <Link to={`/blog/post/${pageContext.previous.slug}/`} rel="prev">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                <span>{ pageContext.previous.title }</span>
                            </Link>
                        </li>
                    )}
                    { pageContext.next && (  
                        <li className="next">
                            <Link to={`/blog/post/${pageContext.next.slug}`} rel="next">
                                <span>{ pageContext.next.title }</span>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Link>
                        </li>
                    )}
                    </ul>
                </div>
            </article>
        </Layout>
    )
}

export default BlogPost
