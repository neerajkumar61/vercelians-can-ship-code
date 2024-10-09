import { Sun, Cloud } from "lucide-react"

export default function Component() {
  return (
    <div className="w-full h-[400px] bg-gradient-to-b from-sky-300 to-sky-100 relative overflow-hidden rounded-lg shadow-lg">
      {/* Sun */}
      <Sun className="absolute top-4 right-4 text-yellow-400 h-12 w-12" />
      
      {/* Clouds */}
      <Cloud className="absolute top-8 left-1/4 text-white h-16 w-16 opacity-80" />
      <Cloud className="absolute top-16 right-1/3 text-white h-12 w-12 opacity-60" />
      
      {/* Mountains */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#4B5563" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path fill="#6B7280" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      
      {/* Picnic scene */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        {/* Picnic blanket */}
        <div className="w-64 h-32 bg-red-500 rounded-lg shadow-md relative overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-4">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`${i % 2 === 0 ? 'bg-red-600' : 'bg-red-500'}`}></div>
            ))}
          </div>
          
          {/* Food items */}
          <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-200 rounded-full shadow"></div>
          <div className="absolute top-6 left-12 w-10 h-6 bg-green-600 rounded shadow"></div>
          <div className="absolute top-4 right-4 w-12 h-8 bg-purple-500 rounded shadow"></div>
          
          {/* Couple */}
          <div className="absolute bottom-2 left-4 w-8 h-12 bg-blue-500 rounded-t-full"></div>
          <div className="absolute bottom-2 right-4 w-8 h-12 bg-pink-500 rounded-t-full"></div>
        </div>
      </div>
    </div>
  )
}
