import { gql } from "@apollo/client"

const DESTINATIONS = `
query {
  allDestination {
    nodes {
      name
      slug
    }
  }
}`

const GET_ALL_DESTINATION = gql`
query GetAllDestination(
  $offset: Int!
  $size: Int!
  $destinationSlug: [String!]
) {
  allDestinations(
    where: {
      offsetPagination: { offset: $offset, size: $size }
      orderby: { field: DATE, order: DESC }
      taxQuery: {
        taxArray: [
          { taxonomy: DESTINATION, operator: IN, terms: $destinationSlug, field: SLUG }
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

const GET_DESTINATION_DETAIL = `
query GetDestinationDetail($slug: ID!) {
  destinations(id: $slug, idType: URI) {
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
const GET_META_DESTINATION = `
{
  page(id: "cG9zdDo0Mjg=") {
    destination {
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

export {DESTINATIONS,GET_ALL_DESTINATION,GET_DESTINATION_DETAIL,GET_META_DESTINATION}