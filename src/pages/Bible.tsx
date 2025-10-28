import React, { useState } from 'react';
import { mockVerses } from '../data/mockData';
import { Heart, Share2, BookOpen, Search } from 'lucide-react';

const Bible: React.FC = () => {
  const [verses, setVerses] = useState(mockVerses);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'favorites'>('all');

  const toggleFavorite = (id: string) => {
    setVerses((prev) =>
      prev.map((verse) =>
        verse.id === id ? { ...verse, isFavorite: !verse.isFavorite } : verse
      )
    );
  };

  const shareVerse = (verse: any) => {
    const text = `"${verse.text}"\n\n${verse.book} ${verse.chapter}:${verse.verse}`;
    if (navigator.share) {
      navigator
        .share({
          title: 'Verset biblique',
          text: text,
        })
        .catch(() => {
          // Fallback: copy to clipboard
          navigator.clipboard.writeText(text);
          alert('Verset copié dans le presse-papier !');
        });
    } else {
      navigator.clipboard.writeText(text);
      alert('Verset copié dans le presse-papier !');
    }
  };

  const filteredVerses = verses.filter((verse) => {
    const matchesSearch =
      searchTerm === '' ||
      verse.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verse.book.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || (filter === 'favorites' && verse.isFavorite);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Bible Interactive 📖
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Découvre, médite et partage la Parole de Dieu
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-lumen-secondary rounded-xl p-4 shadow-lg mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un verset ou un livre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-lumen-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Filter buttons */}
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filter === 'all'
                  ? 'gradient-blue text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter('favorites')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center ${
                filter === 'favorites'
                  ? 'gradient-blue text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <Heart className="w-4 h-4 mr-2" />
              Favoris
            </button>
          </div>
        </div>
      </div>

      {/* Reading Plan */}
      <div className="bg-gradient-to-r from-lumen-primary to-blue-600 rounded-xl p-6 shadow-lg mb-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <BookOpen className="w-6 h-6 mr-2" />
              Plan de lecture du jour
            </h3>
            <p className="text-lg">Évangile selon Jean - Chapitre 3</p>
            <p className="text-sm opacity-90 mt-1">15 minutes de lecture</p>
          </div>
          <button className="bg-white text-lumen-primary px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105">
            Commencer
          </button>
        </div>
      </div>

      {/* Verses List */}
      <div className="space-y-4">
        {filteredVerses.length === 0 ? (
          <div className="bg-white dark:bg-lumen-secondary rounded-xl p-12 shadow-lg text-center">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Aucun verset trouvé
            </p>
          </div>
        ) : (
          filteredVerses.map((verse) => (
            <div
              key={verse.id}
              className="bg-white dark:bg-lumen-secondary rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-lumen-primary mb-3">
                    {verse.book} {verse.chapter}:{verse.verse}
                  </h3>
                  <p className="text-lg text-gray-800 dark:text-white leading-relaxed italic">
                    "{verse.text}"
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => toggleFavorite(verse.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                    verse.isFavorite
                      ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-200'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${verse.isFavorite ? 'fill-current' : ''}`}
                  />
                  <span>{verse.isFavorite ? 'Favoris' : 'Ajouter'}</span>
                </button>

                <button
                  onClick={() => shareVerse(verse)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold bg-lumen-primary text-white hover:bg-blue-600 transition-all"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Partager</span>
                </button>

                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all">
                  <span>🙏</span>
                  <span>Méditer</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Statistics */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-white dark:bg-lumen-secondary rounded-xl p-6 shadow-lg text-center">
          <div className="text-3xl mb-2">📖</div>
          <p className="text-2xl font-bold text-lumen-primary">
            {verses.length}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Versets explorés
          </p>
        </div>

        <div className="bg-white dark:bg-lumen-secondary rounded-xl p-6 shadow-lg text-center">
          <div className="text-3xl mb-2">❤️</div>
          <p className="text-2xl font-bold text-red-500">
            {verses.filter((v) => v.isFavorite).length}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Favoris
          </p>
        </div>

        <div className="bg-white dark:bg-lumen-secondary rounded-xl p-6 shadow-lg text-center">
          <div className="text-3xl mb-2">🔥</div>
          <p className="text-2xl font-bold text-orange-500">
            7
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Jours de lecture
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bible;
