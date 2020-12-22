import Layout from "../components/layout";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import slug from 'slug';
import unfetch from "isomorphic-unfetch";

function HomePage({characters}) {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
      <h1 className="title">Welcome to BT project</h1>

      <ul>
        {characters.results.map(character =>(
          <li key={character.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
        <style jsx>{``}
        </style>
    </Layout>
  );
}
export async function getStaticProps(context) {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const characters = await data.json();
    return {
        props: {
            characters
        },
    }
}

export default HomePage;
