# Vansh Hingrajiya's Portfolio

A modern, full-stack portfolio website showcasing projects, skills, and contact information. Built with React, Node.js, Express, and modern web technologies.

## 🎯 Features

- **Responsive Design**: Mobile-first approach; works seamlessly on all devices.
- **Hero Section**: Eye-catching introduction with smooth animations.
- **Project Gallery**: Display projects dynamically loaded from JSON files with links and technologies.
- **Skills Section**: Organized skills (learning, using) with visual cards.
- **Contact Form**: Fully functional contact form with validation and email integration.
- **Email Integration**: Backend nodemailer setup to send contact form messages.

## 📁 Project Structure

```
portfolio/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── component/           # Reusable components
│   │   ├── Head.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── Learning.jsx
│   │   └── Using.jsx
│   │   └── Navbar.jsx
│   ├── sections/            # Page sections
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── style/               # CSS stylesheets
│   │   ├── Navbar.css
│   │   ├── HeroSection.css
│   │   ├── Contact.css
│   │   ├── Project.css
│   │   ├── Skills.css
│   │   └── ...
│   ├── assets/              # Images and data
│   │   ├── ProjectDetails/  # Project JSON files
│   │   └── me.jpg
│   ├── package.json
│   ├── vite.config.js
│   └── .gitignore
├── backend/                 # Node.js + Express 
    |
    ├── package.json
    ├── server.js
    └── .gitignore

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or pnpm
- A Gmail account (or other SMTP service) for email functionality

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` (or the port shown in console).

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
   
   **Note**: For Gmail, use an [App Password](https://myaccount.google.com/apppasswords) instead of your regular password.

4. Start the server:
   ```bash
   node server.js
   ```
   
   You should see: `Server running on port 5000 🚀`

## 🎨 Key Features Explained

### Contact Form
- **Fields**: Name, Email, Message
- **Validation**: 
  - Email must be a valid format
  - Message must be at least 50 characters
  - All fields are required
- **UX**: Loading state with spinner, inline error/success messages
- **Backend**: Sends email via nodemailer to the configured EMAIL_USER

### Project Gallery
- Projects are stored as JSON files in `frontend/assets/ProjectDetails/`
- Each project includes: name, description, technologies, and link
- Automatically loaded and rendered using React's `import.meta.glob`

### Navbar
- Fixed positioning with smooth scroll-hide behavior
- Mobile-responsive with hamburger menu
- Smooth transitions (320ms) for better UX

### Hero Section
- One-time roll-in animation for the hero image on page load
- Uses sessionStorage to avoid replaying the animation during the same browsing session
- Respects `prefers-reduced-motion` for accessibility

## 🛠 Tech Stack

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 (custom, no frameworks)
- **Icons**: react-icons (FaGithub, FaLinkedin, GiHamburgerMenu, IoTerminal)

### Backend
- **Framework**: Express.js
- **Email**: Nodemailer (Gmail SMTP)
- **Middleware**: cors, express.json
- **Environment**: dotenv

## 📝 Available Scripts

### Frontend
```bash
npm run dev       # Start Vite dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Backend
```bash
node server.js    # Start the Express server
```

## 📧 Email Configuration

The contact form sends emails via the `/send-mail` endpoint (POST).

**Endpoint**: `POST http://localhost:5000/send-mail`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "This is a message with at least 50 characters in it."
}
```

**Response**:
```json
{
  "success": true
}
```

## 🔒 Security & Best Practices

- Environment variables are stored in `.env` (not committed to git)
- CORS is enabled for local development (configure as needed for production)
- Client-side validation prevents unnecessary server requests
- Email credentials are kept secret using environment variables

## 📱 Responsive Breakpoints

- Desktop: `1200px` and above
- Tablet: `992px` to `1199px`
- Mobile: Below `992px`
- Small Mobile: Below `575px`

## 🎨 Customization

### Add a New Project
1. Create a JSON file in `frontend/assets/ProjectDetails/` (e.g., `p2.json`):
   ```json
   {
     "name": "My Project",
     "description": "Project description...",
     "technologies": ["React", "Node.js", "MongoDB"],
     "link": "https://github.com/your-repo"
   }
   ```
2. Reload the page — the project will automatically appear.

### Update Skills
Edit the JSON files in `frontend/assets/skills/learning/` and `frontend/assets/skills/using/`.

### Customize Styles
- Global styles: `frontend/src/index.css`
- Component-specific: `frontend/style/*.css` and `frontend/styles/*.css`

## 🚀 Deployment

### Frontend
- Build: `npm run build` (creates `dist/` folder)
- Deploy to Netlify, Vercel, GitHub Pages, or your hosting provider

### Backend
- Deploy to Heroku, AWS, DigitalOcean, or your preferred Node.js host
- Update the frontend API endpoint (`http://localhost:5000/send-mail`) to the production backend URL
- Ensure environment variables are configured on the host

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Vansh Hingrajiya**
- GitHub: [@vanshhingrajiya](https://github.com/vanshhingrajiya)
- LinkedIn: [@vanshhingrajiya](https://www.linkedin.com/in/vanshhingrajiya/)

## 💬 Support

For issues, questions, or suggestions, please reach out via the contact form on the portfolio website or open an issue on GitHub.

---

**Happy coding! 🎉**
