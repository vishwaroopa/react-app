import gql from "graphql-tag";

const JOB_QUERY = gql`
  query Job($slug: String!){
    jobs(where: {slug: $slug}) {
      id
      title
      location
slug
jobReference
jobtype
experience
jobdescription
requiredskills
goodtohaveskills
    }
  }
`;

export default JOB_QUERY;
