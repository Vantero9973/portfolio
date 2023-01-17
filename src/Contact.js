import "tailwindcss/tailwind.css";

export default function Contact() {
  return (
    <div
      id="contact"
      style={{
        marginTop: "80px",
      }}
    >
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div
            className="flex flex-col text-center w-full mb-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2
              style={{ fontSize: "32px", color: "#dadada", fontWeight: "800" }}
            >
              <span
                style={{
                  color: "teal",
                  fontSize: "24px",
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                03.
              </span>
              Contact Me
            </h2>
            <p className="contactText">
              I'm interested in freelance opportunites - especially ambitious or
              large projects. However, if you have other requests or questions,
              don't hesitate to use the form!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <textarea
                    placeholder="Message"
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-black bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg"
                  style={{
                    background: "teal",
                  }}
                >
                  Send Message!
                </button>
              </div>
              <div
                className="p-2 w-full pt-8 mt-8 border-t border-teal-200 text-center"
                style={{ borderColor: "teal" }}
              >
                <a
                  className="text-teal-500"
                  href="mailto:vantero.dev@gmail.com"
                  style={{ color: "teal", fontSize: "20px" }}
                >
                  vantero.dev@gmail.com
                </a>
                <span className="inline-flex">
                  <a className="text-gray-500"></a>
                  <a className="ml-4 text-gray-500"></a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
