import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState([false, false]);

    const toggleDropdown = (index) => {
        const newIsOpen = [...isOpen];
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);
    }

    return (
        <nav>
            <div className="relative mx-auto max-w-screen-xl h-20 flex justify-between">
                <div
                    onMouseLeave={() => toggleDropdown(0)}
                    className="inline-flex">
                    <button
                        onClick={() => toggleDropdown(0)}
                        onMouseEnter={() => toggleDropdown(0)}
                        // onMouseLeave={() => toggleDropdown(0)}
                        className="text-gray-300 font-semibold inline-flex items-center hover:text-white focus:text-white"
                    >
                        <span>메뉴</span>
                        <svg
                            className="fill-current h-4 w-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M5 7 l5 5 5-5H5z" />
                        </svg>
                    </button>
                    {isOpen[0] && (
                        <div
                            onClick={() => toggleDropdown(0)}
                            onMouseLeave={() => toggleDropdown(0)}
                            className="absolute left-0 top-20 w-48 bg-white rounded-md shadow-lg">
                            <div className="m-3">
                                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:rounded-t-md">항목 1</a>
                                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">항목 2</a>
                                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:rounded-b-md">항목 3</a>
                            </div>
                        </div>)}
                </div>

                <Link className="bg-blue-600" to='/'>홈페이지로고</Link>

                <button onClick={() => toggleDropdown(1)}
                    class="relative bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span>토글 버튼</span>
                    <svg class="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2001/svg" viewBox="0 0 20 20">
                        <path d="M5 7 l5 5 5-5H5z" />
                    </svg>
                    {isOpen[1] && (<div class="absolute left-0 top-11 mt-2 w-48 bg-white rounded-md shadow-lg">
                        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">항목 1</a>
                        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">항목 2</a>
                        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">항목 3</a>
                    </div>)}
                </button>



            </div>
        </nav>
    )
};

export default NavBar;