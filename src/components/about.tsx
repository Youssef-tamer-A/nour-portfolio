import React from 'react'

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Passionate Entry-Level Data Scientist
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Digital Egypt Pioneers Initiative (DEPI) has provided opportunities to explore Python, statistics, linear algebra, and machine learning methods as part of an AI internship. This role emphasizes applying analytical skills to solve complex problems and supports a growing interest in artificial intelligence and data science. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              Mansoura University&apos;s Bachelor of Artificial Intelligence program complements practical experience by deepening knowledge in computer science fundamentals. Aiming to merge technical proficiency in tools like Python, Jupyter, and Azure Machine Learning with a commitment to leveraging AI for innovative solutions.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">7</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-xl">
                <div className="absolute inset-4 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 11H7v3h2v-3zm4 0h-2v3h2v-3zm4 0h-2v3h2v-3zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">Data Analysis</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Expert in statistical analysis and data interpretation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
