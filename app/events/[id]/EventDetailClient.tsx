"use client";

import Image from 'next/image';
import { useState } from 'react';
import Gallery from '@/app/programs/[slug]/gallery';
import { Calendar, MapPin, Tag } from 'lucide-react';

interface EventDetailClientProps {
  event: {
    id: string;
    title: { [key: string]: string };
    date: string;
    image: string;
    description: { [key: string]: string };
    tags: string[];
  };
  galleryImages: string[];
}

const EventDetailClient: React.FC<EventDetailClientProps> = ({ event, galleryImages }) => {
  const [language, setLanguage] = useState<'en' | 'kn'>('en');

  return (
    <>
      <div className="relative h-[50vh] w-full">
        <Image
          src={event.image}
          alt={event.title[language]}
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
            {event.title[language]}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-sm rounded-l ${
                language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('kn')}
              className={`px-3 py-1 text-sm rounded-r ${
                language === 'kn' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              KN
            </button>
          </div>

          <div className="mb-8">
            <p className="text-gray-700 text-lg">{event.description[language]}</p>

            <div className="mt-4">
              {event.date && (
                <div className="flex items-center mb-2">
                  <Calendar className="mr-2 text-gray-500" size={20} />
                  <span className="text-gray-600">{event.date}</span>
                </div>
              )}
            </div>

            <div className="mt-4">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {galleryImages.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h2>
              <Gallery images={galleryImages} />
            </div>
          )}

          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Get Involved</h3>
            <p className="text-gray-700 mb-4">
              Learn more about how you can participate in future events or support our cause.
            </p>
            <a
              href="/get-involved"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailClient; 