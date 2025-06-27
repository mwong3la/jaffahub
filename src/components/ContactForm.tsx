const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Company"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
          />
        </div>
      </div>
      
      <div>
        <textarea
          placeholder="How can we help you?"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
        ></textarea>
      </div>
      
      <div className="text-sm text-gray-500">
        By selecting this, you agree to the{" "}
        <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a> and{" "}
        <a href="#" className="text-teal-600 hover:underline">Cookie Policy</a>
      </div>
      
      <button
        type="submit"
        className="w-fit bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
      >
        Request Free Estimate
      </button>
    </form>
  );
};

export default ContactForm