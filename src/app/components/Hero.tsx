import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart } from 'lucide-react';
import { Link } from 'react-router';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1654483949849-ed21ae4fb2c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc3MTE1ODQyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/70 via-black/60 to-black/70"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-10 h-10 text-yellow-500 fill-yellow-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center" style={{ color: '#FFD700' }}>
          China Restaurant
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center" style={{ color: '#FFD700' }}>
          Chau & Yeo
        </h2>
        <p className="text-lg md:text-xl mb-2 text-center text-gray-200">
          Family Recipes Since Generations
        </p>
        <p className="text-base md:text-lg text-yellow-400 mb-8 text-center">
          Authentic Homemade Chinese Cuisine in Frankfurt
        </p>
        <Link to="/menu">
          <button className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 transition-all px-8 py-4 rounded-lg text-lg font-semibold border border-yellow-600">
            Discover Our Menu
          </button>
        </Link>
      </div>
    </div>
  );
}