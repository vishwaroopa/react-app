import gql from "graphql-tag";

const SEARCH_QUERY = gql`
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
skillsDesired
Responsibilities
skillsRequired
education
primarySkillset
    }
  }
`;

export default SEARCH_QUERY;