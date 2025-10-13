export default function About() {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 p-8">
        <section className="text-center">
          <h1 className="text-4xl text-blue-900 mb-8">
            About Bond Voyage
          </h1>
          <p>
            Navigating Markets Together
          </p>
        </section>

        {/* Photo + Origin*/}
        <section>
          <div>
            <span>
              <img src="/logo.png" alt="Logo" className="h-12"/>
            </span>
            <span>
              <p>
                Bond Voyage was founded in the summer of 2025 by two Stuyvesant juniors, Grace Yang and Sophia Chen, when they decided to turn boredom into creativity. They set out to build something for fun through combining their separate interests in finance and computer science. The idea for a student publication grew out of Sophia's past internship writing reports and Grace's previous website developing experience. What started as a casual summer project has since evolved into a platform to provide students interested in finance and tech with a free, accessible space to share their research and knowledge.
              </p>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
