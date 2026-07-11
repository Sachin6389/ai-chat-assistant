import React from "react";
import { Bot, MessageSquare, ShieldCheck, Zap, Globe, Brain } from "lucide-react";

function About() {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-blue-600" />,
      title: "AI Powered",
      description:
        "Powered by advanced Large Language Models to provide intelligent and accurate responses.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
      title: "Real-Time Chat",
      description:
        "Communicate with the AI instantly through a fast and responsive chat interface.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
      title: "Secure",
      description:
        "Your conversations are handled securely with modern backend technologies.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Fast Response",
      description:
        "Optimized backend APIs ensure quick AI responses with minimal latency.",
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-600" />,
      title: "Cross Platform",
      description:
        "Works smoothly on desktop, tablet, and mobile devices.",
    },
    {
      icon: <Brain className="w-8 h-8 text-pink-600" />,
      title: "Smart AI",
      description:
        "Designed to help with coding, writing, learning, brainstorming, and much more.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            About AI Chat Assistant
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
            An intelligent AI assistant that helps you write, learn, code,
            brainstorm ideas, solve problems, and improve productivity using
            modern Large Language Models.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Why AI Chat Assistant?
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              AI Chat Assistant is built to provide a simple and powerful
              conversational experience. Whether you're a student, developer,
              content creator, or business professional, our assistant helps
              answer questions, generate content, debug code, summarize text,
              translate languages, and much more.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              The application is built using React, Flask, Tailwind CSS, and AI
              APIs, providing a modern, fast, and responsive user experience.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Technology Stack
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                "React",
                "Tailwind CSS",
                "Flask",
                "Python",
                "Axios",
                "REST API",
                "LLMs",
                "Groq API",
              ].map((tech) => (
                <div
                  key={tech}
                  className="rounded-lg border bg-gray-50 py-3 text-center font-medium hover:bg-blue-50 transition"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Features
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border bg-white p-8 shadow hover:shadow-lg transition"
              >
                <div>{feature.icon}</div>

                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Our Mission
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Our mission is to make artificial intelligence accessible,
            reliable, and easy to use for everyone. We aim to build AI tools
            that enhance productivity, learning, creativity, and innovation.
          </p>

        </div>
      </section>

    </div>
  );
}

export default About;