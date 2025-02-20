# Contributing to Tippsy

This document outlines the standards and structure for building the Tippsy web application.

## Project Setup

Create a Next.js 14 project with TypeScript, using Tailwind CSS, shadcn/ui, and Lucide Icons.

### Project Structure

```
src/
├── app/              # App router pages
│   ├── page.tsx     # Landing page
│   ├── profile/     # Profile routes
│   └── matches/     # Match routes
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui components
│   └── ...          # Feature components
├── lib/             # Utility functions
└── hooks/           # Custom React hooks
```

### Core Pages

1. **Landing Page (`app/page.tsx`)**
   - Hero section with "Find Your Next Drink Date"
   - Login/Sign-up buttons
   - Clean modern UI with dark mode support

2. **Profile Page (`app/profile/page.tsx`)**
   - User profile section
     - Profile photo
     - Bio
     - Drink preferences
   - Edit profile functionality

3. **Match Page (`app/matches/page.tsx`)**
   - Swipe-like interface for potential matches
   - Match data fetching
   - Real-time updates

### Dependencies

```json
{
  "dependencies": {
    "next": "14.2.24",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@tanstack/react-query": "latest",
    "axios": "latest",
    "firebase": "latest",
    "lucide-react": "latest",
    "tailwindcss": "latest",
    "shadcn-ui": "latest"
  }
}
```

### UI Components

Use shadcn/ui for core components:
- Button
- Card
- Dialog
- Dropdown
- Form elements

### Styling Guidelines

1. Use Tailwind CSS for styling
2. Follow mobile-first responsive design
3. Support dark mode using next-themes
4. Use CSS variables for theme colors

### Authentication Flow

Use Firebase Authentication:
1. Email/Password login
2. Social auth providers
3. Protected routes
4. Persistent sessions

### API Integration

1. Use React Query for data fetching
2. Axios for API calls
3. Firebase for backend services
4. Real-time updates where needed

### Development Workflow

1. Create feature branches
2. Follow conventional commits
3. Write unit tests for components
4. Document new features

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Create new components:
```bash
# Example structure for new components
src/components/
  └── feature/
      ├── component.tsx
      └── component.test.tsx
``` 