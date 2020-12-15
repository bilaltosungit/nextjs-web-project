import Layout from "../components/layout";
import Head from "next/head";
import React from "react";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
      <h1 className="title">Welcome to BT project</h1>
        <style jsx>{``}
        </style>
    </Layout>
  );
}

export default HomePage;
