//import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="relative w-full h-[400px] mt-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/about-section-background.svg?height=400&width=1200')" }}>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 bg-black bg-opacity-50">
        <h2 className="text-4xl mb-6">About Design Seven</h2>
        <p className="text-2xl text-center max-w-6xl">
          Design Seven has established itself as a BIM consultancy and Design Documentation Services for the Architectural,
          Interior Design industries. Our designers are trained in design standards and construction technology.
          The team has been working for many clients throughout the US on small to large-scale projects.
        </p>
      </div>
    </section>
  );
}