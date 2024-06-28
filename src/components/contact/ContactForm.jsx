const ContactForm = () => {
    return (
        <form className="lg:pt-2">
            <div className="mt-2 mb-3">
                <input
                    type="text"
                    placeholder="Name"
                    className="border-slate-500 placeholder:opacity-60 p-2 border focus:border focus:border-blue-400 rounded-md w-full min-h-10 leading-9 focus:outline-none"
                />
            </div>
            <div className="mt-2 mb-3">
                <input
                    type="email"
                    placeholder="Email"
                    className="border-slate-500 placeholder:opacity-60 p-2 border focus:border border-transparent focus:border-blue-400 rounded-md w-full min-h-10 leading-9 focus:outline-none"
                />
            </div>
            <div className="mb-3">
                <textarea
                    rows={3}
                    name="message"
                    placeholder="Your Message"
                    className="border-slate-500 placeholder:opacity-60 p-2 border focus:border border-transparent focus:border-blue-400 rounded-md w-full min-h-20 leading-9 focus:outline-none"
                />
            </div>
            <div className="text-end">
                <button
                    type="submit"
                    className="bg-blue-600 hover:opacity-90 px-8 py-2 border border-blue-600 rounded-md w-full min-h-10 text-white"
                >
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default ContactForm