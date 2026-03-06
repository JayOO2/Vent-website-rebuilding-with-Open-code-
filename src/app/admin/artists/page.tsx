"use client";

import { useState, useEffect } from "react";

interface Artist {
  id: number;
  name: string;
  image: string;
}

const defaultArtists: Artist[] = [
  { id: 1, name: "Billy Esteban", image: "https://cafe-de-anatolia.com/img/uploads/802145122_billy-esteban---copy.jpg" },
  { id: 2, name: "Nickarth/Rialians On Earth", image: "https://cafe-de-anatolia.com/img/uploads/724102938_ae26c1a725b98fa3f71d7ccd9d34bf1d01bc20c5.jpg" },
  { id: 3, name: "Dj Nil", image: "https://cafe-de-an/uploads/276685atolia.com/img172_2.jpg" },
  { id: 4, name: "Ferhat Sonsöz", image: "https://cafe-de-anatolia.com/img/uploads/433579432_6.jpg" },
  { id: 5, name: "Nikko Sunset", image: "https://cafe-de-anatolia.com/img/uploads/238127530_7.jpg" },
];

const ADMIN_PASSWORD = "admin123";

export default function AdminArtists() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [artists, setArtists] = useState<Artist[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingArtist, setEditingArtist] = useState<Artist | null>(null);
  const [formData, setFormData] = useState({ name: "", image: "" });

  useEffect(() => {
    const savedArtists = localStorage.getItem("cafeArtists");
    if (savedArtists) {
      setArtists(JSON.parse(savedArtists));
    } else {
      setArtists(defaultArtists);
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid password!");
    }
  };

  const saveArtists = (newArtists: Artist[]) => {
    setArtists(newArtists);
    localStorage.setItem("cafeArtists", JSON.stringify(newArtists));
  };

  const deleteArtist = (id: number) => {
    if (confirm("Are you sure you want to delete this artist?")) {
      const newArtists = artists.filter((a) => a.id !== id);
      saveArtists(newArtists);
    }
  };

  const saveArtist = () => {
    if (!formData.name || !formData.image) {
      alert("Please fill in all fields");
      return;
    }

    let newArtists: Artist[];
    if (editingArtist) {
      newArtists = artists.map((a) => (a.id === editingArtist.id ? { ...formData, id: editingArtist.id } : a));
    } else {
      newArtists = [...artists, { ...formData, id: Date.now() }];
    }
    saveArtists(newArtists);
    setShowForm(false);
    setEditingArtist(null);
    setFormData({ name: "", image: "" });
  };

  const editArtist = (artist: Artist) => {
    setEditingArtist(artist);
    setFormData({ name: artist.name, image: artist.image });
    setShowForm(true);
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
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Panel - Artists</h1>
          <a href="/" className="text-blue-400 hover:text-blue-300">View Website</a>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Manage Artists ({artists.length})</h2>
            <button
              onClick={() => {
                setEditingArtist(null);
                setFormData({ name: "", image: "" });
                setShowForm(true);
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
            >
              + Add Artist
            </button>
          </div>

          {showForm && (
            <div className="bg-gray-700 p-6 rounded-lg mb-6 space-y-4">
              <h3 className="text-lg font-bold text-white">{editingArtist ? "Edit Artist" : "Add New Artist"}</h3>
              <div>
                <label className="text-gray-400 text-sm">Artist Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white"
                  placeholder="Enter artist name"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm">Image URL</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white"
                  placeholder="https://..."
                />
              </div>
              <div className="flex gap-4">
                <button
                  onClick={saveArtist}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setEditingArtist(null);
                  }}
                  className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {artists.map((artist) => (
              <div key={artist.id} className="bg-gray-700 rounded-lg overflow-hidden">
                <img src={artist.image} alt={artist.name} className="w-full aspect-square object-cover" />
                <div className="p-3">
                  <h3 className="text-white text-sm font-medium truncate">{artist.name}</h3>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => editArtist(artist)}
                      className="flex-1 px-2 py-1 bg-yellow-600 hover:bg-yellow-700 text-white text-xs rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteArtist(artist.id)}
                      className="flex-1 px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
