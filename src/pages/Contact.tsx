import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with us for any inquiries, feedback, or to schedule a visit to our campus.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-primary w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-gray-600">
                      Ichipalayam, Kodumudi
                        Erode, Tamil Nadu
                        PIN Code: 638151 (INDIA)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">+91 94897-18054</p>
                    <p className="text-gray-600">+91 94897-18058</p>
                    <p className="text-gray-600">+91 94897-18060</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">info@riversideacademy.edu</p>
                    <p className="text-gray-600">admissions@riversideacademy.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-primary w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-md font-medium transition-colors"
                  >
                    Send Message 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.228053799755!2d77.8377488!3d11.0766041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba981f4460a0d87%3A0xb3fc0822755f82cf!2sSri%20Valli%20Mr%20Hr%20Sec%20School!5e0!3m2!1sen!2sin!4v1681234567890!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="School Location Map"
  ></iframe>
</div>
        
        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-2">What are the school hours?</h3>
              <p className="text-gray-600">
                Our school operates from Monday to Friday, 8:00 AM to 3:30 PM. Office hours are from 8:00 AM to 4:00 PM on weekdays and 9:00 AM to 12:00 PM on Saturdays.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How can I apply for admission?</h3>
              <p className="text-gray-600">
                You can apply for admission by filling out the application form available on our website or by visiting our admissions office. For more details, please contact our admissions team.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer transportation services?</h3>
              <p className="text-gray-600">
                Yes, we provide transportation services covering various areas of the city. For routes and fees, please contact our administrative office.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What extracurricular activities do you offer?</h3>
              <p className="text-gray-600">
                We offer a wide range of extracurricular activities including sports, music, dance, drama, debate, robotics, and various clubs. These activities are designed to develop students' talents and interests beyond academics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;