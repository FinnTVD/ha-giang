import { gql } from "@apollo/client"

const CATEGORIES = `
query {
  categories {
    nodes {
      name
      slug
    }
  }
}`

const GET_ALL_BLOG = gql`
query GetAllPost(
  $offset: Int!
  $size: Int!
  $categorySlug: [String!]
) {
  posts(
    where: {
      offsetPagination: { offset: $offset, size: $size }
      orderby: { field: DATE, order: DESC }
      taxQuery: {
        taxArray: [
          { taxonomy: CATEGORY, operator: IN, terms: $categorySlug, field: SLUG }
        ]
      }
    }
  ) {
    nodes {
        id
        excerpt
        title
        slug
        date
        featuredImage {
          node {
            altText
            sourceUrl
          }
      }
    }
    pageInfo {
      offsetPagination {
        total
      }
    }
  }
}`

const GET_BLOG_DETAIL = `
query GetBlogDetail($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    title
    date
    content
    link
    featuredImage {
      node {
        altText
        sourceUrl
      }
    }
  }
}`

const GET_META_BLOG = `
{
  page(id: "cG9zdDo0MjQ=") {
    blog {
      meta {
        title
        description
      }
    }
    featuredImage {
      node {
        sourceUrl
        altText
        title
      }
    }
  }
}
`

export {CATEGORIES,GET_ALL_BLOG,GET_BLOG_DETAIL,GET_META_BLOG}