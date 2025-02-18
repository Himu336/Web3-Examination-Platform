import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/portal" className="text-xl font-bold text-gray-800">
              Web3 Exam Platform
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
            <Link to="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 