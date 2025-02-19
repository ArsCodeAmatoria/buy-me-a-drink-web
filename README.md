# Buy Me a Drink - Dating Web App

A modern dating web application focused on connecting people through their beverage preferences. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive UI with dark mode support
- Secure authentication with Firebase
- Detailed user profiles
- Swipe-like matching interface
- Real-time updates and notifications
- Theme customization

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide Icons
- **Authentication:** Firebase
- **API Calls:** Axios & React Query
- **State Management:** React Hooks

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/buy-me-a-drink.git
cd buy-me-a-drink
```


2. Install dependencies:

```bash
npm install
```


3. Create a `.env.local` file in the root directory with your Firebase credentials:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:

```bash
npm run dev
```


## Project Structure

```bash
├── src/
│ ├── app/ # App router pages
│ ├── components/ # Reusable UI components
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utility functions
│ └── types/ # TypeScript type definitions
├── public/ # Static assets
└── tailwind.config.ts # Tailwind configuration
```

## Key Features

- **Landing Page:** Engaging hero section with call-to-action
- **Profile Management:** Detailed user profiles with drink preferences
- **Matching System:** Intuitive swipe-like interface
- **Real-time Chat:** Instant messaging between matches
- **Dark Mode:** Built-in theme switching

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

