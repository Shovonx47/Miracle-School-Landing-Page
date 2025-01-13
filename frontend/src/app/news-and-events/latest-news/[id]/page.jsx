"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NewsArticle({ params }) {
  const router = useRouter();
  
  const news = [
    {
      id: 'annual-sports-day-2024',
      date: "March 15, 2024",
      title: "Annual Sports Day",
      description: "Join us for our annual sports day celebration featuring various competitions.",
      image: "/assets/images/banners/pexels-goumbik-296301.jpg",
      category: "Sports",
      content: `
        <p>We are excited to announce our upcoming Annual Sports Day, a celebration of athletic excellence and school spirit. This year's event promises to be bigger and better than ever before.</p>

        <h2>Event Details</h2>
        <p>Date: March 15, 2024<br/>
        Time: 8:00 AM - 4:00 PM<br/>
        Venue: School Main Ground</p>

        <h2>Featured Events</h2>
        <ul>
          <li>100m Sprint</li>
          <li>Long Jump</li>
          <li>Relay Race</li>
          <li>Basketball Tournament</li>
          <li>Football Match</li>
        </ul>

        <h2>Schedule</h2>
        <p>8:00 AM - Opening Ceremony<br/>
        9:00 AM - Track Events Begin<br/>
        12:00 PM - Lunch Break<br/>
        1:00 PM - Field Events<br/>
        3:30 PM - Prize Distribution</p>

        <h2>Special Arrangements</h2>
        <p>We have arranged for refreshments and seating for all parents and guardians. Medical staff will be present throughout the event to ensure safety.</p>
      `
    },
    {
      id: 'science-fair-2024',
      date: "March 20, 2024",
      title: "Science Fair 2024",
      description: "Students showcase their innovative science projects.",
      image: "/assets/images/banners/pexels-rdne-7606209.jpg",
      category: "Academic",
      content: `
        <p>Get ready for an exciting showcase of scientific innovation at our annual Science Fair 2024! Students will present their groundbreaking projects and discoveries.</p>

        <h2>Event Details</h2>
        <p>Date: March 20, 2024<br/>
        Time: 9:00 AM - 3:00 PM<br/>
        Venue: School Auditorium</p>

        <h2>Categories</h2>
        <ul>
          <li>Environmental Science</li>
          <li>Robotics & Technology</li>
          <li>Life Sciences</li>
          <li>Physical Sciences</li>
          <li>Mathematics & Computing</li>
        </ul>

        <h2>Schedule</h2>
        <p>9:00 AM - Project Setup<br/>
        10:00 AM - Judging Begins<br/>
        12:00 PM - Lunch Break<br/>
        1:00 PM - Public Viewing<br/>
        2:30 PM - Awards Ceremony</p>

        <h2>Special Features</h2>
        <p>This year's science fair will include interactive demonstrations, guest speakers from leading research institutions, and special awards for innovative solutions to real-world problems.</p>
      `
    },
    {
      id: 'cultural-program-2024',
      date: "March 25, 2024",
      title: "Cultural Program",
      description: "Celebrating our rich cultural heritage through performances.",
      image: "/assets/images/banners/pexels-su-casa-panama-56317556-9650298.jpg",
      category: "Culture",
      content: `
        <p>Join us for an evening of cultural celebration featuring performances that showcase our diverse heritage and artistic talents.</p>

        <h2>Event Details</h2>
        <p>Date: March 25, 2024<br/>
        Time: 5:00 PM - 8:00 PM<br/>
        Venue: School Auditorium</p>

        <h2>Program Highlights</h2>
        <ul>
          <li>Traditional Dance Performances</li>
          <li>Musical Presentations</li>
          <li>Drama Productions</li>
          <li>Poetry Recitations</li>
          <li>Art Exhibition</li>
        </ul>

        <h2>Schedule</h2>
        <p>5:00 PM - Welcome Ceremony<br/>
        5:30 PM - Cultural Performances Begin<br/>
        6:30 PM - Intermission & Refreshments<br/>
        7:00 PM - Second Half of Performances<br/>
        7:45 PM - Grand Finale</p>

        <h2>Additional Information</h2>
        <p>Traditional attire is encouraged. Refreshments will be served during the intermission. Photography is permitted during the performances.</p>
      `
    }
  ];

  const article = news.find(item => item.id === params.id) || null;

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="mb-8 flex items-center text-red-600 hover:text-red-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to News
          </button>

          {/* Article Header */}
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-red-600">{article.date}</span>
            <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-6">{article.title}</h1>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </motion.div>

        {/* Share Buttons */}
        <div className="mt-12 border-t pt-8">
          <h3 className="text-lg font-semibold mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-md hover:bg-[#1864D9] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"/>
              </svg>
              Share
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-md hover:bg-[#1A8CD8] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Tweet
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-md hover:bg-[#20BD5B] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Share
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
              </svg>
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 