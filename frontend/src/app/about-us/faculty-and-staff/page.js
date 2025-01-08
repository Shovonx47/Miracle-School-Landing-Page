"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { facultyData } from '@/data/facultyData';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Loading component
function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <div className="md:w-1/3 h-10 bg-gray-200 rounded"></div>
          <div className="md:w-1/4 h-10 bg-gray-200 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-52 bg-gray-200 rounded-lg h-72"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Error component
function Error({ error, reset }) {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Something went wrong!
        </h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

// Main page component
export default function FacultyStaffPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [facultyData, setFacultyData] = useState([]);

  const departments = [
    'All Departments',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'Bengali',
  ];

  // Fetch faculty data based on selected department and search term
  useEffect(() => {
    const fetchFaculty = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${API_URL}/faculty?department=${selectedDepartment}&search=${searchTerm}`
        );
        const data = await response.json();
        if (data.success) {
          setFacultyData(data.data);
        } else {
          setError('Failed to fetch faculty data');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaculty();
  }, [selectedDepartment, searchTerm]);

  const filteredFaculty = facultyData.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || 
                             faculty.department.toLowerCase() === selectedDepartment.toLowerCase();
    return matchesSearch && matchesDepartment;
  });

  // Group faculty by designation
  const groupedFaculty = filteredFaculty.reduce((acc, faculty) => {
    if (!acc[faculty.designation]) {
      acc[faculty.designation] = [];
    }
    acc[faculty.designation].push(faculty);
    return acc;
  }, {});

  // Define designation order (hierarchy)
  const designationOrder = [
    'Principal',
    'Vice Principal',
    'Professor',
    'Associate Professor',
    'Assistant Professor',
    'Senior Lecturer',
    'Lecturer'
  ];

  // Modal component
  const FacultyModal = ({ faculty, onClose }) => {
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-lg p-6 max-w-2xl max-h-[90vh] overflow-y-auto m-4"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center space-x-6 mb-6">
            <div className="relative w-32 h-32">
              <Image
                src={faculty.image}
                alt={faculty.name}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{faculty.name}</h2>
              <p className="text-blue-600 font-medium">{faculty.designation}</p>
              <p className="text-gray-600">{faculty.department}</p>
              <p className="text-gray-600">{faculty.phone}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Education</h3>
              <ul className="list-disc list-inside space-y-2">
                {faculty.education?.map((edu, index) => (
                  <li key={index} className="text-gray-600">{edu}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Experience</h3>
              <ul className="list-disc list-inside space-y-2">
                {faculty.experience?.map((exp, index) => (
                  <li key={index} className="text-gray-600">{exp}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Current Classes</h3>
              <ul className="list-disc list-inside space-y-2">
                {faculty.classes?.map((cls, index) => (
                  <li key={index} className="text-gray-600">{cls}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Biography</h3>
              <p className="text-gray-600 leading-relaxed">{faculty.biography}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} reset={() => setError(null)} />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Faculty & Staff</h1>
      
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        <div className="md:w-1/3">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="md:w-1/4">
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {departments.map((dept) => (
              <option key={dept} value={dept.toLowerCase()}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-12">
        {designationOrder.map((designation) => {
          const facultyGroup = groupedFaculty[designation] || [];
          if (facultyGroup.length === 0) return null;

          return (
            <div key={designation} className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {designation}{facultyGroup.length > 1 ? 's' : ''}
              </h2>
              <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
                {facultyGroup.map((faculty, index) => (
                  <div
                    key={index}
                    className="w-52 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow text-center cursor-pointer"
                    onClick={() => setSelectedFaculty(faculty)}
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={faculty.image}
                        alt={faculty.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-3 flex flex-col items-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">{faculty.name}</h3>
                      <p className="text-blue-600 font-medium mb-1 text-sm text-center">{faculty.designation}</p>
                      <p className="text-gray-600 mb-1 text-sm text-center">{faculty.department}</p>
                      <p className="text-gray-600 text-xs text-center">{faculty.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {selectedFaculty && (
        <FacultyModal 
          faculty={selectedFaculty} 
          onClose={() => setSelectedFaculty(null)} 
        />
      )}

      {Object.keys(groupedFaculty).length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No faculty members found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}