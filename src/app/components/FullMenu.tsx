import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  spicy?: boolean;
  extraSpicy?: boolean;
  number?: string;
}

const appetizers: MenuItem[] = [
  {
    number: "1.",
    name: "Gemüsesuppe",
    description: "pikant sauer - mit Fleisch, Champignons, Paprika, Möhren, Morcheln, Ei und Glasnudeln",
    price: "5,50 €"
  },
  {
    number: "2.",
    name: "Wan-Tan-Suppe",
    description: "Klare Suppe mit Frühlingszwiebeln, Möhren, Eisbergsalat und Schweinefleischfüllung (4 Stück)",
    price: "6,00 €"
  },
  {
    number: "3.",
    name: "Kokossuppe",
    description: "mit Hühnerfleisch, Kokosnuss, Champignons, Zucchini und Möhren",
    price: "6,00 €"
  },
  {
    number: "4.",
    name: "Hühnerfleischsuppe mit Nudeln",
    price: "5,50 €"
  },
  {
    number: "5.",
    name: "Kaiser-Wan-Tan-Suppe",
    description: "Klare Suppe mit Frühlingszwiebeln, Möhren, Eisbergsalat und Garnelenfüllung (3 Stück)",
    price: "7,50 €"
  },
  {
    number: "7.",
    name: "Tomatensuppe mit Rindfleisch",
    price: "5,50 €"
  },
  {
    number: "8.",
    name: "Tom Yang Tofu",
    description: "Zitronensuppe mit frischen Zitronenblättern, Gemüse und Tofu",
    price: "6,00 €",
    extraSpicy: true
  },
  {
    number: "9.",
    name: "Tom Yang Gung",
    description: "Zitronensuppe mit frischen Zitronenblättern und Gemüse und Garnelen",
    price: "7,50 €",
    extraSpicy: true
  },
  {
    number: "11.",
    name: "Frühlingsrolle",
    description: "befüllt mit Entenfleisch, Gemüse und dazu Ketchup (2 Stück)",
    price: "6,00 €"
  },
  {
    number: "12.",
    name: "Krupuk (Krabben Chips)",
    price: "4,50 €"
  },
  {
    number: "13.",
    name: "Gebackene Wan Tans",
    description: "Nudelteig mit Schweinefleischfüllung und Chilisoße (6 Stück)",
    price: "7,00 €"
  },
  {
    number: "14.",
    name: "Dumplings - Jiaozi",
    description: "gebackene chinesische Teiltaschen, gefüllt mit Schweinefleisch, Garnelen, Chinakohl, Möhren, Lauchzwiebeln, und chinesischen Pilzen mit Teriyaki Soße (4 Stück)",
    price: "6,50 €"
  },
  {
    number: "15.",
    name: "Minirolle",
    description: "befüllt mit frischem Gemüse, dazu Sweet-Chili Soße (6 Stück)",
    price: "5,50 €"
  },
  {
    number: "16.",
    name: "Gemischter Gemüsesalat mit Salatmayonnaise",
    price: "6,50 €"
  },
  {
    number: "17.",
    name: "Tempura Panko Veggie",
    description: "Paniert Zwiebeln, Paprika, Broccoli, Champignons und Zucchini mit Sweet-Chili Soße",
    price: "6,00 €"
  },
  {
    number: "18.",
    name: "Knusprige Riesengarnelen mit Sweet-Chili Soße (3 Stück)",
    price: "12,00 €"
  },
  {
    number: "19.",
    name: "Knuspriger Fingerfood-Teller",
    description: "1 Wan Tan mit Garnelenfüllung, 2 Mini-Frühlingsrollen, 3 Krupuk, 2 Currytaschen und 2 panierte Garnelen mit Sweet-Chili Soße",
    price: "13,00 €"
  }
];

const sides: MenuItem[] = [
  {
    name: "Portion Jasmin Reis",
    price: "2,50 €"
  },
  {
    name: "Gebratene Nudeln",
    price: "6,00 €"
  },
  {
    name: "Gebratener Reis als Beilage",
    price: "6,00 €"
  },
  {
    name: "Chinesische Brötchen (6 Stück)",
    price: "5,00 €"
  },
  {
    name: "Portion Pommes",
    price: "5,00 €"
  },
  {
    name: "Soße extra",
    price: "3,00 €"
  }
];

const pork: MenuItem[] = [
  {
    number: "28.",
    name: "Knuspriges Schweinefleisch süß-sauer",
    description: "mit Paprika, Möhren, Ananas und Zwiebeln",
    price: "18,00 €"
  },
  {
    number: "29.",
    name: "Knuspriges Schweinefleisch à la Chau",
    description: "mit Möhren und Zwiebeln",
    price: "18,00 €",
    spicy: true
  }
];

const beef: MenuItem[] = [
  {
    number: "31.",
    name: "Mapo Tofu",
    description: "Tofu mit Rindfleisch, Möhren, Paprika und Champignons",
    price: "19,00 €",
    extraSpicy: true
  },
  {
    number: "32.",
    name: "Rindfleisch",
    description: "mit Paprika, Bambus, Champignons, Zwiebeln, Zucchini und Chinakohl in Erdnuss-Kokos-Soße",
    price: "19,00 €"
  },
  {
    number: "33.",
    name: "Rindfleisch mit Paprika und Bambus",
    price: "19,00 €",
    spicy: true
  },
  {
    number: "35.",
    name: "Rindfleisch Chop Suey mit Wok-Gemüse",
    price: "19,00 €"
  },
  {
    number: "36.",
    name: "Rindfleisch gebraten",
    description: "mit Zwiebeln, Porree und schwarzem Pfeffer",
    price: "19,00 €"
  },
  {
    number: "38.",
    name: "Rindfleisch",
    description: "mit Paprika, Bambus, Champignons, Zwiebeln und Zucchini in Currysoße",
    price: "19,00 €"
  },
  {
    number: "41.",
    name: "Knuspriges Rindfleisch à-la-Chau",
    description: "mit Paprika, Zwiebeln und Möhren",
    price: "20,00 €",
    spicy: true
  }
];

const chicken: MenuItem[] = [
  {
    number: "60.",
    name: "Panierte Hähnchenbrust süß-sauer",
    description: "mit Sojasprossen, Möhren und Weißkohl (Soße extra)",
    price: "17,00 €"
  },
  {
    number: "61.",
    name: "Hähnchenbrust",
    description: "mit Nüssen, Champignons, Möhren, Zucchini und Bambus",
    price: "17,00 €"
  },
  {
    number: "62.",
    name: "Hähnchenbrust gebacken im Teigmantel süß-sauer",
    description: "(Soße extra)",
    price: "17,00 €"
  },
  {
    number: "63.",
    name: "Hähnchenbrust",
    description: "mit Paprika, Bambus, Champignons, Broccoli, Zucchini und Möhren in Erdnuss-Kokos Soße -pikant-",
    price: "18,00 €"
  },
  {
    number: "64.",
    name: "Panierte Hähnchenbrust",
    description: "mit Sojasprossen, Möhren, Weißkohl und dunkler Soße (Soße extra)",
    price: "17,00 €"
  },
  {
    number: "65.",
    name: "Hähnchenbrust Chop Suey mit Wok-Gemüse",
    price: "17,00 €"
  },
  {
    number: "66.",
    name: "Hähnchenbrust gebraten",
    description: "mit Paprika, Bambus, Champignons, Zwiebeln, Zucchini und Chinakohl in Currysoße",
    price: "18,00 €"
  },
  {
    number: "67.",
    name: "Hähnchenbrust",
    description: "mit Bambus, Broccoli, Möhren, Porree, Champignons und Nüssen",
    price: "17,00 €",
    extraSpicy: true
  },
  {
    number: "68.",
    name: "Tofu und Hähnchenbrust",
    description: "mit Champignons, Paprika, Möhren, Zwiebeln, Porree, Chinakohl und Broccoli",
    price: "17,00 €"
  }
];

const duckSpecialties: MenuItem[] = [
  {
    number: "70.",
    name: "Knusprige Ente süß-sauer",
    description: "mit Sojasprossen, Möhren und Weißkohl (Soße extra)",
    price: "23,00 €"
  },
  {
    number: "71.",
    name: "Knusprige Ente der Acht Kostbarkeiten",
    description: "mit Garnelen, Paprika, Zucchini, Champignons, Möhren und Chinakohl (für 2 Personen)",
    price: "42,00 €"
  },
  {
    number: "72.",
    name: "Knusprige Ente",
    description: "mit acht Riesengarnelen, Paprika, Zucchini, Möhren, Zwiebeln, Champignons und Chinakohl (für 2 Personen)",
    price: "50,00 €"
  },
  {
    number: "73.",
    name: "Knusprige Ente mit Paprika und Bambus",
    price: "23,00 €",
    spicy: true
  },
  {
    number: "74.",
    name: "Knusprige Ente und Hähnchenbrust der acht Kostbarkeiten",
    description: "mit Garnelen, Paprika, Zucchini, Champignons, Chinakohl, Möhren und Zwiebeln (für 2 Personen)",
    price: "40,00 €"
  },
  {
    number: "75.",
    name: "Knusprige Ente Chop Suey mit Wok-Gemüse",
    price: "23,00 €"
  },
  {
    number: "76.",
    name: "Knusprige Ente",
    description: "mit Sojasprossen, Möhren, Weißkohl und dunkler Soße oder Erdnuss-Kokos Soße (Soße extra)",
    price: "23,00 €"
  },
  {
    number: "77.",
    name: "Zart gebratenes Entenfilet",
    description: "(nicht knusprig!) mit knackigem Saisongemüse",
    price: "20,00 €"
  },
  {
    number: "78.",
    name: "Knusprige Ente",
    description: "mit Bambus, Champignons, Möhren, Zucchini, Porree und Nüssen",
    price: "24,00 €",
    extraSpicy: true
  }
];

const prawns: MenuItem[] = [
  {
    number: "80.",
    name: "Gebratene Garnelen",
    description: "mit Paprika, Broccoli, Champignons, Zwiebeln und Zucchini in Currysoße",
    price: "28,00 €"
  },
  {
    number: "81.",
    name: "Gebratene Garnelen",
    description: "mit Paprika, Bambus, Broccoli, Möhren, Porree, Champignons und Nüssen",
    price: "28,00 €",
    extraSpicy: true
  },
  {
    number: "82.",
    name: "Garnelen und Tofu",
    description: "mit Möhren, Paprika, Zucchini, Chinakohl, Porree und Zwiebeln",
    price: "28,00 €"
  },
  {
    number: "83.",
    name: "Gebratene Garnelen mit Paprika und Bambus",
    price: "28,00 €",
    spicy: true
  },
  {
    number: "87.",
    name: "Knusprige Garnelen süß-sauer",
    description: "(Soße extra) (8 Stück)",
    price: "28,00 €"
  }
];

const fish: MenuItem[] = [
  {
    number: "90.",
    name: "Paniertes Fischfilet",
    description: "mit japanischem Pankomehl süß-sauer (Soße extra)",
    price: "19,00 €"
  },
  {
    number: "91.",
    name: "Paniertes Fischfilet",
    description: "mit japanischem Pankomehl und Currysoße (Soße extra)",
    price: "19,00 €"
  },
  {
    number: "92.",
    name: "Paniertes Fischfilet",
    description: "mit japanischem Pankomehl nach Szechuan Art (Soße extra)",
    price: "19,00 €",
    spicy: true
  }
];

const vegetarian: MenuItem[] = [
  {
    number: "93.",
    name: "Tofu",
    description: "mit Champignons, Paprika, Möhren, Zwiebeln, Porree, Chinakohl, Broccoli und Bambus",
    price: "16,00 €"
  },
  {
    number: "94.",
    name: "Tofu",
    description: "mit Paprika, Bambus, Champignons, Zwiebeln und Zucchini in Currysoße",
    price: "16,00 €"
  },
  {
    number: "96.",
    name: "Vegetarisches Gemüsecurry",
    description: "Leicht gegartes Gartengemüse in einer Curry Soße",
    price: "15,00 €",
    extraSpicy: true
  },
  {
    number: "98.",
    name: "Gebratenes Wok-Gemüse",
    price: "15,00 €"
  }
];

function MenuCategory({ title, items, subtitle }: { title: string; items: MenuItem[]; subtitle?: string }) {
  return (
    <div className="mb-16">
      <div className="mb-8">
        <h3 className="text-3xl font-bold mb-2" style={{ color: '#8B0000' }}>{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 italic">{subtitle}</p>}
        <div className="h-1 w-20 bg-gradient-to-r from-yellow-600 to-yellow-400 mt-3"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 hover:border-yellow-600/50 transition-colors">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                  {item.number && <span className="text-gray-500">{item.number}</span>}
                  {item.name}
                  {item.spicy && <span className="text-red-600 text-xs italic">-scharf-</span>}
                  {item.extraSpicy && <span className="text-red-600 text-xs italic">-extra scharf-</span>}
                </h4>
                {item.description && (
                  <p className="text-sm text-gray-600">{item.description}</p>
                )}
              </div>
              <span className="font-bold text-red-700 whitespace-nowrap">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FullMenu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-red-700 hover:text-red-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück zur Startseite</span>
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#8B0000' }}>Unsere Speisekarte</h1>
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

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-yellow-600/20">
            <MenuCategory title="VORSPEISEN" items={appetizers} />
            
            <div className="mb-16">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#8B0000' }}>HAUPTSPEISEN</h3>
                <p className="text-sm text-gray-600 italic">Als Beilage zum Hauptgang servieren wir Ihnen Reis. Bei Nudel- und Reisgerichten gibt es keine Beilage.</p>
                <p className="text-sm text-gray-600 mt-2 font-semibold">Beilagenauswahl anstatt Reis: Bratnudeln / Bratreis / Pommes - € 4,00</p>
                <div className="h-1 w-20 bg-gradient-to-r from-yellow-600 to-yellow-400 mt-3"></div>
              </div>
            </div>

            <MenuCategory title="ZUM DAZU BESTELLEN" items={sides} />
            <MenuCategory title="SCHWEINEFLEISCH" items={pork} />
            <MenuCategory title="RINDFLEISCH" items={beef} />
            <MenuCategory title="HÜHNERFLEISCH" items={chicken} />
            <MenuCategory title="HAUSGERÖSTETE ENTE" items={duckSpecialties} />
            <MenuCategory title="SEA-WATER RIESENGARNELE" items={prawns} />
            <MenuCategory title="FISCH" items={fish} />
            <MenuCategory title="VEGETARISCHES, TOFU" items={vegetarian} />
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-500">
              Alle Preise in Euro • Änderungen vorbehalten
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}