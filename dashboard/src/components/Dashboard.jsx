import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Logout } from "../store/login/loginSlice"
import { List } from "./List"


export function Dashboard() {


    const { token } = useSelector((state) => state.login)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(Logout())
        navigate('/login')
    };

    return (
        <>
            <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>

            <section className="h-screen  bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
                <aside className="sm:h-full sm:w-48 w-full h-12 bg-gray-800 text-gray-200">
                    <ul className="text-center flex flex-row sm:flex-col w-full">
                        <li className="h-14 border-b border-gray-900 hidden sm:block">
                            <a id="page-icon" href="/" className="h-full w-full hover:bg-gray-700 block p-3">
                                <img className="object-contain h-full w-full" src="https://avatars1.githubusercontent.com/u/6157842?v=4"
                                    alt="open-source" />
                            </a>
                        </li>
                        <li className="sm:border-b border-gray-900 flex-1 sm:w-full" title="Inbox">
                            <a href="#" id="page-icon"  className="h-full w-full hover:bg-gray-700 block p-3">
                                <i className="fas fa-inbox fill-current">  </i>
                                List
                            </a>
                        </li>
                    </ul>
                </aside>
                <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
                    <nav className="border-b bg-white px-6 py-2 flex items-center min-w-0 h-14">
                        <h1 className="font-semibold text-lg"></h1>
                        <span className="flex-1"></span>
                        <span className="mr-2">
                            <input type="text" placeholder="Search"
                                className="w-full border-2 px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100" />
                        </span>
                        {
                            !token ? <button
                                className="ml-auto border rounded-full ml-2 w-10 h-10 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                                <i className="fas fa-user fill-current"></i>
                            </button>
                                : <li className="block  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <button onClick={logout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i className="fa-solid fa-right-from-bracket"></i> Sign out</button>
                                </li>
                        }



                    </nav>
                    <section className="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
                        <List />
                    </section>
                    <footer className="px-6 py-3 border-t flex w-full items-end">
                        <p className="text-gray-600">Made by @codingsafari</p>
                        <div className="flex-1"></div>
                        <button
                            className="shadow-md ml-auto border rounded-full ml-2 w-14 h-14 text-center leading-none text-green-200 bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                            <i className="fas fa-question fill-current"></i>
                        </button>
                    </footer>
                </main>
            </section>
        </>
    )
}
