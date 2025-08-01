"use client"

import React from 'react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Customer Churn Prediction",
      description: "Built a machine learning model to predict customer churn with 92% accuracy using ensemble methods and feature engineering.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
      category: "Machine Learning",
      image: "🎯",
      features: [
        "Ensemble modeling with Random Forest and XGBoost",
        "Feature importance analysis",
        "Real-time prediction API",
        "Interactive dashboard for business users"
      ]
    },
    {
      id: 2,
      title: "Sales Forecasting Dashboard",
      description: "Developed an interactive dashboard for sales forecasting using time series analysis and seasonal decomposition.",
      technologies: ["R", "Shiny", "Prophet", "Plotly"],
      category: "Data Visualization",
      image: "📈",
      features: [
        "ARIMA and Prophet time series models",
        "Seasonal trend analysis",
        "Interactive web dashboard",
        "Automated report generation"
      ]
    },
    {
      id: 3,
      title: "Sentiment Analysis Engine",
      description: "Created a real-time sentiment analysis system for social media monitoring using NLP and deep learning.",
      technologies: ["Python", "NLTK", "TensorFlow", "Docker"],
      category: "NLP",
      image: "💬",
      features: [
        "LSTM neural networks for sentiment classification",
        "Real-time Twitter API integration",
        "Multi-language support",
        "Containerized deployment"
      ]
    },
    {
      id: 4,
      title: "Fraud Detection System",
      description: "Implemented an anomaly detection system for financial transactions using unsupervised learning techniques.",
      technologies: ["Python", "Isolation Forest", "AWS", "Apache Kafka"],
      category: "Anomaly Detection",
      image: "🔒",
      features: [
        "Real-time transaction monitoring",
        "Isolation Forest and DBSCAN algorithms",
        "Scalable cloud architecture",
        "Alert system for suspicious activities"
      ]
    },
    {
      id: 5,
      title: "Recommendation Engine",
      description: "Built a collaborative filtering recommendation system for e-commerce platform with matrix factorization.",
      technologies: ["Python", "Surprise", "Flask", "Redis"],
      category: "Recommendation Systems",
      image: "🛒",
      features: [
        "Collaborative and content-based filtering",
        "Matrix factorization with SVD",
        "A/B testing framework",
        "Real-time recommendations API"
      ]
    },
    {
      id: 6,
      title: "Healthcare Data Analytics",
      description: "Analyzed patient data to identify risk factors and predict treatment outcomes using statistical modeling.",
      technologies: ["R", "ggplot2", "Survival Analysis", "Tableau"],
      category: "Healthcare Analytics",
      image: "🏥",
      features: [
        "Survival analysis for treatment outcomes",
        "Risk factor identification",
        "Clinical trial data analysis",
        "Regulatory compliant reporting"
      ]
    }
  ]

  const categories = ["All", "Machine Learning", "Data Visualization", "NLP", "Anomaly Detection", "Recommendation Systems", "Healthcare Analytics"]
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world data science projects that demonstrate my expertise and impact
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                    View Details
                  </button>
                  <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <a 
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
