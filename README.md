# Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional user interface
- **Fast Performance**: Built with Vite for optimal build times and performance
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Multiple Sections**:
  - Hero - Eye-catching introduction
  - About - Personal information and background
  - Experience - Professional work history
  - Education - Academic background
  - Skills - Technical skills and expertise
  - Tech Stack - Technologies and tools proficiency
  - Projects - Showcase of work and projects
  - Contact - Get in touch section
  - Navigation - Smooth navigation between sections

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Backend**: Netlify Functions (Serverless)
- **Animation Libraries**: GSAP, Framer Motion, Lenis
- **UI Components**: React Icons, React Scroll, React Typewriter
- **Email Service**: Resend

## Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Getting Started

### Development

To run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist` folder.

### Preview

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   └── TechStack/
│   ├── data/
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── socialLinks.js
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── logo/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── netlify/
│   └── functions/
│       └── sendemail.js
├── public/
│   └── images/
├── .env
├── .env.example
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Data Files

The portfolio uses data files to manage content:

- `education.js` - Educational background and qualifications
- `experience.js` - Work experience and job history
- `projects.js` - Portfolio projects
- `skills.js` - Technical skills
- `socialLinks.js` - Social media and contact links

## Features Breakdown

### Animations
- Smooth scroll animations powered by GSAP
- Smooth scrolling with Lenis library
- Frame-based animations with Framer Motion
- Typewriter effect for dynamic text display

### Email Functionality
- Contact form integration with Resend email service
- Serverless function (`netlify/functions/sendemail.js`) for backend email handling
- Requires RESEND_API_KEY environment variable

### Smooth Navigation
- React Scroll for smooth section navigation
- Active link highlighting in navbar
- Responsive mobile navigation

## Backend - Netlify Functions

### Email API (`/.netlify/functions/sendemail`)

The portfolio includes a serverless backend function for handling contact form submissions.

**Endpoint**: `/.netlify/functions/sendemail`

**Method**: `POST`

**Request Body**:
```json
{
  "name": "Your Name",
  "email": "your.email@example.com",
  "subject": "Subject Line",
  "message": "Your message here"
}
```

**Response Success** (Status 200):
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Response Error** (Status 400/405):
```json
{
  "success": false,
  "message": "Error description"
}
```

**Validation**:
- All fields (name, email, subject, message) are required
- Only POST requests are allowed
- Invalid requests return appropriate HTTP status codes

## Environment Variables

### Required Variables

Create a `.env` file in the project root:

```env
VITE_RESEND_API_KEY=your_resend_api_key_here
```

### Netlify Configuration

Set the following environment variable in your Netlify site settings:

```env
RESEND_API_KEY=your_resend_api_key_here
```

**Note**: The `VITE_` prefix exposes the variable to the client-side. The `RESEND_API_KEY` without the prefix is used securely in the backend function.

### Getting a Resend API Key

1. Sign up at [Resend.com](https://resend.com)
2. Create a new API key
3. Add the key to your `.env` file and Netlify dashboard

## Customization

### Frontend

1. Update the data files in `src/data/` with your information
2. Add your images and assets to the `src/assets/` folder
3. Modify component styles using Tailwind CSS classes and CSS files
4. Update component content in the JSX files

### Email Configuration

1. Update sender email in `netlify/functions/sendemail.js` (the `from` field)
2. Update recipient email (the `to` field) to your personal email
3. Configure the Resend API key in `.env` and Netlify dashboard
4. Customize the email HTML template in the function as needed

### Contact Form

The Contact component sends data to the backend function. To customize:
1. Edit `src/components/Contact/Contact.jsx`
2. Modify form fields and validation
3. Update the API endpoint call to match your environment

## Deployment

### Netlify (Recommended)

This project is optimized for Netlify deployment with serverless functions:

**Deployment Steps**:
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Functions directory**: `netlify`
4. Set environment variable in Netlify dashboard:
   - `RESEND_API_KEY` - Your Resend API key
5. Deploy automatically on push

**Why Netlify**:
- Netlify Functions handle backend email functionality
- Zero-config serverless deployment
- Built-in environment variable management
- Fast CDN for frontend delivery

### Local Development with Netlify

To test Netlify Functions locally:

```bash
npm install -g netlify-cli
netlify dev
```

This runs your dev server with Netlify Functions emulation.

### Other Platforms

- **Vercel**: Requires refactoring Netlify Functions to Vercel Functions (similar implementation)
- **GitHub Pages**: Frontend only (email functionality won't work)
- **Traditional Hosting**: Upload `dist` folder (backend functionality won't work)

## Troubleshooting

### Email Not Sending

1. **Verify Resend API Key**: Check that `RESEND_API_KEY` is set in Netlify environment variables
2. **Check Email Addresses**: Ensure sender and recipient emails are correctly configured
3. **Check Logs**: View Netlify Function logs for error details
4. **Resend Account**: Verify your Resend account is active and has send quota

### Local Development Issues

1. **Functions not running**: Make sure you're using `netlify dev` instead of `npm run dev`
2. **CORS errors**: Check Netlify Functions configuration for CORS headers
3. **Environment variables**: Ensure `.env` file is in project root and contains `VITE_RESEND_API_KEY`

## License

This project is personal and open for your use.

## Contact

For questions or suggestions, please reach out through the Contact section on the portfolio or via email.
