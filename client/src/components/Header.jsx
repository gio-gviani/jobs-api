import { Link } from "react-router-dom";

const Header = () => (
    <header className="text-right">
        <nav className="flex items-center justify-between flex-col sm:flex-row flex-wrap">
            <div className="flex items-center flex-shrink-0 text-white">
                <Link to="/jobs-api/">
                    <span className="font-semibold text-[3rem] tracking-tight mb-[2rem] sm:mb-0 transition duration-300 ease-in-out hover:text-teal-200">Jobs API</span>
                </Link>
            </div>
            <div className="lg:flex lg:items-center lg:w-auto">
                <div className="lg:flex-grow text-lg">
                    <Link to="/jobs-api/docs" className="sm:text-[1.25rem] transition duration-300 ease-in-out mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        DOCS
                    </Link>
                    <Link to="/jobs-api/examples" className="sm:text-[1.25rem] transition duration-300 ease-in-out mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4">
                        EXAMPLES
                    </Link>
                    <Link to="/jobs-api/register" className="sm:text-[1.25rem] transition duration-300 ease-in-out mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4">
                        REGISTER
                    </Link>
                </div>
            </div>
        </nav>
    </header>
)

export default Header;