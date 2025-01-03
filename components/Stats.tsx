export default function Stats() {
  const stats = [
    { number: "$2.9M+", label: "Student Earnings" },
    { number: "10,000+", label: "Active Students" },
    { number: "8+ Years", label: "of Proven Results" },
    { number: "24/7", label: "Support" },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold text-pink-500 mb-2">{stat.number}</h3>
              <p className="text-white text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

