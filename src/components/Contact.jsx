const Contact = () => {
  return (
    <section className="py-12 bg-[#EEEDEB] h-[90vh]">
      <div className="max-w-4xl bg-[#F4F8D3] p-16  mx-auto rounded-lg px-16">
        <h2 className="text-4xl font-semibold underline underline-offset-[10px] text-center mb-16 open-sans">
          Contact Us
        </h2>
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg  font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 general-border rounded-lg shadow-sm focus:ring-yellow-500 "
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 general-border rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 general-border rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className=" cursor-pointer inline-flex justify-center px-12 py-3 shadow-2xl border border-transparent text-lg font-medium rounded-lg text-black bg-[#F9CB43] hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
