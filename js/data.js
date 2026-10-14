/* ==========================================================================
   KING'S TRAVELS AND TOURISM - GLOBAL DATA STORE
   Curated Destinations, Luxury Tour Packages, Experiences, and Stories
   ========================================================================== */

const KINGS_DATA = {
  // Currency Conversion Rates (Base: USD)
  currencies: {
    USD: { symbol: '$', rate: 1, name: 'USD ($)' },
    INR: { symbol: '₹', rate: 83.5, name: 'INR (₹)' },
    EUR: { symbol: '€', rate: 0.92, name: 'EUR (€)' },
    AED: { symbol: 'AED ', rate: 3.67, name: 'AED (د.إ)' },
    GBP: { symbol: '£', rate: 0.79, name: 'GBP (£)' }
  },

  // Destinations
  destinations: [
    {
      id: 'kashmir',
      name: 'Kashmir',
      country: 'India',
      category: ['india', 'mountains', 'luxury'],
      priceUSD: 1250,
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=85',
      badge: 'Heaven on Earth',
      bestSeason: 'Apr – Oct / Dec – Feb (Snow)',
      weather: '10°C - 22°C (Summer) / -2°C (Winter)',
      flightTime: '1h 30m from Delhi',
      shortDesc: 'Known as Paradise on Earth, Kashmir boasts snow-capped Himalayan peaks, serene Dal Lake shikaras, and verdant valleys.',
      longDesc: 'Immerse yourself in regal Dal Lake houseboats, private gondola rides in Gulmarg, and saffron-scented pine meadows of Pahalgam. Experience Kashmir with dedicated royal butler service and five-star alpine lodges.',
      highlights: ['Dal Lake Royal Houseboat', 'Gulmarg Heli-Skiing & Gondola', 'Pahalgam Pine Valleys', 'Saffron & Walnut Heritage Trail']
    },
    {
      id: 'ladakh',
      name: 'Ladakh',
      country: 'India',
      category: ['india', 'mountains', 'luxury'],
      priceUSD: 1650,
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=85',
      badge: 'Land of High Passes',
      bestSeason: 'May – Sep',
      weather: '15°C - 25°C',
      flightTime: '1h 20m from Delhi',
      shortDesc: 'A dramatic high-altitude desert featuring azure Pangong Lake, ancient cliffside monasteries, and starlit skies.',
      longDesc: 'Traverse the world’s highest motorable passes in custom luxury 4x4s, meditate in ancient Buddhist gompas, and spend starlit nights in glamping geodesic domes beside Pangong Lake.',
      highlights: ['Pangong Lake Luxury Glamping', 'Nubra Valley Camel Safari', 'Khardung La Pass Expedition', 'Thiksey Monastery Sunrise']
    },
    {
      id: 'kerala',
      name: 'Kerala',
      country: 'India',
      category: ['india', 'beach', 'luxury'],
      priceUSD: 1400,
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85',
      badge: "God's Own Country",
      bestSeason: 'Sep – Mar',
      weather: '24°C - 32°C',
      flightTime: '3h from Mumbai / Delhi',
      shortDesc: 'Emerald palm backwaters, bespoke Ayurvedic healing sanctuaries, and misty Munnar tea plantations.',
      longDesc: 'Glide along private backwaters on an air-conditioned cedar houseboat with personal chef, rejuvenate with 5000-year-old authentic Ayurvedic therapies, and relish estate-fresh tea in misty hill estates.',
      highlights: ['Private Alleppey Houseboat', 'Authentic Panchakarma Spa', 'Munnar Tea Valley Estates', 'Kovalam Cliffside Villas']
    },
    {
      id: 'rajasthan',
      name: 'Rajasthan',
      country: 'India',
      category: ['india', 'luxury'],
      priceUSD: 1850,
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=85',
      badge: 'Land of Maharajas',
      bestSeason: 'Oct – Mar',
      weather: '18°C - 28°C',
      flightTime: '1h from Delhi / Mumbai',
      shortDesc: 'Live like royalty in restored palace hotels, explore golden sand dunes, and experience majestic Rajput heritage.',
      longDesc: 'Dine in candlelit lake palaces, journey by private vintage motorcars through Jaipur’s Pink City, and glamp under starlit Thar desert skies with private folk musicians and royal feasts.',
      highlights: ['Udaipur Lake Palace Stays', 'Jaipur Royal Forts & Gems', 'Jaisalmer Desert VIP Dunes', 'Royal Rajput Feasts']
    },
    {
      id: 'goa',
      name: 'Goa',
      country: 'India',
      category: ['india', 'beach', 'luxury'],
      priceUSD: 1100,
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=85',
      badge: 'Coastal Paradise',
      bestSeason: 'Nov – Apr',
      weather: '25°C - 32°C',
      flightTime: '1h 15m from Mumbai',
      shortDesc: 'Sun-kissed private beaches, Portuguese colonial villas, yacht charters, and world-class coastal gastronomy.',
      longDesc: 'Retreat to private beachfront Portuguese estates in South Goa, charter private catamarans on the Arabian Sea, and indulge in Michelin-standard coastal fusion dining.',
      highlights: ['Private Sunset Catamaran', 'Luxury Heritage Villas', 'Candlelight Beach Cabana Dinners', 'Old Goa Heritage Walk']
    },
    {
      id: 'andaman',
      name: 'Andaman Islands',
      country: 'India',
      category: ['india', 'beach', 'luxury'],
      priceUSD: 1750,
      image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?auto=format&fit=crop&w=1000&q=85',
      badge: 'Turquoise Archipelago',
      bestSeason: 'Oct – May',
      weather: '23°C - 30°C',
      flightTime: '2h 15m from Kolkata / Chennai',
      shortDesc: 'Pristine white sand coves, coral reefs teeming with sea life, and seclusion in the Bay of Bengal.',
      longDesc: 'Discover Radhanagar Beach, ranked among Asia’s best, dive through untouched coral gardens, and stay in eco-luxury beach pavilions nestled beneath rainforest canopies.',
      highlights: ['Havelock Island Beach Resort', 'Scuba Diving at Elephant Beach', 'Private Seaplane Transfers', 'Bioluminescent Kayaking']
    },
    {
      id: 'switzerland',
      name: 'Switzerland',
      country: 'Europe',
      category: ['europe', 'mountains', 'luxury'],
      priceUSD: 3800,
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=85',
      badge: 'Alpine Majesty',
      bestSeason: 'Year-Round (Ski: Dec-Apr / Green: Jun-Sep)',
      weather: '18°C (Summer) / -5°C (Winter)',
      flightTime: 'Direct to Zurich / Geneva',
      shortDesc: 'Iconic Matterhorn vistas, scenic Glacier Express trains, turquoise glacial lakes, and Swiss 5-star grand hotels.',
      longDesc: 'From the heights of Jungfraujoch to the glamour of St. Moritz and Zermatt, experience Switzerland via private first-class panoramic rail cars and alpine chalets with private hot springs.',
      highlights: ['Glacier Express Excellence Class', 'Zermatt Matterhorn Chalets', 'Lake Geneva Wine Tasting', 'Private Helicopter Alps Flight']
    },
    {
      id: 'paris',
      name: 'Paris',
      country: 'France',
      category: ['europe', 'luxury'],
      priceUSD: 3200,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85',
      badge: 'City of Lights & Elegance',
      bestSeason: 'Apr – Oct',
      weather: '16°C - 26°C',
      flightTime: 'Direct to CDG',
      shortDesc: 'Haute couture, Michelin-starred cuisine, private Louvre tours, and romantic Seine river yacht cruises.',
      longDesc: 'Immerse yourself in Parisian sophistication with private palace hotel stays on Place Vendôme, after-hours museum viewings, and VIP access to world-renowned fashion ateliers.',
      highlights: ['After-Hours Private Louvre Tour', 'Eiffel View Luxury Suite', 'Private Seine River Yacht Cruise', 'Michelin 3-Star Gastronomy']
    },
    {
      id: 'dubai',
      name: 'Dubai',
      country: 'United Arab Emirates',
      category: ['middle east', 'luxury'],
      priceUSD: 2400,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85',
      badge: 'City of Gold & Opulence',
      bestSeason: 'Nov – Mar',
      weather: '22°C - 30°C',
      flightTime: 'Direct to DXB',
      shortDesc: 'Futuristic skylines, ultra-luxury desert conservation retreats, supercar drives, and private yacht charters.',
      longDesc: 'Experience the pinnacle of Arabian luxury: stay at Burj Al Arab, take private desert falconry safaris with Royal tent dinners, and cruise the Marina on a bespoke superyacht.',
      highlights: ['Burj Al Arab Suite Experience', 'VIP Desert Conservation Safari', 'Private Mega Yacht Cruise', 'Helicopter City Skyline Tour']
    },
    {
      id: 'bali',
      name: 'Bali',
      country: 'Indonesia',
      category: ['asia', 'beach', 'luxury'],
      priceUSD: 1900,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85',
      badge: 'Island of the Gods',
      bestSeason: 'Apr – Oct',
      weather: '26°C - 31°C',
      flightTime: 'Direct to DPS',
      shortDesc: 'Lush jungle infinity pools in Ubud, cliffside Uluwatu ocean villas, and tranquil spiritual ceremonies.',
      longDesc: 'Unwind in private cliffhanging villas over the Indian Ocean, experience authentic Balinese water blessings with royal priests, and dine in candlelit river gorges.',
      highlights: ['Ubud Rainforest Infinity Villas', 'Private Uluwatu Sunset Yacht', 'Sacred Temple VIP Access', 'Organic Farm-to-Table Dining']
    },
    {
      id: 'maldives',
      name: 'Maldives',
      country: 'Maldives',
      category: ['asia', 'beach', 'luxury'],
      priceUSD: 3900,
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=85',
      badge: 'Ultimate Overwater Luxury',
      bestSeason: 'Nov – Apr',
      weather: '27°C - 31°C',
      flightTime: 'Direct to MLE + Seaplane',
      shortDesc: 'Iconic overwater villas, crystal-clear turquoise lagoons, underwater dining, and vibrant coral reefs.',
      longDesc: 'Arrive via private seaplane to your secluded overwater residence with glass floors and private slides into the ocean. Indulge in underwater spa treatments and stargazing cruises.',
      highlights: ['Private Seaplane Island Transfer', 'Overwater Villa with Infinity Pool', 'Subaquatic Underwater Dining', 'Manta Ray & Whale Shark Snorkeling']
    },
    {
      id: 'singapore',
      name: 'Singapore',
      country: 'Singapore',
      category: ['asia', 'luxury'],
      priceUSD: 2100,
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=85',
      badge: 'Garden City of the Future',
      bestSeason: 'Year-Round',
      weather: '26°C - 32°C',
      flightTime: 'Direct to SIN',
      shortDesc: 'Gardens by the Bay, Marina Bay Sands skyline luxury, Michelin dining, and heritage colonial elegance.',
      longDesc: 'Experience the world’s cleanest and most futuristic metropolis with stays at iconic heritage suites at Raffles, private evening yacht cruises, and VIP access to futuristic bio-domes.',
      highlights: ['Raffles Singapore Heritage Suite', 'Private Marina Bay Yacht Charter', 'VIP Gardens by the Bay Access', 'Sentosa Island Private Beach Club']
    },
    {
      id: 'japan',
      name: 'Tokyo & Kyoto',
      country: 'Japan',
      category: ['asia', 'luxury'],
      priceUSD: 3600,
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85',
      badge: 'Land of Tradition & Innovation',
      bestSeason: 'Mar – May (Cherry Blossom) / Sep – Nov (Autumn)',
      weather: '15°C - 24°C',
      flightTime: 'Direct to NRT / HND',
      shortDesc: 'Centuries-old tea ceremonies, private ryokan onsens with Mount Fuji views, and high-speed Shinkansen luxury.',
      longDesc: 'Discover the exquisite balance of Tokyo’s ultra-modern culinary mastery and Kyoto’s tranquil bamboo groves. Enjoy private Geisha tea ceremonies and Michelin Omakase feasts.',
      highlights: ['Private Mount Fuji Onsen Ryokan', 'Kyoto Geisha Tea Ceremony', 'Shinkansen Gran Class Rail', 'Ginza VIP Shopping & Dining']
    },
    {
      id: 'santorini',
      name: 'Santorini',
      country: 'Greece',
      category: ['europe', 'beach', 'luxury'],
      priceUSD: 3400,
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=85',
      badge: 'Aegean Cliffside Wonder',
      bestSeason: 'May – Oct',
      weather: '22°C - 30°C',
      flightTime: 'Direct to JTR / via Athens',
      shortDesc: 'Whitewashed cliffside suites, cobalt Aegean waters, private catamaran sunset sails, and volcanic vineyards.',
      longDesc: 'Perched high on the caldera edge in Oia, enjoy private infinity plunge pools, wine tastings in sun-drenched volcanic vineyards, and secluded catamaran sails around hidden hot springs.',
      highlights: ['Caldera Edge Cave Suite', 'Private Sunset Catamaran Cruise', 'Volcanic Wine Tasting Tour', 'Helicopter Transfer to Mykonos']
    }
  ],

  // Tour Packages
  packages: [
    {
      id: 'royal-kashmir-escape',
      title: 'Royal Kashmir Escape',
      destination: 'Kashmir, India',
      region: 'india',
      duration: '5 Days / 4 Nights',
      daysCount: 5,
      nightsCount: 4,
      priceUSD: 1250,
      rating: 4.9,
      reviewsCount: 148,
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=85',
      featured: true,
      badge: "King's Signature",
      overview: 'Experience snow-capped Himalayan peaks, pristine Dal Lake houseboats, fragrant saffron valleys, and five-star alpine stays.',
      highlights: ['Regal Dal Lake Houseboat Stay', 'Gulmarg Gondola Phase II Tickets', 'Pahalgam Pine Valley Exploration', 'Private Shikara Ride at Twilight'],
      itinerary: [
        { day: 'Day 1', title: 'Arrival in Srinagar & Royal Shikara Sunset', desc: 'VIP airport meet & greet. Transfer to a luxury cedar-carved Royal Houseboat on Dal Lake. Enjoy a private twilight Shikara cruise with traditional Kahwa tea.' },
        { day: 'Day 2', title: 'Gulmarg Gondola & Alpine Meadow Exploration', desc: 'Private chauffeur drive to Gulmarg. Ascend via Gondola Phase II for breathtaking panoramic views of Mt. Apharwat and ski slopes.' },
        { day: 'Day 3', title: 'Pahalgam Valley of Shepherds & Betaab Valley', desc: 'Journey through saffron fields to Pahalgam. Explore Betaab Valley and Aru Valley with a dedicated local historian.' },
        { day: 'Day 4', title: 'Mughal Gardens & Old Srinagar Heritage Walk', desc: 'Private tour of Nishat Bagh, Shalimar Bagh, and Jamia Masjid. Enjoy royal Wazwan dining in the evening.' },
        { day: 'Day 5', title: 'Farewell Kashmir & Departure', desc: 'Morning breakfast overlooking the lake and VIP airport transfer with royal gift package.' }
      ],
      inclusions: ['5-Star Luxury Stays & Royal Houseboat', 'All Gourmet Meals (Wazwan Included)', 'Private Luxury Chauffeur Vehicle', 'VIP Gondola & Monument Passes', '24/7 Dedicated Concierge'],
      exclusions: ['International Flights', 'Personal Expenses', 'Travel Insurance']
    },
    {
      id: 'ladakh-adventure',
      title: 'Ladakh High-Pass Adventure',
      destination: 'Ladakh, India',
      region: 'india',
      duration: '7 Days / 6 Nights',
      daysCount: 7,
      nightsCount: 6,
      priceUSD: 1650,
      rating: 5.0,
      reviewsCount: 112,
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=85',
      featured: true,
      badge: 'High Altitude Luxury',
      overview: 'Explore ancient cliffside monasteries, cross the world’s highest passes, and stay in luxury glamping tents by turquoise Pangong Lake.',
      highlights: ['Pangong Lake Luxury Glamping', 'Nubra Valley Double-Humped Camels', 'Khardung La High Altitude Pass', 'Thiksey Monastery Sunrise Prayer'],
      itinerary: [
        { day: 'Day 1', title: 'Arrival in Leh & Acclimatization in Luxury', desc: 'Arrive at Leh Airport, VIP transfer to your luxury mountain resort with oxygen therapy amenities.' },
        { day: 'Day 2', title: 'Monasteries & Leh Palace Tour', desc: 'Visit Shey Palace, Thiksey Monastery, and enjoy sunset at Shanti Stupa.' },
        { day: 'Day 3', title: 'Khardung La Pass to Nubra Valley', desc: 'Cross Khardung La at 17,982 ft in luxury 4x4 SUVs. Arrive at Nubra Valley glamping resort.' },
        { day: 'Day 4', title: 'Hunder Sand Dunes & Diskit Monastery', desc: 'Experience Bactrian camel rides on white dunes and visit the giant Maitreya Buddha statue.' },
        { day: 'Day 5', title: 'Pangong Tso Lake Marvel', desc: 'Drive to the majestic Pangong Lake. Settle into heated dome tents right along the shore.' },
        { day: 'Day 6', title: 'Chang La Pass Return to Leh', desc: 'Scenic journey back to Leh with stops at hidden mountain viewpoints. Royal farewell banquet.' },
        { day: 'Day 7', title: 'Departure from Leh', desc: 'Breakfast and private transfer to Leh Airport.' }
      ],
      inclusions: ['4x4 Luxury Vehicles', 'Oxygen Fitted Suites & Glamping', 'All Meals & Monastery Permits', 'Experienced Mountain Doctor on Call'],
      exclusions: ['Airfare to Leh', 'Personal Tips & Porterage']
    },
    {
      id: 'kerala-serenity',
      title: 'Kerala Serenity & Ayurveda',
      destination: 'Kerala, India',
      region: 'india',
      duration: '6 Days / 5 Nights',
      daysCount: 6,
      nightsCount: 5,
      priceUSD: 1400,
      rating: 4.8,
      reviewsCount: 95,
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85',
      featured: true,
      badge: 'Wellness & Spa',
      overview: 'Luxury houseboats, lush emerald backwaters, serene beaches, authentic Ayurvedic doctor consultations, and tea estates.',
      highlights: ['Private Chef Air-Conditioned Houseboat', 'Daily Ayurvedic Rejuvenation Massages', 'Munnar High-Altitude Tea Estates', 'Kathakali Royal Performance'],
      itinerary: [
        { day: 'Day 1', title: 'Cochin Arrival & Heritage Fort Kochi', desc: 'VIP meet at Cochin Airport. Stay at colonial heritage hotel and see Chinese fishing nets.' },
        { day: 'Day 2', title: 'Munnar Tea Hills Scenic Drive', desc: 'Ascend to the rolling green tea plantations of Munnar with stops at Cheeyappara Waterfalls.' },
        { day: 'Day 3', title: 'Munnar Tea Museum & Eravikulam', desc: 'Spot the Nilgiri Tahr and tour exclusive tea tasting factories.' },
        { day: 'Day 4', title: 'Thekkady Spice Plantations & Periyar', desc: 'Private spice garden tour and tranquil boat ride in Periyar Wildlife Sanctuary.' },
        { day: 'Day 5', title: 'Alleppey Private Luxury Houseboat Cruise', desc: 'Board a luxury wooden Kettuvallam with master chef, cruising tranquil backwaters.' },
        { day: 'Day 6', title: 'Departure from Cochin', desc: 'Morning backwater breakfast and transfer to Cochin Airport.' }
      ],
      inclusions: ['Luxury Stays & Full-Board Houseboat', 'Ayurvedic Wellness Session', 'Private Chauffeur Car', 'All Entry Tickets'],
      exclusions: ['Flights', 'Alcoholic Beverages']
    },
    {
      id: 'rajasthan-heritage',
      title: 'Rajasthan Royal Heritage',
      destination: 'Rajasthan, India',
      region: 'india',
      duration: '7 Days / 6 Nights',
      daysCount: 7,
      nightsCount: 6,
      priceUSD: 1850,
      rating: 4.9,
      reviewsCount: 160,
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=85',
      featured: true,
      badge: 'Maharaja Heritage',
      overview: 'Experience palatial opulence, monumental forts, royal desert camps, gourmet Rajput dining, and private royal guides.',
      highlights: ['Lake Pichola Private Boat & Udaipur Palaces', 'Jaipur Amer Fort VIP Elephant/Jeep Entry', 'Jodhpur Mehrangarh Fort Sunset', 'Desert Luxury Tented Camp with Folk Music'],
      itinerary: [
        { day: 'Day 1', title: 'Jaipur Pink City Royal Welcome', desc: 'Check in to a heritage palace hotel. Evening visit to City Palace & Jantar Mantar.' },
        { day: 'Day 2', title: 'Amer Fort & Hawa Mahal', desc: 'Exclusive early morning entry to Amer Fort followed by a private royal gem & textile viewing.' },
        { day: 'Day 3', title: 'Jodhpur the Blue City', desc: 'Drive to Jodhpur. Explore the majestic Mehrangarh Fort and Umaid Bhawan Palace.' },
        { day: 'Day 4', title: 'Ranakpur Marble Temples & Drive to Udaipur', desc: 'Marvel at 1444 hand-carved marble pillars in Ranakpur en route to the City of Lakes.' },
        { day: 'Day 5', title: 'Udaipur City Palace & Lake Pichola', desc: 'Private tour of the grand City Palace and sunset champagne boat cruise on Lake Pichola.' },
        { day: 'Day 6', title: 'Saheliyon ki Bari & Royal Rajput Dinner', desc: 'Explore historic royal gardens and enjoy a private candlelit courtyard dinner.' },
        { day: 'Day 7', title: 'Departure from Udaipur', desc: 'Breakfast and private transfer to Udaipur Airport.' }
      ],
      inclusions: ['5-Star Palace Hotel Accommodations', 'Private Chauffeur Sedan/SUV', 'All Monument Entry Fees', 'Royal Sunset Boat Cruise'],
      exclusions: ['Domestic/International Flights', 'Gratuities']
    },
    {
      id: 'maldives-luxury-retreat',
      title: 'Maldives Luxury Lagoon Retreat',
      destination: 'Maldives',
      region: 'asia',
      duration: '5 Days / 4 Nights',
      daysCount: 5,
      nightsCount: 4,
      priceUSD: 3900,
      rating: 5.0,
      reviewsCount: 210,
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=85',
      featured: true,
      badge: 'Ultra Luxury',
      overview: 'Private overwater pool villas, crystal-clear lagoons, bespoke underwater dinners, and pristine marine reefs.',
      highlights: ['Private Seaplane Transfers', 'Overwater Sunset Villa with Private Pool', 'Bespoke Underwater Dining Experience', 'Dolphin & Manta Ray Sunset Cruise'],
      itinerary: [
        { day: 'Day 1', title: 'Seaplane Arrival & Overwater Villa Check-in', desc: 'Scenic flight over coral atolls. Champagne welcome in your private overwater haven.' },
        { day: 'Day 2', title: 'Coral Reef Snorkeling & Sunset Dolphin Cruise', desc: 'Guided snorkeling through private house reefs followed by sunset dolphin sailing.' },
        { day: 'Day 3', title: 'Underwater Spa & Private Sandbank Picnic', desc: 'Enjoy relaxing holistic treatments 6 meters beneath the sea and secluded lunch on a private islet.' },
        { day: 'Day 4', title: 'Deep Sea Fishing & Underwater Degustation', desc: 'Charter a luxury sportfisher and conclude the day with a 7-course underwater degustation dinner.' },
        { day: 'Day 5', title: 'Farewell Paradise', desc: 'Floating breakfast in your pool and return seaplane to Malé International Airport.' }
      ],
      inclusions: ['Roundtrip Seaplane Transfers', 'All-Inclusive Gourmet Dining & Fine Wines', 'Personal Island Butler', 'Water Sports Equipment'],
      exclusions: ['International Flights', 'Motorized Watersports Extra']
    },
    {
      id: 'switzerland-dream-journey',
      title: 'Switzerland Dream Alpine Journey',
      destination: 'Switzerland',
      region: 'europe',
      duration: '8 Days / 7 Nights',
      daysCount: 8,
      nightsCount: 7,
      priceUSD: 3800,
      rating: 4.9,
      reviewsCount: 184,
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=85',
      featured: true,
      badge: 'Alpine Grandeur',
      overview: 'Experience the Swiss Alps, Glacier Express panoramic train, Zermatt Matterhorn views, Lucerne lakes, and 5-star Swiss hospitality.',
      highlights: ['Glacier Express Excellence Class Pass', 'Top of Europe Jungfraujoch Excursion', 'Zermatt Matterhorn Luxury Chalet Stay', 'Lake Lucerne Private Yacht Cruise'],
      itinerary: [
        { day: 'Day 1', title: 'Zurich Arrival & Lucerne Transfer', desc: 'VIP meet at Zurich Airport. Transfer to luxury lakeside hotel in Lucerne.' },
        { day: 'Day 2', title: 'Mount Pilatus & Lucerne Yacht Cruise', desc: 'Ascend the world’s steepest cogwheel railway and enjoy private yacht sail on Lake Lucerne.' },
        { day: 'Day 3', title: 'Interlaken & Jungfraujoch Top of Europe', desc: 'Ascend by Eiger Express cable car to the highest railway station in Europe.' },
        { day: 'Day 4', title: 'Glacier Express Excellence Class to Zermatt', desc: 'Traverse 291 bridges and 91 tunnels in premier panoramic luxury with 5-course gourmet lunch.' },
        { day: 'Day 5', title: 'Gornergrat & Matterhorn Views', desc: 'Ascend Gornergrat for the iconic Matterhorn reflection in Riffelsee Lake.' },
        { day: 'Day 6', title: 'Montreux & Lake Geneva Riviera', desc: 'Visit Chillon Castle and taste Lavaux UNESCO vineyard wines.' },
        { day: 'Day 7', title: 'Geneva Luxury Shopping & Farewell Dinner', desc: 'Private watchmaking boutique tour and Michelin star dining.' },
        { day: 'Day 8', title: 'Departure from Geneva', desc: 'Breakfast and private transfer to Geneva Airport.' }
      ],
      inclusions: ['1st Class Swiss Travel Pass & Glacier Express', '5-Star Swiss Grand Hotels', 'All Mountain Excursion Cable Cars', 'Daily Gourmet Breakfasts & Dinners'],
      exclusions: ['International Flights', 'Personal Souvenirs']
    },
    {
      id: 'dubai-ultra-luxe',
      title: 'Dubai Sky & Sands Ultra-Luxe',
      destination: 'Dubai, UAE',
      region: 'middle east',
      duration: '5 Days / 4 Nights',
      daysCount: 5,
      nightsCount: 4,
      priceUSD: 2400,
      rating: 4.9,
      reviewsCount: 135,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85',
      featured: false,
      badge: 'Royal Opulence',
      overview: 'Burj Al Arab luxury, private superyacht Marina cruise, royal desert conservation reserve safari, and Michelin dining.',
      highlights: ['Burj Al Arab Suite Experience', 'Private Mega Yacht Cruise with Chef', 'Vintage Land Rover Desert Safari', 'Helicopter City Tour'],
      itinerary: [
        { day: 'Day 1', title: 'Arrival in Dubai & Rolls Royce Transfer', desc: 'Private Rolls Royce Phantom transfer from DXB to your luxury Burj Al Arab suite.' },
        { day: 'Day 2', title: 'Helicopter Tour & Dubai Marina Yacht Cruise', desc: 'Aerial skyline tour followed by a 4-hour sunset yacht charter with private barbecue.' },
        { day: 'Day 3', title: 'Platinum Desert Conservation Reserve', desc: '1950s vintage Land Rover safari, private royal falconry demonstration, and 6-course dune dinner.' },
        { day: 'Day 4', title: 'At the Top Burj Khalifa VIP & Gold Souk', desc: 'Skip-the-line VIP lounge access at Burj Khalifa 148th floor and bespoke jewelry consultation.' },
        { day: 'Day 5', title: 'Departure with VIP Airport Lounge', desc: 'Leisurely morning spa and private transfer to Dubai International Airport.' }
      ],
      inclusions: ['5-Star Luxury Suites', 'Private Chauffeur Rolls Royce / Maybach', 'Helicopter & Yacht Charters', 'VIP Desert Reserve Safari'],
      exclusions: ['International Airfare', 'Personal Shopping']
    },
    {
      id: 'bali-enchanted-sanctuary',
      title: 'Bali Enchanted Rainforest & Coastal Sanctuary',
      destination: 'Bali, Indonesia',
      region: 'asia',
      duration: '6 Days / 5 Nights',
      daysCount: 6,
      nightsCount: 5,
      priceUSD: 1900,
      rating: 4.8,
      reviewsCount: 104,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85',
      featured: false,
      badge: 'Tropical Bliss',
      overview: 'Ubud jungle infinity pool villas, private Uluwatu oceanfront estates, royal water temple blessings, and sunset beach clubs.',
      highlights: ['Ubud Private Jungle Pool Villa', 'Private Uluwatu Oceanfront Villa', 'Sacred Water Temple Blessing', 'Private Catamaran to Nusa Penida'],
      itinerary: [
        { day: 'Day 1', title: 'Arrival in Bali & Ubud Jungle Retreat', desc: 'VIP airport fast track and transfer to a serene rainforest valley resort.' },
        { day: 'Day 2', title: 'Tegalalang Rice Terraces & Royal Water Palace', desc: 'Private morning photoshoot in Tegalalang and exclusive holy spring water purification.' },
        { day: 'Day 3', title: 'Mount Batur Sunrise & Transfer to Uluwatu', desc: 'Optional sunrise 4x4 Jeep tour followed by transfer to a cliffhanging luxury villa.' },
        { day: 'Day 4', title: 'Nusa Penida Private Speedboat Adventure', desc: 'Explore Kelingking Beach, Angel’s Billabong, and snorkel with giant manta rays.' },
        { day: 'Day 5', title: 'Uluwatu Sunset Temple & Seafood Barbecue', desc: 'Watch Kecak dance on the cliffs followed by a private Jimbaran Bay candlelight seafood feast.' },
        { day: 'Day 6', title: 'Departure from Bali', desc: 'Floating morning breakfast and luxury transfer to Denpasar Airport.' }
      ],
      inclusions: ['Private Pool Villas throughout', 'Dedicated Chauffeur & Guide', 'Private Speedboat Charter', 'All Temple & VIP Entrances'],
      exclusions: ['International Flights', 'Personal Laundry & Extra Spa']
    }
  ],

  // Unique Travel Experiences
  experiences: [
    {
      id: 'mountain-adventures',
      title: 'Mountain Adventures',
      tier: 'Alpine Exclusives',
      icon: '🏔️',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85',
      desc: 'Himalayan high-pass treks, Swiss Alps heli-skiing, and secluded high-altitude chalets overlooking glaciated peaks.',
      level: 'Moderate to High Adventure'
    },
    {
      id: 'luxury-beach-escapes',
      title: 'Luxury Beach Escapes',
      tier: 'Coastal Opulence',
      icon: '🏝️',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85',
      desc: 'Private overwater bungalows in the Maldives, secluded turquoise coves in Andaman, and private beach cabanas.',
      level: 'Pure Relaxation'
    },
    {
      id: 'royal-heritage-tours',
      title: 'Royal Heritage Tours',
      tier: 'Palatial Journeys',
      icon: '🏰',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=85',
      desc: 'Private access to maharaja palaces, historical European castles, and grand dining in opulent ballrooms.',
      level: 'Cultural Immersion'
    },
    {
      id: 'island-adventures',
      title: 'Island Adventures',
      tier: 'Archipelago Expeditions',
      icon: '🌊',
      image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1000&q=85',
      desc: 'Bespoke yacht charters, snorkeling with bioluminescence, and hidden sea caves in remote ocean archipelagos.',
      level: 'Light Adventure'
    },
    {
      id: 'desert-expeditions',
      title: 'Desert Expeditions',
      tier: 'Dune Sanctuary',
      icon: '🐪',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=85',
      desc: 'Starlit Arabian desert camps, Thar royal caravans, falconry demonstrations, and private campfire banquets.',
      level: 'Signature Luxury'
    },
    {
      id: 'wellness-ayurveda',
      title: 'Wellness & Ayurveda',
      tier: 'Holistic Sanctuaries',
      icon: '🧘',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85',
      desc: 'Ancient Ayurvedic detoxification in Kerala, Himalayan meditation retreats, and thermal hot-spring spas.',
      level: 'Rejuvenation'
    },
    {
      id: 'culinary-journeys',
      title: 'Culinary Journeys',
      tier: 'Epicurean Elite',
      icon: '🍽️',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85',
      desc: 'Private dinners with Michelin-starred chefs, vineyard tastings in France, and royal Kashmiri Wazwan banquets.',
      level: 'Gourmet Gastronomy'
    },
    {
      id: 'photography-tours',
      title: 'Photography Tours',
      tier: 'Visual Masterclass',
      icon: '📸',
      image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=1000&q=85',
      desc: 'Masterclass photography expeditions guided by award-winning National Geographic and landscape photographers.',
      level: 'Creative Exploration'
    },
    {
      id: 'luxury-helicopter',
      title: 'Luxury Helicopter Charters',
      tier: 'Skyline Expeditions',
      icon: '🚁',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=85',
      desc: 'Private scenic flights over the Swiss Alps, Dubai skyline, and direct glacier transfers to high mountain peaks.',
      level: 'VIP Access'
    },
    {
      id: 'wilderness-adventures',
      title: 'Wilderness & Wildlife',
      tier: 'Untamed Frontiers',
      icon: '🏕️',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=85',
      desc: 'Bengal tiger safaris in Ranthambore, African safari luxury lodges, and conservation treks in untouched wilderness.',
      level: 'Thrilling Safari'
    }
  ],

  // Travel Stories & Blog Articles
  stories: [
    {
      id: '1',
      title: '10 Places in India You Must Experience Once',
      category: 'Inspiration',
      date: 'Aug 14, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=85',
      excerpt: 'From the frozen peaks of Ladakh to the tropical backwaters of Kerala, discover the subcontinents most transcendent royal destinations.'
    },
    {
      id: '2',
      title: 'The Ultimate Guide to a Luxury Kashmir Escape',
      category: 'Travel Guide',
      date: 'Aug 10, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=85',
      excerpt: 'How to experience Dal Lake houseboats, private Gulmarg gondola excursions, and royal Wazwan dining in uncompromising comfort.'
    },
    {
      id: '3',
      title: 'Best Destinations for a Romantic Getaway',
      category: 'Honeymoon & Couples',
      date: 'Aug 05, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=85',
      excerpt: 'Secluded private islands in the Maldives, cliffside cave suites in Santorini, and private gondolas in Venice crafted for two.'
    },
    {
      id: '4',
      title: '7 Extraordinary Experiences in Ladakh',
      category: 'Adventure',
      date: 'Jul 28, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=85',
      excerpt: 'Stargazing by Pangong Lake, double-humped camel rides on high dunes, and peaceful sunrise chants in 1,000-year-old monasteries.'
    },
    {
      id: '5',
      title: 'A Journey Through Royal Rajasthan',
      category: 'Heritage & Culture',
      date: 'Jul 20, 2026',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=85',
      excerpt: 'Behind the velvet ropes of Jaipur, Jodhpur, and Udaipur: exploring the private residences and culinary secrets of Indian kings.'
    },
    {
      id: '6',
      title: 'Hidden Paradise: Discover the Beauty of Kerala',
      category: 'Wellness & Nature',
      date: 'Jul 15, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85',
      excerpt: 'Why the tranquil backwaters, fragrant spice plantations, and authentic Ayurvedic therapies of Kerala offer the ultimate soul retreat.'
    }
  ],

  // Testimonials
  testimonials: [
    {
      quote: "King's Travels transformed our holiday into an unforgettable experience. Every single detail — from private helicopter transfers to personalized butler service — was executed with perfection.",
      author: 'Rahul & Priya Kapoor',
      trip: 'Luxury Kashmir & Ladakh Journey',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    {
      quote: 'The attention to detail, magnificent palace hotels, and seamless private chauffeur service made our Rajasthan anniversary trip feel like a genuine royal voyage.',
      author: 'Ananya Mehta',
      trip: 'Rajasthan Royal Heritage Tour',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      quote: 'From booking our Maldives overwater villa to returning home, everything felt effortless. Truly the gold standard in premium luxury travel concierge.',
      author: 'Arjun & Maya Sharma',
      trip: 'Maldives Private Lagoon Retreat',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  ]
};
