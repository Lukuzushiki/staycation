const catalogue = [
  {
    _id: "ocean-breeze-villa",
    title: "Ocean Breeze Villa",
    city: "Bali",
    country: "Indonesia",
    type: "Villa",
    price: 148,
    unit: "night",
    imageCard: "/images/most_picked1.jpg",
    categoryImage: "/images/category1.jpg",
    isPopular: true,
    tagline: "Cliffside hideaway with sunrise views and a private plunge pool.",
    description:
      "<p>Ocean Breeze Villa is designed for travelers who want a polished island stay without sacrificing comfort. The layout balances open living spaces, warm textures, and a private outdoor corner that works equally well for slow mornings or golden-hour dinners.</p><p>For portfolio purposes, this project now runs entirely on local mock data while preserving the original browsing, property detail, and checkout journey. That keeps the experience reliable even after the original backend was deprecated.</p><p>Guests can expect a calm atmosphere, thoughtful amenities, and quick access to beaches, cafes, and creative neighborhoods across southern Bali.</p>",
    featured: [
      "/images/img-featured-1.jpg",
      "/images/img-featured-2.jpg",
      "/images/img-featured-3.jpg",
    ],
    features: [
      { qty: 3, name: "bedrooms", imageUrl: "/images/icons/icon_bedroom.svg" },
      { qty: 2, name: "bathrooms", imageUrl: "/images/icons/icon_bathroom.svg" },
      { qty: 1, name: "living room", imageUrl: "/images/icons/icon_living_room.svg" },
      { qty: 80, name: "mbps wifi", imageUrl: "/images/icons/icon_wifi.svg" },
      { qty: 2, name: "AC units", imageUrl: "/images/icons/icon_ac.svg" },
      { qty: 1, name: "smart TV", imageUrl: "/images/icons/icon_tv.svg" },
    ],
    activities: [
      { _id: "obv-act-1", name: "Tegal Wangi", type: "Sunset Spot", imageUrl: "/images/treasure-1.jpg" },
      { _id: "obv-act-2", name: "Canggu Ride", type: "Scooter Route", imageUrl: "/images/treasure-2.jpg" },
      { _id: "obv-act-3", name: "Local Brunch", type: "Cafe Hop", imageUrl: "/images/treasure-3.jpg" },
    ],
  },
  {
    _id: "seoul-studio-loft",
    title: "Seoul Studio Loft",
    city: "Seoul",
    country: "South Korea",
    type: "Apartment",
    price: 92,
    unit: "night",
    imageCard: "/images/most_picked2.jpg",
    categoryImage: "/images/category2.jpg",
    isPopular: false,
    tagline: "Compact city stay with clean lines and smart amenities.",
  },
  {
    _id: "bogor-forest-house",
    title: "Bogor Forest House",
    city: "Bogor",
    country: "Indonesia",
    type: "House",
    price: 116,
    unit: "night",
    imageCard: "/images/most_picked3.jpg",
    categoryImage: "/images/category3.jpg",
    isPopular: true,
    tagline: "Rainy-day retreat wrapped in green views and fresh air.",
  },
  {
    _id: "kyoto-river-inn",
    title: "Kyoto River Inn",
    city: "Kyoto",
    country: "Japan",
    type: "Inn",
    price: 134,
    unit: "night",
    imageCard: "/images/most_picked4.jpg",
    categoryImage: "/images/category4.jpg",
    isPopular: false,
    tagline: "Quiet riverside base near temples, alleys, and tea houses.",
  },
  {
    _id: "santorini-white-suite",
    title: "Santorini White Suite",
    city: "Oia",
    country: "Greece",
    type: "Suite",
    price: 184,
    unit: "night",
    imageCard: "/images/most_picked5.jpg",
    categoryImage: "/images/category5.jpg",
    isPopular: true,
    tagline: "Bright caldera stay with terrace seating and sea horizon views.",
  },
  {
    _id: "bandung-art-deco-room",
    title: "Bandung Art Deco Room",
    city: "Bandung",
    country: "Indonesia",
    type: "Hotel",
    price: 74,
    unit: "night",
    imageCard: "/images/category6.jpg",
    categoryImage: "/images/category6.jpg",
    isPopular: false,
    tagline: "An affordable boutique option with a warm city-center vibe.",
  },
  {
    _id: "lisbon-harbor-flat",
    title: "Lisbon Harbor Flat",
    city: "Lisbon",
    country: "Portugal",
    type: "Apartment",
    price: 98,
    unit: "night",
    imageCard: "/images/category7.jpg",
    categoryImage: "/images/category7.jpg",
    isPopular: false,
    tagline: "Colorful stay above tiled streets and neighborhood bakeries.",
  },
  {
    _id: "ubud-jungle-retreat",
    title: "Ubud Jungle Retreat",
    city: "Ubud",
    country: "Indonesia",
    type: "Villa",
    price: 164,
    unit: "night",
    imageCard: "/images/category8.jpg",
    categoryImage: "/images/category8.jpg",
    isPopular: true,
    tagline: "A slower, greener stay built around privacy and soft natural light.",
  },
  {
    _id: "melbourne-lane-stay",
    title: "Melbourne Lane Stay",
    city: "Melbourne",
    country: "Australia",
    type: "Loft",
    price: 101,
    unit: "night",
    imageCard: "/images/category9.jpg",
    categoryImage: "/images/category9.jpg",
    isPopular: false,
    tagline: "Warehouse-inspired loft close to coffee, design, and nightlife.",
  },
  {
    _id: "osaka-neon-hotel",
    title: "Osaka Neon Hotel",
    city: "Osaka",
    country: "Japan",
    type: "Hotel",
    price: 88,
    unit: "night",
    imageCard: "/images/category10.jpg",
    categoryImage: "/images/category10.jpg",
    isPopular: false,
    tagline: "Modern stay built for quick city breaks and late-night ramen runs.",
  },
  {
    _id: "lake-como-hideout",
    title: "Lake Como Hideout",
    city: "Como",
    country: "Italy",
    type: "Residence",
    price: 172,
    unit: "night",
    imageCard: "/images/category11.jpg",
    categoryImage: "/images/category11.jpg",
    isPopular: true,
    tagline: "Lakeside retreat with elegant interiors and mountain reflections.",
  },
  {
    _id: "yogyakarta-gallery-home",
    title: "Yogyakarta Gallery Home",
    city: "Yogyakarta",
    country: "Indonesia",
    type: "House",
    price: 69,
    unit: "night",
    imageCard: "/images/category12.jpg",
    categoryImage: "/images/category12.jpg",
    isPopular: false,
    tagline: "Creative stay blending local craft details with laid-back comfort.",
  },
];

function toCardItem(property, imagePath = property.imageCard) {
  return {
    _id: property._id,
    title: property.title,
    type: property.type,
    city: property.city,
    country: property.country,
    price: property.price,
    unit: property.unit,
    isPopular: property.isPopular,
    imageId: [
      {
        _id: `${property._id}-cover`,
        imageUrl: imagePath,
      },
    ],
  };
}

function toDetail(property) {
  const featureImageList = property.featured || [
    "/images/img-featured-1.jpg",
    "/images/img-featured-2.jpg",
    "/images/img-featured-3.jpg",
  ];

  return {
    _id: property._id,
    title: property.title,
    type: property.type,
    city: property.city,
    country: property.country,
    price: property.price,
    unit: property.unit,
    tagline: property.tagline,
    description:
      property.description ||
      `<p>${property.title} delivers a polished, reliable stay experience with clean visuals, local imagery, and a complete mock-powered booking flow.</p><p>This property page is intentionally self-contained so the portfolio demo remains stable without relying on the original backend.</p>`,
    imageId: featureImageList.map((imageUrl, index) => ({
      _id: `${property._id}-featured-${index + 1}`,
      imageUrl,
    })),
    featureId:
      property.features ||
      [
        { qty: 2, name: "bedrooms", imageUrl: "/images/icons/icon_bedroom.svg" },
        { qty: 1, name: "bathroom", imageUrl: "/images/icons/icon_bathroom.svg" },
        { qty: 1, name: "dining room", imageUrl: "/images/icons/icon_dining_room.svg" },
        { qty: 50, name: "mbps wifi", imageUrl: "/images/icons/icon_wifi.svg" },
      ],
    activityId:
      property.activities ||
      [
        { _id: `${property._id}-act-1`, name: "Neighborhood Walk", type: "Explore", imageUrl: "/images/treasure-1.jpg" },
        { _id: `${property._id}-act-2`, name: "Signature Cafe", type: "Food", imageUrl: "/images/treasure-2.jpg" },
        { _id: `${property._id}-act-3`, name: "Photo Spot", type: "Leisure", imageUrl: "/images/treasure-3.jpg" },
      ],
    testimonial: {
      _id: `${property._id}-testimonial`,
      imageUrl: "/images/testimonial-landingpage.jpg",
      name: "Portfolio-ready stay",
      rate: 4.8,
      content:
        "The flow feels polished, the imagery is consistent, and the booking journey works smoothly without any external API dependency.",
      familyName: "Demo Guest",
      familyOccupation: "Product Reviewer",
    },
    categories: [
      {
        _id: `${property._id}-related`,
        name: "Similar stays you might like",
        itemId: catalogue
          .filter((candidate) => candidate._id !== property._id)
          .slice(0, 4)
          .map((candidate) => toCardItem(candidate, candidate.categoryImage)),
      },
    ],
  };
}

export const landingPageData = {
  hero: {
    travellers: 80409,
    treasures: 1264,
    cities: 58,
  },
  mostPicked: catalogue.slice(0, 5).map((property) => toCardItem(property)),
  category: [
    {
      _id: "category-curated-homes",
      name: "Curated homes for slow weekends",
      itemId: catalogue.slice(0, 4).map((property) => toCardItem(property, property.categoryImage)),
    },
    {
      _id: "category-city-stays",
      name: "City stays with character",
      itemId: catalogue.slice(4, 8).map((property) => toCardItem(property, property.categoryImage)),
    },
    {
      _id: "category-design-forward",
      name: "Design-forward escapes",
      itemId: catalogue.slice(8, 12).map((property) => toCardItem(property, property.categoryImage)),
    },
  ],
  testimonial: {
    _id: "landing-testimonial",
    imageUrl: "/images/testimonial-landingpage.jpg",
    name: "A cleaner portfolio presentation",
    rate: 4.9,
    content:
      "This version feels production-ready: the mock data is stable, the flow works end-to-end, and the visual presentation is much easier to showcase.",
    familyName: "Portfolio Review",
    familyOccupation: "Frontend Mentor",
  },
};

const detailPages = catalogue.reduce((accumulator, property) => {
  accumulator[property._id] = toDetail(property);
  return accumulator;
}, {});

function delay(result, timeout = 250) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(result), timeout);
  });
}

export function getMockPage(url) {
  if (url === "/landing-page") {
    return delay(landingPageData);
  }

  if (url.startsWith("/detail-page/")) {
    const id = url.replace("/detail-page/", "");
    return delay(detailPages[id] || null);
  }

  return delay(null);
}

export function submitMockBooking(payload) {
  const submittedAt = new Date().toISOString();
  const bookingCode = `STAY-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

  const proofPayment = payload.get("image");

  const booking = {
    bookingCode,
    submittedAt,
    firstName: payload.get("firstName"),
    lastName: payload.get("lastName"),
    email: payload.get("email"),
    phoneNumber: payload.get("phoneNumber"),
    idItem: payload.get("idItem"),
    duration: payload.get("duration"),
    bookingStartDate: payload.get("bookingStartDate"),
    bookingEndDate: payload.get("bookingEndDate"),
    accountHolder: payload.get("accountHolder"),
    bankFrom: payload.get("bankFrom"),
    proofPaymentName: proofPayment?.name || "payment-proof.jpg",
    status: "confirmed",
  };

  try {
    window.sessionStorage.setItem("staycation:lastBooking", JSON.stringify(booking));
  } catch (error) {
    // Ignore storage failures in restricted environments.
  }

  return delay({
    data: booking,
  }, 500);
}
