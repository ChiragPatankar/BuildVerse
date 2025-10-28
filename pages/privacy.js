import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  const email = 'chirag@buildverse.studio'
  const title = 'Privacy Policy | BuildVerse Studio'
  const description = 'Learn how BuildVerse Studio collects, uses, and protects your data. Privacy-first architecture, transparent practices, and your rights explained.'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PrivacyPolicy',
    name: title,
    url: 'https://buildverse.studio/privacy',
    publisher: {
      '@type': 'Organization',
      name: 'BuildVerse Studio',
      email,
      url: 'https://buildverse.studio',
      logo: 'https://buildverse.studio/logo.png',
    },
    inLanguage: 'en',
    isAccessibleForFree: true,
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://buildverse.studio/privacy" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://buildverse.studio/privacy" />
        <meta property="og:image" content="https://buildverse.studio/logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#0b0b0f] dark:via-black dark:to-[#0b0b0f]">
        <Navbar />

        <section className="pt-28 md:pt-32 lg:pt-36 pb-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Privacy Policy</h1>
            <p className="mt-3 text-slate-600 dark:text-gray-300">Last updated: {new Date().toLocaleDateString('en-US')}</p>

            <div className="mt-8 space-y-8 text-slate-700 dark:text-gray-300">
              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Overview</h2>
                <p className="mt-2">We take privacy seriously. This policy explains what data we collect, how we use it, and your rights.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Information We Collect</h2>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Contact information (name, email, phone) when you reach out</li>
                  <li>Project details you share for consultations or proposals</li>
                  <li>Usage data (analytics, cookies) to improve site performance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">How We Use Information</h2>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Respond to inquiries and provide proposals/services</li>
                  <li>Improve our products, services, and website experience</li>
                  <li>Maintain security, prevent fraud, and comply with law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Data Sharing</h2>
                <p className="mt-2">We do not sell your personal data. We may share data with trusted vendors under contract (e.g., hosting, analytics) strictly for service delivery.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Security</h2>
                <p className="mt-2">We implement reasonable technical and organizational measures to protect data, with a privacy-first architecture across our solutions.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Your Rights</h2>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Access, update, or delete your personal data</li>
                  <li>Opt-out of non-essential communications</li>
                  <li>Request export of your data, subject to verification</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Contact</h2>
                <p className="mt-2">Questions? Email us at <a className="text-primary-blue hover:underline" href={`mailto:${email}`}>{email}</a>.</p>
              </section>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}


