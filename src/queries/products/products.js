import gql from "graphql-tag";

const PRODUCTS_QUERY = gql`
  query Products {
    products {
      title
      description
      url
icons
      image {
        url
      }
    }
  }
`;

export default PRODUCTS_QUERY;
