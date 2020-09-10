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