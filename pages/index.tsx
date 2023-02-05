import { blogkit } from "./_app";

export const getStaticProps = blogkit.getHomePageStaticProps;

export function Homee() {
  return <div>Welcome to Next.js!</div>
}

export default blogkit.config.theme.Home,Homee();
