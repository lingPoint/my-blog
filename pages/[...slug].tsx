import { blogkit } from "./_app";

export default blogkit.config.theme.Post;

export const getStaticProps = blogkit.getPostPageStaticProps;
export const getStaticPaths = blogkit.getStaticPaths;
