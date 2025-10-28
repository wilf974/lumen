import React from 'react';
import { useUser } from '../contexts/UserContext';
import { mockBadges } from '../data/mockData';
import { Lock, Sparkles } from 'lucide-react';

const Badges: React.FC = () => {
  const { user } = useUser();

  const earnedBadgeIds = user.badges.map((b) => b.id);
  const allBadges = mockBadges.map((badge) => ({
    ...badge,
    earned: earnedBadgeIds.includes(badge.id),
    earnedDate: user.badges.find((b) => b.id === badge.id)?.earnedDate,
  }));

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Semeur':
        return 'from-green-400 to-emerald-500';
      case 'Passeur de Paix':
        return 'from-blue-400 to-cyan-500';
      case 'Témoignage vivant':
        return 'from-purple-400 to-pink-500';
      case 'Lecteur assidu':
        return 'from-yellow-400 to-orange-500';
      case 'Évangélisateur':
        return 'from-red-400 to-rose-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Mes Badges 🏆
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {user.badges.length} badges débloqués sur {mockBadges.length}
        </p>
      </div>

      {/* Progress Overview */}
      <div className="bg-white dark:bg-lumen-secondary rounded-xl p-6 shadow-lg mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Progression globale
          </h3>
          <span className="text-2xl font-bold text-lumen-primary">
            {Math.round((user.badges.length / mockBadges.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
          <div
            className="gradient-gold h-full rounded-full transition-all duration-500"
            style={{
              width: `${(user.badges.length / mockBadges.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBadges.map((badge) => (
          <div
            key={badge.id}
            className={`relative bg-white dark:bg-lumen-secondary rounded-xl p-6 shadow-lg transition-all duration-300 ${
              badge.earned
                ? 'card-hover border-2 border-lumen-gold'
                : 'opacity-60 hover:opacity-80'
            }`}
          >
            {/* Earned indicator */}
            {badge.earned && (
              <div className="absolute top-3 right-3">
                <Sparkles className="w-6 h-6 text-lumen-gold animate-pulse" />
              </div>
            )}

            {/* Badge icon */}
            <div
              className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${getCategoryColor(
                badge.category
              )} flex items-center justify-center text-5xl shadow-lg ${
                !badge.earned && 'grayscale opacity-50'
              }`}
            >
              {badge.earned ? badge.icon : <Lock className="w-12 h-12 text-white" />}
            </div>

            {/* Badge info */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {badge.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {badge.description}
              </p>

              {/* Category tag */}
              <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                {badge.category}
              </span>

              {/* Earned date */}
              {badge.earned && badge.earnedDate && (
                <p className="text-xs text-lumen-primary font-semibold mt-2">
                  Obtenu le{' '}
                  {new Date(badge.earnedDate).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              )}

              {/* Locked message */}
              {!badge.earned && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
                  Continue ton parcours pour débloquer ce badge
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Achievement milestone */}
      <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 shadow-lg text-white text-center">
        <h3 className="text-2xl font-bold mb-3">
          Prochain palier
        </h3>
        <p className="text-lg mb-4">
          Débloque {mockBadges.length - user.badges.length} badges de plus pour atteindre le statut{' '}
          <strong>Maître des Badges</strong>
        </p>
        <div className="inline-block bg-white bg-opacity-20 rounded-full px-6 py-2">
          <span className="font-bold text-2xl">
            {user.badges.length} / {mockBadges.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Badges;
