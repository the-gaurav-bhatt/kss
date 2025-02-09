import { eventsData } from '@/data/events';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import EventDetailClient from './EventDetailClient';

interface PageParams {
  id: string;
}

// Generate static params for pre-rendering
export async function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id,
  }));
}

// Generate metadata for each event page
export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { id } = params;
  const event = eventsData.find((e) => e.id === id);

  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  return {
    title: event.title.en, // Use English title for metadata
    description: event.description.en, // Use English description
    openGraph: {
      images: [event.image],
    },
    
  };
}

export default function EventDetailPage({ params }: { params: PageParams }) {
  const { id } = params;
  const event = eventsData.find((e) => e.id === id);

  if (!event) {
    notFound(); // Use Next.js's notFound function
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Pass the event data to the client component */}
        <EventDetailClient 
          galleryImages={event.galleryImages || []} 
          event={event} 
        />
      </div>
    </div>
  );
}