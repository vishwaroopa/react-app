import gql from "graphql-tag";

const JOBS_QUERY = gql`
  query Jobs {
    jobs(sort:"id:desc") {
      title
      location
      experience
slug

jobReference
company
id
    }
  }
`;

export default JOBS_QUERY;
