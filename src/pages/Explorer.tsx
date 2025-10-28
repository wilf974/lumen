import React, { useState } from 'react';
import { mockQuests, mockChallenges } from '../data/mockData';
import { Trophy, Users, Clock, ChevronRight } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const Explorer: React.FC = () => {
  const { addLightPoints } = useUser();
  const [activeTab, setActiveTab] = useState<'quetes' | 'defis'>('quetes');

  const handleStartQuest = (_questId: string) => {
    alert(`Quête commencée ! Que la lumière te guide 🌟`);
  };

  const handleJoinChallenge = (challenge: any) => {
    addLightPoints(challenge.lightPointsReward);
    alert(`Défi accepté ! +${challenge.lightPointsReward} points de lumière ✨`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermédiaire':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Avancé':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getChallengeTypeIcon = (type: string) => {
    switch (type) {
      case 'daily':
        return '☀️';
      case 'weekly':
        return '📅';
      case 'community':
        return '🌍';
      default:
        return '🎯';
    }
  };

  const formatDeadline = (deadline?: Date) => {
    if (!deadline) return null;
    const days = Math.ceil((deadline.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    return `${days} jour${days > 1 ? 's' : ''} restant${days > 1 ? 's' : ''}`;
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Explorer 🧭
      </h2>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6 bg-white dark:bg-lumen-secondary rounded-xl p-2 shadow-lg">
        <button
          onClick={() => setActiveTab('quetes')}
          className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 ${
            activeTab === 'quetes'
              ? 'gradient-blue text-white shadow-md'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          Quêtes spirituelles
        </button>
        <button
          onClick={() => setActiveTab('defis')}
          className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 ${
            activeTab === 'defis'
              ? 'gradient-blue text-white shadow-md'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          Défis
        </button>
      </div>

      {/* Quêtes Tab */}
      {activeTab === 'quetes' && (
        <div className="space-y-4">
          {mockQuests.map((quest) => (
            <div
              key={quest.id}
              className="bg-white dark:bg-lumen-secondary rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {quest.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(
                        quest.difficulty
                      )}`}
                    >
                      {quest.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {quest.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <Trophy className="w-4 h-4 mr-1" />
                      {quest.lightPointsReward} points
                    </span>
                    <span className="flex items-center">
                      📚 {quest.steps.length} étapes
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
                      {quest.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleStartQuest(quest.id)}
                  className="gradient-blue text-white p-3 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-110 ml-4"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Progress bar */}
              {quest.progress > 0 && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">
                      Progression
                    </span>
                    <span className="text-lumen-primary font-semibold">
                      {quest.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="gradient-blue h-full rounded-full transition-all duration-500"
                      style={{ width: `${quest.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Défis Tab */}
      {activeTab === 'defis' && (
        <div className="space-y-4">
          {mockChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white dark:bg-lumen-secondary rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="text-4xl">
                    {getChallengeTypeIcon(challenge.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {challenge.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center text-gray-500 dark:text-gray-400">
                        <Users className="w-4 h-4 mr-1" />
                        {challenge.participantsCount} participants
                      </span>
                      {challenge.deadline && (
                        <span className="flex items-center text-orange-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {formatDeadline(challenge.deadline)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <div className="gradient-gold text-white px-4 py-2 rounded-lg font-bold mb-2">
                    +{challenge.lightPointsReward}
                  </div>
                  <button
                    onClick={() => handleJoinChallenge(challenge)}
                    className="bg-lumen-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
                  >
                    Participer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Classement section */}
      <div className="mt-8 bg-gradient-to-br from-lumen-gold to-yellow-500 rounded-xl p-6 shadow-lg text-white">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <Trophy className="w-6 h-6 mr-2" />
          Classement de la semaine
        </h3>
        <div className="space-y-3">
          {[
            { rank: 1, name: 'Marie', points: 450, avatar: '👸' },
            { rank: 2, name: 'Pierre', points: 380, avatar: '🧔' },
            { rank: 3, name: 'Jean', points: 320, avatar: '👨' },
          ].map((user) => (
            <div
              key={user.rank}
              className="flex items-center justify-between bg-white bg-opacity-20 rounded-lg p-3"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold">{user.rank}</span>
                <span className="text-2xl">{user.avatar}</span>
                <span className="font-semibold">{user.name}</span>
              </div>
              <span className="font-bold">{user.points} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
