import gql from "graphql-tag";

const JOBS_QUERY = gql`
  query Jobs {
    jobs {
      title
      location
      experience
slug
id
jobReference
company
    }
  }
`;

export default JOBS_QUERY;
