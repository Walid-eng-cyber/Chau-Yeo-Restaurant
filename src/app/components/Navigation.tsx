import { Link, useLocation } from 'react-router';
import { Home, BookOpen } from 'lucide-react';
import logo from '../../assets/cce675c28493ea270ff7d0552404944f50d95dbe.png';

export function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-red-950/95 to-red-900/95 backdrop-blur-sm border-b-2 border-yellow-600/30">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-yellow-500 hover:text-yellow-400 transition-colors">
            <img src={logo} alt="Chau & Yeo Logo" className="h-12 w-auto" />
            <h1 className="text-2xl font-bold">Chau & Yeo</h1>
          </Link>
          
          <div className="flex gap-6">
            <Link 
              to="/" 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/' 
                  ? 'bg-yellow-600 text-red-950 font-semibold' 
                  : 'text-yellow-500 hover:text-yellow-400'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/menu" 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/menu' 
                  ? 'bg-yellow-600 text-red-950 font-semibold' 
                  : 'text-yellow-500 hover:text-yellow-400'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Speisekarte</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}