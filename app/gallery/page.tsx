'use client'

import { useState } from 'react'
import { Home, User, Grid3X3, Sparkles, Search, SlidersHorizontal, Heart, Eye, Download, Share2, Filter, TrendingUp, Clock, Zap } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Mock gallery items
const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop',
    title: 'Nebula Dreams',
    author: {
      name: 'Ana Creative',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    },
    likes: 2341,
    views: '12.4k',
    category: 'Abstract',
    ai: 'Midjourney',
    time: '2h',
    featured: true,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=800&h=800&fit=crop',
    title: 'Cyberpunk Tokyo',
    author: {
      name: 'Marcus Vision',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    likes: 1892,
    views: '8.9k',
    category: 'Cyberpunk',
    ai: 'Stable Diffusion',
    time: '4h',
    featured: false,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=800&fit=crop',
    title: 'Organic Mechanics',
    author: {
      name: 'Luna Artistic',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
    likes: 3456,
    views: '18.2k',
    category: 'Surrealismo',
    ai: 'DALL-E 3',
    time: '6h',
    featured: true,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=800&fit=crop',
    title: 'Abstract Emotions',
    author: {
      name: 'David Pixel',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    },
    likes: 1234,
    views: '6.7k',
    category: 'Abstract',
    ai: 'DALL-E 3',
    time: '8h',
    featured: false,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=800&fit=crop',
    title: 'Neon Nights',
    author: {
      name: 'Sarah Light',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
    },
    likes: 2789,
    views: '15.3k',
    category: 'Cyberpunk',
    ai: 'Midjourney',
    time: '12h',
    featured: true,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=800&fit=crop',
    title: 'Color Theory',
    author: {
      name: 'Alex Colors',
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face',
    },
    likes: 1567,
    views: '9.1k',
    category: 'Abstract',
    ai: 'Stable Diffusion',
    time: '1d',
    featured: false,
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&h=800&fit=crop',
    title: 'Liquid Dreams',
    author: {
      name: 'Maya Flow',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    },
    likes: 2103,
    views: '11.8k',
    category: '3D Render',
    ai: 'Midjourney',
    time: '1d',
    featured: true,
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800&h=800&fit=crop',
    title: 'Geometric Soul',
    author: {
      name: 'Geo Master',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
    },
    likes: 987,
    views: '5.4k',
    category: 'Minimalismo',
    ai: 'DALL-E 3',
    time: '2d',
    featured: false,
  },
]

const categories = ['Todos', 'Abstract', 'Cyberpunk', 'Surrealismo', '3D Render', 'Minimalismo', 'Retrato', 'Paisaje']
const aiTools = ['Todos', 'Midjourney', 'Stable Diffusion', 'DALL-E 3', 'Leonardo AI']
const sortOptions = [
  { label: 'Tendencias', icon: TrendingUp },
  { label: 'Recientes', icon: Clock },
  { label: 'Populares', icon: Zap },
]

function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: 'Inicio', href: '/' },
    { icon: Grid3X3, label: 'Galería', href: '/gallery' },
    { icon: User, label: 'Perfil', href: '/profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 lg:top-0 lg:bottom-auto lg:left-0 lg:w-64 lg:h-screen glass z-50 border-t lg:border-t-0 lg:border-r border-white/10">
      <div className="flex lg:flex-col items-center lg:items-start justify-around lg:justify-start h-16 lg:h-full px-4 lg:p-6">
        <Link href="/" className="hidden lg:flex items-center gap-3 mb-8 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center animate-pulse-glow">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">Graphia</span>
        </Link>

        <div className="flex lg:flex-col w-full lg:gap-2 justify-around lg:justify-start">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'text-violet-400 bg-violet-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'animate-float' : ''}`} />
                <span className="hidden lg:block font-medium">{item.label}</span>
                {isActive && (
                  <div className="hidden lg:block ml-auto w-1.5 h-1.5 rounded-full bg-violet-400" />
                )}
              </Link>
            )
          })}
        </div>

        <button className="hidden lg:flex btn-primary w-full mt-6 items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          Crear Post
        </button>
      </div>
    </nav>
  )
}

function GalleryCard({ item }: { item: typeof galleryItems[0] }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-surface border border-white/10 card-hover animate-fade-in">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                liked ? 'bg-pink-500/80 text-white' : 'bg-black/50 text-white hover:bg-pink-500/80'
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 rounded-full bg-black/50 text-white hover:bg-violet-500/80 backdrop-blur-sm transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={item.author.avatar}
                  alt={item.author.name}
                  className="w-8 h-8 rounded-full ring-2 ring-white/20"
                />
                <span className="text-sm font-medium">{item.author.name}</span>
              </div>
              <button className="p-2 rounded-lg bg-violet-500/80 text-white hover:bg-violet-500 backdrop-blur-sm transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xs font-bold text-white flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Destacado
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-xs text-white group-hover:opacity-0 transition-opacity">
          {item.category}
        </div>
      </div>

      {/* Info Bar */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs px-2 py-1 rounded-full bg-surface-light text-slate-400">
            {item.ai}
          </span>
          <span className="text-xs text-slate-500">{item.time}</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            {item.views}
          </span>
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5" />
            {item.likes}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [activeAI, setActiveAI] = useState('Todos')
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory
    const matchesAI = activeAI === 'Todos' || item.ai === activeAI
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.author.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesAI && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="lg:ml-64 pb-20 lg:pb-0">
        {/* Header */}
        <div className="sticky top-0 z-40 glass border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold gradient-text">Galería</h1>
                <p className="text-sm text-slate-400">Descubre arte generado con IA</p>
              </div>

              {/* Search */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar arte o artistas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full lg:w-64 pl-10 pr-4 py-2.5 bg-surface border border-white/10 rounded-xl text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`p-2.5 rounded-xl border transition-colors ${
                    showFilters
                      ? 'bg-violet-500/20 border-violet-500/50 text-violet-400'
                      : 'border-white/10 hover:bg-white/5'
                  }`}
                >
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className={`overflow-hidden transition-all duration-300 ${showFilters ? 'max-h-48 mt-4' : 'max-h-0'}`}>
              <div className="pb-4 space-y-4">
                {/* AI Tools */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Filter className="w-4 h-4 text-slate-400 mr-1" />
                  {aiTools.map((tool) => (
                    <button
                      key={tool}
                      onClick={() => setActiveAI(tool)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        activeAI === tool
                          ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white'
                          : 'bg-surface-light text-slate-400 hover:text-white'
                      }`}
                    >
                      {tool}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 mt-4 pb-2 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30'
                      : 'text-slate-400 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          {/* Sort Options */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-400">
              Mostrando <span className="text-white font-medium">{filteredItems.length}</span> obras
            </p>
            <div className="flex items-center gap-2">
              {sortOptions.map((option) => {
                const Icon = option.icon
                return (
                  <button
                    key={option.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {option.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-surface flex items-center justify-center">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No se encontraron resultados</h3>
              <p className="text-slate-400 text-sm">Intenta con otros filtros o términos de búsqueda</p>
            </div>
          )}

          {/* Load More */}
          {filteredItems.length > 0 && (
            <div className="mt-12 text-center">
              <button className="btn-secondary inline-flex items-center gap-2">
                <Grid3X3 className="w-4 h-4" />
                Cargar más obras
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
