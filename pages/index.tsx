import { blogkit } from "./_app";

export default blogkit.config.theme.Home;

export const getStaticProps = blogkit.getHomePageStaticProps;

function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage;
