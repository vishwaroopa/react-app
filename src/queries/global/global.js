import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql`
  query Global {
    global {

defaultSeo {
shareImage {
url
}
}
Footer {
address
number
number1
duns
email
copyright
content
}
    }
  }
`;

export default HOMEPAGE_QUERY;
