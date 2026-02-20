import { Link } from 'react-router';
import logo from '../../assets/cce675c28493ea270ff7d0552404944f50d95dbe.png';

export function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 border-t-2 border-yellow-600/30">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Chau & Yeo Logo" className="h-16 w-auto opacity-90" />
        </div>
        <p className="text-yellow-500 font-semibold mb-2">
          China Restaurant Chau & Yeo
        </p>
        <p className="text-gray-400">
          © 2026 Family Recipes, Authentic Flavors. All rights reserved.
        </p>
        <p className="text-gray-500 mt-2 text-sm">
          Where tradition meets taste in the heart of Frankfurt
        </p>
        <div className="mt-4">
          <Link to="/menu" className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm">
            Speisekarte ansehen
          </Link>
        </div>
      </div>
    </footer>
  );
}