import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "智能对话系统",
      description: "基于大语言模型的智能对话系统，支持多轮对话、情感分析和个性化响应。",
      features: ["自然语言处理", "情感分析", "个性化定制", "多语言支持"],
      image: "/project-chat.svg"
    },
    {
      title: "AI 图像生成",
      description: "利用先进的生成式 AI 技术，将文字描述转化为高质量图像。",
      features: ["文本到图像生成", "图像编辑", "风格迁移", "批量处理"],
      image: "/project-image.svg"
    },
    {
      title: "智能数据分析",
      description: "结合机器学习和数据挖掘技术，提供深度数据分析和预测。",
      features: ["数据可视化", "预测分析", "异常检测", "自动化报告"],
      image: "/project-data.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">我们的 AI 项目</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 