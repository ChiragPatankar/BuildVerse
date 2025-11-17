import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsOfService() {
  const email = 'chirag@buildverse.studio'
  const title = 'Terms of Service | BuildVerse Studio'
  const description = 'Read the Terms of Service for BuildVerse Studio. Conditions, acceptable use, IP, disclaimers, and contact information.'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url: 'https://buildverse.studio/terms',
    publisher: { '@type': 'Organization', name: 'BuildVerse Studio', email },
    inLanguage: 'en',
    isAccessibleForFree: true,
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://buildverse.studio/terms" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://buildverse.studio/terms" />
        <meta property="og:image" content="https://buildverse.studio/logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#0b0b0f] dark:via-black dark:to-[#0b0b0f]">
        <Navbar />

        <section className="pt-28 md:pt-32 lg:pt-36 pb-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Terms of Service</h1>
            <p className="mt-3 text-slate-600 dark:text-gray-300">Last updated: {new Date().toLocaleDateString('en-US')}</p>

            <div className="mt-8 space-y-8 text-slate-700 dark:text-gray-300">
              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Acceptance of Terms</h2>
                <p className="mt-2">By accessing or using our services, you agree to these Terms. If you do not agree, do not use the services.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Services</h2>
                <p className="mt-2">We provide AI consulting, development, and integration services as scoped per proposal/SOW. Timelines and deliverables are defined project-by-project.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Client Obligations</h2>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Provide timely access to information, systems, and stakeholders</li>
                  <li>Ensure lawful use of provided data and systems</li>
                  <li>Review and approve deliverables within reasonable timeframes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Intellectual Property</h2>
                <p className="mt-2">Unless agreed otherwise in writing, client owns deliverables upon full payment. We retain rights to pre-existing IP, frameworks, and tooling.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Confidentiality</h2>
                <p className="mt-2">Both parties agree to keep confidential information secure and use it only for the purpose of service delivery.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Warranties & Disclaimers</h2>
                <p className="mt-2">Services are provided “as is”. We disclaim all implied warranties to the fullest extent permitted by law.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Limitation of Liability</h2>
                <p className="mt-2">Our total liability is limited to the amount paid by client for the specific service giving rise to the claim.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Contact</h2>
                <p className="mt-2">For questions regarding these Terms, email <a className="text-primary-blue hover:underline" href={`mailto:${email}`}>{email}</a>.</p>
              </section>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}



