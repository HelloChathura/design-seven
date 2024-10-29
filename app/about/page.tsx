import Image from "next/image";
import type { Metadata } from 'next';

// SEO
export const metadata: Metadata = {
    title: "Design Seven - About Us",
    keywords: [
      "Design Seven",
      "Design 7",
      "Design",
      "Architecturing",
      "Interior Design",
      "BMI Consultancy",
    ],
    authors: [{ name: "Design Seven" }],
    description:
      "Design Seven has established itself as a BIM consultancy and Design Documentation Services for the Architectural, Interior Design industries.",
};

// Define types for the TeamMember props
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

// Component to display each team member
const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <Image
          src={image}
          alt={name}
          width={600}
          height={600}
          className="h-full w-full object-cover md:w-96"
        />
      </div>
      <div className="p-8">
        <h3 className="text-3xl font-semibold mb-2">{name}</h3>
        <p className="text-xl text-gray-600 mb-4">{role}</p>
        <p className="text-gray-700 leading-relaxed">{bio}</p>
      </div>
    </div>
  </div>
);

export default function About() {
  const ceo = {
    name: "Shan Rajapakse, Associate AIA",
    role: "Director",
    image: "/team/team-shan.png",
    bio: "Shan earned his Master’s degree in Architecture from North Dakota State University and began his career at one of the premier residential architecture firms in the region. His diverse experience spans multiple firms, where he has been involved in projects from initiation to completion, significantly deepening his knowledge of the profession. Over the years, Shan has gained hands-on experience across various sectors, including commercial, corporate, healthcare, industrial, government, and high-end residential architecture. His work at well-known firms across the United States has allowed him to develop a versatile skill set and a comprehensive understanding of the industry.",
  };

  const teamMembers = [
    {
      name: "Saman Gamage",
      role: "Senior Studio Manager",
      image: "/Saman.jpg",
      bio: " ",
    },
    {
      name: "Malith Gunawardhane",
      role: "Studio Manager",
      image: "/default-image.png",
      bio: " ",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-4">Our Management Team</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Meet the dedicated professionals leading our company towards innovation and success. Our management team brings together diverse expertise and a shared vision for the future.
        </p>

        {/* Render CEO */}
        <TeamMember {...ceo} />

        {/* Render Team Members */}
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </main>
    </div>
  );
}
