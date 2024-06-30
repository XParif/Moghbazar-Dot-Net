import PayCard from "@components/paybill/PayCard";
import paymentOptions from "@/constant/paymentOptions";

const Paybill = () => {
    return (
        <section className="bg-white mx-auto py-14 md:py-24 max-w-7xl text-stone-800 overflow-hidden light">
            <div className="px-8 md:px-24 container">
                <div className="justify-center grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:col-end-11 text-center">
                        <h2 className="mb-4 font-bold text-[32px] lg:text-[45px] leading-none">
                            Pay Bill with Digital Payment
                        </h2>
                        <p className="opacity-80 mb-9 lg:px-12 font-medium text-lg">
                            Make your payment via Bkash, Nagad or Rocket to stay connected with Moghbazar Dot Net
                        </p>
                    </div>
                </div>

                <div className="items-center gap-6 md:gap-11 grid grid-cols-2 mt-12">
                    {paymentOptions.map((paymentInfo, i) => (
                        <div className="col-span-2 md:col-span-1" key={i}>
                            <PayCard paymentInfo={paymentInfo} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Paybill