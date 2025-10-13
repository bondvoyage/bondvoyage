export default function About() {
  return (
    <div className="min-h-screen">
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Mission */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Bond Voyage&apos;s Mission
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Bond Voyage is a youth-led publication focused on empowering students interested in finance. It provides a free and accessible space to share insights, research, and projects. By combining finance concepts, writing, and experiences, Bond Voyage aims to make economics more approachable and inspire innovation.
          </p>
        </section>

        {/* Founders */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-900 mb-8 text-center">
            Founders & Editors-in-Chief
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 justify-center text-center md:text-left">
            {/* Image */}
            <img
              src="/founders.jpeg"
              alt="Founders"
              className="w-48 h-48 object-cover shadow-lg"
            />

            {/* Origin Story */}
            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              Bond Voyage was founded in the summer of 2025 by two Stuyvesant juniors, Grace Yang and Sophia Chen, when they decided to turn boredom into creativity. They set out to build something for fun through combining their separate interests in finance and computer science. The idea for a student publication grew out of Sophia&apos;s past internship writing reports and Grace&apos;s previous website development experience. What started as a casual summer project has since evolved into a platform to provide students interested in finance and tech with a free, accessible space to share their research and knowledge.
            </p>
          </div>
        </section>

        {/* Future Positions */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Future Positions
          </h2>
          <p className="text-gray-700 text-lg">
            Stay tuned for updates on new roles and opportunities within Bond Voyage!
          </p>
        </section>

      </main>
    </div>
  );
}
