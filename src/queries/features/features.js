import gql from "graphql-tag";

const FEATURES_QUERY = gql`
  query Features {
    features {
      Title
      Description
url
icons
      icon {
        url
      }
    }
  }
`;

export default FEATURES_QUERY;
