import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql`
  query Homepage {
    homepage {
id
      Aboutus {
        id
title
description
      }
seo {
shareImage {
url
}
}
info {
id
title
description
}
   }
  }
`;

export default HOMEPAGE_QUERY;
