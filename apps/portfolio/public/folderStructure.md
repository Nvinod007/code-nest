apps/portfolio/src/
├── features/
│ ├── hero/
│ │ ├── components/
│ │ │ ├── Hero.tsx
│ │ │ ├── HeroBackground.tsx
│ │ │ └── index.ts
│ │ ├── hooks/
│ │ │ └── useHeroAnimation.ts
│ │ └── types/
│ │ └── hero.types.ts
│ ├── about/
│ │ ├── components/
│ │ │ ├── About.tsx
│ │ │ ├── AboutCard.tsx
│ │ │ └── index.ts
│ │ └── types/
│ │ └── about.types.ts
│ ├── skills/
│ │ ├── components/
│ │ │ ├── Skills.tsx
│ │ │ ├── SkillCard.tsx
│ │ │ ├── TechStack.tsx
│ │ │ └── index.ts
│ │ └── types/
│ │ └── skills.types.ts
│ ├── experience/
│ │ ├── components/
│ │ │ ├── Experience.tsx
│ │ │ ├── JobCard.tsx
│ │ │ ├── Timeline.tsx
│ │ │ └── index.ts
│ │ └── types/
│ │ └── experience.types.ts
│ ├── projects/
│ │ ├── components/
│ │ │ ├── Projects.tsx
│ │ │ ├── ProjectCard.tsx
│ │ │ ├── ProjectModal.tsx
│ │ │ └── index.ts
│ │ └── types/
│ │ └── projects.types.ts
│ ├── contact/
│ │ ├── components/
│ │ │ ├── Contact.tsx
│ │ │ ├── ContactForm.tsx
│ │ │ └── index.ts
│ │ └── types/
│ │ └── contact.types.ts
│ └── scene-3d/
│ ├── components/
│ │ ├── Scene3D.tsx
│ │ ├── Character.tsx
│ │ ├── Environment.tsx
│ │ └── index.ts
│ ├── hooks/
│ │ ├── useThreeScene.ts
│ │ ├── useScrollAnimation.ts
│ │ └── useCharacterAnimation.ts
│ └── utils/
│ ├── three-helpers.ts
│ └── animations.ts
├── shared/
│ ├── components/
│ │ ├── ui/
│ │ │ ├── Button.tsx
│ │ │ ├── Card.tsx
│ │ │ ├── Modal.tsx
│ │ │ └── index.ts
│ │ ├── layout/
│ │ │ ├── Navigation.tsx
│ │ │ ├── Footer.tsx
│ │ │ ├── PageLayout.tsx
│ │ │ └── index.ts
│ │ └── common/
│ │ ├── ScrollIndicator.tsx
│ │ ├── LoadingSpinner.tsx
│ │ └── index.ts
│ ├── hooks/
│ │ ├── useScroll.ts
│ │ ├── useWindowSize.ts
│ │ └── useLocalStorage.ts
│ ├── utils/
│ │ ├── animations.ts
│ │ ├── helpers.ts
│ │ └── constants.ts
│ └── types/
│ ├── common.types.ts
│ └── portfolio.types.ts
├── config/
│ ├── portfolio-data.ts # 🎯 Person-specific data here!
│ ├── theme.config.ts
│ └── animations.config.ts
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── globals.css
└── assets/
├── images/
├── icons/
└── models/
