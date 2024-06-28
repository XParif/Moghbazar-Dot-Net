import stats from "@/constant/stats";

const Stats = () => {
    return (
        <section className="bg-white py-14 md:py-24 text-zinc-900">
            <div className="mx-auto px-4 container">
                <div className="flex flex-col justify-center mx-auto max-w-6xl text-center">
                    <h1 className="mb-2 font-bold text-3xl md:text-2xl">
                        Why We Are Best
                    </h1>
                    <p className="text-gray-600">Discover the key advantages that set us apart as your top choice for exceptional internet service.</p>
                </div>
                <div className="gap-6 grid grid-cols-12 mx-auto mt-12 max-w-4xl text-center">
                    {stats.map((item, i) => (
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3" key={i}>
                            <h3 className="mb-2 font-black text-[45px] text-blue-600">{item.count}</h3>
                            <h5 className="opacity-80 font-medium text-lg">{item.title}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Stats