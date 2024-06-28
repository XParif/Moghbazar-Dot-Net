import { Map, ContactForm } from "@components/contact";

const Contact = () => {
    return (
        <section className="relative flex md:flex-row flex-col justify-center items-stretch bg-white mx-auto md:p-24 max-w-7xl light">
            <div className="flex justify-center lg:justify-end">
                <div className="border-none rounded-none w-[450px]">
                    <div className="p-12 lg:p-10 xl:p-12">
                        <h2 className="mb-4 font-bold text-3xl lg:text-4xl leading-none">
                            Contact Us
                        </h2>

                        <ContactForm />
                    </div>
                </div>
            </div>

            <Map />
        </section>
    );
};

export default Contact