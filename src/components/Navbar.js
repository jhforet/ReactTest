import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";

const NavBar = () => {
    // const [isOpen, setIsOpen] = useState([false, false]);

    // const toggleDropdown = (index) => {
    //     const newIsOpen = [...isOpen];
    //     newIsOpen[index] = !newIsOpen[index];
    //     setIsOpen(newIsOpen);
    // }

    return (
        <nav>
            <div className="relative mx-auto max-w-screen-xl flex align-middle justify-between border border-red-500 ">
                <div className="flex h-16 items-center text-gray-780 text-lg font-bold">
                    <Link className="mr-3 border-red-500 " to='/'>홈페이지로고</Link>
                    <NavLink className={({ isActive }) => isActive ? "p-3 text-cyan-300" : "p-3 hover:text-gray-600 border border-red-500"} to="/comingsoon">오픈예정</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "p-3 text-cyan-300" : "p-3 hover:text-gray-600 border border-red-500"} to="/blog">오픈예정</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "p-3 text-cyan-300" : "p-3 hover:text-gray-600 border border-red-500"} to="/b">오픈예정</NavLink>
                    {/* <div>
                        <button
                            onClick={() => toggleDropdown(0)}
                            // onMouseEnter={() => toggleDropdown(0)} onMouseLeave={() => toggleDropdown(0)}
                            className="p-3 flex items-center border border-red-500"
                        >
                            <span>더보기</span>
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
                                // onMouseLeave={() => toggleDropdown(0)}
                                className="absolute left-0 top-16 w-48 bg-white rounded-md shadow-lg">
                                <div className="m-3">
                                    <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:rounded-t-md">항목 1</a>
                                    <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">항목 2</a>
                                    <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:rounded-b-md">항목 3</a>
                                </div>
                            </div>)}
                    </div> */}
                </div>
                <div className="flex items-center text-gray-400">
                    <Link className="p-3 hover:text-gray-700" to='/login'>로그인</Link>
                    <Link className="p-3 hover:text-gray-700" to='/'>회원가입</Link>
                    <Link className="p-3 bg-cyan-300 rounded-md text-white font-semibold hover:bg-cyan-400" to='/'>프로젝트 만들기</Link>
                </div>
            </div>
        </nav >
    )
};

export default NavBar;