import { useState } from "react";
import useSendEmail from "../hooks/useSendEmail";
import Spinner from "../components/Spinner";

const Contact = () => {
  const [inputs, setInputs] = useState({
    mail: "",
    message: "",
  });
  const { loading, email } = useSendEmail();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    await email(inputs);
    setInputs({
      mail: "",
      message: "",
    });
  };

  return (
    <div
      className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50"
      id="contact-id"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Have Question In Mind?
          </h2>
          {loading ? (
            <Spinner />
          ) : (
            <button
              type="button"
              onClick={() => window.open("http://127.0.0.1:5000", "_blank")}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2.5 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out active:scale-95"
            >
              Ask Bot
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;