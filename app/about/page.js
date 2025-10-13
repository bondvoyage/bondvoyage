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
              </p>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
