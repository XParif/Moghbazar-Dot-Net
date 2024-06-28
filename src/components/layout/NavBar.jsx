import { useState } from 'react'
import navigation from '../../constant/navigation'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [state, setState] = useState(false)

    return (
        <header>
            <nav className="relative sm:flex items-center sm:space-x-6 mx-auto px-4 sm:px-8 pt-5 max-w-screen-xl">
                <div className="flex justify-between">
                    <a href="javascript:void(0)">
                        <img
                            src="logo.png"
                            width={80}
                            height={40}
                            alt="Float UI logo"
                        />
                    </a>
                    <button className="sm:hidden text-gray-500 outline-none"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )
                        }
                    </button>
                </div>
                <ul className={`bg-white shadow-md rounded-md p-4 flex-1 mt-12 absolute z-20 top-8 right-4 w-64 border sm:shadow-none sm:block sm:border-0 sm:mt-0 sm:static sm:w-auto ${state ? '' : 'hidden'}`}>
                    <div className="sm:flex justify-end items-center sm:space-x-6 space-y-5 sm:space-y-0 order-1">
                        {
                            navigation.map((item, idx) => (
                                <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            ))
                        }
                    </div>
                </ul>
            </nav>
        </header>

    )
}

export default NavBar