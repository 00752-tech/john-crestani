import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">About John Crestani and Super Affiliate System Pro</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-pink-500">Who is John Crestani?</h3>
            <p className="text-gray-300 mb-4">
              John Crestani is a renowned affiliate marketing expert who has been helping people achieve financial freedom since 2011. His journey from a college dropout to a multi-millionaire entrepreneur has inspired thousands.
            </p>
            <p className="text-gray-300 mb-6">
              In 2025, John continues to be at the forefront of affiliate marketing, constantly updating his strategies to match the ever-evolving digital landscape.
            </p>
            <Image 
              src="https://www.gojctraining.com/hosted/images/e4/ea2c8c40e945b3958bac129f6e43be/johnnewimg94.png" 
              alt="John Crestani Success" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-pink-500">Super Affiliate System Pro: Evolved for 2025</h3>
            <p className="text-gray-300 mb-4">
              The Super Affiliate System Pro has been continuously updated since its inception in 2017. The 2025 version incorporates cutting-edge strategies for the current digital ecosystem, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>AI-powered marketing tools integration</li>
              <li>Blockchain and cryptocurrency affiliate opportunities</li>
              <li>Advanced data analytics for campaign optimization</li>
              <li>Emerging social media platform strategies</li>
            </ul>
            <Image 
              src="https://www.gojctraining.com/hosted/images/61/90ba29392e464e86c96fdf01744823/johnnewimg32.png" 
              alt="Super Affiliate System Pro Dashboard" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

