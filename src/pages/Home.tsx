import React from 'react';
import { ArrowRight, BookOpen, Users, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import building from '../components/building.jpg'; // Import the building image

const Home = () => {
  const announcements = [
    {
      title: "Annual Sports Day",
      date: "June 15, 2025",
      content: "Our annual sports day will be held at the school grounds. All students are expected to participate."
    },
    {
      title: "Parent-Teacher Meeting",
      date: "May 28, 2025",
      content: "The quarterly parent-teacher meeting will be held to discuss student progress."
    },
    {
      title: "Science Exhibition",
      date: "July 10, 2025",
      content: "Students from grades 6-10 will showcase their science projects in our annual exhibition."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/70 z-10"></div>
        <div 
          className="bg-gray-300 h-full w-full absolute bg-cover bg-center" 
          style={{ backgroundImage: `url(${building})` }} // Use the building image as background
        ></div>
        <div className="container mx-auto px-4 relative z-20 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Nurturing Minds, <br />
              <span className="text-yellow-400">Building Futures</span>
            </h1>
            <p className="text-white text-lg md:text-xl mb-8">
              At Shree Valli Matric, we provide a rich educational experience that prepares students for success in a rapidly changing world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-md font-medium transition-colors inline-flex items-center">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contact" className="px-6 py-3 bg-white hover:bg-gray-100 text-primary rounded-md font-medium transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose SVM</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide a nurturing environment where students can explore their talents and achieve academic excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Education</h3>
              <p className="text-gray-600">
                Our rigorous curriculum is designed to challenge students and prepare them for future success.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Faculty</h3>
              <p className="text-gray-600">
                Our teachers are highly qualified and dedicated to bringing out the best in every student.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Holistic Development</h3>
              <p className="text-gray-600">
                We focus on academic, physical, social, and emotional development of all our students.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Facilities</h3>
              <p className="text-gray-600">
                State-of-the-art infrastructure and facilities to support learning and extracurricular activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections remain unchanged */}
    </div>
  );
};

export default Home;