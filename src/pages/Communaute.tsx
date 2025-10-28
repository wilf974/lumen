import React, { useState } from 'react';
import { MessageCircle, Heart, Share2, Plus, Users as UsersIcon } from 'lucide-react';

interface Post {
  id: string;
  author: {
    name: string;
    level: string;
    avatar: string;
  };
  type: 'testimony' | 'prayer' | 'verse' | 'challenge';
  content: string;
  imageUrl?: string;
  timestamp: Date;
  likes: number;
  commentsCount: number;
}

const mockPosts: Post[] = [
  {
    id: 'p1',
    author: {
      name: 'Marie',
      level: 'Évangéliste',
      avatar: '👸',
    },
    type: 'testimony',
    content:
      "Aujourd'hui, j'ai pu partager l'amour de Dieu avec une personne âgée dans le métro. Elle était si touchée qu'elle a versé des larmes de joie. Dieu est bon ! 🙏",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    likes: 45,
    commentsCount: 12,
  },
  {
    id: 'p2',
    author: {
      name: 'Pierre',
      level: 'Apôtre',
      avatar: '🧔',
    },
    type: 'verse',
    content:
      '"Car Dieu a tant aimé le monde qu\'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu\'il ait la vie éternelle."\n\nJean 3:16\n\nCe verset me rappelle chaque jour l\'amour infini de Dieu pour nous tous. ❤️',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    likes: 67,
    commentsCount: 8,
  },
  {
    id: 'p3',
    author: {
      name: 'Sophie',
      level: 'Disciple',
      avatar: '👩',
    },
    type: 'prayer',
    content:
      "Prions ensemble pour tous ceux qui traversent des épreuves en ce moment. Que Dieu leur accorde sa paix et sa force. 🕊️",
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    likes: 89,
    commentsCount: 24,
  },
  {
    id: 'p4',
    author: {
      name: 'Luc',
      level: 'Évangéliste',
      avatar: '👨',
    },
    type: 'challenge',
    content:
      "J'ai terminé le défi 'Partager la lumière' en distribuant des repas aux sans-abri. Une expérience bouleversante qui m'a rappelé l'importance de servir les autres. Qui me rejoint pour le prochain défi ? 🌟",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    likes: 102,
    commentsCount: 31,
  },
];

const Communaute: React.FC = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [showNewPost, setShowNewPost] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'testimony':
        return '✨';
      case 'prayer':
        return '🙏';
      case 'verse':
        return '📖';
      case 'challenge':
        return '🎯';
      default:
        return '💬';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'testimony':
        return 'Témoignage';
      case 'prayer':
        return 'Prière';
      case 'verse':
        return 'Verset';
      case 'challenge':
        return 'Défi';
      default:
        return 'Publication';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'testimony':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200';
      case 'prayer':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200';
      case 'verse':
        return 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-200';
      case 'challenge':
        return 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-200';
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-200';
    }
  };

  const formatTimestamp = (date: Date) => {
    const hours = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
    if (hours < 1) return 'Il y a quelques minutes';
    if (hours < 24) return `Il y a ${hours}h`;
    const days = Math.floor(hours / 24);
    return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
  };

  const handleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Communauté 🤝
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Partage, témoigne et prie avec la famille Lumen
        </p>
      </div>

      {/* Create post button */}
      <button
        onClick={() => setShowNewPost(!showNewPost)}
        className="w-full gradient-blue text-white rounded-xl p-4 shadow-lg mb-6 font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-200 hover:scale-105"
      >
        <Plus className="w-6 h-6" />
        <span>Partager quelque chose</span>
      </button>

      {showNewPost && (
        <div className="bg-white dark:bg-lumen-secondary rounded-xl p-6 shadow-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Nouvelle publication
          </h3>
          <textarea
            placeholder="Partage ton témoignage, une prière, ou un verset qui t'inspire..."
            className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-lumen-primary focus:border-transparent transition-all mb-4 min-h-32"
          />
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="px-4 py-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all">
                ✨ Témoignage
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all">
                🙏 Prière
              </button>
            </div>
            <button className="gradient-blue text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
              Publier
            </button>
          </div>
        </div>
      )}

      {/* Circles section */}
      <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl p-6 shadow-lg mb-6 text-white">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <UsersIcon className="w-6 h-6 mr-2" />
          Cercles de Lumière
        </h3>
        <p className="mb-4 opacity-90">
          Rejoins des petits groupes pour partager ta foi : famille, église, jeunes...
        </p>
        <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
          Découvrir les cercles
        </button>
      </div>

      {/* Posts feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-lumen-secondary rounded-xl p-6 shadow-lg card-hover"
          >
            {/* Post header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lumen-primary to-blue-600 flex items-center justify-center text-2xl">
                  {post.author.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {post.author.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.author.level}</span>
                    <span>•</span>
                    <span>{formatTimestamp(post.timestamp)}</span>
                  </div>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(
                  post.type
                )}`}
              >
                {getTypeIcon(post.type)} {getTypeLabel(post.type)}
              </span>
            </div>

            {/* Post content */}
            <p className="text-gray-800 dark:text-white leading-relaxed mb-4 whitespace-pre-line">
              {post.content}
            </p>

            {/* Post actions */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => handleLike(post.id)}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                <Heart className="w-5 h-5" />
                <span className="font-semibold">{post.likes}</span>
              </button>

              <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-lumen-primary dark:hover:text-lumen-gold transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">{post.commentsCount}</span>
              </button>

              <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-lumen-primary dark:hover:text-lumen-gold transition-colors ml-auto">
                <Share2 className="w-5 h-5" />
                <span className="font-semibold">Partager</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load more */}
      <button className="w-full mt-6 bg-white dark:bg-lumen-secondary text-gray-700 dark:text-gray-300 rounded-xl p-4 shadow-lg font-semibold hover:shadow-xl transition-all">
        Voir plus de publications
      </button>
    </div>
  );
};

export default Communaute;
