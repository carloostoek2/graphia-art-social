'use client'

import { useState } from 'react'
import { Home, User, Grid3X3, Sparkles, Heart, MessageCircle, Share2, MapPin, Link as LinkIcon, Calendar, Settings, Image as ImageIcon, Users, Eye } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Mock datos del usuario
const user = {
  name: 'Tu Nombre',
  handle: '@tuusuario',
  bio: 'Creador de arte generativo con IA | Explorando los límites entre humanidad y algoritmos | Midjourney & Stable Diffusion enthusiast',
  location: 'Ciudad de México',
  website: 'portfolio.me',
  joined: 'Enero 2024',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  banner: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=400&fit=crop',
  stats: {
    posts: 127,
    followers: '8.5k',
    following: 432,
    likes: '24.3k',
    views: '156k',
  },
}

// Mock posts del usuario
const userPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop',
    title: 'Nebula Dreams',
    likes: 892,
    comments: 45,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=600&h=600&fit=crop',
    title: 'Cyber Vision',
    likes: 654,
    comments: 32,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=600&fit=crop',
    title: 'Organic Flow',
    likes: 1234,
    comments: 89,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&h=600&fit=crop',
    title: 'Abstract Mind',
    likes: 445,
    comments: 21,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&h=600&fit=crop',
    title: 'Neon Nights',
    likes: 789,
    comments: 56,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=600&fit=crop',
    title: 'Color Theory',
    likes: 567,
    comments: 34,
  },
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

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('posts')

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="lg:ml-64 pb-20 lg:pb-0">
        {/* Banner */}
        <div className="h-48 lg:h-64 w-full relative">
          <img
            src={user.banner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Profile Header */}
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="relative -mt-20 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-6">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl ring-4 ring-background object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center ring-4 ring-background">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 lg:pb-2">
                <h1 className="text-2xl lg:text-3xl font-bold">{user.name}</h1>
                <p className="text-slate-400">{user.handle}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 lg:pb-2">
                <button className="p-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
                <button className="btn-secondary flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Seguir
                </button>
                <button className="btn-primary flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Crear
                </button>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <p className="text-slate-300 mb-4 leading-relaxed">{user.bio}</p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {user.location}
              </span>
              <span className="flex items-center gap-1.5">
                <LinkIcon className="w-4 h-4" />
                <a href="#" className="text-violet-400 hover:underline">{user.website}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Se unió en {user.joined}
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <div className="bg-surface rounded-xl p-4 text-center border border-white/10">
              <p className="text-2xl font-bold gradient-text">{user.stats.posts}</p>
              <p className="text-xs text-slate-400 mt-1">Posts</p>
            </div>
            <div className="bg-surface rounded-xl p-4 text-center border border-white/10">
              <p className="text-2xl font-bold gradient-text">{user.stats.followers}</p>
              <p className="text-xs text-slate-400 mt-1">Seguidores</p>
            </div>
            <div className="bg-surface rounded-xl p-4 text-center border border-white/10">
              <p className="text-2xl font-bold gradient-text">{user.stats.following}</p>
              <p className="text-xs text-slate-400 mt-1">Siguiendo</p>
            </div>
            <div className="bg-surface rounded-xl p-4 text-center border border-white/10">
              <p className="text-2xl font-bold gradient-text">{user.stats.likes}</p>
              <p className="text-xs text-slate-400 mt-1">Likes</p>
            </div>
            <div className="bg-surface rounded-xl p-4 text-center border border-white/10 col-span-2 lg:col-span-1">
              <p className="text-2xl font-bold gradient-text">{user.stats.views}</p>
              <p className="text-xs text-slate-400 mt-1">Vistas</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-white/10 mb-6">
            <div className="flex gap-6">
              {[
                { id: 'posts', label: 'Posts', icon: ImageIcon },
                { id: 'likes', label: 'Me gusta', icon: Heart },
                { id: 'media', label: 'Media', icon: Grid3X3 },
                { id: 'stats', label: 'Estadísticas', icon: Eye },
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 pb-4 text-sm font-medium transition-colors relative ${
                      activeTab === tab.id
                        ? 'text-violet-400'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Content */}
          {activeTab === 'posts' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
              {userPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-surface border border-white/10 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-semibold text-sm mb-2">{post.title}</h3>
                      <div className="flex items-center gap-4 text-xs text-slate-300">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3.5 h-3.5" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3.5 h-3.5" />
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'likes' && (
            <div className="text-center py-16 text-slate-400">
              <Heart className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Posts que te han gustado aparecerán aquí</p>
            </div>
          )}

          {activeTab === 'media' && (
            <div className="text-center py-16 text-slate-400">
              <Grid3X3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Todo tu contenido multimedia en un solo lugar</p>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-surface rounded-2xl border border-white/10 p-6">
                  <h3 className="font-bold mb-4">Rendimiento (30 días)</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Vistas de perfil</span>
                        <span className="font-medium">+23%</span>
                      </div>
                      <div className="h-2 bg-surface-light rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Nuevos seguidores</span>
                        <span className="font-medium">+156</span>
                      </div>
                      <div className="h-2 bg-surface-light rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Interacciones</span>
                        <span className="font-medium">+89%</span>
                      </div>
                      <div className="h-2 bg-surface-light rounded-full overflow-hidden">
                        <div className="h-full w-5/6 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface rounded-2xl border border-white/10 p-6">
                  <h3 className="font-bold mb-4">Top Posts</h3>
                  <div className="space-y-3">
                    {userPosts.slice(0, 3).map((post, index) => (
                      <div key={post.id} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <span className="text-lg font-bold text-slate-500 w-6">#{index + 1}</span>
                        <img src={post.image} alt={post.title} className="w-12 h-12 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{post.title}</p>
                          <p className="text-xs text-slate-400">{post.likes} likes</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
