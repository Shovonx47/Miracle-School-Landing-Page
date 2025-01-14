"use client";
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const LocationMap = () => {
  const [schoolLocation, setSchoolLocation] = useState({
    coordinates: { lat: 23.738636, lng: 90.395491 }, // Notre Dame College coordinates
    address: "2 Arambagh, Motijheel, Dhaka 1000, Bangladesh",
    phone: "+880 2-7192027",
    email: "info@notredamecollege-dhaka.com"
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mapStyles = {
    height: "70vh",
    width: "100%"
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/location`);
        console.log('Location data received:', response.data);
        if (response.data) {
          setSchoolLocation(response.data);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching location:', err);
        // Don't show error since we have default data
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Location</h1>
          <p className="mt-4 text-lg text-gray-500">
            Find us at the heart of education excellence
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={15}
              center={schoolLocation?.coordinates}
            >
              <Marker position={schoolLocation?.coordinates} />
            </GoogleMap>
          </LoadScript>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                <p className="mt-2 text-gray-600">{schoolLocation?.address}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Contact Details</h3>
                <p className="mt-2 text-gray-600">
                  Phone: {schoolLocation?.phone}<br />
                  Email: {schoolLocation?.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap; 