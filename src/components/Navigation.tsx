import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, Award, Users, Book, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', icon: Home, label: 'Accueil' },
    { path: '/explorer', icon: Compass, label: 'Explorer' },
    { path: '/badges', icon: Award, label: 'Badges' },
    { path: '/bible', icon: Book, label: 'Bible' },
    { path: '/communaute', icon: Users, label: 'Communauté' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top bar with logo and theme toggle */}
      <header className="bg-white dark:bg-lumen-secondary shadow-md sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-blue rounded-full flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-lumen-primary dark:text-lumen-gold">
                Lumen
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Marche dans la Lumière
              </p>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Sun className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </header>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-lumen-secondary shadow-lg z-50 transition-colors duration-300">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
                  active
                    ? 'text-lumen-primary dark:text-lumen-gold scale-110'
                    : 'text-gray-600 dark:text-gray-400 hover:text-lumen-primary dark:hover:text-lumen-gold'
                }`}
              >
                <Icon className={`w-6 h-6 ${active ? 'mb-1' : ''}`} />
                <span className={`text-xs mt-1 ${active ? 'font-semibold' : ''}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
