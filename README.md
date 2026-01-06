# Portfolio React App

A modern, responsive portfolio website built with React and Tailwind CSS, featuring a dark theme design with smooth animations and interactive elements.

## Features

- **React Components**: Modular component architecture for maintainability
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Dark Theme**: Beautiful dark mode design with custom color palette
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Smooth Animations**: CSS transitions and hover effects
- **Firebase Ready**: Pre-configured for Firebase deployment

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with logo and menu
│   ├── Hero.jsx            # Main hero section with introduction
│   ├── About.jsx           # About section with skills and bio
│   ├── FloatingButton.jsx  # Floating messenger button
│   └── SidePanel.jsx       # Side panel with additional info
├── App.jsx                 # Main app component
├── main.jsx               # React entry point
└── index.css              # Global styles and custom CSS
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Deployment

This project is configured for Firebase hosting. To deploy:

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Deploy:
```bash
npm run build
firebase deploy
```

## Customization

### Colors
The color scheme is defined in the Tailwind config within `index.html`. Key colors:
- Primary: `#F50057` (bright pink/red)
- Background Light: `#F3F4F6`
- Background Dark: `#0B0B0C`
- Card Dark: `#161618`
- Accent Dark: `#1F1F22`

### Content
Update the content in the respective component files:
- Personal information: `src/components/Hero.jsx`
- About section: `src/components/About.jsx`
- Navigation: `src/components/Header.jsx`

### Images
Replace the placeholder images with your own:
- Hero image in `Hero.jsx`
- About section image in `About.jsx`

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library
- **Google Fonts**: Inter and Saira font families
- **Firebase**: Hosting and deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).