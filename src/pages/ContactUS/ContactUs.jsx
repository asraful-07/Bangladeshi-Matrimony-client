import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const handelSubmit = () => {
    toast.success("Wel Come to our Bangladeshi Matrimony");
  };
  return (
    <div className="container mx-auto my-12 p-6">
      <Helmet>
        <title>Contact US</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Get In Touch</h2>
          <p>
            We’d love to hear from you. Feel free to reach out via any of the
            methods below.
          </p>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-500" />
            <p>+123 456 789</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-green-500" />
            <p>info@bio.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-red-500" />
            <p>123 Main Street, London City</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <form onSubmit={handelSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Message</label>
              <textarea
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
