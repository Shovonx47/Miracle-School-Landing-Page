"use client";
import { useState, useEffect } from 'react';

export default function Notices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "অনুষ্ঠানসূচি; ৭৫ বছর পূর্তি উৎসবের সমাপন...",
      publishDate: "12/12/2024",
      pdfUrl: "/pdfs/notice1.pdf"
    },
    {
      id: 2,
      title: "এইচএসসি ২০২৪ বোর্ড পরীক্ষায় উত্তীর্ণ শিক...",
      publishDate: "12/12/2024",
      pdfUrl: "/pdfs/notice2.pdf"
    },
    {
      id: 3,
      title: "৭৫ বছর পূর্তি উৎসবের সমাপনী অনুষ্ঠান রেজ...",
      publishDate: "12/11/2024",
      pdfUrl: "/pdfs/notice3.pdf"
    },
    // ... other notices ...
  ]);

  // Filter notices based on search term
  const filteredNotices = notices.filter(notice =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastNotice = currentPage * rowsPerPage;
  const indexOfFirstNotice = indexOfLastNotice - rowsPerPage;
  const currentNotices = filteredNotices.slice(indexOfFirstNotice, indexOfLastNotice);
  const totalPages = Math.ceil(filteredNotices.length / rowsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Notices</h1>
      
      {/* Search and Rows Per Page Controls */}
      <div className="flex justify-between mb-4">
        <div className="w-64">
          <input
            type="text"
            placeholder="Search notices..."
            className="w-full px-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center">
          <label className="mr-2">Rows per page:</label>
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border rounded-lg px-2 py-1"
          >
            {[10, 20, 30, 40, 50].map(value => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Notices Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Published</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PDF</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentNotices.map((notice) => (
              <tr key={notice.id}>
                <td className="px-6 py-4 whitespace-nowrap">{notice.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{notice.publishDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
  <a
    href="/assets/files/Profile-AP5-06.12.24-new-address.pdf"
    download
    className="text-blue-600 hover:text-blue-800"
  >
    Download PDF
  </a>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div>
          Showing {indexOfFirstNotice + 1} to {Math.min(indexOfLastNotice, filteredNotices.length)} of {filteredNotices.length} entries
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
} 