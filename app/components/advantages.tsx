"use client";
import { motion } from "framer-motion";

export default function Component() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto w-[80%]">
        <motion.h2
          className="text-3xl text-center mb-12"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          WHY CLIENTS CHOOSE DESIGN SEVEN FOR ARCHITECTURAL DOCUMENTATION
        </motion.h2>

        <motion.div
          className="bg-white rounded-lg shadow-md p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8 text-center">
            {[
              {
                title: "COST & TIME",
                description: "Design Seven provides cost-effective services to clients, delivering exceptional value. Clients can save 40-45% compared to in-house production costs.",
              },
              {
                title: "EXPERIENCE",
                description: "The leadership and team have successfully completed numerous small to large-scale projects across various States.",
              },
              {
                title: "FLEXIBILITY",
                description: "Our experienced team has the flexibility to scale up and down in response to project requirements.",
              },
              {
                title: "BIM EXPERTISE",
                description: "Our team has extensive experience in BIM and has successfully completed numerous projects across the United States using Revit.",
              },
              {
                title: "STANDARDS",
                description: "Design Seven team is capable of producing documentation sets that comply with AIA standards as well as any specific requirements set by our clients.",
              },
              {
                title: "PROCESS EXCELLENCE",
                description: "Design Seven delivers exceptional business value by leveraging process excellence and quality framework.",
              },
              {
                title: "REPEAT CLIENTELE",
                description: "We are dedicated to exceeding client expectations and fostering long-term relationships.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
