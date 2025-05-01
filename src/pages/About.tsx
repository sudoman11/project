import React from 'react';
import { Users, BookOpen, Award } from 'lucide-react';
import historyImage from '../pages/images.jpg'; // Import the school history image

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Our School</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Learn about SVM rich history, our dedicated leadership team, and our vision for education.
          </p>
        </div>
        
        {/* School History Section */}
        <section id="history" className="mb-20">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gray-200 md:min-h-[400px] flex items-center justify-center p-8">
                <img 
                  src={historyImage} 
                  alt="School History" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-6">Our History</h2>
                <p className="text-gray-700 mb-4">
                  SHREE VALLI MATRIC HIGHER SECONDARY SCHOOL, ICHIPPALAYAM was established in 2007 and it is managed by the Pvt. Unaided. It is located in Rural area. It is located in KODUMUDI block of ERODE district of Tamil Nadu. The school consists of Grades from 1 to 12. The school is Co-educational and it have an attached pre-primary section. The school is N/A in nature and is not using school building as a shift-school. English is the medium of instructions in this school. This school is approachable by all weather road. In this school academic session starts in April.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision & Mission Section */}
        <section id="vision" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Vision & Mission</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a leading educational institution that nurtures creative thinkers, compassionate leaders, and responsible global citizens.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide a stimulating learning environment that encourages critical thinking, fosters personal growth, and prepares students for the challenges of the future.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-700">
                Excellence, Integrity, Respect, Innovation, and Community. These core values guide our approach to education and shape our school culture.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;