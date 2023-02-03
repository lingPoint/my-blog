import type { AppProps } from "next/app";
import { Blogkit } from "blogkit";
import config from "../blogkit.config";

import "blogkit-theme-minimal/style.css";

export const blogkit = new Blogkit(config);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
