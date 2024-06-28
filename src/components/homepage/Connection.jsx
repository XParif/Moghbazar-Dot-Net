const Connection = () => {
    const contactMethods = [
        {
            title: "UTP Connection",
            desc: "Installation Charge 500 taka.",

        },
        {
            title: "Optical Fiber Connection",
            desc: "Installation Charge 1000 taka.",

        },
    ]

    return (
        <section className="py-14">
            <div className="lg:flex gap-12 mx-auto px-4 md:px-8 max-w-screen-xl text-gray-600">
                <div className="max-w-md">
                    <h3 className="font-semibold text-3xl text-gray-800 sm:text-4xl">
                        Let’s connect
                    </h3>
                    <p className="mt-3">
                        We offer both UTP and Optical Fiber connections, ensuring you have the flexibility to choose the option that best suits your needs.
                    </p>
                </div>
                <div>
                    <ul className="md:flex items-center gap-x-12 gap-y-6 lg:gap-x-0 mt-12 lg:mt-0">
                        {
                            contactMethods.map((item, idx) => (
                                <li key={idx} className="space-y-3 lg:px-12 py-6 md:py-0 border-t md:border-t-0 lg:border-l md:max-w-sm lg:max-w-none">

                                    <h4 className="font-medium text-center text-gray-800 text-lg xl:text-2xl">
                                        {item.title}
                                    </h4>
                                    <p className="text-center">
                                        {item.desc}
                                    </p>

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Connection