import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import IconList from "./SvgIcon";

const NavBar = () => {
    // 토글다운 이벤트용 버튼을 많이 만들수도 있으니 배열로 생성
    const [isOpen, setIsOpen] = useState([false]);
    const dropdownRef = useRef(null);

    // 버튼 클릭시 드롭다운으로 열고 닫기
    const toggleDropdown = (index) => {
        // 배열을 사용하니까 전개 연산자[...]로 배열을 복사
        const newIsOpen = [...isOpen];
        // 배열에서 위치요소 토글. 해당 요소값을 확인하고 반대값으로 변경
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);
    };

    // 드롭다운된 요소 외부 영역 클릭시 닫기(버튼을 사용안해도 계속 반응해서 메모리 누수가 생기는데 개선할 방법이 있을까?)
    useEffect(() => {
        const handleOutsideClick = (event) => {
            // useRef로 해당 요소를 지정하고 current로 값을 불러옴
            // 해당 요소가 아닌곳을 클릭하면 true를 반환하고 드롭다운 메뉴가 닫힘
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen([false]);
            }
        };
        // 클릭시 위에 만들어둔 변수 실행 후 제거
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const mdNavLinkStyles = "block px-4 py-2 font-semibold hover:text-cyan-400";

    return (
        <nav className="border border-b-gray-200 border-b-s">
            <div className="relative h-14 mx-auto max-w-screen-xl flex align-middle justify-between">

                {/* 좌측에 배치되는 버튼 */}
                <div className="flex  items-center text-gray-800 text-lg font-bold">
                    <Link className="mr-3 border border-red-500" to='/'>홈페이지로고</Link>
                    <NavLink className={({ isActive }) => isActive ? "p-3 hidden md:block text-cyan-300" : "p-3 hidden md:block hover:text-gray-600"} to="/comingsoon">오픈예정</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "p-3 hidden md:block text-cyan-300" : "p-3 hidden md:block hover:text-gray-600"} to="/blog">오픈예정</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "p-3 hidden md:block text-cyan-300" : "p-3 hidden md:block hover:text-gray-600"} to="/b">오픈예정</NavLink>

                </div>

                {/* 우측에 배치되는 버튼 */}
                <div className="flex items-center text-sm text-gray-400">
                    <Link className="p-2 hidden md:block hover:text-gray-700" to='/login'>로그인</Link>
                    <Link className="p-2 hidden md:block hover:text-gray-700" to='/'>회원가입</Link>
                    <Link className="p-3 ml-2 hidden md:block bg-cyan-300 rounded-md text-white font-semibold hover:bg-cyan-400" to='/registration'>프로젝트 만들기</Link>
                </div>

                {/* 모바일 화면에서 보이는 버튼 */}
                <div
                    className="flex items-center md:hidden">
                    <Link className="p-2 flex" to='/login'>
                        {IconList.find(icon => icon.name === 'userHome').icon()}
                    </Link>
                    <button
                        ref={dropdownRef}
                        onClick={() => toggleDropdown(0)}
                        // onMouseEnter={() => toggleDropdown(0)} onMouseLeave={() => toggleDropdown(0)}
                        className="pl-3 flex items-center"
                    >
                        <span>더보기</span>
                        {IconList.find(icon => icon.name === 'dropDown').icon()}
                    </button>

                    {/* 토글다운 내용 */}
                    {isOpen[0] && (
                        <div
                            onClick={() => toggleDropdown(0)}
                            // onMouseLeave={() => toggleDropdown(0)}
                            className="absolute right-0 top-14 w-48 bg-white rounded-md shadow-xl z-50">
                            <div className="p-5">
                                <NavLink className={`${mdNavLinkStyles} border border-red-500`} to="/comingsoon">오픈예정</NavLink>
                                <NavLink className={`${mdNavLinkStyles} border border-red-500`} to="/blog">오픈예정</NavLink>
                                <NavLink className={`${mdNavLinkStyles} border border-red-500`} to="/b">오픈예정</NavLink>
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