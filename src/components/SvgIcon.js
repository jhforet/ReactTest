const IconList = [
    {
        name: "userHome",
        icon: () => (
            <svg
                className="fill-current h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                // id="Layer_1"
                // data-name="Layer 1"
                viewBox="0 0 24 24"
            >
                <path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z" />
                <circle cx="12" cy="6" r="6" />
            </svg>
        ),
    },
    {
        name: "dropDown",
        icon: () => (
            <svg
                className="fill-current h-4 w-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path d="M5 7 l5 5 5-5H5z" />
            </svg>
        )
    }
]

export default IconList