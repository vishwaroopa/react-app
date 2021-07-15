import gql from "graphql-tag";

const CLIENTS_QUERY = gql`
  query Clients {
    clients {
      title
      image {
        url
      }
    }
  }
`;

export default CLIENTS_QUERY;
