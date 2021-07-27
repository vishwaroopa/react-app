import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
    slug
    name
sort{
    field:id,
    order:ASC
}
articles {
        slug
        title
        content
        image {
          url
        }
        category {
          slug
          name
        }
      }

  }
}

`;

export default CATEGORIES_QUERY;
