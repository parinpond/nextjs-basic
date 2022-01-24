import Navbar from '../src/Navbar'
import Attraction from '../src/Attraction'
import Container from '@material-ui/core/Container';
import Head from 'next/head'

function AttractionPage({ data }) {
  return <>
    <Head>
      <meta property="og:title" content={data.attraction.name} />
      <meta property="og:description" content={data.attraction.detail} />
      <meta property="og:image" content={data.attraction.coverimage} />
    </Head>
    <Navbar />
    <Container maxWidth="lg">
      <div style={{marginTop: '2em'}}>
        <Attraction attraction={data.attraction} />
      </div>
    </Container >
  </>
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://www.mecallapi.com/api/attractions')
  const data = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = data.map((attraction) => ({
    params: { id: String(attraction.id) },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  // Call an external API endpoint to get an attraction by id
  const res = await fetch(`https://www.mecallapi.com/api/attractions/${params.id}`)
  const data = await res.json()

  // By returning { props: { data } }, the AttractionPage component
  // will receive `data` as a prop at build time
  return { props: { data } }
}

export default AttractionPage