import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm currently looking for internship opportunities, freelance
            projects, and full-stack developer roles. Let's build something
            amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14">

          {/* Left Side */}
          <div className="space-y-8">

            <div>
              <h3 className="text-3xl font-semibold mb-4">
                Let's Connect 👋
              </h3>

              <p className="text-gray-400 leading-8">
                Have an exciting project or internship opportunity?
                Feel free to contact me. I'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-5">

              <a
                href="mailto:apusikder94@gmail.com"
                className="flex items-center gap-4 hover:text-primary transition"
              >
                <Mail className="w-6 h-6 text-primary" />
                <span>apusikder94@gmail.com</span>
              </a>

              <a
                href="tel:+8801XXXXXXXXX"
                className="flex items-center gap-4 hover:text-primary transition"
              >
                <Phone className="w-6 h-6 text-primary" />
                <span>+880 1909280740</span>
              </a>

              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span>Bangladesh</span>
              </div>

            </div>

            {/* Social */}
            <div className="flex gap-5 pt-4">

              <a
                href="https://github.com/apusikder94-ui"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-black transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/apu-sikder-7bb436282/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-black transition duration-300"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>

          {/* Right Side */}
          <form className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-4 rounded-lg bg-black/30 border border-gray-700 outline-none focus:border-primary"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-4 rounded-lg bg-black/30 border border-gray-700 outline-none focus:border-primary"
            />

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full px-5 py-4 rounded-lg bg-black/30 border border-gray-700 outline-none focus:border-primary resize-none"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-primary text-black font-bold hover:scale-105 transition duration-300"
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