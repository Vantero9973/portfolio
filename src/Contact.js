import "tailwindcss/tailwind.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { send } from "emailjs-com";

export default function Contact() {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState(false && "Please fill out all fields");

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_nfweg24", "template_quzz22p", toSend, "GSu7c8HKQQ1CYrr6c")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  function displayMessage() {
    if (
      toSend.name.length > 0 &&
      toSend.email.length > 0 &&
      toSend.message.length > 0
    ) {
      setMessage("Message sent - I will get back to you shortly!");
    } else {
      setMessage("Please fill out all fields");
    }
  }

  console.log(toSend.email);

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
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={toSend.name}
                  onChange={handleChange}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  style={{ margin: "10px" }}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={toSend.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  style={{ margin: "10px" }}
                />
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  value={toSend.message}
                  onChange={handleChange}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  style={{ margin: "10px" }}
                ></textarea>
                <div
                  className="p-2 w-full"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="outlined"
                    type="submit"
                    style={{
                      color: "#1c1c1e",
                      borderColor: "#2c2c2e",
                      fontWeight: "bold",
                      border: "2px solid",
                      background: "teal",
                      borderRadius: "10px",
                    }}
                    onClick={displayMessage}
                  >
                    Send Message!
                  </Button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#dadada",
                  }}
                >
                  {message}
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
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
