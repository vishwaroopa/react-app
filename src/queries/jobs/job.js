import gql from "graphql-tag";

const JOB_QUERY = gql`
  query Job($slug: String!){
    jobs(where: {slug: $slug}) {
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

export default JOB_QUERY;
