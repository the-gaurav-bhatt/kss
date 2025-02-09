import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

interface EventCardProps {
    event: {
        id: string;
        title: { [key: string]: string };
        date: string;
        image: string;
        description: { [key: string]: string };
        tags: string[];
    };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const [language, setLanguage] = useState<'en' | 'kn'>('en'); // Default to English

    return (
        <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link href={`/events/${event.id}`}>

                <div className="relative h-48 w-full">
                    <Image
                        src={event.image}
                        alt={event.title[language]}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-t-lg"
                    />
                </div>
                <div className="p-4">
                    <div className="flex justify-end mb-2">
                        <button
                            onClick={(e) => { e.preventDefault(); setLanguage('en') }}
                            className={`px-2 py-1 text-sm rounded ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={(e) => { e.preventDefault(); setLanguage('kn') }}
                            className={`px-2 py-1 text-sm rounded ${language === 'kn' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            KN
                        </button>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{event.title[language]}</h3>
                    <p className="text-gray-600 mt-2">{event.date}</p>
                    {/*  <p className="text-gray-500 mt-1">{event.description[language]}</p> */}
                </div>

            </Link>
        </motion.div>
    );
};

export default EventCard; 