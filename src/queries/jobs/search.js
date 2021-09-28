import gql from "graphql-tag";

const SEARCH_QUERY = gql`
  query Job($slug: String!){
    jobs(where: {slug: $slug},sort:"id:desc") {
      id
      title
      location
slug
jobReference
company
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
