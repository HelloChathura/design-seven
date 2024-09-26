
import Image from "next/image"

//SEO
export const metadata = {
    title: "Design Seven - About Us",
    keywords: [
      "Design Seven",
      "Design 7",
      "Design",
      "Architecturing",
      "Interior Design",
      "BMI Consultancy",
    ],
    author: "Design Seven",
    description:
      "Design Seven has established itself as a BIM consultancy and Design Documentation Services for the Architectural, Interior Design industries.",
  };  
export default function about() {

  const ceo = {
    name: "Shan Rajapakse, Associate AIA",
    role: "Program Director",
    image: "/team/team-shan.png",
    bio: "Shan earned his Master’s degree in Architecture from North Dakota State University and began his career at one of the premier residential architecture firms in the region. His diverse experience spans multiple firms, where he has been involved in projects from initiation to completion, significantly deepening his knowledge of the profession. Over the years, Shan has gained hands-on experience across various sectors, including commercial, corporate, healthcare, industrial, government, and high-end residential architecture. His work at well-known firms across the United States has allowed him to develop a versatile skill set and a comprehensive understanding of the industry. "
  }

  const teamMembers = [
    { name: "Saman Gamage", role: "Senior Studio Manager", image: "/default-image.png" },
    { name: "Malith Gunawardhane", role: "Studio Manager", image: "/default-image.png" },
  ]

  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/management-meeting-room.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Leadership That Inspires</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Meet the visionaries driving our company&apos;s success and shaping the future of our industry.
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-4">Our Management Team</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Meet the dedicated professionals leading our company towards innovation and success. Our management team brings together diverse expertise and a shared vision for the future.
        </p>

        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  src={ceo.image}
                  alt={ceo.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover md:w-96"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-semibold mb-2">{ceo.name}</h3>
                <p className="text-xl text-gray-600 mb-4">{ceo.role}</p>
                <p className="text-gray-700 leading-relaxed">{ceo.bio}</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  )
}