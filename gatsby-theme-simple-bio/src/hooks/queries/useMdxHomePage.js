import {useStaticQuery, graphql} from "gatsby";

// Hook for retrieving content for DescriptionBio
export const useMdxHomePage = () => {
  {
    /* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */
  }
  const homePage = useStaticQuery(
    graphql`
      query HomePage {
        mdx(frontmatter: { type: { eq: "home-page" } }) {
          frontmatter {
            title
            author
            summary
          }
          body
        }
      }
    `,
  );
  return homePage.mdx;
};
