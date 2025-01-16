"use client";
import { useState } from 'react';
import { FaComments } from 'react-icons/fa';

export default function FeedbackButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [formType, setFormType] = useState('');

  const handleButtonClick = (type) => {
    setFormType(type);
    setShowFeedbackForm(true);
  };

  const handleBack = () => {
    setShowFeedbackForm(false);
  };

  return (
    <>
      {/* Floating Feedback Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white p-4 rounded-l-lg shadow-lg hover:bg-purple-800 transition-colors z-50"
      >
        <FaComments size={32} />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4">
            {showFeedbackForm ? (
              /* Feedback Form Layout */
              <div className="w-full">
                <div className="flex items-center mb-6">
                  <button
                    onClick={handleBack}
                    className="text-purple-700 hover:text-purple-800 mr-4"
                  >
                    ← ফিরে দেখুন
                  </button>
                  <h2 className="text-xl font-semibold text-purple-700">
                    {formType}
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="ml-auto text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                {/* Text Editor */}
                <div className="mb-6">
                  <div className="border rounded-lg">
                    <div className="border-b p-2 flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">B</button>
                      <button className="p-1 hover:bg-gray-100 rounded italic">I</button>
                      <button className="p-1 hover:bg-gray-100 rounded underline">U</button>
                      <button className="p-1 hover:bg-gray-100 rounded">"</button>
                      <button className="p-1 hover:bg-gray-100 rounded">&lt;/&gt;</button>
                      <button className="p-1 hover:bg-gray-100 rounded">≡</button>
                      <button className="p-1 hover:bg-gray-100 rounded">⋮</button>
                      <button className="p-1 hover:bg-gray-100 rounded">≣</button>
                      <button className="p-1 hover:bg-gray-100 rounded">A</button>
                      <button className="p-1 hover:bg-gray-100 rounded">🔗</button>
                    </div>
                    <textarea
                      className="w-full p-4 min-h-[200px] outline-none"
                      placeholder="আপনার মতামত লিখুন"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="mt-4">
                    <input
                      type="file"
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    />
                  </div>
                </div>

                {/* Contact Form */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">আপনার নাম</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="আপনার নাম লিখুন"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">আপনার ইমেইল</label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded"
                      placeholder="আপনার ইমেইল লিখুন"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">আপনার কন্টাক্ট নম্বর</label>
                    <input
                      type="tel"
                      className="w-full p-2 border rounded"
                      placeholder="আপনার কন্টাক্ট নম্বর লিখুন"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-colors">
                    জমা দিন
                  </button>
                </div>
              </div>
            ) : (
              /* Initial Modal Content */
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-purple-700">বাছাই করুন</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <button 
                    className="flex flex-col items-center gap-2"
                    onClick={() => handleButtonClick('মতামত')}
                  >
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <FaComments className="text-purple-700 text-2xl" />
                    </div>
                    <span className="text-gray-700">মতামত</span>
                  </button>

                  <button 
                    className="flex flex-col items-center gap-2"
                    onClick={() => handleButtonClick('জিজ্ঞাসা')}
                  >
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <FaComments className="text-purple-700 text-2xl" />
                    </div>
                    <span className="text-gray-700">জিজ্ঞাসা</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}