import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Free Eye Check-up Camp",
    date: "March 15, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Pai Layout Community Center",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    category: "Healthcare",
  },
  {
    title: "Women's Entrepreneurship Workshop",
    date: "March 20, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "KSS Training Center",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80",
    category: "Empowerment",
  },
  {
    title: "Children's Summer Camp",
    date: "April 1-5, 2024",
    time: "8:00 AM - 1:00 PM",
    location: "Multiple Centers",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80",
    category: "Education",
  },
];

export default function EventsSection() {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">
          Upcoming Events
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
          Join us in our mission to create positive change. Participate in our
          upcoming events and be part of the transformation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-secondary/90 text-white text-sm rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {event.title}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
