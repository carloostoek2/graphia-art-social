'use client'

import { useState } from 'react'
import { Home, User, Grid3X3, Sparkles, Heart, MessageCircle, Share2, MoreHorizontal, TrendingUp, Users, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Mock data para posts
const posts = [
  {
    id: 1,
    author: {
      name: 'Ana Creative',
      handle: '@anacreative',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      verified: true,
    },
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    title: 'Nebula Dreams #AIart',
    description: 'Explorando los límites entre la realidad y la imaginación con Midjourney v6. Esta pieza representa la fusión entre conciencia humana y creatividad artificial.',
    likes: 2341,
    comments: 89,
    shares: 156,
    time: '2h',
    tags: ['#AIart', '#Midjourney', '#Surrealismo', '#DigitalArt'],
  },
  {
    id: 2,
    author: {
      name: 'Marcus Vision',
      handle: '@marcusvision',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      verified: false,
    },
    image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=800&h=600&fit=crop',
    title: 'Cyberpunk Tokyo 2089',
    description: 'Serie urbana generada con Stable Diffusion. Me encanta cómo la IA captura la esencia de lo distópico.',
    likes: 1892,
    comments: 67,
    shares: 98,
    time: '4h',
    tags: ['#Cyberpunk', '#StableDiffusion', '#ConceptArt'],
  },
  {
    id: 3,
    author: {
      name: 'Luna Artistic',
      handle: '@lunaart',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      verified: true,
    },
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop',
    title: 'Organic Mechanics',
    description: 'Cuando la naturaleza encuentra la tecnología. Prompt engineering avanzado para lograr esta fusión perfecta.',
    likes: 3456,
    comments: 234,
    shares: 412,
    time: '6h',
    tags: ['#GenerativeArt', '#NatureTech', '#PromptEngineering'],
  },
  {
    id: 4,
    author: {
      name: 'David Pixel',
      handle: '@davidpixel',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      verified: false,
    },
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=600&fit=crop',
    title: 'Abstract Emotions',
    description: 'Colores que hablan cuando las palabras fallan. Generado con DALL-E 3.',
    likes: 1234,
    comments: 45,
    shares: 78,
    time: '8h',
    tags: ['#Abstract', '#DALLE3', '#Colors'],
  },
]

// Trending topics
const trending = [
  { tag: '#MidjourneyV6', posts: '12.4k' },
  { tag: '#AIart', posts: '89.2k' },
  { tag: '#PromptShare', posts: '5.7k' },
  { tag: '#StableDiffusion', posts: '23.1k' },
  { tag: '#DigitalArt', posts: '45.8k' },
]

// Sugerencias de creadores
const suggestions = [
  { name: 'AI Master', handle: '@aimaster', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face' },
  { name: 'Pixel Dreams', handle: '@pixeldreams', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face' },
  { name: 'Neo Artist', handle: '@neoartist', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face' },
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
        {/* Logo */}
        <Link href="/" className="hidden lg:flex items-center gap-3 mb-8 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center animate-pulse-glow">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">Graphia</span>
        </Link>

        {/* Nav Links */}
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

        {/* Create Button - Desktop */}
        <button className="hidden lg:flex btn-primary w-full mt-6 items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          Crear Post
        </button>

        {/* User Mini Profile - Desktop */}
        <div className="hidden lg:flex items-center gap-3 mt-auto pt-6 border-t border-white/10 w-full">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            alt="Tu perfil"
            className="w-10 h-10 rounded-full ring-2 ring-violet-500/30"
          />
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">Tu Nombre</p>
            <p className="text-xs text-slate-400 truncate">@tuusuario</p>
          </div>
          <MoreHorizontal className="w-5 h-5 text-slate-400" />
        </div>
      </div>
    </nav>
  )
}

function PostCard({ post }: { post: typeof posts[0] }) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }

  return (
    <article className="bg-surface rounded-2xl border border-white/10 overflow-hidden card-hover animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full ring-2 ring-violet-500/20"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">{post.author.name}</span>
              {post.author.verified && (
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                </div>
              )}
            </div>
            <span className="text-xs text-slate-400">{post.author.handle} · {post.time}</span>
          </div>
        </div>
        <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-slate-400" />
        </button>
      </div>

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{post.title}</h3>
        <p className="text-slate-400 text-sm mb-3 line-clamp-2">{post.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 transition-all duration-300 ${
              liked ? 'text-pink-500' : 'text-slate-400 hover:text-pink-500'
            }`}
          >
            <Heart className={`w-5 h-5 ${liked ? 'fill-current animate-pulse' : ''}`} />
            <span className="text-sm font-medium">{likes.toLocaleString()}</span>
          </button>

          <button className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">{post.comments}</span>
          </button>

          <button className="flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="text-sm font-medium">{post.shares}</span>
          </button>
        </div>
      </div>
    </article>
  )
}

function Sidebar() {
  return (
    <aside className="hidden xl:block w-80 space-y-6">
      {/* Trending */}
      <div className="bg-surface rounded-2xl border border-white/10 p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-violet-400" />
          <h3 className="font-bold">Tendencias</h3>
        </div>
        <div className="space-y-3">
          {trending.map((item, index) => (
            <div
              key={item.tag}
              className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors"
            >
              <div>
                <span className="text-sm font-medium">{item.tag}</span>
                <p className="text-xs text-slate-400">{item.posts} posts</p>
              </div>
              <span className="text-xs text-slate-500 font-mono">#{index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Suggestions */}
      <div className="bg-surface rounded-2xl border border-white/10 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-cyan-400" />
          <h3 className="font-bold">Creadores Destacados</h3>
        </div>
        <div className="space-y-3">
          {suggestions.map((user) => (
            <div key={user.handle} className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full ring-2 ring-cyan-500/20"
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{user.name}</p>
                <p className="text-xs text-slate-400 truncate">{user.handle}</p>
              </div>
              <button className="text-xs px-3 py-1.5 rounded-full bg-violet-500/20 text-violet-400 hover:bg-violet-500/30 transition-colors font-medium">
                Seguir
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 rounded-2xl border border-white/10 p-5">
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-fuchsia-400" />
          Tu Actividad
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-black/20 rounded-xl">
            <p className="text-2xl font-bold gradient-text">24</p>
            <p className="text-xs text-slate-400">Posts</p>
          </div>
          <div className="text-center p-3 bg-black/20 rounded-xl">
            <p className="text-2xl font-bold gradient-text">1.2k</p>
            <p className="text-xs text-slate-400">Likes</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <main className="lg:ml-64 pb-20 lg:pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-6 p-4 lg:p-8">
            {/* Feed */}
            <div className="flex-1 max-w-2xl">
              {/* Header Mobile */}
              <div className="lg:hidden flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold gradient-text">Graphia</span>
                </div>
                <button className="p-2 bg-violet-500/20 rounded-lg">
                  <Sparkles className="w-5 h-5 text-violet-400" />
                </button>
              </div>

              {/* Create Post - Desktop */}
              <div className="hidden lg:flex items-center gap-4 bg-surface rounded-2xl border border-white/10 p-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                  alt="Tu perfil"
                  className="w-10 h-10 rounded-full ring-2 ring-violet-500/30"
                />
                <input
                  type="text"
                  placeholder="Comparte tu última creación con IA..."
                  className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-slate-500"
                />
                <button className="btn-primary py-2 px-4 text-sm">
                  Publicar
                </button>
              </div>

              {/* Feed Title */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Feed Principal</h2>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-full bg-violet-500/20 text-violet-400 text-xs font-medium">
                    Para ti
                  </button>
                  <button className="px-3 py-1.5 rounded-full text-slate-400 text-xs font-medium hover:bg-white/5 transition-colors">
                    Siguiendo
                  </button>
                </div>
              </div>

              {/* Posts */}
              <div className="space-y-6">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Load More */}
              <button className="w-full mt-6 py-3 rounded-xl border border-white/10 text-slate-400 hover:bg-white/5 transition-colors text-sm font-medium">
                Cargar más posts
              </button>
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  )
}
