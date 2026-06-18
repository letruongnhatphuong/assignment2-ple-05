# Companion Design Document: EMD Mobile Prototype (ple-05)

This document provides the deployment specifications, scenario design matrices, Git workflow details, and 60-30-10 color rationales for the **"Even My Dad Doesn't Know About This" (EMD)** mobile troubleshooting web application.

---

## 1. Deployment Overview

The EMD prototype is an offline-capable, client-side application. It compiles 100% locally and contains zero external dependencies, CDN assets, or server-side requirements.

### Live Production Architecture
* **GitHub Repository URL:** `https://github.com/letruongnhatphuong/assignment2-ple-05`
* **Live GitHub Pages URL:** `https://letruongnhatphuong.github.io/assignment2-ple-05/`

### Directory Packaging (`Assignment2-ple-05.zip`)
Upon extraction of the submission zip file, the structure is organized cleanly:
* `index.html` — The structural layout shell defining views and navigation nodes.
* `style.css` — The presentation layer establishing fluid wrappers and design rules.
* `app.js` — The behavioral engine controlling state serialization and local storage mechanics.
* `ProtoType-ple-05.md` — This companion documentation manual.
* `Lofi/` — Directory containing 3 structural skeleton wireframe blueprints.
* `Hifi/` — Directory containing 3 high-fidelity visual interface screen designs.

---

## 2. Interface Navigation & Routing

The user interface uses a responsive mobile safe-area viewport template (`max-width: 420px`) that centers seamlessly on desktop web browsers. View switching is controlled by a client-side state engine linked directly to the persistent **Bottom Tab Navigation Bar** managing three views:
1. **Contacts Tab (Left):** Renders the `#view-contacts` directory page mapping out trade professionals and emergency technician companies in collapsible accordion blocks.
2. **EMERGENCY Tab (Center):** High-alert prominent circular button. Instantly routes users to the Crisis Containment interface containing authority direct-dials and immediate safety cards.
3. **Lookup Tab (Right):** Renders the `#view-lookup` directory screen using collapsible folders to slice the embedded 50-scenario troubleshooting database in real time.

---

## 3. Scenario Design Matrices

The platform handles real-time verification processing loops. Three core interaction paths are demonstrated through local storage mutations:

### Scenario 1: Isolate Broken Pipe (Category: Plumbing)
* **Operational Goal:** Stop active residential water damage before systemic structural flooding occurs.
* **Navigation Path:** Emergency Tab $\rightarrow$ Click "Isolate Broken Pipe" Card $\rightarrow$ Access Deep Action Checklist.
* **Direct Action Steps (Commanding Verbs):**
    1. **Locate** main water service entry line immediately.
    2. **Rotate** main brass handle valve clockwise fully.
    3. **Open** lowest elevation faucet to bleed line pressure.
* **LocalStorage Tracking Key:** Writes metadata state `{completed: true, timestamp: EpochMs}` to key `s1` in `EMD_Prototype_State`.
* **Expected Outcome:** Completing the scenario updates the card badge to a green "Done" tag, increments metrics, and fires a post-emergency notification modal with a trade directory link.

### Scenario 2: Treat Kitchen Burn (Category: Home Safety / First Aid)
* **Operational Goal:** Stabilize acute thermal skin damage instantly using safe first-aid practices.
* **Navigation Path:** Emergency Tab $\rightarrow$ Select "Treat Kitchen Burn" Card $\rightarrow$ Access Triage Checklist.
* **Direct Action Steps (Commanding Verbs):**
    1. **Run** cool, lukewarm tap water over the burn for 20 minutes continuously.
    2. **Decline** applying ice, butter, or ointments to the raw wound.
    3. **Wrap** the cooled area loosely with clean, non-stick plastic wrap.
* **LocalStorage Tracking Key:** Writes metadata state `{completed: true, timestamp: EpochMs}` to key `s81` in `EMD_Prototype_State`.
* **Expected Outcome:** Completing the checklist locks in state persistence and steps your global dashboard tracker forward from `0/50` to `1/50`.

### Scenario 3: Halt Acute Panic Attack (Category: Home Safety / Mental Health Grounding)
* **Operational Goal:** De-escalate physical hyperventilation loops through box-breathing templates.
* **Navigation Path:** Lookup Tab $\rightarrow$ Open Safety folder $\rightarrow$ Select "Halt Acute Panic Attack".
* **Direct Action Steps (Commanding Verbs):**
    1. **Inhale** deeply through your nose for exactly 4 seconds.
    2. **Hold** your breath at the top for 4 seconds.
    3. **Exhale** completely out through your mouth for 4 seconds.
    4. **Hold** empty for 4 seconds, then repeat the box cycle.
* **LocalStorage Tracking Key:** Writes metadata state `{completed: true, timestamp: EpochMs}` to key `s84` in `EMD_Prototype_State`.
* **Expected Outcome:** Toggling checks unlocks the primary action submit button, logs metrics data, and saves history logs.

---

## 4. Visual Color System (60-30-10 Rule)

The system color palette utilizes distinct ratios to balance visual clarity, content accessibility, and interface affordances under stressful user conditions.

### 60% Layout Canvas Backdrop (Soft Alabaster)
* **HEX / RGB:** `#F8F9FA` / `rgb(248, 249, 250)`
* **Rationale:** Acts as the primary background text canvas. Reduces blinding display glare on mobile screens during unexpected situational panics.

### 30% Structural Bounds & Typographic Contrast (Deep Slate Gray)
* **HEX / RGB:** `#2C3E50` / `rgb(44, 62, 80)`
* **Rationale:** Forms the persistent navigation layouts, structural shell edges, and titles. Secures deep accessible text color ratios conforming strictly to WCAG AA parameters.

### 10% Interactive Call-to-Action Highlights (Safety Orange)
* **HEX / RGB:** `#E67E22` / `rgb(230, 126, 34)`
* **Rationale:** Dictates the visual styling of custom checkbox components, active screen menu indicators, and actionable button elements to minimize input errors.

### Safety Alert Accent (Stop Crimson)
* **HEX / RGB:** `#C0392B` / `rgb(192, 57, 43)`
* **Rationale:** Directs focal attention immediately to emergency dispatch numbers, warning structures, and life-critical triage views.

---

## 5. Simulated Actions & Interactions

To ensure a fully functional client-side prototype without requiring external device or hardware integrations:
* **Emergency Dispatch Authorities:** Clicking emergency dispatcher buttons (`.btn-dial` and `.btn-modal-dial`) intercepts execution via JavaScript. It triggers a browser notification warning (`alert()`) indicating a simulated call is occurring rather than triggering the device's native `tel:` dialer.
* **Search Empty State Handling:** Entering a search query that does not match any embedded database scenarios or emergency items triggers a simulated "No Results Found" layout card. The UI dynamically interpolates the search query, hides the default result grid, and provides action buttons to clear the search query or switch view focus to the Specialist Directory tab.