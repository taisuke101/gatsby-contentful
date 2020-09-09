import React from 'react'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import useContentfulImage from '../utils/useContentfulImage'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';


export const query = graphql`
    {
        contentfulBlogPost {
            title
            publishDateJP: publishDate(formatString: "YYYY年MM月DD日")
            publishDate
            eyecatch {
                fluid(maxWidth: 1600) {
                    ...GatsbyContentfulFluid_withWebp
                }
                description
            }
            content {
                json
            }
        }
        contentfulCategory {
            category
            categorySlug
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

const BlogPost = ({data: {contentfulBlogPost, contentfulCategory}}) => {
    const {
        title,
        publishDate,
        publishDateJP,
        eyecatch,
        content
    } = contentfulBlogPost

    const {
        category,
        categorySlug
    } = contentfulCategory

    return (
        <Layout>
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
                        </div>
                        <ul>
                            <li className={categorySlug}>
                            {category}
                            </li>
                        </ul>
                    </aside>
                    <div className="postbody">
                        {documentToReactComponents(content.json, options)}
                    </div>
                    <ul className="postlink">
                        <li className="prev">
                            <a href="base-blogpost.html" rel="prev">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                <span>前の記事</span>
                            </a>
                        </li>
                        <li className="next">
                            <a href="base-blogpost.html" rel="next">
                                <span>次の記事</span>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </a>
                        </li>
                    </ul>
                </div>
            </article>
        </Layout>
    )
}

export default BlogPost
