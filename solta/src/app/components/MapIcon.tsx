import { Home, Star } from 'lucide-react'

interface MapIconProps {
  color: string;
  type: 'star' | 'house' | 'number';
  content?: string | number;
}

export default function MapIcon({ color, type, content }: MapIconProps) {
  const iconClass = `w-8 h-8 flex items-center justify-center rounded-full text-white animate-pulse ${color}`

  return (
    <div className={iconClass}>
      {type === 'star' && <Star className="w-5 h-5" />}
      {type === 'house' && <Home className="w-5 h-5" />}
      {type === 'number' && <span className="text-lg font-bold">{content}</span>}
    </div>
  )
}

