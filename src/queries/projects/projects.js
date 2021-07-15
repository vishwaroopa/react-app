import gql from "graphql-tag";

const PROJECTS_QUERY = gql`
  query Projects {
    projects {
      title
      description
      url
      image {
        url
      }
    }
  }
`;

export default PROJECTS_QUERY;
