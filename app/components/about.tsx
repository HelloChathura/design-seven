//import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="relative w-full h-[400px] mt-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/about-section-background.svg?height=400&width=1200')" }}>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 bg-black bg-opacity-50">
        <h2 className="text-4xl mb-6">About Design Seven</h2>
        <p className="text-2xl text-center max-w-6xl">
          Design Seven is a BIM consultancy and design documentation service provider for the Architecture and Interior Design industries. Our team is trained in industry design standards and construction technology, delivering drafting and documentation support for clients across the United States on projects ranging from small-scale developments to large projects.
           </p>
      </div>
    </section>
  );
}