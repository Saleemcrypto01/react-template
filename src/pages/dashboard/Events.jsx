import React from "react";

export default function GDGEvents() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <header className="flex items-center justify-between bg-white p-4 rounded-2xl shadow mb-6">
        <h1 className="text-2xl font-semibold">Google Developer Groups</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow">New Event</button>
      </header>

      <div className="grid lg:grid-cols-3 gap-6">
        <aside className="bg-white p-4 rounded-2xl shadow h-fit">
          <h2 className="text-lg font-semibold mb-4">GDG on Campus Gombe State University</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Analytics</li>
            <li>Events</li>
            <li>Emails</li>
            <li>Settings</li>
            <li>Sponsors</li>
          </ul>
        </aside>

        <main className="lg:col-span-2 space-y-6">
          <section className="bg-white p-4 rounded-2xl shadow">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gray-200 rounded-xl"></div>
              <div>
                <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Recurring event</span>
                <h3 className="text-xl font-semibold mt-1">Hacktoberfest 2025 Kickoff</h3>
                <p className="text-gray-600 text-sm">Oct 01, 2025 - 8:00 PM (WAT)</p>
                <p className="text-gray-600 text-sm">Attendees: 67 · Check-ins: 43</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-4 rounded-2xl shadow">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
              <div>
                <h3 className="text-xl font-semibold">Become a Generative AI Leader (1 of 2)</h3>
                <p className="text-gray-600 text-sm">Sep 16, 2025 - 6:00 PM (EDT)</p>
                <p className="text-gray-600 text-sm">Attendees: 374 · Check-ins: 136</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
