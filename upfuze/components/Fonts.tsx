import Head from 'next/head'

// use fonts like this:
// font-family: 'Jost', sans-serif;
// font-family: 'Poppins', sans-serif;

const FontImports = () => {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='crossorigin' />
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&family=Poppins&display=swap" rel="stylesheet"/>
    </Head>
  )
}

export default FontImports
