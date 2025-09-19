// app/contact-us/page.jsx
export const metadata = {
  title: "Contact US Us | Ayatiworks",
  description:
    "Learn more Contact US Ayatiworks – a digital marketing, branding, and tech solutions agency focused on innovation and growth.", 
};
export default function ContactPage() {
  return (
    <section className="section section-home mt-10">
      <div className="section-container text-center">
        <h1 className="section-title">Get in <span className="text-secondary">Touch</span></h1>
        <p className="section-subtitl mx-auto">
          We'd love to hear from you. Fill out the form below.
        </p>

        <form className="mt-6 mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-primary outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-primary outline-none"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border rounded-lg px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-primary outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-white font-medium rounded-lg px-6 py-3 shadow-glow hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
