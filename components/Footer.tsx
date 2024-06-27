import { ExternalLink } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-gray-400 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left Column */}
        <div className="flex flex-col space-y-2">
          <div className="text-lg font-bold">Navigation</div>
          <div><a href="#" className="text-gray-300 hover:text-white">Home</a></div>
          <div><a href="#" className="text-gray-300 hover:text-white">Videos</a></div>
          <div><a href="#" className="text-gray-300 hover:text-white">More...</a></div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col items-center">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg mb-4">Get it on Google Play</button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">Get it on App Store</button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-end">
          <img src="/path/to/your/image.png" alt="App Logo" className="w-20 h-20 mb-4" />
          <div className="flex space-x-4">
            <ExternalLink/>
          </div>
        </div>
      </div>
    </footer>
  );
}
