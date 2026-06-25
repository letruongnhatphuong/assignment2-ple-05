# GitHub Repository

https://github.com/letruongnhatphuong/assignment2-ple-05

# Live Prototype

https://letruongnhatphuong.github.io/assignment2-ple-05/

---

# Navigation Structure

The application contains three primary navigation sections that are accessible through the bottom navigation bar on mobile devices and the sidebar on larger screens.

## Contacts

Displays verified specialists and service companies grouped by category, allowing users to quickly locate professional assistance.

## Emergency

Provides immediate emergency guidance together with emergency contact shortcuts for situations requiring urgent action.

## Lookup

Contains categorized troubleshooting guides that users can browse or search to locate step-by-step solutions for common household problems.

---

# Responsive Design

The prototype was developed using **HTML5, CSS3, JavaScript, CSS Grid, Flexbox, and Media Queries** without relying on external frameworks such as Bootstrap.

This approach was chosen because it:

- Provides complete control over the interface layout.
- Keeps the application lightweight.
- Allows the application to function completely offline.
- Adapts automatically across desktop, tablet, and mobile devices.

---

# Local Storage

After all checklist items are completed, the application stores the completed scenario information and timestamp in the browser using the following key:

```text
EMD_Prototype_State
```

This allows completed scenarios to remain completed even after refreshing the page.

---

# Implemented Scenarios

## Scenario 1 – Isolate Broken Pipe

### Navigation Path

Emergency Hub → Isolate Broken Pipe → Complete Checklist → Completion Screen

### Purpose

This scenario helps users quickly stop water damage by following simple emergency plumbing procedures before contacting a professional if necessary.

---

## Scenario 2 – Troubleshoot Refrigerator Warmth

### Navigation Path

Lookup → Appliances → Troubleshoot Refrigerator Warmth → Complete Checklist → Contacts Directory (if unresolved)

### Purpose

This scenario guides users through common refrigerator troubleshooting steps. If the issue cannot be resolved, users can continue to contact a qualified appliance technician.

---

## Scenario 3 – Halt Acute Panic Attack

### Navigation Path

Emergency Hub or Lookup → Safety → Halt Acute Panic Attack → Complete Exercise → Completion Screen

### Purpose

This scenario guides users through a box-breathing exercise to help reduce panic symptoms and encourage calm, controlled breathing during stressful situations. Users have the option to contact emergency authorities or specialists after the emergency is under control.

---

## Color System

The EMD interface uses a **Complementary Color Scheme**.

The prototype uses a Complementary Color Scheme.

The application primarily combines cool blue-gray colours with warm orange accents. Red is reserved exclusively for emergency-related functions.

---

## Primary Color

### Deep Slate Gray

**HEX**

```text
#2C3E50
```

**RGB**

```text
rgb(44, 62, 80)
```

### Used For

- Navigation bar
- Sidebar
- Headers
- Text
- Borders

### Rationale

Deep Slate Gray provides strong readability against the light background while creating a professional and trustworthy appearance. It serves as the primary structural colour throughout the interface.

---

## Accent Color

### Safety Orange

**HEX**

```text
#E67E22
```

**RGB**

```text
rgb(230, 126, 34)
```

### Used For

- Buttons
- Active navigation
- Progress indicators
- Search focus
- Interactive controls

### Rationale

Safety Orange complements the blue-gray interface by providing strong contrast. It naturally attracts user attention toward interactive components without overwhelming the overall interface.

---

## Neutral Background

### Soft Alabaster

**HEX**

```text
#F8F9FA
```

**RGB**

```text
rgb(248, 249, 250)
```

### Used For

- Main background
- Content area
- Cards

### Rationale

The light neutral background improves readability, reduces visual fatigue, and allows important interface elements to stand out more clearly.

---

## Emergency Color

### Stop Crimson

**HEX**

```text
#C0392B
```

**RGB**

```text
rgb(192, 57, 43)
```

### Used For

- Emergency Hub
- Emergency buttons
- Warning messages
- Critical alerts

### Rationale

Red is reserved only for emergency situations. Restricting this colour to critical actions allows users to immediately recognize warnings and emergency-related functions.

---

# Features

The prototype includes the following features:

- Responsive layouts for mobile, tablet, and desktop devices.
- Search functionality for Emergency and Lookup scenarios.
- Browser Local Storage for saving completed scenarios.
- Specialist directory organized by category.
- Emergency quick-access contacts.
- Progress tracking for completed troubleshooting guides.
- Interactive checklists with completion tracking.

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- CSS Grid
- Flexbox
- CSS Media Queries
- Browser Local Storage
