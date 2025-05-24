"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Combined variants for cards: initial/animate and hover
  const cardCombinedVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    jiggle: { // Hover animation
      rotate: [-1, 1, -1, 1, 0], // Rotate back and forth slightly
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const, // Corrected repeatType
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* 导航栏 */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Omni AI Logo"
                width={150}
                height={40}
                className="h-8 w-auto filter invert"
              />
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" passHref legacyBehavior><motion.a className="text-gray-300 hover:text-white transition duration-300">首页</motion.a></Link>
              <Link href="/projects" passHref legacyBehavior><motion.a className="text-gray-300 hover:text-white transition duration-300">项目介绍</motion.a></Link>
              <Link href="/team" passHref legacyBehavior><motion.a className="text-gray-300 hover:text-white transition duration-300">团队介绍</motion.a></Link>
              <Link href="#" passHref legacyBehavior><motion.a className="text-gray-300 hover:text-white transition duration-300">联系我们</motion.a></Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* 主要内容 */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        {/* 英雄区域 */}
        <motion.div
          variants={heroVariants}
          className="text-center mb-20 relative overflow-hidden rounded-lg p-8 bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl"
        >
          <div className="absolute inset-0 opacity-20 hero-pattern"></div>
          <div className="relative z-10">
            <motion.h2 variants={itemVariants} className="text-5xl font-extrabold mb-4 text-white">AI 驱动的未来</motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-200">赋能创新，连接智能世界</motion.p>
          </div>
        </motion.div>

        {/* 特色服务 */}
        <motion.div
          variants={containerVariants} // 使用容器变体实现 staggered effect
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <motion.div 
            variants={cardCombinedVariants} // Use combined variants
            whileHover="jiggle" // Apply jiggle effect on hover
            className="p-8 bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">智能对话</h3>
            <p className="text-gray-300">基于大语言模型的智能对话系统，让沟通更自然、高效、个性化。</p>
          </motion.div>
          <motion.div 
            variants={cardCombinedVariants} // Use combined variants
            whileHover="jiggle" // Apply jiggle effect on hover
            className="p-8 bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-400">AI 图像生成</h3>
            <p className="text-gray-300">利用先进的生成式 AI 技术，将文字描述转化为高质量图像，激发无限创意。</p>
          </motion.div>
          <motion.div 
            variants={cardCombinedVariants} // Use combined variants
            whileHover="jiggle" // Apply jiggle effect on hover
            className="p-8 bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-4 text-teal-400">智能分析</h3>
            <p className="text-gray-300">结合机器学习和数据挖掘技术，提供深度数据分析和预测，助力智能决策。</p>
          </motion.div>
        </motion.div>

        {/* 联系我们 */}
        <motion.div
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-white">与我们一起探索 AI</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 mb-8">立即联系我们，开启您的 AI 创新之旅。</motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="/projects"
              className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-110 inline-block shadow-lg"
            >
              了解更多项目
            </Link>
          </motion.div>
        </motion.div>
      </motion.main>

      {/* 页脚 */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 , delay: 0.5}}
        className="bg-gray-800 mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-gray-400">
          <p>© 2024 Omni AI. 版权所有。</p>
        </div>
      </motion.footer>
    </div>
  );
}
