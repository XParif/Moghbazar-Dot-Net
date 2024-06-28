/* eslint-disable react-refresh/only-export-components */
import integrations from "@/constant/integrations"

const FTP = () => {
    return (
        <section className="py-16">
            <div className="mx-auto px-4 md:px-8 max-w-screen-xl">
                <div className="max-w-md">
                    <h1 className="font-extrabold text-gray-800 text-xl sm:text-2xl">FTP / BDIX Server List</h1>
                    <p className="mt-2 text-gray-600">Benefit from seamless and high-speed local connectivity with our BDIX (Bangladesh Internet Exchange) integration. Enjoy faster access to local websites, reduced latency, and an enhanced browsing experience within Bangladesh.</p>
                </div>
                <ul className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3 mt-16">
                    {
                        integrations.map((item, idx) => (
                            <li className="border rounded-lg" key={idx}>

                                <div className="flex justify-between items-center p-4">
                                    <div>
                                        <img className="w-24 h-12" src={item.image} alt={item.title} />
                                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                    </div>
                                    <a href={item.link} target="_blank">
                                        <button className="hover:bg-gray-100 px-3 py-2 border rounded-lg text-gray-700 text-sm duration-150">Visit</button>
                                    </a>
                                </div>
                                <div className="text-right px-4 py-5 border-t">
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default FTP