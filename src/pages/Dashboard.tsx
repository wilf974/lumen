import React from 'react';
import { useUser } from '../contexts/UserContext';
import { Flame, TrendingUp, Target, Award, Book } from 'lucide-react';
import { mockChallenges, mockVerses } from '../data/mockData';

const Dashboard: React.FC = () => {
  const { user, addLightPoints } = useUser();

  const todayVerse = mockVerses[0];
  const todayChallenge = mockChallenges[0];

  const handleCompleteChallenge = () => {
    addLightPoints(todayChallenge.lightPointsReward);
    alert(`Félicitations ! +${todayChallenge.lightPointsReward} points de lumière`);
  };

  const getLevelProgress = () => {
    const levels = {
      'Disciple': { min: 0, max: 250 },
      'Apôtre': { min: 250, max: 500 },
      'Évangéliste': { min: 500, max: 1000 },
      'Lumière du monde': { min: 1000, max: 1000 },
    };

    const currentLevel = levels[user.level];
    const progress = ((user.lightPoints - currentLevel.min) / (currentLevel.max - currentLevel.min)) * 100;
    return Math.min(progress, 100);
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Bonjour, {user.name} 👋
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Continuons ton voyage spirituel aujourd'hui
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-lumen-secondary rounded-xl p-4 shadow-lg card-hover">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">Niveau</span>
            <TrendingUp className="w-5 h-5 text-lumen-primary" />
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            {user.level}
          </p>
        </div>

        <div className="bg-white dark:bg-lumen-secondary rounded-xl p-4 shadow-lg card-hover">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">Points</span>
            <div className="text-2xl">✨</div>
          </div>
          <p className="text-2xl font-bold text-lumen-gold">
            {user.lightPoints}
          </p>
        </div>

        <div className="bg-white dark:bg-lumen-secondary rounded-xl p-4 shadow-lg card-hover">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">Série</span>
            <Flame className="w-5 h-5 text-orange-500" />
          </div>
          <p className="text-2xl font-bold text-orange-500">
            {user.currentStreak} jours
          </p>
        </div>

        <div className="bg-white dark:bg-lumen-secondary rounded-xl p-4 shadow-lg card-hover">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">Badges</span>
            <Award className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-2xl font-bold text-purple-500">
            {user.badges.length}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white dark:bg-lumen-secondary rounded-xl p-6 shadow-lg mb-8">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Progression spirituelle
          </h3>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {Math.round(getLevelProgress())}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
          <div
            className="gradient-blue h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2"
            style={{ width: `${getLevelProgress()}%` }}
          >
            <span className="text-xs text-white font-semibold">
              {getLevelProgress() > 10 ? `${user.lightPoints}` : ''}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Prochain niveau : {user.level === 'Disciple' ? 'Apôtre (250 pts)' :
                           user.level === 'Apôtre' ? 'Évangéliste (500 pts)' :
                           user.level === 'Évangéliste' ? 'Lumière du monde (1000 pts)' :
                           'Niveau maximum atteint !'}
        </p>
      </div>

      {/* Daily Verse */}
      <div className="bg-gradient-to-br from-lumen-primary to-blue-600 rounded-xl p-6 shadow-lg mb-8 text-white">
        <div className="flex items-center mb-3">
          <Book className="w-6 h-6 mr-2" />
          <h3 className="text-xl font-semibold">Verset du jour</h3>
        </div>
        <p className="text-lg italic mb-3 leading-relaxed">
          "{todayVerse.text}"
        </p>
        <p className="text-sm opacity-90">
          {todayVerse.book} {todayVerse.chapter}:{todayVerse.verse}
        </p>
      </div>

      {/* Daily Challenge */}
      <div className="bg-white dark:bg-lumen-secondary rounded-xl p-6 shadow-lg mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Target className="w-6 h-6 text-lumen-primary mr-2" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Défi du jour
            </h3>
          </div>
          <span className="bg-lumen-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
            +{todayChallenge.lightPointsReward} pts
          </span>
        </div>
        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
          {todayChallenge.title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {todayChallenge.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {todayChallenge.participantsCount} participants
          </span>
          <button
            onClick={handleCompleteChallenge}
            className="gradient-blue text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Accepter le défi
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button className="bg-white dark:bg-lumen-secondary rounded-xl p-6 shadow-lg card-hover text-left">
          <div className="text-3xl mb-2">📖</div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
            Continuer la lecture
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Reprends où tu t'es arrêté
          </p>
        </button>

        <button className="bg-white dark:bg-lumen-secondary rounded-xl p-6 shadow-lg card-hover text-left">
          <div className="text-3xl mb-2">🎯</div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
            Nouvelle quête
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Découvre un nouveau parcours
          </p>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
