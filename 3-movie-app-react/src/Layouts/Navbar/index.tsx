import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="fixed top-0 left-0 right-0 flex flex-row justify-between items-center py-4 px-6 bg-gray-800 rounded-b-xl drop-shadow-lg z-50">
            <Link to="/">
                <span className="text-2xl font-medium">YAL</span>
            </Link>
            <div className="flex flex-row">
                <Link className="mx-2 p-2 hover:bg-gray-200 hover:text-gray-800 rounded-md" to="/">
                    Home
                </Link>
                <Link className="mx-2 p-2 hover:bg-gray-200 hover:text-gray-800 rounded-md" to="/upcoming">
                    Upcoming
                </Link>
                <Link className="mx-2 p-2 hover:bg-gray-200 hover:text-gray-800 rounded-md" to="/currently-airing">
                    Currently Airing
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;