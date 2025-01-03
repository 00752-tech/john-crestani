'use client'

export default function WebinarInvite() {
  const handleWebinarClick = () => {
    window.location.href = '/api/webinar'
  }

  return (
    <section className="py-20 bg-[#0f1629] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Exclusive Webinar Invite</h2>
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              src="https://drive.google.com/file/d/1zOZ9PwE89-JoUOUpjiGzrnt0siRpXUsV/preview"
              allow="autoplay"
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
            ></iframe>
          </div>
          <div className="mt-12 text-center">
            <button 
              onClick={handleWebinarClick}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-12 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Register for Webinar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

