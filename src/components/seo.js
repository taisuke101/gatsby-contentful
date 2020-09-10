import React from 'react'
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
    {
        site {
            siteMetadata {
                author
                lang
                siteTitle: title
                siteDesc: description
                siteUrl
                image
                twitterUsername
                locale
            }
        }
    }
` 

const SEO = ({
    title, 
    description, 
    pagePath, 
    pageImg, 
    blogImg,
    pageImgw, 
    pageImgh }) => {
    const {site} = useStaticQuery(query)
    const {
        siteTitle,
        siteDesc,
        siteUrl,
        twitterUsername,
        locale
    } = site.siteMetadata

    const url = pagePath ? `${siteUrl}${pagePath}` : `${siteUrl}`
    const imgUrl = pageImg ? `${siteUrl}${pageImg}` : blogImg || `${siteUrl}/thumb.jpg`
    const imgWidth = pageImgw || 1280
    const imgHeight = pageImgh || 640

    return (
        <Helmet htmlAttributes={{lang: 'ja'}} title={`${title} | ${siteTitle}`}>
            <meta property='og:site_name' content={siteTitle} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description || siteDesc} />
            <meta property='og:url' content={url} />
            <meta property='og:type' content='website' />
            <meta property='og:locale' content={locale} />
            <meta property='og:image' content={imgUrl} />
            <meta property='og:image:width' content={imgWidth} />
            <meta property='og:image:height' content={imgHeight} />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:creator' content={twitterUsername} />
        </Helmet>
    )
}

export default SEO
