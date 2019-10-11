import { gql } from 'apollo-boost';
import client from './apollo';

const searchUser = async search => {
  return client.query({
    query: gql`
      {
        search(query: ${search}, type: USER, last: 10) {
          edges {
            node {
              ... on User {
                name
                avatarUrl
                bio
                login
                following {
                  totalCount
                }
                followers {
                  totalCount
                }
                starredRepositories {
                  totalCount
                }
                repositories(first: 100) {
                  nodes {
                    name
                    description
                    url
                    pushedAt
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
};
export default searchUser;
