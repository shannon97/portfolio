import { useForm } from '@formspree/react';

function ContactPage() {
    const [state, handleSubmit] = useForm("mleyallg");

    if (state.succeeded) {
        return (
            <div className="flex flex-col items-center justify-center h-screen" style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, white 45%, #ffe2c0 55%)' }}>
                <div className="text-center space-y-4">
                    <p className="text-xl font-medium">Thank you for contacting me.</p>
                    <p className="text-xl font-medium">Speak soon!</p>
                </div>
                <div>
                    <button
                        onClick={() => location.reload()}
                        style={{ backgroundColor: '#ea580b' }}
                        className="mt-3 items-center justify-center py-2 px-4 border border-transparent shadow-sm text-m font-medium rounded-md text-white">
                        Back to Contact Form
                    </button>
                </div>
            </div>
        )
    }

    return (
        <section className="relative text-gray-600 body-font" style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, white 45%, #ffe2c0 55%)' }}>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    {/* Contact Image */}
                    <div className="mx-auto justify-center">
                        <img src="/imgs/contact.png" alt="Contact" className="w-1/2 md:w-1/3 mb-5 mx-auto" />
                    </div>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Have a question? Or just want to say 'Hi!'? Reach out with the form below.</p>
                </div>

                <form onSubmit={handleSubmit} className="mx-auto">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-#ea580b focus:bg-white focus:ring-2 focus:ring-#ea580b text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" style={{ borderColor: '#ea580b' }} />
                                </div>
                            </div>

                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-#ea580b focus:bg-white focus:ring-2 focus:ring-#ea580b text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" style={{ borderColor: '#ea580b' }} />
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-#ea580b focus:bg-white focus:ring-2 focus:ring-#ea580b h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" style={{ borderColor: '#ea580b' }}></textarea>
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="flex mx-auto text-white bg-#ea580b border-0 py-2 px-8 focus:outline-none hover:bg-#ea580b-dark rounded text-lg"
                                    style={{ backgroundColor: '#ea580b' }}>
                                    Send Message
                                </button>
                            </div>

                            <div className="p-2 w-full mt-8 border-t border-orange-600 text-center"></div>

                            {/* Signature Image */}
                            <div className="mt-8 text-center">
                                <a href="https://www.linkedin.com/in/shannon-a-oliver/" target="_blank" rel="noopener noreferrer">
                                    <img src="/imgs/signature.png" alt="Signature" className="w-1/3 mx-auto" />
                                </a>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactPage;