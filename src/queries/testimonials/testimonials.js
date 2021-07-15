import gql from "graphql-tag";

const TESTIMONIALS_QUERY = gql`
  query Testimonials {
    testimonials {
      title
      description
      designation
      image {
        url
      }
    }
  }
`;

export default TESTIMONIALS_QUERY;
