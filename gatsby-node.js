const path = require('path');

exports.createPages = async({ graphql, actions, reporter }) => {
    const { createPage } = actions
    
    const blogResult = await graphql(`
        query {
            allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
                edges {
                    node {
                        id
                        slug
                    }
                    next { 
                        title
                        slug
                    }
                    previous {
                        title
                        slug
                    }
                }
            }
            allContentfulCategory {
                edges {
                    node {
                        category
                        categorySlug
                        id
                        blogpost {
                            title
                        }
                    }
                }
            }
        }
    `)

    if(blogResult.errors) {
        reporter.panicOnBuild('GraphQlのクエリでエラーが発生しました')
        return 
    }

    blogResult.data.allContentfulBlogPost.edges.forEach(({node, next, previous}) => {
        createPage({
            path: `/blog/post/${node.slug}/`,
            component: path.resolve(`./src/templates/blogpost-template.js`),
            context: {
                id: node.id,
                next,
                previous,
            }
        })
    })

    blogResult.data.allContentfulCategory.edges.forEach(({node}) => {
        const catPostsPerPage = 6
        const catPosts = node.blogpost.length
        const catPages = Math.ceil(catPosts / catPostsPerPage)
        Array.from({ length: catPages}).forEach((_, i) => {
            createPage({
                path: 
                    i === 0
                    ? `/cat/${node.categorySlug}/`
                    : `/cat/${node.categorySlug}/${i + 1}`,
                component: path.resolve(`./src/templates/category-template.js`),
                context: {
                    catid: node.id,
                    catname: node.category,
                    catslug: node.categorySlug,
                    skip: catPostsPerPage * 1,
                    limit: catPostsPerPage,
                    currentPage: i + 1,
                    isFirst: i + 1 === 1,
                    isLast: i + 1 === catPages
                }
            })
        })
    })

    const blogPostsPerPage = 6 // 1ページに表示する記事の数
    const blogPosts = blogResult.data.allContentfulBlogPost.edges.length // 記事の総数
    const blogPages = Math.ceil(blogPosts / blogPostsPerPage) // 記事一覧ページの総数

    Array.from({ length: blogPages}).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
            component: path.resolve('./src/templates/blog-template.js'),
            context: {
                skip: blogPostsPerPage * i,
                limit: blogPostsPerPage,
                currentPage: i + 1, // 現在のページ
                isFirst: i + 1 === 1, // 最初のページ
                isLast: i + 1 === blogPages // 最後のページ
                // ↑javascriptでは数字は０から始まる！！
            }
        })
    })
}