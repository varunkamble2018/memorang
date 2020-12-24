/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserGoogleBooks = /* GraphQL */ `
  query GetUserGoogleBooks($id: ID!) {
    getUserGoogleBooks(id: $id) {
      id
      userId
      googleBookId
      thumbnail
      title
      pageCount
      language
      authors
      publisher
      description
      previewLink
      infoLink
      createdAt
      updatedAt
    }
  }
`;
export const listUserGoogleBookss = /* GraphQL */ `
  query ListUserGoogleBookss(
    $filter: ModelUserGoogleBooksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGoogleBookss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        googleBookId
        thumbnail
        title
        pageCount
        language
        authors
        publisher
        description
        previewLink
        infoLink
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
