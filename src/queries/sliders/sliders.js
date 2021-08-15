import gql from "graphql-tag";

const SLIDERS_QUERY = gql`
  query Sliders {
    sliders {
id
      title
      subtitle
      description
url
      bimage {
        url
      }
      simage {
        url
      }
    }
  }
`;

export default SLIDERS_QUERY;
