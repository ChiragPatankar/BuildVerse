import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

function Error({ statusCode }) {
  return (
    <>
      <Head>
        <title>Error {statusCode || 'Unknown'} | BuildVerse</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-black">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4">
            {statusCode || 'Error'}
          </h1>
          <p className="text-slate-600 dark:text-gray-400 mb-8">
            {statusCode === 404
              ? 'This page could not be found.'
              : 'An error occurred on the server.'}
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary-blue text-white rounded-lg hover:bg-primary-blue/90 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error

