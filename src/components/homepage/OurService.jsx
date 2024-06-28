import features from "@/constant/features"

const OurService = () => {
    return (
        <section className="py-14">
            <div className="mx-auto px-4 md:px-8 max-w-screen-xl text-gray-600">
                <div className="space-y-3 mx-auto max-w-xl sm:text-center">
                    <p className="font-semibold text-3xl text-gray-800 sm:text-4xl">
                        Discover the Best Features
                    </p>
                    <p>
                        Explore the unparalleled benefits of our high-speed, reliable, and gaming-optimized internet solutions designed to meet all your online needs.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="gap-x-12 gap-y-8 grid sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex flex-none justify-center items-center bg-indigo-50 rounded-lg w-12 h-12 text-indigo-600">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-lg">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OurService