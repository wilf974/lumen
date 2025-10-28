# ✨ Lumen

**Marche dans la Lumière. Partage la Lumière.**

Lumen est une application d'évangélisation gamifiée et communautaire qui transforme la découverte et la mise en pratique de la Parole de Dieu en aventure interactive.

## 🌟 Concept

L'utilisateur progresse comme dans un RPG spirituel, gagne des points de foi, des badges de sagesse, et participe à des défis communautaires pour partager la bonne nouvelle autour de lui.

## 🎮 Fonctionnalités principales

### 🏠 Dashboard
- Vue d'ensemble de votre progression spirituelle
- Niveau actuel (Disciple → Apôtre → Évangéliste → Lumière du monde)
- Points de lumière accumulés
- Série de jours consécutifs
- Verset du jour inspirant
- Défi quotidien

### 🧭 Explorer
- **Quêtes spirituelles** : Parcours interactifs sur les Béatitudes, Paraboles, Actes des Apôtres
- **Défis** : Quotidiens, hebdomadaires et communautaires
- **Classement** : Voir les meilleurs évangélisateurs de la semaine
- Système de récompenses en points de lumière

### 🏆 Badges
- Système de progression avec badges thématiques :
  - 🌱 Semeur
  - 🕊️ Passeur de Paix
  - ✨ Témoignage vivant
  - 📖 Lecteur assidu
  - 🔥 Évangélisateur
- Visualisation de la progression globale
- Badges débloquables avec défis

### 📖 Bible Interactive
- Lecture de versets avec design moderne
- Système de favoris
- Partage facile sur les réseaux sociaux
- Recherche par mots-clés ou livres
- Plan de lecture quotidien

### 🤝 Communauté
- Mur de publications pour partager :
  - Témoignages ✨
  - Prières 🙏
  - Versets 📖
  - Réussites de défis 🎯
- Système de likes et commentaires
- Cercles de Lumière (petits groupes : famille, église, jeunes)

## 🎨 Design

### Palette de couleurs
- \`#13a4ec\` - Bleu céleste (primary)
- \`#f6f7f8\` - Gris clair
- \`#1a2a33\` - Gris foncé
- \`#FFD700\` - Or lumineux (accent)

### Typographie
- Police principale : **Manrope**
- Style moderne et contemporain

### Fonctionnalités UI
- ☀️ **Dark/Light Mode** - Basculement automatique entre les thèmes
- 🎴 **Cartes modulaires** - Design avec ombres douces et effets de survol
- ✨ **Animations fluides** - Transitions et effets visuels élégants
- 📱 **Responsive** - Adapté mobile et desktop

## 🚀 Installation

\`\`\`bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build de production
npm run preview
\`\`\`

## 📁 Structure du projet

\`\`\`
lumen/
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── Layout.tsx
│   │   └── Navigation.tsx
│   ├── pages/            # Pages de l'application
│   │   ├── Dashboard.tsx
│   │   ├── Explorer.tsx
│   │   ├── Badges.tsx
│   │   ├── Bible.tsx
│   │   └── Communaute.tsx
│   ├── contexts/         # Contextes React
│   │   ├── ThemeContext.tsx
│   │   └── UserContext.tsx
│   ├── types/           # Types TypeScript
│   │   └── index.ts
│   ├── data/            # Données de démonstration
│   │   └── mockData.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
└── tailwind.config.js
\`\`\`

## 🛠️ Technologies utilisées

- **React 18** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Lucide React** - Icônes
- **Context API** - Gestion d'état

## 🎯 Système de progression

### Niveaux
1. **Disciple** (0-249 pts) - Début du parcours spirituel
2. **Apôtre** (250-499 pts) - Engagement croissant
3. **Évangéliste** (500-999 pts) - Témoin actif
4. **Lumière du monde** (1000+ pts) - Niveau maximum

### Points de lumière
- Défis quotidiens : 10 pts
- Défis hebdomadaires : 30 pts
- Défis communautaires : 25 pts
- Quêtes complétées : 40-60 pts

## 🔮 Extensions possibles

- **Mode Mission** : Missions d'évangélisation locales
- **Réalité augmentée** : Visualisation de passages bibliques
- **IA spirituelle** : Assistant qui commente la Bible et propose des prières personnalisées
- **Notifications** : Rappels quotidiens et encouragements
- **Partage social** : Intégration avec Facebook, Instagram, WhatsApp
- **Version mobile native** : React Native pour iOS et Android
- **Backend API** : Synchronisation multi-appareils et authentification

## 📖 Citation biblique

> "Vous êtes la lumière du monde. Une ville située sur une montagne ne peut être cachée."
>
> — Matthieu 5:14

## 📄 Licence

Ce projet est créé dans un but éducatif et d'évangélisation.

---

**Que la lumière de l'Évangile brille à travers vous !** ✨
