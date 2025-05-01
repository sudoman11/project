import React from 'react';

const Academics = () => {
  const academicPrograms = [
    {
      title: 'Primary Education',
      description: 'Our primary education program focuses on building a strong foundation in literacy, numeracy, and critical thinking skills.',
    },
    {
      title: 'Secondary Education',
      description: 'Our secondary education program prepares students for higher education with a focus on academic excellence and personal growth.',
    },
    {
      title: 'Extracurricular Activities',
      description: 'We offer a variety of extracurricular activities, including sports, arts, and clubs, to ensure holistic development.',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Academics</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Shree Valli Matric, we provide a comprehensive academic program that nurtures intellectual curiosity and prepares students for success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {academicPrograms.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;