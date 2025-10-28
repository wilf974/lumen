import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { User, Badge } from '../types';

interface UserContextType {
  user: User;
  addLightPoints: (points: number) => void;
  addBadge: (badge: Badge) => void;
  incrementStreak: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Mock user data
const initialUser: User = {
  id: '1',
  name: 'Jean',
  level: 'Disciple',
  lightPoints: 150,
  badges: [],
  currentStreak: 3,
  joinDate: new Date('2024-10-01'),
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(initialUser);

  const addLightPoints = (points: number) => {
    setUser(prev => {
      const newPoints = prev.lightPoints + points;
      let newLevel = prev.level;

      // Level progression
      if (newPoints >= 1000) newLevel = 'Lumière du monde';
      else if (newPoints >= 500) newLevel = 'Évangéliste';
      else if (newPoints >= 250) newLevel = 'Apôtre';
      else newLevel = 'Disciple';

      return { ...prev, lightPoints: newPoints, level: newLevel };
    });
  };

  const addBadge = (badge: Badge) => {
    setUser(prev => ({
      ...prev,
      badges: [...prev.badges, { ...badge, earnedDate: new Date() }],
    }));
  };

  const incrementStreak = () => {
    setUser(prev => ({ ...prev, currentStreak: prev.currentStreak + 1 }));
  };

  return (
    <UserContext.Provider value={{ user, addLightPoints, addBadge, incrementStreak }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
