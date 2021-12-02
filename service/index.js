import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            title
            slug
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            author {
              id
              bio
              name
              photo {
                url
              }
            }
            id
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.postsConnection.edges
}
