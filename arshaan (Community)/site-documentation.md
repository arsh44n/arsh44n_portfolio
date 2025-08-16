# Arshaan Khan Portfolio - Complete Design Documentation

## Global Design System

### Color Palette
**Dark Theme (Default):**
- Background: Black (#000000)
- Foreground/Text: Off-white (#F9F8F6)
- Secondary Background: Dark gray (#1A1A1A)
- Border: Off-white (#F9F8F6)
- Primary Accent: Purple (#5C54F9)
- Gradient Colors: Purple (#5C54F9), Deep Purple (#4D20FF), Pink (#E46289), Coral (#FF5789), Mint (#1CF2CC)

**Light Theme:**
- Background: Cream (#F9F8F6)
- Foreground/Text: Black (#000000)
- Secondary Background: Light gray (#E9EBE9)
- Border: Black (#000000)

### Typography
- Font Family: Inter, system fonts
- Base Font Size: 14px
- Letter Spacing: -0.05em
- Font Weights: Normal (400), Medium (500)

### Layout
- Max Container Width: 1800px
- Standard Padding: 40px (px-10)
- Border Radius: 30px for large elements, 50px for circular buttons

---

## 1. HEADER SECTION

### Structure & Layout
- **Position**: Fixed at top, full width, z-index 50
- **Top Line**: 10px height, background color bar
- **Container**: Max-width 1800px, centered, 40px horizontal padding

### Logo Section
- **Dimensions**: 200px width × 64px height
- **Background**: Foreground color (inverts with theme)
- **Text**: "Arshaan Khan" in bold, 20px font size
- **Shape**: Rounded rectangle with 8px border radius
- **Position**: Left side with decorative corner elements

### Navigation Menu (Desktop)
- **Background**: Semi-transparent white (50% opacity) with blur effect
- **Dimensions**: Height 58px, rounded 50px corners
- **Border**: 1px gray border with shadow
- **Menu Items**: "Projects", "About", "Blog", "Contact"
- **Link Style**: 16px font, normal weight, 14px padding, hover opacity 70%

### Theme Toggle Button
- **Dimensions**: 40px × 40px circular button
- **Border**: 1px foreground color
- **Animation**: Sun/moon icon with rotating transition
- **Position**: Right end of navigation

### Mobile Menu
- **Trigger**: "Menu" button (80px × 40px, rounded 20px, 2px border)
- **Overlay**: Full-width purple (#5C54F9) panel, 80vh height
- **Shape**: Rounded corners (30px top-right, 0 top-left, 30px bottom corners)
- **Menu Items**: Same as desktop, 32px font size, white text
- **Theme Toggle**: Bottom positioned with label

### Corner Decorations
- **Size**: 30px × 30px SVG elements
- **Function**: Smooth corner transitions between sections
- **Color**: Matches background dynamically

---

## 2. HERO SECTION

### Layout Structure
- **Container**: Full width, max 1800px, 40px padding
- **Height**: 95vh minimum, 630px minimum height
- **Layout**: Split design - large left section, narrow right column

### Left Section - Main Hero
- **Background**: Animated radial gradient canvas (463px × 855px)
- **Gradient Colors**: Purple to coral transition with animated movement
- **Overlay**: Noise texture with 40% opacity
- **Border Radius**: 30px on all corners

#### Hero Text Box
- **Position**: Bottom-right of left section
- **Dimensions**: 50% max width, 250px height
- **Background**: Theme background color
- **Shape**: Rounded top-right (30px), square other corners
- **Padding**: 20px
- **Text**: 
  - Size: Responsive (clamp 37.6px to 60px)
  - Content: "AI Automater, Business Analyst & Web Designer"
  - Max width: 20 characters per line
  - Line height: 1.1

#### Scroll Button
- **Dimensions**: 50px × 50px circular
- **Border**: 2px foreground color
- **Icon**: Arrow pointing down-right, rotates on hover
- **Animation**: Scale 110% on hover, arrow rotates 20 degrees
- **Link**: Smooth scroll to #about section

### Right Column - Stats & Blog

#### Statistics Carousel
- **Shape**: Perfect circle, 280px diameter
- **Border**: 2px foreground color
- **Background**: Theme background
- **Content**: 5 rotating statistics
- **Text Size**: 64px for numbers, 16px for descriptions
- **Data Points**:
  - "50+" - AI automation solutions deployed
  - "200K" - Hours saved through automation
  - "15+" - Business processes optimized
  - "95%" - Client satisfaction rate
  - "3" - Years of AI expertise

#### Blog Carousel
- **Dimensions**: 280px width × remaining height
- **Background**: Purple (#5C54F9)
- **Shape**: 30px border radius
- **Content**: 5 rotating blog cards
- **Each Card**:
  - Image: 280px × 150px, 20px border radius
  - Text: 25.6px font size, white color, max 15 characters width
  - First card: "Creating Creative Creations🧬🤖" with robot image

#### Navigation Button
- **Position**: Bottom-right corner of blog section
- **Dimensions**: 60px square, rounded top-left (35px)
- **Inner Button**: 50px circle, 2px border, arrow icon
- **Hover Effect**: Scale 110%, arrow rotates -20 degrees

---

## 3. PROJECTS SECTION

### Section Header
- **Text**: "SELECTED WORK"
- **Style**: 19.2px font, light weight, 0.5px letter spacing, uppercase
- **Opacity**: 50%
- **Margin**: 64px bottom spacing

### Project Layout
- **Structure**: Alternating left-right layout for 3 projects
- **Spacing**: 80px vertical gap between projects
- **Container**: Max-width 1800px

### Each Project Card

#### Project Image
- **Dimensions**: 50% width, 400px height
- **Border Radius**: 30px
- **Images**: 
  - Neurion AI: Imported project screenshot
  - AI Doctor: Imported project screenshot  
  - HR Analytics: Imported project screenshot
- **Hover Effect**: Scale 102%, 500ms transition
- **Overlay**: Black 20% opacity on hover

#### Status Badge
- **Position**: Top-left corner, 24px margin
- **Padding**: 16px horizontal, 8px vertical
- **Border Radius**: Full (50px)
- **Colors**: Green background + white text for "Live"

#### Project Content (50% width)
- **Category Label**: 
  - Font: 14.4px, light weight, 1px letter spacing, uppercase
  - Color: Purple (#5C54F9)
  - Margin: 12px bottom

- **Project Title**:
  - Font: 64px, normal weight, -2px letter spacing
  - Line height: 1
  - Hover: Changes to purple color
  - Transition: 300ms

- **Description**:
  - Font: 18px, relaxed line height
  - Color: 80% opacity foreground
  - Max width: 25 characters
  - Margin: 24px bottom

#### Technology Tags
- **Layout**: Flex wrap with 8px gaps
- **Each Tag**: 
  - Padding: 12px horizontal, 4px vertical
  - Background: Secondary color
  - Border: 1px border color
  - Border radius: Full (50px)
  - Font: 14px

#### View Project Button
- **Structure**: Text + circular icon
- **Text**: "View Project", 18px medium font
- **Icon Circle**: 48px diameter, 2px border
- **Arrow Icon**: 20px size
- **Hover Effects**: 
  - Icon scales 110%
  - Arrow rotates -20 degrees
  - Text color changes to purple
- **Links**:
  - Neurion AI: https://neurionai.netlify.app/
  - AI Doctor: https://github.com/arsh44n/AI-Voice-Prescription
  - HR Analytics: https://github.com/arsh44n/HR-insight-Analytics

### View All Projects Link
- **Position**: Center bottom of section
- **Margin**: 80px top
- **Structure**: Same as project buttons but larger
- **Icon**: 56px diameter
- **Link**: https://github.com/arsh44n

---

## 4. ABOUT SECTION

### Layout
- **Structure**: Two-column layout with 64px gap
- **Container**: Max-width 1800px, centered
- **Padding**: 64px vertical, 40px horizontal

### Profile Image
- **Dimensions**: 400px max width, 300px min width
- **Height**: 500px
- **Border Radius**: 30px
- **Image**: Anime-style portrait of Arshaan Khan
- **Background**: Secondary color fallback

### Text Content Section

#### Main Description
- **Font**: 35.2px, light weight
- **Line Height**: 1.4
- **Max Width**: 28 characters per line
- **Content**: Personal introduction with bold highlights
- **Bold Spans**: "I'm Arshaan Khan", "intelligent technology solutions"

#### Secondary Description  
- **Font**: 18px, relaxed line height
- **Color**: 80% opacity foreground
- **Max Width**: 35 characters
- **Margin**: 24px vertical

#### Core Expertise Grid
- **Layout**: 2-column grid, 16px gaps
- **Max Width**: 400px
- **Each Item**:
  - Purple dot: 8px diameter circle
  - Text: 80% opacity foreground
  - Items: "AI Automation", "Business Analysis", "Web Design", "Data Analytics"

#### Contact Button
- **Dimensions**: Auto-fit width, 32px height
- **Padding**: 8px vertical, 16px horizontal
- **Border**: 2px foreground color, 50px border radius
- **Font**: 28.8px, normal weight
- **Background**: Transparent, hover fills with foreground
- **Content**: "✦ Get in touch ✦"
- **Stars**: Spinning animation, 2s duration, 4s delay
- **Link**: Smooth scroll to #contact

---

## 5. SKILLS SECTION

### Section Layout
- **Margin**: 160px vertical
- **Padding**: 40px horizontal
- **Max Width**: 1800px container

### Skills Showcase
- **Header**: "SKILLS & EXPERTISE" (same style as projects header)
- **Layout**: Vertical stack, 80px gaps between items

#### Each Skill Item
- **Structure**: Text + expandable image + text
- **Font**: 112px (responsive down to 64px on mobile)
- **Font Weight**: Semibold
- **Letter Spacing**: -0.05em
- **Color**: Foreground

#### Expandable Image
- **Default**: 0 width, transparent border
- **Hover State**: 192px width, foreground border (2px)
- **Transition**: 500ms ease-in-out
- **Border Radius**: 30px
- **Images**: 192px × 192px with cover fit
- **Scale**: 0 to 100% on hover

#### Skill Items:
1. **"AI" + "automation"** - AI technology image
2. **"Business" + "analysis"** - Business charts image  
3. **"Web" + "design"** - Code/development image
4. **"Data" + "analytics"** - Data visualization image
5. **"Process" + "optimization"** - Engineering/systems image

### Services Grid
- **Header**: "SERVICES OFFERED"
- **Layout**: 3-column grid (responsive to 1-column mobile)
- **Gap**: 32px between cards

#### Service Cards
- **Background**: Secondary color
- **Border Radius**: 30px
- **Padding**: 32px
- **Border**: 1px border color, changes to purple on hover
- **Hover Effect**: Scale 102%, purple border

#### Each Card Content:
- **Title**: 24px medium font, changes to purple on hover
- **Description**: Foreground 80% opacity, relaxed line height
- **Feature List**: 4 items each
- **List Style**: Purple dots (6px circles) + text
- **Hover Indicator**: Arrow icon (32px circle) appears on hover

#### Service Types:
1. **AI Automation Solutions**
2. **Business Analysis & Consulting**  
3. **Web Design & Development**

---

## 6. CONTACT SECTION

### Main Contact Area
- **Dimensions**: Full width, 700px height
- **Border Radius**: 30px
- **Background**: Animated gradient canvas (1600px × 1000px)
- **Effects**: 10px blur, 110% scale
- **Overlay**: Noise texture
- **Padding**: 80px

### Gradient Animation
- **Colors**: Purple to mint green spectrum
- **Movement**: Flowing radial gradient with sine/cosine motion
- **Frame Rate**: 60fps smooth animation

### Content Layout
- **Structure**: Space-between flex column
- **Z-index**: 2 (above background)

#### Headline
- **Font**: 96px (responsive down to 48px)
- **Color**: White
- **Line Height**: 1.1em
- **Max Width**: 12 characters
- **Content**: "Ready to transform your business with **AI automation?**"
- **Bold**: "AI automation" text

#### Subtext
- **Font**: 20px
- **Color**: White 80% opacity
- **Max Width**: 30 characters
- **Line Height**: Relaxed

#### Call-to-Action Button
- **Dimensions**: Auto-width, 48px height
- **Padding**: 12px vertical, 24px horizontal
- **Border**: 2px white, 50px border radius
- **Background**: Transparent, hover fills white
- **Font**: 28.8px normal weight
- **Text**: "✦ Let's collaborate ✦"
- **Link**: mailto:arsh44n.work@gmail.com
- **Hover**: Background white, text black

#### Email Text
- **Font**: 22.4px light weight
- **Color**: White
- **Link**: Underlined email on hover
- **Email**: arsh44n.work@gmail.com

#### Social Links
- **Layout**: Horizontal flex, 16px gaps
- **Each Link**: 48px circle, 2px white border
- **Icons**: 24px size
- **Hover**: White background, black icons
- **Links**:
  - **LinkedIn**: https://www.linkedin.com/in/arsh44n
  - **GitHub**: https://github.com/arsh44n  
  - **Email**: mailto:arsh44n.work@gmail.com

### Footer
- **Padding**: 32px vertical
- **Border**: Top border with border color
- **Layout**: Space-between flex
- **Left**: "© 2025 Arshaan Khan. All rights reserved."
- **Right**: "AI Automater • Business Analyst • Web Designer"
- **Color**: 60% opacity foreground

---

## TECHNICAL SPECIFICATIONS

### Animations & Interactions
- **Smooth Scrolling**: Enabled globally
- **Carousel Auto-play**: Infinite loop, 3s intervals
- **Hover Transitions**: 300-500ms ease timing
- **Theme Toggle**: Instant class switching
- **Gradient Animation**: Canvas-based, 60fps
- **Button Hover**: Scale and rotate transforms

### Responsive Breakpoints
- **Mobile**: < 768px (md breakpoint)
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Max Width**: 1800px container

### Performance Features
- **Image Optimization**: WebP format with fallbacks
- **Lazy Loading**: Implemented on all images
- **Theme Persistence**: Local storage
- **Smooth Navigation**: Anchor link scrolling

### Accessibility
- **Color Contrast**: WCAG AA compliant
- **Focus States**: Visible on all interactive elements  
- **Screen Reader**: Alt text on all images
- **Keyboard Navigation**: Tab order maintained
- **Semantic HTML**: Proper heading hierarchy

This documentation provides exact specifications for recreating the entire portfolio website without code, including all measurements, colors, animations, and functionality details.