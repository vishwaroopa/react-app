import gql from "graphql-tag";

const JOB_QUERY = gql`
  query Job($slug: String!){
    jobs(where: {slug: $slug}) {
      id
      title
      location
slug
    }
  }
`;

export default JOB_QUERY;
