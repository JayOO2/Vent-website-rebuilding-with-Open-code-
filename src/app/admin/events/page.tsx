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
      { name: "Eventbrite", url: "#", color: "bg-orange-500" },
      { name: "Ticketmaster", url: "#", color: "bg-red-500" },
      { name: "Viagogo", url: "#", color: "bg-green-500" },
      { name: "StubHub", url: "#", color: "bg-yellow-500" },
      { name: "Seatgeek", url: "#", color: "bg-purple-500" },
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
      { name: "Eventbrite", url: "#", color: "bg-orange-500" },
      { name: "Ticketmaster", url: "#", color: "bg-red-500" },
      { name: "Viagogo", url: "#", color: "bg-green-500" },
      { name: "RA", url: "#", color: "bg-pink-500" },
      { name: "Dice FM", url: "#", color: "bg-indigo-500" },
    ],
  },
];

const defaultAnnouncement = {
  title: "NEW TOUR ANNOUNCEMENT",
  message: "Cafe De Anatolia World Tour 2026 - Tickets available now!",
  date: "Coming Soon",
  active: true,
};

const ADMIN_PASSWORD = "admin123";

export default function AdminEvents() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [announcement, setAnnouncement] = useState(defaultAnnouncement);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [showForm, setShowForm] = useState(false);

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

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid password!");
    }
  };

  const saveEvents = (newEvents: Event[]) => {
    setEvents(newEvents);
    localStorage.setItem("cafeEvents", JSON.stringify(newEvents));
  };

  const deleteEvent = (id: number) => {
    if (confirm("Are you sure you want to delete this event?")) {
      const newEvents = events.filter((e) => e.id !== id);
      saveEvents(newEvents);
    }
  };

  const saveEvent = (event: Event) => {
    let newEvents: Event[];
    if (editingEvent) {
      newEvents = events.map((e) => (e.id === event.id ? event : e));
    } else {
      event.id = Date.now();
      newEvents = [...events, event];
    }
    saveEvents(newEvents);
    setShowForm(false);
    setEditingEvent(null);
  };

  const saveAnnouncement = () => {
    localStorage.setItem("cafeAnnouncement", JSON.stringify(announcement));
    alert("Announcement saved!");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white"
          />
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
          >
            Login
          </button>
          <p className="text-gray-400 text-sm mt-4 text-center">Default password: admin123</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Panel - Events</h1>
          <a href="/" className="text-blue-400 hover:text-blue-300">View Website</a>
        </div>

        {/* Announcement Section */}
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Manage Announcement</h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm">Title</label>
              <input
                type="text"
                value={announcement.title}
                onChange={(e) => setAnnouncement({ ...announcement, title: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm">Message</label>
              <input
                type="text"
                value={announcement.message}
                onChange={(e) => setAnnouncement({ ...announcement, message: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              />
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={announcement.active}
                onChange={(e) => setAnnouncement({ ...announcement, active: e.target.checked })}
                className="w-5 h-5"
              />
              <span className="text-white">Show Announcement</span>
            </div>
            <button
              onClick={saveAnnouncement}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg"
            >
              Save Announcement
            </button>
          </div>
        </div>

        {/* Events Section */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Manage Events</h2>
            <button
              onClick={() => {
                setEditingEvent(null);
                setShowForm(true);
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
            >
              + Add Event
            </button>
          </div>

          {showForm && (
            <EventForm
              event={editingEvent}
              onSave={saveEvent}
              onCancel={() => {
                setShowForm(false);
                setEditingEvent(null);
              }}
            />
          )}

          <div className="space-y-4 mt-6">
            {events.map((event) => (
              <div key={event.id} className="bg-gray-700 p-4 rounded-lg flex flex-col md:flex-row gap-4">
                <img src={event.image} alt={event.title} className="w-full md:w-32 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{event.title}</h3>
                  <p className="text-gray-400 text-sm">{event.date} - {event.location}</p>
                  <p className="text-gray-400 text-sm">{event.ticketLinks.length} ticket links</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingEvent(event);
                      setShowForm(true);
                    }}
                    className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EventForm({
  event,
  onSave,
  onCancel,
}: {
  event: Event | null;
  onSave: (event: Event) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState<Event>(
    event || {
      id: 0,
      title: "",
      date: "",
      venue: "",
      location: "",
      image: "",
      description: "",
      ticketLinks: [
        { name: "", url: "", color: "bg-blue-500" },
        { name: "", url: "", color: "bg-red-500" },
        { name: "", url: "", color: "bg-green-500" },
        { name: "", url: "", color: "bg-yellow-500" },
        { name: "", url: "", color: "bg-purple-500" },
      ],
    }
  );

  const colors = [
    "bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500",
    "bg-purple-500", "bg-pink-500", "bg-orange-500", "bg-indigo-500",
  ];

  return (
    <div className="bg-gray-700 p-6 rounded-lg mb-6 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-gray-400 text-sm">Event Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white"
          />
        </div>
        <div>
          <label className="text-gray-400 text-sm">Date</label>
          <input
            type="text"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white"
          />
        </div>
        <div>
          <label className="text-gray-400 text-sm">Venue</label>
          <input
            type="text"
            value={formData.venue}
            onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
            className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white"
          />
        </div>
        <div>
          <label className="text-gray-400 text-sm">Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white"
          />
        </div>
      </div>
      <div>
        <label className="text-gray-400 text-sm">Image URL</label>
        <input
          type="text"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white"
        />
      </div>
      <div>
        <label className="text-gray-400 text-sm">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white"
          rows={2}
        />
      </div>

      <div>
        <label className="text-gray-400 text-sm mb-2 block">Ticket Links (5 buttons)</label>
        <div className="grid md:grid-cols-5 gap-4">
          {formData.ticketLinks.map((link, index) => (
            <div key={index} className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                value={link.name}
                onChange={(e) => {
                  const newLinks = [...formData.ticketLinks];
                  newLinks[index].name = e.target.value;
                  setFormData({ ...formData, ticketLinks: newLinks });
                }}
                className="w-full px-2 py-1 bg-gray-600 border border-gray-500 rounded text-white text-sm"
              />
              <input
                type="text"
                placeholder="URL"
                value={link.url}
                onChange={(e) => {
                  const newLinks = [...formData.ticketLinks];
                  newLinks[index].url = e.target.value;
                  setFormData({ ...formData, ticketLinks: newLinks });
                }}
                className="w-full px-2 py-1 bg-gray-600 border border-gray-500 rounded text-white text-sm"
              />
              <select
                value={link.color}
                onChange={(e) => {
                  const newLinks = [...formData.ticketLinks];
                  newLinks[index].color = e.target.value;
                  setFormData({ ...formData, ticketLinks: newLinks });
                }}
                className="w-full px-2 py-1 bg-gray-600 border border-gray-500 rounded text-white text-sm"
              >
                {colors.map((c) => (
                  <option key={c} value={c} className="bg-gray-700">{c.replace("bg-", "")}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => onSave(formData)}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg"
        >
          Save Event
        </button>
        <button
          onClick={onCancel}
          className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
