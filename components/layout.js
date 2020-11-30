import Navigation from "./navigation";
import Head from "next/head";

// Layout is master page
function Layout({ children }) {
  return (
    <div>
        <Head>
            <title>BT | website </title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <Navigation />
      <main>{children}</main>
      <footer>Designed by BT</footer>
    </div>
  );
}

export default Layout;
