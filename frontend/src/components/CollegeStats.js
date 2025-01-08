export default function CollegeStats() {
  const stats = [
    { label: "Students", value: "6000+" },
    { label: "Teachers", value: "200+" },
    { label: "Staff Members", value: "100+" },
    { label: "Years of Excellence", value: "75+" }
  ];

  return (
    <div className="bg-blue-600 text-white rounded-lg p-8 my-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-sm uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 