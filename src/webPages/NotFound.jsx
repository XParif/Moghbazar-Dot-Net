import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <main>
            <div className="flex justify-start items-center mx-auto px-4 md:px-8 max-w-screen-xl h-screen">
                <div className="space-y-3 mx-auto max-w-lg text-center">
                    <h3 className="font-semibold text-7xl text-indigo-600">
                        404
                    </h3>
                    <p className="font-semibold text-4xl text-gray-800 sm:text-5xl">
                        Page not found
                    </p>
                    <p className="text-gray-600">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-3">
                        <Link to="/" className="block bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 px-4 py-2 rounded-lg font-medium text-white duration-150">
                            Home
                        </Link>
                        <Link to="/contact" className="block hover:bg-gray-50 active:bg-gray-100 px-4 py-2 border rounded-lg font-medium text-gray-700 duration-150">
                            Contact support
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NotFound