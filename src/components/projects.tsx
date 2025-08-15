"use client"

import React, { useState } from 'react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  images: string[]
  liveLink: string
  githubLink: string
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // بيانات المشاريع - يمكنك تعديلها حسب مشاريعك الفعلية
  const projects: Project[] = [
    {
      id: 1,
      title: "Loan Default Prediction",
      shortDescription: "The project predicts loan approval status based on customer data using machine learning, achieving 93.2% accuracy on the test set.",
      fullDescription: "This project focuses on predicting loan approval status based on customer information using machine learning techniques. The dataset was sourced from Kaggle, and the final model achieved 93.2% test accuracy with strong performance metrics.",
      technologies: ["Python", "Pandas, NumPy", "Seaborn, Matplotlib", "Scikit-learn", "XGBoost", "GridSearchCV", "RFE"],
      images: ["/images/projectsImage/loanDefaultPrediction.jpg"],
      liveLink: "https://your-dashboard-link.streamlit.app",
      githubLink: "https://github.com/NOUR-wq277/loan-default-prediction"
    },
    {
      id: 2,
      title: "Superstore Sales & Customer Insights Dashboard",
      shortDescription: "An interactive Power BI dashboard for analyzing Superstore sales and identifying growth opportunities.",
      fullDescription: "An interactive Power BI dashboard that provides deep insights into sales performance, customer behavior, and product trends for a Superstore dataset.\nThe dashboard helps track KPIs, analyze sales by region and category, and identify opportunities for business growth.",
      technologies: ["Python", "Power BI", "DAX", "NumPy", "Pandas"],
      images: ["/images/projectsImage/superstore1.jpg", "/images/projectsImage/superstore2.jpg", "/images/projectsImage/superstore3.jpg"],
      liveLink: "https://your-ml-app.herokuapp.com",
      githubLink: "https://github.com/NOUR-wq277/Superstore-Sales-Customer-Insights-Dashboard"
    },
    {
      id: 3,
      title: "Data Visualization Portfolio",
      shortDescription: "An end-to-end BI project analyzing global AI job market trends, salaries, demand, and skill gaps.",
      fullDescription: "An end-to-end business intelligence project analyzing the current and future trends in the AI job market worldwide, including salary distributions, country-wise demand, and skill gaps. The project uses Python for data processing and Plotly for interactive visualizations, providing insights into the AI job landscape.",
      technologies: ["Python", "Power BI", "DAX", "NumPy", "Pandas", "Jupyter"],
      images: ["/images/projectsImage/AiJops.jpg"],
      liveLink: "https://your-viz-portfolio.netlify.app",
      githubLink: "https://github.com/NOUR-wq277/Global-AI-Job-Market-Salary"
    }
  ]

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden' // منع scroll في الخلفية
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'unset' // إعادة scroll
  }

  const nextImage = () => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my data science projects and see how I transform data into insights
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center"
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image Slider */}
                  <div className="relative">
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                      <Image
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                      />
                      
                      {/* Navigation Arrows - فقط إذا كان هناك أكثر من صورة */}
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                          >
                            ←
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                          >
                            →
                          </button>
                        </>
                      )}
                    </div>
                    
                    {/* Image Indicators - فقط إذا كان هناك أكثر من صورة */}
                    {selectedProject.images.length > 1 && (
                      <div className="flex justify-center mt-4 gap-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              index === currentImageIndex
                                ? 'bg-blue-600'
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Project Description
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-center"
                      >
                        📂 View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
