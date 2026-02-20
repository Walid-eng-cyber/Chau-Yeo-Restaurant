import { Clock, MapPin, Phone, Users } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-red-950 to-red-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-yellow-500" />
              <span className="text-yellow-400 font-semibold">Family-Run Since Generations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFD700' }}>
              Welcome to Chau & Yeo
            </h2>
            <p className="text-lg text-gray-200 mb-6">
              Step into our cozy restaurant and experience the warmth of a true family-run establishment. 
              The aroma of freshly cooked wok dishes, garlic, ginger, and chili oil greets you as you 
              enter—a testament to our commitment to authentic, homemade Chinese cuisine.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              Our family recipes have been carefully preserved and perfected over generations. We take 
              pride in using only high-quality ingredients and traditional cooking methods to create 
              comforting dishes that remind you of home.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              With warm lantern lighting, dark wooden furniture, and traditional Chinese artwork adorning 
              our walls, we've created an intimate atmosphere where every guest feels like family. Our 
              deep red and gold décor reflects our cultural heritage while maintaining a clean, modern feel.
            </p>
            <div className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-red-950 px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-400 transition-all cursor-pointer">
              Reserve Your Table
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-red-900/50 p-6 rounded-xl border border-yellow-600/30 backdrop-blur">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-yellow-400">Visit Us</h3>
                  <p className="text-gray-200">
                    Kaiserstraße 48<br />
                    60329 Frankfurt am Main<br />
                    Germany
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-900/50 p-6 rounded-xl border border-yellow-600/30 backdrop-blur">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-yellow-400">Opening Hours</h3>
                  <p className="text-gray-200">
                    Monday - Friday: 11:30 - 15:00, 17:30 - 23:00<br />
                    Saturday - Sunday: 12:00 - 23:00
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-900/50 p-6 rounded-xl border border-yellow-600/30 backdrop-blur">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-yellow-400">Get in Touch</h3>
                  <p className="text-gray-200">
                    Phone: +49 69 2199 8888<br />
                    Email: info@chau-yeo.de
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}