/* eslint-disable react/prop-types */
const PricingSection = ({ title, description, children }) => {
    return (
        <section className='py-14'>
            <div className="mx-auto px-4 md:px-8 max-w-screen-xl text-gray-600">
                <div className='relative mx-auto max-w-xl sm:text-center'>
                    <h3 className='font-semibold text-3xl text-gray-800 sm:text-4xl'>
                        {title}
                    </h3>
                    <div className='mt-3 max-w-xl'>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
                {children}
            </div>
        </section>
    );
};

export default PricingSection