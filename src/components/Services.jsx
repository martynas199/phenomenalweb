import React from 'react'

export default function Services(){
  const services = ["Evaluation & Design", "Custom Software", "Web Development", "Mobile Development", "Maintenance & Support"]
  return (
    <section className="px-8 md:px-20 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 flex-wrap">
          {services.map(s => (
            <button key={s} className="px-4 py-2 rounded-full glass card-border text-gray-200">{s}</button>
          ))}
        </div>
      </div>
    </section>
  )
}