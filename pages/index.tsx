//import Image from 'next/image'
//import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import requests from '@/utils/requests'
import { Movie } from '@/typing'
import Head from 'next/head'
import Rows from '@/components/Rows'
import useAuth from '@/hooks/useAuth'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useState } from 'react'
import { modalState } from '@/atoms/modalAtom'
import Modal from '@/components/Modal'
//import { NextPage } from 'next'

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}
  const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {

  const { loading } = useAuth()
  const showModal = useRecoilValue(modalState)
  // const [showModals, setShowModals] = useState(false)

  if (loading) return null
  console.log(netflixOriginals)
  
  return ( 
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title> Home-Netflix </title>
      </Head>
      
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Rows title="Trending Now" movies={trendingNow} />
          <Rows title="Top Rated" movies={topRated} />
          <Rows title="Action Thrillers" movies={actionMovies} />
          <Rows title="Comedies" movies={comedyMovies} />
          <Rows title="Scary Movies" movies={horrorMovies} />
          <Rows title="Romance Movies" movies={romanceMovies} />
          <Rows title="Documentaries" movies={documentaries} />    
        </section>
      </main>
      {showModal && <Modal />}
    </div>
        
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }
}
