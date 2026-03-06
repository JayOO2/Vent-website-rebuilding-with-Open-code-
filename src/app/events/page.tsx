"use client";

import { useState, useEffect } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  location: string;
  image: string;
  description: string;
  ticketLinks: {
    name: string;
    url: string;
    color: string;
  }[];
}

const defaultEvents: Event[] = [
  {
    id: 1,
    title: "Cafe De Anatolia Night",
    date: "March 15, 2026",
    venue: "Oriental Lounge",
    location: "Istanbul, Turkey",
    image: "https://cafe-de-anatolia.com/img/uploads/802145122_billy-esteban---copy.jpg",
    description: "Experience an unforgettable night of oriental beats and chillout music",
    ticketLinks: [
      { name: "Eventbrite", url: "#", color: "bg-orange-500 hover:bg-orange-600" },
      { name: "Ticketmaster", url: "#", color: "bg-red-500 hover:bg-red-600" },
      { name: "Viagogo", url: "#", color: "bg-green-500 hover:bg-green-600" },
      { name: "StubHub", url: "#", color: "bg-yellow-500 hover:bg-yellow-600" },
      { name: "Seatgeek", url: "#", color: "bg-purple-500 hover:bg-purple-600" },
    ],
  },
  {
    id: 2,
    title: "Anatolia Beach Party",
    date: "April 20, 2026",
    venue: "Sunset Beach Club",
    location: "Antalya, Turkey",
    image: "https://cafe-de-anatolia.com/img/uploads/724102938_ae26c1a725b98fa3f71d7ccd9d34bf1d01bc20c5.jpg",
    description: "Beach party with the best oriental and ethno house music",
    ticketLinks: [
      { name: "Eventbrite", url: "#", color: "bg-orange-500 hover:bg-orange-600" },
      { name: "Ticketmaster", url: "#", color: "bg-red-500 hover:bg-red-600" },
      { name: "Viagogo", url: "#", color: "bg-green-500 hover:bg-green-600" },
      { name: "RA", url: "#", color: "bg-pink-500 hover:bg-pink-600" },
      { name: "Dice FM", url: "#", color: "bg-indigo-500 hover:bg-indigo-600" },
    ],
  },
  {
    id: 3,
    title: "Deep House Sessions",
    date: "May 10, 2026",
    venue: "Underground Club",
    location: "Bodrum, Turkey",
    image: "https://cafe-de-anatolia.com/img/uploads/276685172_2.jpg",
    description: "Deep house music night with featured artists from around the world",
    ticketLinks: [
      { name: "Eventbrite", url: "#", color: "bg-orange-500 hover:bg-orange-600" },
      { name: "Dice FM", url: "#", color: "bg-indigo-500 hover:bg-indigo-600" },
      { name: "Skiddle", url: "#", color: "bg-teal-500 hover:bg-teal-600" },
      { name: "RA", url: "#", color: "bg-pink-500 hover:bg-pink-600" },
      { name: "Festivall", url: "#", color: "bg-cyan-500 hover:bg-cyan-600" },
    ],
  },
  {
    id: 4,
    title: "Chill Out Festival",
    date: "June 21, 2026",
    venue: "Desert Arena",
    location: "Cappadocia, Turkey",
    image: "https://cafe-de-anatolia.com/img/uploads/433579432_6.jpg",
    description: "Open-air festival featuring the finest chillout and ambient music",
    ticketLinks: [
      { name: "Eventbrite", url: "#", color: "bg-orange-500 hover:bg-orange-600" },
      { name: "Ticketmaster", url: "#", color: "bg-red-500 hover:bg-red-600" },
      { name: "Festicket", url: "#", color: "bg-blue-500 hover:bg-blue-600" },
      { name: "Songkick", url: "#", color: "bg-green-500 hover:bg-green-600" },
      { name: "Bandsintown", url: "#", color: "bg-pink-500 hover:bg-pink-600" },
    ],
  },
  {
    id: 5,
    title: "Oriental Night",
    date: "July 5, 2026",
    venue: "Royal Hall",
    location: "Dubai, UAE",
    image: "https://cafe-de-anatolia.com/img/uploads/238127530_7.jpg",
    description: "A luxurious evening of oriental rhythms and belly dance performances",
    ticketLinks: [
      { name: "Platinum List", url: "#", color: "bg-amber-500 hover:bg-amber-600" },
      { name: "Ticketmaster", url: "#", color: "bg-red-500 hover:bg-red-600" },
      { name: "Dubai Events", url: "#", color: "bg-emerald-500 hover:bg-emerald-600" },
      { name: "Get Flow", url: "#", color: "bg-violet-500 hover:bg-violet-600" },
      { name: "Mera Events", url: "#", color: "bg-rose-500 hover:bg-rose-600" },
    ],
  },
];

const defaultAnnouncement = {
  title: "NEW TOUR ANNOUNCEMENT",
  message: "Cafe De Anatolia World Tour 2026 - Tickets available now!",
  date: "Coming Soon",
  active: true,
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [announcement, setAnnouncement] = useState(defaultAnnouncement);

  useEffect(() => {
    const savedEvents = localStorage.getItem("cafeEvents");
    const savedAnnouncement = localStorage.getItem("cafeAnnouncement");
    
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    } else {
      setEvents(defaultEvents);
    }
    
    if (savedAnnouncement) {
      setAnnouncement(JSON.parse(savedAnnouncement));
    }
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {announcement.active && (
          <div className="bg-gradient-to-r from-gold/20 via-accent/20 to-gold/20 border border-gold/30 rounded-lg p-6 mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gold mb-2">{announcement.title}</h2>
            <p className="text-lg text-white mb-2">{announcement.message}</p>
            <p className="text-sm text-gray-400">{announcement.date}</p>
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gold">Events</h1>

        {events.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            <p>No events scheduled at the moment.</p>
            <p className="mt-2">Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {events.map((event) => (
              <div 
                key={event.id}
                className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-gold transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 md:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <span className="px-3 py-1 bg-gold/20 text-gold text-sm font-semibold rounded-full">
                        {event.date}
                      </span>
                      <span className="text-gray-400 text-sm">
                        📍 {event.location}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2">{event.title}</h2>
                    <p className="text-gray-400 mb-2">📍 {event.venue}</p>
                    <p className="text-gray-300 mb-6">{event.description}</p>

                    <div className="space-y-3">
                      <p className="text-sm text-gray-400 mb-2">🎫 Buy Tickets From:</p>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                        {event.ticketLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${link.color} text-white text-center py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg`}
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center p-8 bg-white/5 rounded-lg border border-white/10">
          <h3 className="text-xl font-bold text-gold mb-2">Want to book us for your event?</h3>
          <p className="text-gray-400 mb-4">Contact us for booking inquiries</p>
          <a 
            href="mailto:bookings@cafe-de-anatolia.com"
            className="inline-block px-6 py-3 bg-gold text-primary font-semibold rounded-md hover:bg-white transition-colors"
          >
            Contact Booking
          </a>
        </div>
      </div>
    </div>
  );
}
