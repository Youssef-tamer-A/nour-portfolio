import React from 'react'

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Junior Data Analyst",
      company: "self-learning-projects",
      period: "2024 - 2025",
      location: "Mansoura University",
      description: "Started my data science journey focusing on data analysis and visualization.",
      achievements: [
        "Built comprehensive data pipelines for business reporting",
        "Created interactive dashboards for sales and marketing teams",
        "Performed statistical analysis on customer behavior data",
        "Assisted in developing the company's first ML recommendation system"
      ],
      technologies: ["Excel", "SQL", "Python", "Power BI", "Pandas"]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Mansoura University",
      period: "2023 - 2027",
      details: "Focus on Software Engineering and Database Systems"
    }
  ]

  const certifications = [
    "Tableau Desktop Specialist"
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in data science and analytics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <span className="mr-3">💼</span>
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-200"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                        <span className="text-sm text-blue-600 font-medium">{exp.period}</span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h5 className="text-lg text-gray-700 font-medium">{exp.company}</h5>
                        <span className="text-sm text-gray-500">{exp.location}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h6 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h6>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-gray-600 flex items-start">
                              <span className="text-green-500 mr-2 mt-1">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🎓</span>
                Education
              </h3>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                    <h5 className="text-md text-gray-700 mb-2">{edu.institution}</h5>
                    <p className="text-sm text-blue-600 mb-2">{edu.period}</p>
                    <p className="text-sm text-gray-600">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🏆</span>
                Certifications
              </h3>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">🎖️</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
