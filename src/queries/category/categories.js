import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories( sort:"id:asc") {
    slug
    name
url
articles {
        slug
        title
        content
        image {
          url
        }
        category {
          slug
          name
        }
      }

  }
}

`;

export default CATEGORIES_QUERY;
