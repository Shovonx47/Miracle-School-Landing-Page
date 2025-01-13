'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { FaLightbulb, FaCrosshairs, FaGraduationCap, FaHandHoldingHeart, FaBalanceScale, FaGlobe } from 'react-icons/fa';
import { fetchMissionVision } from '@/redux/features/missionVisionSlice';

const iconMap = {
  FaLightbulb,
  FaCrosshairs,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaBalanceScale,
  FaGlobe,
};

export default function MissionVisionPage() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.missionVision);

  useEffect(() => {
    dispatch(fetchMissionVision());
  }, [dispatch]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <Image
          src={data.hero.image}
          alt="Notre Dame College Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h1 className="text-5xl font-bold text-white mb-4">{data.hero.title}</h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              {data.hero.subtitle}
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
                {data.mission.description}
              </p>
              <ul className="space-y-4">
                {data.mission.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-blue-600">•</span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[300px]">
              <Image
                src={data.mission.image}
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
                src={data.vision.image}
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
                {data.vision.description}
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <p className="text-blue-800 italic">
                  {data.vision.quote}
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
          {data.coreValues.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className={`${value.color} text-4xl mb-4`}>
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
} 