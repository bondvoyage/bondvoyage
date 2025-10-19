import { Mail, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      <main className="max-w-3xl mx-auto space-y-12 text-center">
        {/* Header */}
        <section>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Get in Touch</h1>
          <p className="text-gray-700 text-lg">
            Have a story idea, feedback, or want to collaborate with <span className="font-semibold text-blue-900">Bond Voyage</span>?
            Reach out, and we’d love to connect!
          </p>
        </section>

        {/* Contact Info */}
        <section className="space-y-6">
          <div className="flex justify-center items-center space-x-4">
            <Mail className="text-blue-900" size={24} />
            <a
              href="mailto:bondvoyage.us@gmail.com"
              className="text-blue-900 text-lg hover:underline"
            >
              bondvoyage.us@gmail.com
            </a>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Instagram className="text-pink-600" size={24} />
            <a
              href="https://instagram.com/bondvoyageofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 text-lg hover:underline"
            >
              @bondvoyageofficial
            </a>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Linkedin className="text-blue-700" size={24} />
            <a
              href="https://linkedin.com/company/bondvoyage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 text-lg hover:underline"
            >
              Bond Voyage
            </a>
          </div>
        </section>

        {/* Footer note */}
        <section>
          <p className="text-gray-600 text-sm">
            We usually reply within 1–2 business days. Thanks for reaching out!
          </p>
        </section>
      </main>
    </div>
  );
}
