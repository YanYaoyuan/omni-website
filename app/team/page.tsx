import Image from "next/image";

export default function Team() {
  const team = [
    {
      name: "",
      role: "CEO",
      description: "拥有10年 AI 研究经验，专注于大语言模型和自然语言处理领域。",
      expertise: ["机器学习", "深度学习", "NLP", "大语言模型"]
    },
    {
      name: "",
      role: "CTO",
      description: "专注于 AI 系统架构设计，确保系统的高性能和可扩展性。",
      expertise: ["系统架构", "分布式系统", "云原生", "AI 部署"]
    },
    {
      name: "",
      role: "产品经理",
      description: "负责 AI 产品的规划和设计，确保产品满足用户需求。",
      expertise: ["产品规划", "用户体验", "市场分析", "项目管理"]
    },
    {
      name: "刘强",
      role: "高级工程师",
      description: "专注于 AI 算法实现和优化，提升系统性能。",
      expertise: ["算法优化", "性能调优", "代码重构", "技术文档"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">我们的团队</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-blue-400">{member.name}</h2>
                <p className="text-gray-300 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
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