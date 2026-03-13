# AI Consulting Demo

A Next.js 16 demonstration website showcasing AI-powered business templates with integrated chatbots. Built for demonstrating AI consulting services to local businesses in McKinney, TX.

## 🚀 Live Demo

Explore 4 different business templates:
- `/dental` - Valley Creek Dental Care (Dental Office)
- `/hvac` - Harris Air Services (HVAC Company) 
- `/medspa` - Serenity Med Spa (Medical Spa)
- `/law` - Stone & Associates (Law Firm)

## ✨ Features

### Smart AI Chatbot
- **Contextual responses** based on business type and keywords
- **Mobile responsive** with full-screen experience on mobile devices
- **Typing indicators** and realistic conversation flow
- **Business-specific responses** for appointments, pricing, hours, and emergencies
- **Persistent chat history** during session

### Modern Design
- **Material Design inspired** with soft shadows and rounded corners
- **Smooth animations** powered by Framer Motion
- **Mobile-first responsive** design
- **Professional color schemes** tailored to each business type
- **Production-ready** layouts with realistic content

### Business Templates

#### 🦷 Dental Office Template
- Service listings with pricing
- Insurance information and accepted plans
- Patient testimonials and reviews
- Online appointment booking CTA
- Professional trust indicators

#### ❄️ HVAC Company Template  
- 24/7 emergency service emphasis
- Service area coverage map
- Urgent repair messaging
- Maintenance plan offerings
- Family-owned business trust factors

#### ✨ Med Spa Template
- Luxury wellness and beauty services
- Treatment galleries and before/after sections
- Elegant, spa-like branding
- Complimentary consultation offers
- Premium service positioning

#### ⚖️ Law Firm Template
- Practice area expertise showcase
- Attorney profiles and credentials
- Case results and success stories
- Free consultation offerings
- Professional authority and trust

## 🛠 Technology Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS 4** - Modern utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **React 19** - Latest React features

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd ai-consulting-demo

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the demo.

### Build for Production
```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
/app
  /page.tsx                 # Homepage showcasing all templates
  /layout.tsx              # Root layout with metadata
  /globals.css             # Global styles and animations
  /components/             # Shared components
    /ChatWidget.tsx        # AI chatbot widget
    /templates/            # Reusable template components
      /Hero.tsx            # Hero section component
      /Services.tsx        # Services grid component
      /Testimonials.tsx    # Testimonials section
      /Contact.tsx         # Contact/footer component
      /Trust.tsx           # Trust/why-choose-us section
  /dental/page.tsx         # Dental office template
  /hvac/page.tsx          # HVAC company template  
  /medspa/page.tsx        # Med spa template
  /law/page.tsx           # Law firm template
```

## 🤖 AI Chatbot Features

The chatbot provides intelligent responses based on:

- **Appointment keywords** → Scheduling information and booking
- **Pricing keywords** → Cost information and payment options
- **Emergency keywords** → Urgent service information and contact
- **Hours keywords** → Business hours and availability
- **Location keywords** → Address, directions, and service areas

Each business type has customized responses appropriate to their industry.

## 🎨 Design Philosophy

- **Professional first** - Production-ready quality for real business demos
- **Mobile responsive** - Beautiful experience across all devices
- **Accessibility focused** - Semantic HTML and keyboard navigation
- **Performance optimized** - Fast loading and smooth interactions
- **Brand appropriate** - Color schemes and styling match business types

## 🔧 Customization

### Adding New Templates
1. Create new page in `/app/[template-name]/page.tsx`
2. Import shared components from `/app/components/templates/`
3. Add template info to homepage template array
4. Update ChatWidget with new business type responses

### Modifying Chatbot Responses
Edit the `getSmartResponse` function in `/app/components/ChatWidget.tsx` to customize AI responses for different business types and keywords.

### Styling Changes
- Global styles: `/app/globals.css`
- Component-specific: Tailwind classes in each component
- Animations: Framer Motion configurations in components

## 📱 Mobile Experience

- **Chat widget** becomes full-screen overlay on mobile
- **Navigation** optimized for touch interfaces  
- **Typography** scales appropriately across devices
- **Images** responsive with proper aspect ratios
- **Performance** optimized for mobile networks

## 🚢 Deployment

Ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify** 
- **AWS Amplify**
- **Any Node.js hosting**

### Environment Variables
No environment variables required for basic functionality. All AI responses are mocked for demonstration purposes.

## 📄 License

This project is for demonstration purposes. Please respect the demo nature and don't use for actual business websites without proper licensing.

## 🤝 Contributing

This is a demo project for AI consulting services. Contact the development team for customization requests or additional templates.

---

**Built with ❤️ for McKinney, TX business owners**