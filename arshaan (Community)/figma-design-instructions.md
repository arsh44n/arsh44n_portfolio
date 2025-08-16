# Figma Designer AI Instructions: David Haz Portfolio Website

## Overview
Create a modern, sophisticated portfolio website for a creative developer/designer with a dark theme aesthetic. The design should feel premium, interactive, and showcase technical expertise through clean typography and subtle animations.

## Color Palette
- **Primary Background**: #000000 (Pure Black)
- **Primary Text**: #F9F8F6 (Off-white/Cream)
- **Accent Color**: #5C54F9 (Purple/Blue)
- **Secondary Background**: #F9F8F6 (Light cream for light mode)
- **Border/Divider**: #F9F8F6 (Same as primary text)

## Typography
- **Font Family**: Matter (custom font - use similar sans-serif like Inter or SF Pro)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Hero Title**: 3.75rem (60px), font-weight 400, line-height 1.1
- **Project Titles**: 6rem (96px), font-weight 400, letter-spacing -3px
- **Section Titles**: 1.2rem (19px), font-weight 300, uppercase, letter-spacing 0.5px
- **Body Text**: 2.2rem (35px) for about section, font-weight 300
- **Navigation**: 16px, font-weight 400

## Layout & Grid
- **Max Width**: 1800px for main container, 1160px for content sections
- **Padding**: 40px horizontal on main containers
- **Border Radius**: 30px for major components, 50px for buttons/small elements
- **Gaps**: 0.6em between major sections, 4em between content blocks

## Header Design
- **Height**: 80px
- **Logo**: Black "DH" initials in rounded square, 100px width
- **Navigation**: Pill-shaped container with backdrop blur, glassmorphism effect
- **Background**: Glass/translucent with white background at 50% opacity
- **Border**: 1px solid rgba(209,213,219,.5)
- **Shadow**: 0 3px 20px -5px rgba(0,0,0,0.15)
- **Mobile**: Hamburger menu with overlay, purple background (#5C54F9)

## Hero Section Layout
### Left Side (Main Content):
- **Background**: Animated gradient canvas (blue/purple/teal flowing gradients)
- **Content Box**: 
  - Position: Bottom-right of gradient area
  - Background: Black (#000)
  - Max-width: 50%
  - Height: 250px
  - Decorative corner elements (SVG shapes)
- **Title**: "Equal parts creative developer & designer"
- **Scroll Indicator**: Circle button with arrow, 50px diameter

### Right Side (Components):
#### Statistics Carousel (Top):
- **Shape**: Perfect circle, 280px diameter
- **Background**: Black with white border (2px)
- **Content**: Large numbers with descriptions
  - "132" - "Liters of coffee consumed this year"
  - "453K" - "Total lines of code written"
  - "3,744" - "Critical bugs fixed ...and counting"
  - "10+" - "Major projects delivered successfully"
  - "160K" - "Developers inspired worldwide"
- **Typography**: 4rem numbers, 1rem descriptions (max 15 characters width)

#### Blog Posts Carousel (Bottom):
- **Dimensions**: 280px width, variable height
- **Background**: Purple (#5C54F9)
- **Border Radius**: 30px
- **Content**: Image thumbnails (249x150px) + titles
- **Button**: Circular arrow button in bottom-right corner
- **Images**: Tech-related illustrations (React, Next.js, Tailwind, WebGL themes)

## Projects Section
- **Title**: "SELECTED WORK" (uppercase, small, centered, opacity 50%)
- **Cards**: Full-width, minimal design
  - Large typography: 6rem project names
  - Small descriptors: 0.8rem, uppercase, positioned above titles
  - Border bottom: 1px solid white
  - Hover effect: Text indents 1em to the left
- **Projects Listed**:
  - "Haiku" - React Utility Library
  - "React Bits" - Animated UI Components  
  - "IP Wire" - Straightforward IP Tracker
  - "GitHub" - See More On

## About Section
### Layout: Two columns
#### Left: Video Component
- **Main Video**: 400px max-width, 30px border radius
- **Overlay Video**: 300px max-width, positioned absolute
  - Transform: rotate(-20deg) scale(1.5)
  - Position: right -70px, bottom -70px
  - Mix-blend-mode: exclusion
  - Hover effect: Transform to rotate(10deg) scale(1.2)

#### Right: Text Content
- **Text**: Large body copy, 2.2rem, font-weight 300
- **Content**: "I'm a web developer & designer based in Cluj-Napoca! I specialize in Frontend Engineering, focusing on building high quality web experiences through clean code and thoughtful design."
- **CTA Button**: "Get in touch" with star icons (✦)
- **Button Style**: 
  - Border: 2px solid #F9F8F6
  - Border-radius: 50px
  - Padding: 0.5em 1em
  - Font-size: 1.8rem

## Skills Section
- **Layout**: Centered, vertical stack
- **Title**: "SKILLS & SERVICES" (small, uppercase, centered)
- **Skill Items**: Horizontal layout per skill
  - Text: 7rem font-size, font-weight 600
  - Video placeholder: 12rem width, 30px border radius, 2px white border
  - Skills listed:
    - "Web development"
    - "Interface design"  
    - "3D web experiences"
    - "Creative coding"
    - "Solid engineering"

## Contact Section
- **Background**: Animated gradient video with grain texture overlay
- **Height**: 700px
- **Border Radius**: 30px
- **Padding**: 5em 6em
- **Content Layout**: Flexbox, justify-content: space-between
- **Title**: "Wanna create something awesome together?"
  - Font-size: 6rem
  - Font-weight: 400
  - "awesome" should be bold (font-weight 700)
- **CTA Elements**:
  - Primary button: "Let's talk" with star icons
  - Secondary text: "Don't like flashy buttons? Reach out at contact@davidhaz.com"

## Interactive Elements
- **Hover Effects**: 
  - Buttons scale and change background
  - Project cards indent text
  - Videos transform and scale
  - Navigation items fade opacity
- **Animations**:
  - Gradient backgrounds with flowing motion
  - Carousel autoplay with smooth transitions
  - Star icons in buttons rotate periodically
  - Text reveal animations on scroll

## Corner Decorations
- **Style**: SVG corner elements on major components
- **Shape**: Quarter circles that create rounded corner effects
- **Color**: Match parent background (#F9F8F6 or #000)
- **Usage**: Logo box, content boxes, navigation elements

## Responsive Behavior
- **Desktop**: Full layout as described
- **Tablet (790px)**: Hero stacks vertically, statistics become horizontal
- **Mobile (595px)**: 
  - Navigation becomes hamburger menu
  - Single column layouts
  - Reduced font sizes
  - Compressed spacing

## Design Principles
1. **Minimalism**: Clean, uncluttered layouts with plenty of white space
2. **Typography Hierarchy**: Strong contrast between large display text and smaller body text
3. **Consistent Radius**: 30px for major elements, 50px for interactive elements
4. **Subtle Interactions**: Hover effects should be smooth and purposeful
5. **Professional Aesthetic**: Balance creativity with sophistication
6. **Dark Theme Focus**: Design primarily for dark mode with light mode as secondary

## Technical Considerations for Figma
- Use Auto Layout for responsive behavior
- Create component variants for hover states
- Use blend modes for video overlays (exclusion)
- Implement proper spacing tokens (0.6em, 4em, etc.)
- Create text styles for consistent typography
- Use effects for glassmorphism and shadows
- Design for both desktop and mobile viewports

## Content Hierarchy
1. **Hero**: Main value proposition and visual impact
2. **Projects**: Quick showcase of work with clear CTAs
3. **About**: Personal connection and credibility
4. **Skills**: Technical capabilities with visual interest
5. **Contact**: Clear path to engagement

This design should feel modern, professional, and technically sophisticated while maintaining approachability and clear user pathways.