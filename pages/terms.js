import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsOfService() {
  const email = 'chirag@buildverse.studio'
  const title = 'Terms of Service | BuildVerse'
  const description = 'Terms of Service for BuildVerse. Acceptance, services, IP, disclaimers, governing law, and contact.'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url: 'https://buildverse.studio/terms',
    publisher: { '@type': 'Organization', name: 'BuildVerse', email, url: 'https://buildverse.studio' },
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
            <p className="mt-3 text-slate-600 dark:text-gray-300">Last updated: February 2025</p>

            <div className="mt-8 space-y-8 text-slate-700 dark:text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
                <p className="mt-2">By accessing or using the BuildVerse website or our services, you agree to these Terms of Service. If you do not agree, do not use our site or services.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">2. Services</h2>
                <p className="mt-2">BuildVerse provides AI and software development services (e.g. AI agents, MVPs, CRMs, dashboards) as described on our website and in individual proposals or statements of work. Scope, timelines, and deliverables are agreed per engagement.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">3. Client Obligations</h2>
                <p className="mt-2">You agree to provide timely access to information, systems, and stakeholders needed for delivery; to use our work and any data lawfully; and to review and approve deliverables within reasonable timeframes. You are responsible for the accuracy of information you provide.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">4. Intellectual Property</h2>
                <p className="mt-2">Unless otherwise agreed in writing, upon full payment you receive the agreed rights to deliverables created for you. BuildVerse retains rights to its pre-existing IP, tools, frameworks, and methods. Pre-existing materials we use remain ours.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">5. Confidentiality</h2>
                <p className="mt-2">Each party will keep the other&apos;s confidential information secure and use it only for performing or receiving the services. This obligation survives after the engagement ends, except where disclosure is required by law.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">6. Warranties and Disclaimers</h2>
                <p className="mt-2">We will perform the services with reasonable skill and care. Except as expressly stated in a written agreement, our services are provided &quot;as is&quot;. We disclaim all implied warranties (including merchantability and fitness for a particular purpose) to the fullest extent permitted by law.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">7. Limitation of Liability</h2>
                <p className="mt-2">Our total liability for any claim arising from or related to these terms or the services is limited to the amount you paid us for the specific service giving rise to the claim. We are not liable for indirect, incidental, special, or consequential damages.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">8. Governing Law</h2>
                <p className="mt-2">These Terms are governed by the laws of India. Any dispute arising from or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Mumbai, India. If you are a consumer in the EEA or UK, you may also have rights under the laws of your country of residence.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">9. Contact</h2>
                <p className="mt-2">For questions about these Terms, or for data requests under our Privacy Policy, contact us at <a className="text-primary-blue hover:underline" href={`mailto:${email}`}>{email}</a>.</p>
              </section>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
