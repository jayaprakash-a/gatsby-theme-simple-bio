import {useStaticQuery, graphql} from "gatsby";

export const useSiteMetadata = () => {
  {
    /* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */
  }
  const siteMeta = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            appName
            title
            author
            siteUrl
            description
          }
        }
      }
    `,
  );
  return siteMeta.site.siteMetadata;
};
