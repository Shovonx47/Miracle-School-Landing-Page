import Image from 'next/image';
import { FaLightbulb, FaCrosshairs, FaGraduationCap, FaHandHoldingHeart, FaBalanceScale, FaGlobe } from 'react-icons/fa';

export const metadata = {
  title: 'Mission & Vision | Notre Dame College Dhaka',
  description: 'Discover the mission and vision that drives Notre Dame College Dhaka towards excellence in education.',
};

export default function MissionVisionPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <Image
          src="/images/campus-view.jpg"
          alt="Notre Dame College Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h1 className="text-5xl font-bold text-white mb-4">Our Mission & Vision</h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              Guiding principles that shape our commitment to excellence in education
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <FaCrosshairs className="text-3xl text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Notre Dame College is dedicated to providing quality education that nurtures intellectual growth,
                moral values, and spiritual development. We strive to create an environment that fosters academic
                excellence, critical thinking, and social responsibility.
              </p>
              <ul className="space-y-4">
                {[
                  "Providing quality education rooted in moral values",
                  "Fostering intellectual and spiritual growth",
                  "Developing future leaders with strong ethical foundations",
                  "Creating an inclusive learning environment"
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-blue-600">•</span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[300px]">
              <Image
                src="/images/students-studying.jpg"
                alt="Students in library"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-full min-h-[300px] md:order-2">
              <Image
                src="/images/campus-life.jpg"
                alt="Campus Life"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <FaLightbulb className="text-3xl text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                To be a leading institution of higher education in Bangladesh, recognized for academic excellence,
                character formation, and the development of future leaders who will make positive contributions
                to society.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <p className="text-blue-800 italic">
                  "Empowering minds, Enriching souls, Building tomorrow's leaders"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
<section className="max-w-7xl mx-auto px-6">
  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        title: "Academic Excellence",
        description: "Pursuing the highest standards of academic achievement and intellectual rigor",
        icon: FaGraduationCap,
        color: "text-blue-600"
      },
      {
        title: "Moral Formation",
        description: "Developing strong ethical principles and character through holistic education",
        icon: FaBalanceScale,
        color: "text-green-600"
      },
      {
        title: "Social Responsibility",
        description: "Fostering a commitment to serve society and contribute to the greater good",
        icon: FaHandHoldingHeart,
        color: "text-red-600"
      },
      {
        title: "Global Perspective",
        description: "Preparing students to be responsible global citizens",
        icon: FaGlobe,
        color: "text-purple-600"
      }
    ].map((value, index) => (
      <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className={`${value.color} text-4xl mb-4`}>
          <value.icon />
        </div>
        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
        <p className="text-gray-600">{value.description}</p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
} 