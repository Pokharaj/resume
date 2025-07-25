# Pokharaj - Professional Resume

A modern, responsive web resume built with Angular 18 and Material Design, showcasing professional experience, skills, and projects.

## 🚀 Features

- **Professional Design**: Clean, modern Material Design interface
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations and hover effects
- **Contact Integration**: Direct email and social media links
- **Skills Visualization**: Progress bars for skill proficiency levels
- **Project Showcase**: Detailed project descriptions with technology stacks
- **Professional Photo**: Integrated profile photo display
- **Accessibility**: Built with accessibility best practices

## 👨‍💼 About

**Pokharaj** is a Lead Software Engineer with 8+ years of experience specializing in:
- Java and Spring Boot development
- Oracle Database and AWS cloud services
- Microservices architecture
- Enterprise software solutions
- Water management and financial technology applications

## 🛠️ Technologies Used

- **Angular 18**: Latest version with standalone components
- **Angular Material**: Material Design components for Angular
- **TypeScript**: Type-safe JavaScript development
- **SCSS**: Advanced CSS preprocessing with custom styling
- **RxJS**: Reactive programming library
- **Angular Animations**: Smooth transitions and animations

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Pokharaj/resume
   cd pokharaj-resume-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:4200`

## 🎯 Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the application for production
- `npm run build:static` - Build for GitHub Pages (moves files to docs root)
- `npm run test` - Run unit tests
- `npm run lint` - Run linting
- `npm run serve:ssr` - Start SSR server
- `npm run build:ssr` - Build for SSR

## 📋 Resume Sections

### About Section
- Professional photo and contact information
- Comprehensive professional summary
- Social media links (LinkedIn, GitHub)
- Contact chips with email, phone, and location

### Skills & Technologies
- **Backend**: Java, Spring Boot, Hibernate
- **Databases**: Oracle Database, MongoDB, SQL, NoSQL
- **Cloud**: AWS, AWS Lambda, AWS Batch
- **Frontend**: Angular, JavaScript, HTML/CSS
- **Architecture**: Microservices, REST APIs
- **Computer Science**: Data Structures

### Professional Experience
- **Lead - Software Engineering** at Fidelity Investments (Sep 2022 - Present)
- **Senior Engineer** at Xylem Water Solutions (Apr 2020 - Sep 2022)
- **Senior Software Engineer** at Mindtree Limited (Mar 2019 - Mar 2020)
- **Junior Software Developer** at Chainalytics (Mar 2017 - Mar 2019)

### Education
- **P.G. Diploma** from CDAC-ACTS, Bangalore (2017) - 78.20%
- **B.E. Computer Science** from CSVTU Bhilai (2016) - 72.47%

### Projects
- **Water Loss Management (WLM) System**: Enterprise-level water management platform with real-time monitoring, leak detection, and analytics capabilities

## 🏗️ Project Structure

```
pokharaj-resume-app/
├── src/
│   ├── app/
│   │   ├── app.ts                  # Main resume component
│   │   ├── app.html                # Resume template
│   │   ├── app.scss                # Resume styles
│   │   ├── app.config.ts          # App configuration
│   │   └── app.routes.ts          # Routing configuration
│   ├── public/
│   │   └── profile-photo.jpg      # Professional photo
│   ├── styles.scss                 # Global styles
│   └── main.ts                    # Application entry point
├── docs/                          # GitHub Pages deployment folder
├── dist/                          # Production build folder
├── angular.json                   # Angular configuration
├── package.json                   # Dependencies and scripts
└── README.md                      # Project documentation
```

## 🎨 Design Features

### Material Design Integration
- **Cards**: Professional information containers
- **Chips**: Contact information and technology tags
- **Progress Bars**: Skill proficiency visualization
- **Buttons**: Interactive contact and social media links
- **Icons**: Material Design icons throughout

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions
- Optimized for all screen sizes

### Custom Styling
- Professional color scheme
- Consistent spacing and typography
- Smooth hover animations
- Clean, modern aesthetic

## 📱 Responsive Features

The resume is fully responsive and includes:
- **Desktop**: Full layout with all sections visible
- **Tablet**: Optimized grid layouts
- **Mobile**: Stacked layout for better readability
- **Touch-friendly**: Proper button sizes and spacing

## ♿ Accessibility

Built with accessibility in mind:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast support
- Focus management

## 🔧 Customization

### Updating Personal Information
1. Modify the data in `src/app/app.ts`
2. Update contact information, experience, skills, and projects
3. Replace `public/profile-photo.jpg` with your photo

### Styling Changes
1. Update colors in `src/app/app.scss`
2. Modify typography and spacing
3. Customize animations and transitions

### Adding New Sections
1. Add data to the component in `app.ts`
2. Update the template in `app.html`
3. Style the new section in `app.scss`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages (Recommended)

This application is configured to deploy to GitHub Pages using the `/docs` folder approach.

#### Step 1: Build the Application for GitHub Pages
```bash
npm run build:static
```

This command will:
- Build the application to the `docs` folder
- Move all files from `docs/browser/` to `docs/` (required for GitHub Pages)
- Remove the empty `browser` directory

#### Step 2: Configure Base Href (if needed)
If you need to change the base href for a different repository name:
```bash
ng build --base-href=/resume/
```

#### Step 4: Configure GitHub Pages
1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch and **/docs** folder
5. Click **Save**

#### Step 5: Push Changes
```bash
git add docs/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

#### Step 6: Access Your Resume
Your resume will be available at: `https://pokharaj.github.io/resume/`

### Current Deployment Status
- **Live URL**: [https://pokharaj.github.io/resume/](https://pokharaj.github.io/resume/)
- **Deployment Method**: GitHub Pages with `/docs` folder
- **Build Status**: Automated deployment on push to main branch

### Deployment Tips
- **Base Href**: Make sure to use the correct base href (`/resume/`) for your repository name
- **Caching**: GitHub Pages may take a few minutes to reflect changes
- **404 Handling**: For SPA routing, consider adding a custom 404.html
- **HTTPS**: GitHub Pages automatically provides SSL certificates

### Alternative Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repository
- **Firebase**: Use Firebase Hosting
- **AWS S3**: Static website hosting

## 🤝 Contributing

This is a personal resume project, but suggestions for improvements are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- Material Design team for the design system
- Angular Material team for the component library

---

**Professional Resume of Pokharaj - Lead Software Engineer** 🚀
