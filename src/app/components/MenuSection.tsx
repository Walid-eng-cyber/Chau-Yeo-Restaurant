import { Link } from 'react-router';
import CircularGallery from './CircularGallery';
import seafoodNoodles from '../../assets/d787c35a5b524b2be201b7456e54902a61581e79.png';
import nasiGoreng from '../../assets/d75c9eef74612194924588d9e416a6ee8b18a529.png';
import crispyDuck from '../../assets/866bf501755e37c6114f007fc7963e5b08fbaa19.png';

const menuItems = [
  {
    image: "https://images.unsplash.com/photo-1628591697390-ce94ea55fe12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGRpbSUyMHN1bXxlbnwxfHx8fDE3NzExNTg0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Gyoza - 10,00 €"
  },
  {
    image: crispyDuck,
    text: "Knusprige halbe Ente - 28,90 €"
  },
  {
    image: "https://images.unsplash.com/photo-1605704922285-e82455dba38b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdW5nJTIwcGFvJTIwY2hpY2tlbnxlbnwxfHx8fDE3NzExNDIyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Kung Pao Hühnerfleisch - 21,90 €"
  },
  {
    image: seafoodNoodles,
    text: "Gebratene Nudeln - 20,90 €"
  },
  {
    image: nasiGoreng,
    text: "Nasi Goreng - 18,90 €"
  },
  {
    image: "https://images.unsplash.com/photo-1628591697390-ce94ea55fe12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGRpbSUyMHN1bXxlbnwxfHx8fDE3NzExNTg0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Sea Water Riesen-Garnelen - 35,90 €"
  }
];

export function MenuSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#8B0000' }}>Unsere Spezialitäten</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Traditionelle Rezepte von Generation zu Generation weitergegeben, mit Liebe und den besten Zutaten zubereitet
          </p>
          <div className="mt-4 flex justify-center gap-2 text-sm text-gray-500">
            <span>🥢</span>
            <span>Frisch zubereitete Wok-Gerichte</span>
            <span>•</span>
            <span>Authentische Familienrezepte</span>
            <span>🥢</span>
          </div>
        </div>
        
        <div className="w-full h-[600px] mb-12">
          <CircularGallery
            items={menuItems}
            bend={3}
            textColor="#8B0000"
            borderRadius={0.05}
            font="bold 24px sans-serif"
            scrollSpeed={2}
            scrollEase={0.08}
          />
        </div>

        <div className="text-center mt-12">
          <Link to="/menu">
            <button className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 transition-all px-10 py-4 rounded-lg text-lg font-semibold text-white border border-yellow-600">
              Vollständige Speisekarte ansehen
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}