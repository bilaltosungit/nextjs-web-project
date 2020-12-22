import Layout from "../../components/layout";
import Head from "next/head";
import React from "react";
import slug from 'slug'
import unfetch from "isomorphic-unfetch";

function CharacterDetail({character}) {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
      <h1>
        {character.name}
      </h1>
      <figure>
        <img src={character.image} alt={character.name}/>
      </figure>
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await data.json();
  return {
    paths: characters.results.map(character => {
      return { params: { slug : `${slug(character.name)}-${character.id}` } }
    }),
    fallback: false
  }
}
export async function getStaticProps({ params }) {
   const id = params.slug.split("-").slice(-1)[0]
   const data = await unfetch('https://rickandmortyapi.com/api/character/' + id);
   const character = await data.json();
  return {
    props: {
      character
    },
  }
}

export default CharacterDetail;
