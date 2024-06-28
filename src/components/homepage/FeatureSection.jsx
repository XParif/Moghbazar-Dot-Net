const FeatureSection = () => {
    return (
        <section className="py-14">
            <div className="mx-auto md:px-8 max-w-screen-xl">
                <div className="lg:flex items-center gap-x-12 sm:px-4 md:px-0">
                    <div className="lg:block flex-1 sm:hidden">
                        <iframe width="650" height="350" src="https://www.youtube.com/embed/KLuTLF3x9sA?si=4mrw668ecZ3s4_UO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        {/* <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="sm:rounded-lg md:max-w-xl" alt="" /> */}
                    </div>
                    <div className="space-y-7 mt-6 md:mt-0 px-4 sm:px-0 max-w-lg lg:max-w-xl">
                        <h3 className="font-semibold text-3xl text-gray-800 sm:text-4xl">
                            Enjoy Unlimited Movies With Moghbazar Dot Net
                        </h3>
                        <p className="mt-3 text-gray-600">
                            We provide high-speed internet and with real IPs that are not shared by another workstation or computer. This makes our internet perfect for streaming and entertainment applications, such as streaming Netflix and High Definition (HD) content. We value your opinion and this why we want you to give us a call today.
                        </p>
                        <a href="javascript:void(0)" className="inline-flex items-center gap-x-1 font-medium text-indigo-600 hover:text-indigo-500 duration-150">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection