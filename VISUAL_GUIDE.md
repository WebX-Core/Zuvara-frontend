# Zuvara Design - Visual Reference Guide

## 🎯 Quick Navigation

- **Navbar**: Fixed, glassmorphic, Apple-style
- **Hero Section**: 2-column layout with headlines and CTAs
- **Features Grid**: 3-column highlight section
- **Categories**: 6 color-coded cards with icons
- **Products**: 4-column product grid
- **CTA Banner**: Full-width gradient section
- **Footer**: Dark footer with newsletter and links

---

## 📱 Navbar Structure

```
┌─────────────────────────────────────┐
│ Logo   Products About Articles Contact  Search  Shop ☰ │
└─────────────────────────────────────┘
  ↑      ↑                            ↑      ↑     ↑   ↑
  Logo   Navigation Links            Small Actions     Mobile Menu
```

**Mobile**: Logo + Shop button + Menu

---

## 🎨 Hero Section Layout

```
┌────────────────────────────────────────────┐
│                                            │
│  Large Headline         ┌──────────────┐  │
│  Subheading Text        │              │  │
│                         │   Gradient   │  │
│  [Button] [Button]      │   Visual     │  │
│                         │              │  │
│  50K+ Customers         └──────────────┘  │
│  1000+ Products                            │
│                                            │
└────────────────────────────────────────────┘
```

---

## ✨ Features Section (3-Column)

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ 🎯           │  │ 🚚           │  │ 🔒           │
│              │  │              │  │              │
│ Premium      │  │ Fast         │  │ Safe &       │
│ Quality      │  │ Delivery     │  │ Trusted      │
│              │  │              │  │              │
│ Description  │  │ Description  │  │ Description  │
└──────────────┘  └──────────────┘  └──────────────┘
```

---

## 🛍️ Categories Section (2-3 Column Responsive)

```
Mobile (1 col):
┌──────────────────┐
│ 👶 Baby Care     │
│ Description      │
│ Explore →        │
└──────────────────┘
┌──────────────────┐
│ 🧷 Diapers       │
└──────────────────┘

Tablet (2 col):
┌─────────────────┐  ┌─────────────────┐
│ 👶 Baby Care    │  │ 🧷 Diapers      │
└─────────────────┘  └─────────────────┘
┌─────────────────┐  ┌─────────────────┐
│ 👕 Kids Fashion │  │ 🌸 Sanitary     │
└─────────────────┘  └─────────────────┘

Desktop (3 col):
┌────────┐  ┌────────┐  ┌────────┐
│ Baby   │  │Diapers │  │Fashion │
└────────┘  └────────┘  └────────┘
┌────────┐  ┌────────┐  ┌────────┐
│Sanitary│  │Stroller│  │Home    │
└────────┘  └────────┘  └────────┘
```

---

## 📦 Product Grid (4-Column)

```
┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
│ Image  │  │ Image  │  │ Image  │  │ Image  │
│        │  │        │  │        │  │        │
├────────┤  ├────────┤  ├────────┤  ├────────┤
│Product1│  │Product2│  │Product3│  │Product4│
│Description │Description│Description│Description│
│Rs. 999 [Add]     │ Rs. 999 [Add]     │
└────────┘  └────────┘  └────────┘  └────────┘
```

---

## 🎯 CTA Section

```
┌──────────────────────────────────────┐
│                                      │
│   Ready to get started?              │
│   Browse our complete collection     │
│                                      │
│   [Start Shopping Button]            │
│                                      │
└──────────────────────────────────────┘
  (Gradient background: purple → pink)
```

---

## 🦶 Footer Structure

```
┌────────────────────────────────────────┐
│ Newsletter Section                     │
├────────────────────────────────────────┤
│                                        │
│ About      Shop      Support  Contact  │
│ • Story    • Diapers • Contact • Email │
│ • Mission  • Care    • FAQ     • Phone │
│ • Team     • Fashion • Size    • Social│
│            • All     • Track   • Hours │
│                                        │
├────────────────────────────────────────┤
│ © 2025 Zuvara | Privacy | Terms | Map │
└────────────────────────────────────────┘
```

---

## 🎨 Color Assignments by Component

### Hero Section
- Headline: Black (text-gray-900)
- Subheading: Gray (text-gray-600)
- Button: Black background, white text
- Visual: Gradient (purple to blue)

### Categories
| Category | Colors |
|----------|--------|
| Baby Care | Blue (100-50) |
| Diapers | Pink (100-50) |
| Fashion | Purple (100-50) |
| Sanitary | Rose (100-50) |
| Strollers | Green (100-50) |
| Home | Amber (100-50) |

### CTA Section
- Background: Gradient (purple-600 → pink-600)
- Text: White
- Button: White with dark hover

### Footer
- Background: Black
- Text: Gray (400-600)
- Buttons: White text on hover
- Links: Gray → White on hover

---

## 📐 Key Spacing Rules

```
Container width:    max-w-7xl
Padding:            px-4 sm:px-6 lg:px-8
Section height:     py-20 (sections)
Heading spacing:    mb-4, mb-8
Content spacing:    gap-6, gap-8, gap-12
Card padding:       p-6, p-8
```

---

## 🎭 Interactive States

### Buttons
- **Default**: Black bg, white text
- **Hover**: Dark gray bg (gray-800)
- **Active**: Even darker (gray-900)
- **Focus**: Outline ring (not shown, but recommended)

### Cards
- **Default**: Subtle shadow
- **Hover**: Larger shadow, slight lift (-translate-y-1)

### Links
- **Default**: Gray text
- **Hover**: Darker text (gray-900)

---

## 📊 Responsive Breakpoints

```
Mobile:  320px - 639px   (full width, 1 column)
Tablet:  640px - 1023px  (2 columns, md: prefix)
Desktop: 1024px+         (3-4 columns, lg: prefix)
```

### Example Classes
```
grid-cols-1           (mobile, default)
sm:grid-cols-2        (small screens)
md:grid-cols-2 lg:grid-cols-3  (medium & large)
```

---

## 🔤 Typography Examples

### Headline (h1)
```
Size: text-5xl sm:text-6xl
Weight: font-bold
Color: text-gray-900
Line Height: leading-tight
```

### Subheading (h2)
```
Size: text-3xl sm:text-4xl
Weight: font-bold
Color: text-gray-900
Margin: mb-4
```

### Body Text
```
Size: text-base
Weight: Regular
Color: text-gray-700
Line Height: leading-relaxed
```

### Caption
```
Size: text-sm
Weight: Regular
Color: text-gray-600
```

---

## ✅ Component Checklist

When building new components, follow these patterns:

- [ ] Use `max-w-7xl` for container width
- [ ] Use `px-4 sm:px-6 lg:px-8` for padding
- [ ] Use `py-20` for section vertical spacing
- [ ] Use `rounded-xl` for cards, `rounded-full` for buttons
- [ ] Use `gap-6` or `gap-8` for grid spacing
- [ ] Add `hover:shadow-lg transition` to interactive elements
- [ ] Use gradient backgrounds with `from-` and `to-` classes
- [ ] Ensure responsive design with `sm:`, `md:`, `lg:` prefixes
- [ ] Use semantic HTML (nav, section, footer, etc.)
- [ ] Add proper spacing with `mb-`, `mt-`, `gap-` classes

---

## 🚀 Performance Tips

1. **Images**: Use Next.js Image component
2. **Fonts**: System fonts (already included)
3. **CSS**: Tailwind purges unused styles
4. **Animations**: Use `transform` and `transition`
5. **Spacing**: Use Tailwind scale for consistency

---

## 🔗 Quick Links

- [Tailwind Color Reference](https://tailwindcss.com/docs/customizing-colors)
- [Tailwind Spacing](https://tailwindcss.com/docs/space)
- [Font Sizes](https://tailwindcss.com/docs/font-size)
- [Rounded Corners](https://tailwindcss.com/docs/border-radius)

---

**Last Updated**: January 2025 | Version 1.0
