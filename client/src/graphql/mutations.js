/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserGoogleBooks = /* GraphQL */ `
  mutation CreateUserGoogleBooks(
    $input: CreateUserGoogleBooksInput!
    $condition: ModelUserGoogleBooksConditionInput
  ) {
    createUserGoogleBooks(input: $input, condition: $condition) {
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
export const updateUserGoogleBooks = /* GraphQL */ `
  mutation UpdateUserGoogleBooks(
    $input: UpdateUserGoogleBooksInput!
    $condition: ModelUserGoogleBooksConditionInput
  ) {
    updateUserGoogleBooks(input: $input, condition: $condition) {
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
export const deleteUserGoogleBooks = /* GraphQL */ `
  mutation DeleteUserGoogleBooks(
    $input: DeleteUserGoogleBooksInput!
    $condition: ModelUserGoogleBooksConditionInput
  ) {
    deleteUserGoogleBooks(input: $input, condition: $condition) {
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
