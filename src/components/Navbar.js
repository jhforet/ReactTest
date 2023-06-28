import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import IconList from "./SvgIcon";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState([false, false]);

    const mdNavLinkStyles = "block px-4 py-2 font-semibold hover:text-cyan-400"

    const toggleDropdown = (index) => {
        const newIsOpen = [...isOpen];
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);
    }

    return (
        <nav>
            <div className="relative h-16 mx-auto max-w-screen-xl flex align-middle justify-between border border-red-500 md:w-auto">

                {/* 좌측에 배치되는 버튼 */}
                <div className="flex  items-center text-gray-800 text-lg font-bold">
                    <Link className="mr-3 border border-red-500" to='/'>홈페이지로고</Link>
                    <NavLink className={({ isActive }) => isActive ? "p-3 hidden md:block text-cyan-300" : "p-3 hidden md:block hover:text-gray-600 border border-red-500"} to="/comingsoon">오픈예정</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "p-3 hidden md:block text-cyan-300" : "p-3 hidden md:block hover:text-gray-600 border border-red-500"} to="/blog">오픈예정</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "p-3 hidden md:block text-cyan-300" : "p-3 hidden md:block hover:text-gray-600 border border-red-500"} to="/b">오픈예정</NavLink>

                </div>

                {/* 우측에 배치되는 버튼 */}
                <div className="flex items-center text-sm text-gray-400">
                    <Link className="p-3 hidden md:block hover:text-gray-700" to='/login'>로그인</Link>
                    <Link className="p-3 hidden md:block hover:text-gray-700" to='/'>회원가입</Link>
                    <Link className="p-3 hidden md:block bg-cyan-300 rounded-md text-white font-semibold hover:bg-cyan-400" to='/registration'>프로젝트 만들기</Link>
                </div>

                {/* 모바일 화면에서 보이는 버튼 */}
                <div className="flex items-center md:hidden">
                    <Link className="p-3 flex border border-red-700">
                        {IconList.find(icon => icon.name === 'userHome').icon()}
                    </Link>
                    <button
                        onClick={() => toggleDropdown(0)}
                        // onMouseEnter={() => toggleDropdown(0)} onMouseLeave={() => toggleDropdown(0)}
                        className="pl-3 flex items-center border border-red-500"
                    >
                        <span>더보기</span>
                        {IconList.find(icon => icon.name === 'dropDown').icon()}
                    </button>

                    {/* 토글다운 내용 */}
                    {isOpen[0] && (
                        <div
                            onClick={() => toggleDropdown(0)}
                            // onMouseLeave={() => toggleDropdown(0)}
                            className="absolute right-0 top-16 w-48 bg-white rounded-md shadow-lg">
                            <div className="p-5 border border-red-500">
                                <NavLink className={`${mdNavLinkStyles} border border-red-500`} to="/comingsoon">오픈예정</NavLink>
                                <NavLink className={`${mdNavLinkStyles} border border-red-500`}  to="/blog">오픈예정</NavLink>
                                <NavLink className={`${mdNavLinkStyles} border border-red-500`}  to="/b">오픈예정</NavLink>
                                <hr />
                                <NavLink className="block text-center px-4 py-2 rounded-md bg-cyan-300 text-white font-semibold hover:bg-cyan-400 " to="/registration">프로젝트 만들기</NavLink>
                            </div>
                        </div>)}
                </div>
            </div >
        </nav >
    )
};

export default NavBar;