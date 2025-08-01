import React from 'react'

function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "R", level: 85, icon: "📊" },
        { name: "SQL", level: 90, icon: "🗃️" },
        { name: "JavaScript", level: 75, icon: "⚡" }
      ]
    },
    {
      category: "Machine Learning",
      items: [
        { name: "Scikit-learn", level: 90, icon: "🤖" },
        { name: "TensorFlow", level: 85, icon: "🧠" },
        { name: "PyTorch", level: 80, icon: "🔥" },
        { name: "XGBoost", level: 88, icon: "🚀" }
      ]
    },
    {
      category: "Data Visualization",
      items: [
        { name: "Matplotlib", level: 90, icon: "📈" },
        { name: "Seaborn", level: 85, icon: "🎨" },
        { name: "Plotly", level: 80, icon: "📊" },
        { name: "Tableau", level: 75, icon: "📋" }
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Jupyter", level: 95, icon: "📓" },
        { name: "Git", level: 85, icon: "🔧" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technical skills and tools I use to transform data into insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {skillCategory.category}
              </h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["NumPy", "Pandas", "OpenCV", "NLTK", "Spark", "Hadoop", "MongoDB", "PostgreSQL", "Excel", "Power BI"].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
