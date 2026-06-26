import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-24 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Contact <span className="text-primary">Me</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Feel free to reach out anytime
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Let’s talk 👋
            </h3>

            <p className="text-gray-400">
              I’m open to freelance, remote jobs, and collaboration.  
              If you have any project or idea, feel free to contact me.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>📧 Email: apu@example.com</p>
              <p>📞 Phone: +880 1234-567890</p>
              <p>📍 Location: Bangladesh</p>
            </div>
          </div>

          {/* Right Form */}
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-primary"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-primary"
            />

            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-primary"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;