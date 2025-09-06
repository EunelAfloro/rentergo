import React from 'react';

const listings = [
  {
    img: "lapaz.jpg",
    title: "Near Isat U Lapaz",
    location: "Luna Street, La Paz"
  },
  {
    img: "lapaz2.jpg",
    title: "Near La Paz Plaza",
    location: "Plaza La Paz"
  },
  {
    img: "jsb.jpg",
    title: "WIT Area",
    location: "Luna St. La Paz"
  },
  {
    img: "jsb.jpg",
    title: "WIT Area",
    location: "Luna St. La Paz"
  }
];

export default function App() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-3">
          <img src="logo.jpg" alt="Logo" className="h-10 w-10 rounded-full" />
          <ul className="flex space-x-12 text-lg">
            <li><a href="home.html" className="hover:underline">Home</a></li>
            <li><a href="explore.html" className="hover:underline">Explore</a></li>
            <li><a href="landloeds.html" className="hover:underline">Landlord</a></li>
            <li><a href="aboutus.html" className="hover:underline">About</a></li>
            <li><a href="contact.html" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <img src="icon.png" alt="account" className="h-10 w-10 rounded-full" />
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="background relative">
        <img src="BACK.jpg" alt="background" className="w-full h-96 object-cover brightness-75" />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white w-full px-4">
          <h1 className="text-2xl font-semibold mb-4">
            “Find your next home away from home-- fast, easy, and reliable”
          </h1>
          <div className="flex justify-center items-center space-x-2 max-w-xl mx-auto bg-white rounded-full px-4 py-2 shadow-md">
            <img src="FILTER.png" alt="Search Icon" className="h-5 w-5 text-gray-500" />
            <input type="text" placeholder="Search location" className="w-full px-2 py-1 outline-none text-black" />
          </div>
        </div>
      </section>

      {/* LISTINGS SECTION */}
      <section className="py-10 px-6 grid md:grid-cols-3 gap-6">
        {listings.map((listing, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={listing.img} alt="Room" className="w-full h-48 object-cover" />
            <div className="p-4 bg-blue-600 text-white">
              <h3 className="font-semibold text-lg">{listing.title}</h3>
              <p className="text-sm">{listing.location}</p>
              <button className="mt-3 px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100">View Info</button>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="text-center py-4 bg-blue-600 text-white mt-8">
        &copy; 2025 Boarding House Finder. All rights reserved.
      </footer>
    </div>
  );
}