import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories( sort:"sorting:asc") {
    slug
    name
url
sorting
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
