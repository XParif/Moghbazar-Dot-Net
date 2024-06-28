/* eslint-disable react/prop-types */
const PricingCard = ({ item }) => {
    return (
        <div className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}>
            {
                item.isMostPop ? (
                    <span className="-top-5 right-0 left-0 absolute bg-white shadow-md mx-auto px-3 py-2 border rounded-full w-32 font-semibold text-center text-gray-700 text-sm">Most popular</span>
                ) : ""
            }
            <div className="space-y-4 p-8 border-b">
                <p className='font-medium text-2xl text-center text-indigo-600'>
                    {item.name}
                </p>
                <div className="flex justify-between">
                    <div className='font-semibold text-3xl text-gray-800'>
                        {item.speed}<span className="font-normal text-gray-600 text-xl">mbps</span>
                    </div>
                    <div className='font-semibold text-3xl text-gray-800'>
                        {item.price} <span className="font-normal text-2xl text-gray-600">৳</span>
                    </div>
                </div>
                <button className='bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 px-3 py-3 rounded-lg w-full font-semibold text-sm text-white duration-150'>
                    Get Started
                </button>
            </div>
            <ul className='space-y-3 p-8'>
                <li className="pb-2 font-medium text-gray-800">
                    <p>Features</p>
                </li>
                {
                    item.features.map((featureItem, idx) => (
                        <li key={idx} className='flex items-center gap-5'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-5 h-5 text-indigo-600'
                                viewBox='0 0 20 20'
                                fill='currentColor'>
                                <path
                                    fillRule='evenodd'
                                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                    clipRule='evenodd'></path>
                            </svg>
                            {featureItem}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PricingCard