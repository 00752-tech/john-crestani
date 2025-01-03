import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms and Conditions | JohnCrestani.me',
  description: 'Terms and Conditions for JohnCrestani.me - Understanding our service agreement and your rights.',
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="space-y-6 text-gray-300">
          <p>Last updated: January 1, 2025</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing our website at JohnCrestani.me, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, JohnCrestani.me and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Publishing any Website material in any other media</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material</li>
              <li>Publicly performing and/or showing any Website material</li>
              <li>Using this Website in any way that is or may be damaging to this Website</li>
              <li>Using this Website contrary to applicable laws and regulations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Purchase Terms</h2>
            <p>
              By purchasing JohnCrestani.me, you agree to the following terms:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>All sales are final unless otherwise specified</li>
              <li>You have 30 days to request a refund if unsatisfied</li>
              <li>Access to the program is for personal use only</li>
              <li>Sharing or reselling access is prohibited</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Disclaimer</h2>
            <p>
              The materials on JohnCrestani.me's website are provided on an 'as is' basis. JohnCrestani.me makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Limitations</h2>
            <p>
              In no event shall JohnCrestani.me or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on JohnCrestani.me's website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>Email: passiveincomestreaming@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  )
}

