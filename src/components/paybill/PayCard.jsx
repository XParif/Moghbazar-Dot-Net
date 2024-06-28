/* eslint-disable react/prop-types */
const PayCard = ({ paymentInfo }) => {
    const { title, description, image } = paymentInfo;

    return (
        <article>
            <div className="flex justify-center items-center rounded-md max-w-full h-auto">
                <img src={image} alt="" />
            </div>
            <div className="mt-6 lg:pr-6">
                <h4 className="mb-2 font-medium text-2xl text-center md:text-[40px] md:leading-[50px]">
                    {title}
                </h4>
                <p className="opacity-60 mt-3 mb-6 md:text-lg">{description}</p>
                <hr className="bg-btnBorder opacity-10 my-6 text-btnBorder ezy__blog9-hr" />

            </div>
        </article>
    );
}

export default PayCard