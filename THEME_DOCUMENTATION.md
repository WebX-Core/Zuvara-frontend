<!-- Theme & Layout Overview -->

# Zuvara Design System - Complete Theme Documentation

## 📐 Layout Structure

```
┌─────────────────────────────────────┐
│     Navbar (Fixed, Glassmorphic)    │
├─────────────────────────────────────┤
│                                     │
│         HERO SECTION                │
│    (2-column layout with stats)      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│    FEATURES (3-column grid)         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  CATEGORIES (2-3 column responsive) │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  TRENDING (4-column product grid)   │
│                                     │
├─────────────────────────────────────┤
│                                     │
│    CTA SECTION (Full width banner)  │
│                                     │
├─────────────────────────────────────┤
│         FOOTER (Dark Theme)         │
└─────────────────────────────────────┘
```

## 🎨 Color System

### Primary Colors
```
Black:          #000000 (rgb(0, 0, 0))     - Used for text, CTAs
White:          #FFFFFF (rgb(255, 255, 255)) - Backgrounds
```

### Gradient Accents
```
Purple → Pink:  from-purple-600 to-pink-600
```

### Semantic Colors
```
Success:   Green (#10B981)
Error:     Red (#EF4444)
Warning:   Amber (#F59E0B)
Info:      Blue (#3B82F6)
```

### Grayscale
```
Gray-50:    #F9FAFB (Very light)
Gray-100:   #F3F4F6
Gray-200:   #E5E7EB
Gray-300:   #D1D5DB
Gray-400:   #9CA3AF
Gray-500:   #6B7280
Gray-600:   #4B5563
Gray-700:   #374151
Gray-800:   #1F2937
Gray-900:   #111827 (Very dark)
```

## 🔤 Typography Scale

```
Display Large:    text-6xl font-bold       (48px)
Display:          text-5xl font-bold       (42px)
Headline 1:       text-4xl font-bold       (36px)
Headline 2:       text-3xl font-bold       (30px)
Headline 3:       text-2xl font-semibold   (24px)
Headline 4:       text-xl font-semibold    (20px)
Body Large:       text-lg text-gray-600    (18px)
Body:             text-base text-gray-700  (16px)
Caption:          text-sm text-gray-600    (14px)
Micro:            text-xs text-gray-500    (12px)
```

### Font Weights Used
- Regular: 400 (body text, descriptions)
- Medium: 500 (not heavily used)
- Semibold: 600 (subheadings, emphasis)
- Bold: 700 (headlines, CTAs)

## 📏 Spacing System

### Vertical Spacing (Padding/Margin)
```
Tight:      py-4 or py-6           (1rem, 1.5rem)
Normal:     py-8 or py-12          (2rem, 3rem)
Relaxed:    py-16 or py-20         (4rem, 5rem)
Spacious:   py-24 or py-32         (6rem, 8rem)
```

### Horizontal Spacing
```
Container padding: px-4 sm:px-6 lg:px-8
Gaps between items: gap-4 gap-6 gap-8
```

### Margins
```
Small:      m-2, m-4, m-6
Medium:     m-8, m-10
Large:      m-12, m-16
```

## 🎯 Component Patterns

### Button Styles

**Primary Button (Black with white text)**
```jsx
<button className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition">
  Button Text
</button>
```

**Secondary Button (Border)**
```jsx
<button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition">
  Button Text
</button>
```

**Small Button**
```jsx
<button className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800">
  Button Text
</button>
```

### Card Patterns

**Feature Card**
```jsx
<div className="bg-white p-8 rounded-xl hover:shadow-lg transition">
  <div className="text-3xl mb-4">🎯</div>
  <h3 className="text-lg font-semibold text-gray-900 mb-2">Title</h3>
  <p className="text-gray-600">Description</p>
</div>
```

**Category Card**
```jsx
<div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition hover:-translate-y-1">
  <div className="text-5xl mb-4">🎨</div>
  <h3 className="text-2xl font-bold text-gray-900 mb-2">Category</h3>
  <p className="text-gray-700 mb-6">Description</p>
  <button className="text-gray-900 font-semibold flex items-center gap-2">
    Explore <span>→</span>
  </button>
</div>
```

**Product Card**
```jsx
<div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition">
  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300"></div>
  <div className="p-6">
    <h3 className="font-semibold text-gray-900 mb-2">Product Name</h3>
    <p className="text-gray-600 text-sm mb-4">Description</p>
    <div className="flex justify-between items-center">
      <span className="text-lg font-bold text-gray-900">Rs. 999</span>
      <button className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg">Add</button>
    </div>
  </div>
</div>
```

## 📱 Responsive Design

### Grid Layouts
```
Mobile:  grid-cols-1
Tablet:  sm:grid-cols-2
Desktop: lg:grid-cols-3 or lg:grid-cols-4
```

### Common Patterns
```jsx
{/* 2-column on mobile, 3-column on desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  
{/* Full width on mobile, 2-column on desktop */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
```

### Text Responsive
```jsx
<h1 className="text-5xl sm:text-6xl font-bold">
  Responsive Headline
</h1>
```

## ✨ Interaction Patterns

### Hover States
```css
hover:bg-gray-800      /* Button hover */
hover:shadow-lg        /* Card hover */
hover:-translate-y-1   /* Lift effect */
hover:text-white       /* Text color change */
```

### Transitions
```css
transition              /* Default transition */
transition-colors      /* Color-only transition */
transform hover:scale-105  /* Scale on hover */
```

### Active States
```css
active:bg-gray-900     /* Pressed state */
focus:outline-none focus:ring-2 focus:ring-offset-2  /* Focus ring */
```

## 🎨 Category Color Scheme

Each category uses a unique gradient pair:

```
Baby Care:           from-blue-100 to-blue-50
Diapers & Wipes:     from-pink-100 to-pink-50
Kids Fashion:        from-purple-100 to-purple-50
Sanitary Products:   from-rose-100 to-rose-50
Strollers & Rockers: from-green-100 to-green-50
Home Essentials:     from-amber-100 to-amber-50
```

## 📐 Border Radius System

```
Slight:   rounded-lg    (0.5rem)
Medium:   rounded-xl    (0.75rem)
Large:    rounded-2xl   (1rem)
Extra:    rounded-3xl   (1.5rem)
Full:     rounded-full  (9999px) - For pills/circles
```

## 🖼️ Image Styling

```jsx
{/* With gradient background */}
<div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl">
</div>

{/* With Tailwind aspect ratio */}
<div className="aspect-video rounded-xl overflow-hidden">
  <img src="..." alt="..." className="w-full h-full object-cover" />
</div>
```

## 🔍 Search & Input Styling

```jsx
<input
  type="email"
  placeholder="Enter your email"
  className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition"
/>
```

## 📊 Section Spacing Guide

```
Hero Section:        pt-32 pb-20
Feature Section:     py-16 bg-gray-50
Category Section:    py-20
Product Section:     py-20 bg-gray-50
CTA Section:         py-20
```

## 🎯 Performance Considerations

- Use `transform` for GPU-accelerated animations
- Prefer `translate` over `left/right` positioning
- Use `will-change` sparingly for animations
- Keep CSS files small with Tailwind purging
- Lazy load images below the fold

## ✅ Design Checklist

- [ ] Proper color contrast (AA compliance)
- [ ] Consistent spacing (use spacing system)
- [ ] Responsive on mobile/tablet/desktop
- [ ] Hover states on interactive elements
- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy (h1 → h6)
- [ ] Alt text on all images
- [ ] Focus states for keyboard navigation
- [ ] Load time optimized
- [ ] Touch targets ≥44px for mobile

---

**Last Updated**: January 2025
