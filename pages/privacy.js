import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  const email = 'chirag@buildverse.studio'
  const title = 'Privacy Policy | BuildVerse'
  const description = 'How BuildVerse collects, uses, and protects your data. GDPR information, cookie usage, and how to submit data requests.'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PrivacyPolicy',
    name: title,
    url: 'https://buildverse.studio/privacy',
    publisher: {
      '@type': 'Organization',
      name: 'BuildVerse',
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
            <p className="mt-3 text-slate-600 dark:text-gray-300">Last updated: February 2025</p>

            <div className="mt-8 space-y-8 text-slate-700 dark:text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">1. Data Collection</h2>
                <p className="mt-2">BuildVerse (&quot;we&quot;, &quot;us&quot;) collects information you provide when you contact us, request a proposal, or use our services. This may include your name, email address, phone number, company name, and any project details or messages you send. We collect technical data such as IP address, browser type, and pages visited when you use our website, for security and analytics. We do not collect more data than is necessary for the purposes described in this policy.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">2. How We Use Your Data</h2>
                <p className="mt-2">We use the information we collect to respond to inquiries, deliver services, send relevant updates (where you have agreed), improve our website and services, maintain security, and comply with applicable law. We do not sell your personal data to third parties.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">3. Cookie Usage</h2>
                <p className="mt-2">Our website uses cookies and similar technologies. Essential cookies are required for the site to function (e.g. security, load balancing). We may use analytics cookies to understand how visitors use the site (e.g. page views, traffic sources) so we can improve it. You can control non-essential cookies via your browser settings. Blocking certain cookies may affect site functionality.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">4. GDPR Compliance</h2>
                <p className="mt-2">If you are in the European Economic Area (EEA) or UK, we process your personal data in line with the General Data Protection Regulation (GDPR). Our legal bases include performance of a contract, consent where requested, and our legitimate interests (e.g. improving services, security). You have the right to access, rectify, erase, restrict processing, object, and data portability where applicable. You may withdraw consent at any time. You have the right to lodge a complaint with a supervisory authority in your country.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">5. Data Sharing and Retention</h2>
                <p className="mt-2">We may share data with service providers (e.g. hosting, email, analytics) under strict agreements for service delivery only. We retain your data only as long as needed for the purposes above or as required by law, then we delete or anonymise it.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">6. Data Requests and Contact</h2>
                <p className="mt-2">For access, correction, deletion, or other data-related requests (including under GDPR or CCPA), contact us at <a className="text-primary-blue hover:underline" href={`mailto:${email}`}>{email}</a>. We will respond within the timeframes required by applicable law (e.g. 30 days for many GDPR/CCPA requests).</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">7. Security</h2>
                <p className="mt-2">We use appropriate technical and organisational measures to protect your data against unauthorised access, loss, or misuse. No method of transmission over the internet is completely secure; we strive to follow industry best practices.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">8. Changes</h2>
                <p className="mt-2">We may update this policy from time to time. The &quot;Last updated&quot; date at the top will change. Continued use of our site or services after changes constitutes acceptance of the updated policy.</p>
              </section>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
