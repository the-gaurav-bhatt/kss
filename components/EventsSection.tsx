"use client";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import { eventsData } from "@/data/events";
import { useState } from "react";

const EventsSection = () => {
    const [selectedYear, setSelectedYear] = useState('all'); // 'all', '2019', etc.
    const [selectedTag, setSelectedTag] = useState('all');

    const filteredEvents = eventsData.filter(event => {
        if (selectedYear !== 'all' && !event.date.startsWith(selectedYear)) {
            return false;
        }
        if (selectedTag !== 'all' && !event.tags.includes(selectedTag)) {
            return false;
        }
        return true;
    });

    // Extract unique years and tags for filter options
    const allYears = Array.from(new Set(eventsData.map(event => event.date.substring(0, 4)))).filter(year => year !== "XXXX");
    const allTags = Array.from(new Set(eventsData.flatMap(event => event.tags)));


    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Events</h2>
                    <p className="text-lg text-gray-600 mt-2">Explore our past and upcoming events.</p>
                </div>

                {/* Filter Controls */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div>
                        <label htmlFor="year-select" className="mr-2">Year:</label>
                        <select
                            id="year-select"
                            value={selectedYear}
                            onChange={e => setSelectedYear(e.target.value)}
                            className="border rounded px-3 py-1"
                        >
                            <option value="all">All</option>
                            {allYears.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="tag-select" className="mr-2">Tag:</label>
                        <select
                            id="tag-select"
                            value={selectedTag}
                            onChange={e => setSelectedTag(e.target.value)}
                            className="border rounded px-3 py-1"
                        >
                            <option value="all">All</option>
                            {allTags.map(tag => (
                                <option key={tag} value={tag}>{tag}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1, // Stagger the animation of children
                            },
                        },
                    }}
                >
                    {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default EventsSection; 