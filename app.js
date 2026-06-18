const scenariosData = [
    {
        id: "s1",
        category: "plumbing",
        title: "Isolate Broken Pipe",
        instruction: "Perform emergency main line water shutoff",
        keywords: "pipe plumbing leak water flood burst emergency shutoff valve broke",
        steps: [
            "Locate main water service entry line immediately.",
            "Rotate main brass handle valve clockwise fully.",
            "Open lowest elevation faucet to bleed line pressure."
        ],
        isEmergency: true
    },
    {
        id: "s63",
        category: "automotive",
        title: "Secure Flat Tire",
        instruction: "Stabilize vehicle on flat safety ground",
        keywords: "tire flat blowout roadside wheel automotive safety jack car",
        steps: [
            "Steer vehicle onto completely flat asphalt shoulder space.",
            "Engage mechanical parking brake handle firmly.",
            "Activate hazard emergency light flashers switch."
        ],
        isEmergency: true
    },
    {
        id: "s22",
        category: "electrical",
        title: "Handle Broken Bulb",
        instruction: "Defuse shattered hot lighting elements securely",
        keywords: "light bulb shatter glass socket broken electrical replacement burnt safety",
        steps: [
            "Flip wall lighting power switch down to OFF.",
            "Confirm circuit breaker power is dead at panel layout.",
            "Extract broken base elements using specialized extraction pliers."
        ],
        isEmergency: true
    },
    {
        id: "s40",
        category: "electrical",
        title: "Defuse Outlet Spark Fire",
        instruction: "Cut terminal electricity supply instantly",
        keywords: "outlet spark fire smoke terminal emergency switch burn fuse short circuit",
        steps: [
            "Deactivate primary Main double breaker panel switch immediately.",
            "Smother active device fire using dry chemical extinguisher.",
            "Decline handling hot melted plastic wires bare-handed."
        ],
        isEmergency: true
    },
    {
        id: "s81",
        category: "safety",
        title: "Treat Kitchen Burn",
        instruction: "Cool and protect damaged skin tissue immediately",
        keywords: "burn kitchen hot oil grease steam water scald fire first aid hurt skin",
        steps: [
            "Run cool, lukewarm tap water over the burn for 20 minutes continuously.",
            "Decline applying ice, butter, or ointments to the raw wound.",
            "Wrap the cooled area loosely with clean, non-stick plastic wrap."
        ],
        isEmergency: true
    },
    {
        id: "s82",
        category: "safety",
        title: "Stop Finger Bleeding",
        instruction: "Control severe bleeding from sudden cuts",
        keywords: "cut bleed blood knife kitchen slice wound laceration first aid finger",
        steps: [
            "Apply firm, direct downward pressure using a clean cloth or gauze pad.",
            "Elevate the injured limb above heart level immediately.",
            "Wrap bandage tape snuggly over the dressing once bleeding slows."
        ],
        isEmergency: true
    },
    {
        id: "s83",
        category: "safety",
        title: "Flush Chemical Eye Splash",
        instruction: "Neutralize household chemical contact instantly",
        keywords: "eye burn chemical splash bleach cleaner soap poison wash first aid",
        steps: [
            "Position the affected eye under a gentle stream of lukewarm tap water.",
            "Flush the open eye socket continuously for 15 minutes straight.",
            "Decline rubbing or applying pressure to the eyeball surface."
        ],
        isEmergency: true
    },
    {
        id: "s84",
        category: "safety",
        title: "Halt Acute Panic Attack",
        instruction: "Break physical hyperventilation and fight-or-flight loops",
        keywords: "panic anxiety breathe hyperventilate heart racing scare attack dread stress",
        steps: [
            "Inhale deeply through your nose for exactly 4 seconds.",
            "Hold your breath at the top for 4 seconds.",
            "Exhale completely out through your mouth for 4 seconds.",
            "Hold empty for 4 seconds, then repeat the box cycle."
        ],
        isEmergency: true
    },
    {
        id: "s85",
        category: "safety",
        title: "Break Severe Dread Loop",
        instruction: "Trigger physiological grounding mechanisms",
        keywords: "anxiety spiral panic freeze dread mind racing overwhelm mental health",
        steps: [
            "Submerge your face completely in a basin of ice-cold water for 15 seconds.",
            "Identify and name 5 visible physical objects around the room layout.",
            "Press your heels firmly into the hard flooring to anchor balance."
        ],
        isEmergency: true
    },
    {
        id: "s2",
        category: "plumbing",
        title: "Repair Faucet Drip",
        instruction: "Replace worn faucet cartridge valve",
        keywords: "faucet drip leak sink repair bathroom cartridge handle valve fixture seal ring o-ring",
        steps: [
            "Shut off sink cabinet water supply valves.",
            "Remove faucet handle cap and mounting screw.",
            "Extract the old worn ceramic cartridge cylinder.",
            "Insert the new cartridge replacement parts."
        ]
    },
    {
        id: "s3",
        category: "plumbing",
        title: "Unclog Kitchen Sink",
        instruction: "Clear kitchen drain food blockages",
        keywords: "clog sink kitchen drain food backup water plunger disposal pipes block clearance",
        steps: [
            "Fill sink base with warm water partially.",
            "Place rubber plunger directly over drain opening.",
            "Pump plunger handle vertically with rapid force.",
            "Flush piping with boiling clean water."
        ]
    },
    {
        id: "s4",
        category: "plumbing",
        title: "Adjust Toilet Float",
        instruction: "Fix running toilet tank levels",
        keywords: "toilet run fill valve tank float adjust water inlet level float cup cup height screw",
        steps: [
            "Remove toilet ceramic tank cover lid.",
            "Locate float dial adjustment extension arm.",
            "Rotate plastic adjustment screw counterclockwise.",
            "Flush toilet once to verify fluid level."
        ]
    },
    {
        id: "s5",
        category: "plumbing",
        title: "Clear Shower Drain",
        instruction: "Remove bathroom drain hair obstructions",
        keywords: "shower drain clog hair bathroom shower block cover backup trap hook snake",
        steps: [
            "Remove shower drain cover plate grid.",
            "Insert plastic drain-snaking hook to bottom trap.",
            "Pull hair and grime blocks out slowly.",
            "Flush drain with boiling water streams."
        ]
    },
    {
        id: "s21",
        category: "electrical",
        title: "Reset Tripped Breaker",
        instruction: "Restore circuit breaker panel switches",
        keywords: "breaker switch panel fuse power box trip reset switch room dead power",
        steps: [
            "Locate metal main breaker panel box.",
            "Identify circuit breaker switch resting off-center.",
            "Push breaker switch handle fully OFF first.",
            "Flip breaker switch handle back to ON."
        ]
    },
    {
        id: "s61",
        category: "automotive",
        title: "Verify Engine Oil",
        instruction: "Perform fluid level checks safely",
        keywords: "car oil engine fluid vehicle dipstick level drive automotive maintenance lube hood check",
        steps: [
            "Verify engine block is completely cool.",
            "Park vehicle on flat, level asphalt.",
            "Apply mechanical emergency brake handle.",
            "Pull engine fluid dipstick completely out.",
            "Wipe metal stick clean with lint-free rag."
        ]
    },
    {
        id: "s101",
        category: "appliances",
        title: "Troubleshoot Refrigerator Warmth",
        instruction: "Diagnose and restore refrigerator cooling",
        keywords: "fridge refrigerator warm cooling food spoil temperature thermistor condenser coils",
        steps: [
            "Clean the condenser coils located at the back or bottom of the unit.",
            "Ensure the refrigerator door seals are clean and closing tightly.",
            "Verify that the thermostat dial is set to the recommended temperature level.",
            "Clear any food items blocking the internal cold air vents."
        ]
    },
    {
        id: "s102",
        category: "appliances",
        title: "Clear Dishwasher Standing Water",
        instruction: "Unclog dishwasher drainage system",
        keywords: "dishwasher clog water standing drain pump filter food disposal waste",
        steps: [
            "Remove the bottom rack and unscrew the cylindrical mesh filter.",
            "Rinse the filter thoroughly under hot running water to clear debris.",
            "Check the drain pump impeller for any trapped food particles.",
            "Verify the drain hose is not kinked or blocked near the sink connection."
        ]
    },
    {
        id: "s103",
        category: "appliances",
        title: "Reset Unresponsive Oven",
        instruction: "Restore electrical power to digital range",
        keywords: "oven stove range unresponsive screen heating element reset power",
        steps: [
            "Turn off the stove circuit breaker at the main electrical panel.",
            "Wait for 60 seconds to allow the control board capacitors to discharge.",
            "Flip the circuit breaker back on to reboot the appliance clock.",
            "Test heating elements by setting oven to bake at 350 degrees."
        ]
    },
    {
        id: "s104",
        category: "appliances",
        title: "Clean Washing Machine Filter",
        instruction: "Clear coin trap to resolve wash cycle errors",
        keywords: "washer washing machine filter drain pump error code coin trap water smell",
        steps: [
            "Open the small access door at the bottom front of the machine.",
            "Place a shallow tray and towel down to catch residual drainage water.",
            "Unscrew the pump filter cap slowly by turning it counterclockwise.",
            "Extract any coins, lint, or small debris from the filter chamber."
        ]
    }
];

const categoryList = ['plumbing', 'electrical', 'appliances', 'automotive', 'safety'];
let genCounter = 1;

categoryList.forEach(cat => {
    const currentCount = scenariosData.filter(s => s.category === cat).length;
    const needed = 10 - currentCount;
    for (let i = 0; i < needed; i++) {
        scenariosData.push({
            id: `gen-${genCounter}`,
            category: cat,
            title: `${cat.charAt(0).toUpperCase() + cat.slice(1)} Check Task ${genCounter}`,
            instruction: `Perform routine modular item execution procedure`,
            keywords: `generic routine maintenance hardware safety check home template ${cat}`,
            steps: ["Deactivate system panel connectivity.", "Inspect hardware components structure.", "Verify stable indicator metrics profile."]
        });
        genCounter++;
    }
});

const contactsData = [
    { id: "c1", category: "plumbing", type: "Specialist", name: "Alex Mercer", rating: "4.9", reviews: "142", status: "Available", phone: "1-800-555-0101" },
    { id: "c2", category: "plumbing", type: "Company", name: "Metro Water & Pipe Co.", rating: "4.7", reviews: "89", status: "On Call", phone: "1-800-555-0102" },
    { id: "c3", category: "plumbing", type: "Specialist", name: "Jordan Kross", rating: "4.8", reviews: "64", status: "Busy", phone: "1-800-555-0103" },
    { id: "c4", category: "plumbing", type: "Company", name: "FlowMax Drain Experts", rating: "4.6", reviews: "112", status: "Available", phone: "1-800-555-0104" },
    { id: "c5", category: "electrical", type: "Company", name: "VoltMaster Electricians", rating: "4.9", reviews: "215", status: "Available", phone: "1-800-555-0105" },
    { id: "c6", category: "electrical", type: "Specialist", name: "Dorian Vance", rating: "4.8", reviews: "76", status: "Available", phone: "1-800-555-0106" },
    { id: "c7", category: "electrical", type: "Company", name: "GridReady Power Solutions", rating: "4.5", reviews: "53", status: "Busy", phone: "1-800-555-0107" },
    { id: "c8", category: "electrical", type: "Specialist", name: "Samira Patel", rating: "4.7", reviews: "92", status: "On Call", phone: "1-800-555-0108" },
    { id: "c9", category: "appliances", type: "Company", name: "Smart Fix Appliance Pros", rating: "4.8", reviews: "134", status: "Available", phone: "1-800-555-0109" },
    { id: "c10", category: "appliances", type: "Specialist", name: "Marcus Brody", rating: "4.9", reviews: "108", status: "On Call", phone: "1-800-555-0110" },
    { id: "c11", category: "appliances", type: "Company", name: "Polar Cooling & Heating", rating: "4.6", reviews: "73", status: "Available", phone: "1-800-555-0111" },
    { id: "c12", category: "appliances", type: "Specialist", name: "Elena Rostova", rating: "4.5", reviews: "49", status: "Busy", phone: "1-800-555-0112" },
    { id: "c13", category: "automotive", type: "Company", name: "Roadside Rescue Mechanics", rating: "4.7", reviews: "156", status: "Available", phone: "1-800-555-0113" },
    { id: "c14", category: "automotive", type: "Specialist", name: "Kenji Sato", rating: "4.9", reviews: "88", status: "Busy", phone: "1-800-555-0114" },
    { id: "c15", category: "automotive", type: "Company", name: "Precision Diagnostic Labs", rating: "4.8", reviews: "121", status: "On Call", phone: "1-800-555-0115" },
    { id: "c16", category: "automotive", type: "Specialist", name: "Taylor Vance", rating: "4.6", reviews: "42", status: "Available", phone: "1-800-555-0116" },
    { id: "c17", category: "safety", type: "Company", name: "First-Response Hazard Co.", rating: "5.0", reviews: "67", status: "Available", phone: "1-800-555-0117" },
    { id: "c18", category: "safety", type: "Specialist", name: "Dr. Evelyn Stone", rating: "4.8", reviews: "115", status: "On Call", phone: "1-800-555-0118" },
    { id: "c19", category: "safety", type: "Company", name: "SecureHome Environmental", rating: "4.7", reviews: "94", status: "Available", phone: "1-800-555-0119" },
    { id: "c20", category: "safety", type: "Specialist", name: "Aris Thorne", rating: "4.9", reviews: "58", status: "Busy", phone: "1-800-555-0120" }
];

let state = {};
let activeScenarioId = null;
const activeDetailChecks = {};

document.addEventListener('DOMContentLoaded', () => {
    updateSystemClock();
    setInterval(updateSystemClock, 60000);

    setupEventListeners();
    loadPersistedState();
    renderDashboardCards();
    renderContacts();

    switchDashboardTab('emergency');
});

function setupEventListeners() {
    document.getElementById('dashboard-search').addEventListener('input', filterLookupSearch);
    document.getElementById('emergency-search').addEventListener('input', filterEmergencySearch);

    document.getElementById('tab-contacts').addEventListener('click', () => switchDashboardTab('contacts'));
    document.getElementById('tab-emergency').addEventListener('click', () => switchDashboardTab('emergency'));
    document.getElementById('tab-lookup').addEventListener('click', () => switchDashboardTab('lookup'));

    // Sidebar tab buttons click binding
    document.querySelectorAll('.sidebar-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            switchDashboardTab(tabName);
            switchScreen('screen-dashboard');
        });
    });

    document.getElementById('detail-back-button').addEventListener('click', () => switchScreen('screen-dashboard'));

    const modalCloseBtn = document.getElementById('btn-modal-close');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            document.getElementById('emergency-complete-modal').style.display = 'none';
        });
    }

    const modalGoContactsBtn = document.getElementById('btn-modal-go-contacts');
    if (modalGoContactsBtn) {
        modalGoContactsBtn.addEventListener('click', () => {
            const category = modalGoContactsBtn.getAttribute('data-category');
            document.getElementById('emergency-complete-modal').style.display = 'none';
            switchDashboardTab('contacts');
            if (category) {
                toggleContactAccordion(category, true);
            }
        });
    }

    // Intercept emergency dial actions to simulate calling instead of launching the dialer
    document.querySelectorAll('.btn-dial, .btn-modal-dial').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const labelSpan = btn.querySelector('.dial-label');
            const authority = labelSpan ? labelSpan.textContent : btn.textContent.trim();
            alert(`Calling ${authority}...\n\n(This is a simulated call for prototype demonstration purposes.)`);
        });
    });
}

function updateSystemClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('status-time').textContent = `${hours}:${minutes}`;
}

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) targetScreen.classList.add('active');

    if (screenId === 'screen-dashboard') {
        const searchInput = document.getElementById('dashboard-search');
        if (searchInput) {
            searchInput.value = '';
            filterLookupSearch();
        }
        const emgSearchInput = document.getElementById('emergency-search');
        if (emgSearchInput) {
            emgSearchInput.value = '';
            filterEmergencySearch();
        }
        renderStateUI();
    }
}

function switchDashboardTab(tabName) {
    document.querySelectorAll('.nav-tab-btn, .sidebar-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabName) {
            btn.classList.add('tab-active');
        } else {
            btn.classList.remove('tab-active');
        }
    });
    // Fallback for special circular tab button which doesn't use data-tab on some versions
    const tabEmergency = document.getElementById('tab-emergency');
    if (tabEmergency) {
        if (tabName === 'emergency') {
            tabEmergency.classList.add('tab-active');
        } else {
            tabEmergency.classList.remove('tab-active');
        }
    }

    document.querySelectorAll('.dashboard-view').forEach(view => view.classList.remove('view-active'));

    const logos = document.querySelectorAll('.app-logo-icon');
    const appTitle = document.getElementById('main-app-title');

    if (tabName === 'contacts') {
        document.getElementById('view-contacts').classList.add('view-active');
        logos.forEach(logo => logo.classList.remove('emergency-tint'));
        if (appTitle) appTitle.textContent = "EMD Directory";

        document.querySelectorAll('#contacts-results-list .contact-category-accordion').forEach(acc => {
            const cat = acc.id.split('-').pop();
            toggleContactAccordion(cat, false);
        });
    } else if (tabName === 'emergency') {
        document.getElementById('view-emergency').classList.add('view-active');
        logos.forEach(logo => logo.classList.add('emergency-tint'));
        if (appTitle) appTitle.textContent = "EMD Emergency Hub";

        const emgSearchInput = document.getElementById('emergency-search');
        if (emgSearchInput) {
            emgSearchInput.value = '';
            filterEmergencySearch();
        }
    } else if (tabName === 'lookup') {
        document.getElementById('view-lookup').classList.add('view-active');
        logos.forEach(logo => logo.classList.remove('emergency-tint'));
        if (appTitle) appTitle.textContent = "EMD Troubleshooting";

        document.querySelectorAll('#lookup-results-grid .category-accordion').forEach(acc => {
            acc.style.display = 'block';
            const cat = acc.getAttribute('data-category');
            toggleAccordion(cat, false);
        });
    }
}

function renderDashboardCards() {
    const emergencyGrid = document.getElementById('emergency-results-grid');
    const lookupGrid = document.getElementById('lookup-results-grid');

    emergencyGrid.innerHTML = '';
    lookupGrid.innerHTML = '';

    const categoriesList = ['plumbing', 'electrical', 'appliances', 'automotive', 'safety'];
    const accordionContainers = {};

    categoriesList.forEach(cat => {
        const accordion = document.createElement('div');
        accordion.className = 'category-accordion';
        accordion.id = `accordion-${cat}`;
        accordion.setAttribute('data-category', cat);

        const header = document.createElement('button');
        header.className = 'accordion-header';
        header.setAttribute('aria-expanded', 'false');
        header.setAttribute('aria-controls', `accordion-content-${cat}`);
        header.onclick = () => toggleAccordion(cat);

        const labelTitle = cat.charAt(0).toUpperCase() + cat.slice(1);

        header.innerHTML = `
            <div class="accordion-header-left">
                <span class="accordion-icon category-${cat}">
                    <svg viewBox="0 0 24 24">${getCategoryIconPath(cat)}</svg>
                </span>
                <span class="accordion-title">${labelTitle}<span class="accordion-badge badge-active-fix" id="badge-count-${cat}" style="display: none; margin-left: 8px; font-size: 9px; vertical-align: middle;">Active Fix</span></span>
            </div>
            <div class="accordion-header-right">
                <svg class="accordion-chevron" viewBox="0 0 24 24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
            </div>
        `;

        const content = document.createElement('div');
        content.className = 'accordion-content';
        content.id = `accordion-content-${cat}`;

        accordion.appendChild(header);
        accordion.appendChild(content);
        lookupGrid.appendChild(accordion);

        accordionContainers[cat] = content;
    });

    scenariosData.forEach(item => {
        const cardElement = createScenarioCardDOM(item);

        if (item.isEmergency) {
            emergencyGrid.appendChild(cardElement.cloneNode(true));
        }

        if (accordionContainers[item.category]) {
            accordionContainers[item.category].appendChild(cardElement.cloneNode(true));
        }
    });

    bindGridClicks('#emergency-results-grid');
    bindGridClicks('#lookup-results-grid');

    filterLookupSearch();
}

function bindGridClicks(gridSelector) {
    document.querySelectorAll(`${gridSelector} .card`).forEach(card => {
        const cleanId = card.id.split('-').pop();
        card.addEventListener('click', () => openScenarioDetails(cleanId));
    });
}

function toggleAccordion(category, forceState) {
    const accordion = document.getElementById(`accordion-${category}`);
    if (!accordion) return;

    const isExpanded = accordion.classList.contains('expanded');
    const header = accordion.querySelector('.accordion-header');

    const nextState = forceState !== undefined ? forceState : !isExpanded;

    if (nextState) {
        accordion.classList.add('expanded');
        header.setAttribute('aria-expanded', 'true');
    } else {
        accordion.classList.remove('expanded');
        header.setAttribute('aria-expanded', 'false');
    }
}

function getCategoryIconPath(category) {
    if (category === 'plumbing') {
        return `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>`;
    } else if (category === 'electrical') {
        return `<path d="M7 2v11h3v9l7-12h-4l4-8H7z"/>`;
    } else if (category === 'appliances') {
        return `<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>`;
    } else if (category === 'automotive') {
        return `<path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/>`;
    } else {
        return `<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>`;
    }
}

function createScenarioCardDOM(item) {
    const card = document.createElement('div');
    const prefix = gridSelectorCleanPrefix(item);
    card.className = `card ${item.isEmergency ? 'card-emergency' : ''}`;
    card.id = `${prefix}-card-instance-${item.id}`;
    card.setAttribute('data-keywords', item.keywords);

    const iconPath = getCategoryIconPath(item.category);

    card.innerHTML = `
        <div class="card-icon"><svg viewBox="0 0 24 24">${iconPath}</svg></div>
        <div class="card-content">
            <h3 class="card-heading">${item.title}</h3>
            <span class="card-instruction">${item.instruction}</span>
        </div>
        <span data-badge-id="${item.id}" class="card-badge badge-pending">Pending</span>
    `;
    return card;
}

function gridSelectorCleanPrefix(item) {
    return item.isEmergency ? 'emg' : 'std';
}

function filterLookupSearch() {
    const query = document.getElementById('dashboard-search').value.toLowerCase().trim();
    const categories = ['plumbing', 'electrical', 'appliances', 'automotive', 'safety'];

    categories.forEach(cat => {
        const accordion = document.getElementById(`accordion-${cat}`);
        if (!accordion) return;

        const content = accordion.querySelector('.accordion-content');
        const cards = content.querySelectorAll('.card');
        let matchCount = 0;

        cards.forEach(card => {
            const heading = card.querySelector('.card-heading').textContent.toLowerCase();
            const instruction = card.querySelector('.card-instruction').textContent.toLowerCase();
            const keywords = card.getAttribute('data-keywords') || '';

            if (query === '') {
                card.style.display = 'flex';
                matchCount++;
            } else {
                if (heading.includes(query) || instruction.includes(query) || keywords.includes(query)) {
                    card.style.display = 'flex';
                    matchCount++;
                } else {
                    card.style.display = 'none';
                }
            }
        });

        if (query === '') {
            accordion.style.display = 'block';
            toggleAccordion(cat, false);
        } else {
            if (matchCount > 0) {
                accordion.style.display = 'block';
                toggleAccordion(cat, true);
            } else {
                accordion.style.display = 'none';
            }
        }
    });
}

function filterEmergencySearch() {
    const query = document.getElementById('emergency-search').value.toLowerCase().trim();
    const cards = document.querySelectorAll('#emergency-results-grid .card');

    cards.forEach(card => {
        const heading = card.querySelector('.card-heading').textContent.toLowerCase();
        const instruction = card.querySelector('.card-instruction').textContent.toLowerCase();
        const keywords = card.getAttribute('data-keywords') || '';

        if (query === '') {
            card.style.display = 'flex';
        } else {
            if (heading.includes(query) || instruction.includes(query) || keywords.includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

function renderContacts() {
    const contactsList = document.getElementById('contacts-results-list');
    if (!contactsList) return;

    contactsList.innerHTML = '';

    const categories = ['plumbing', 'electrical', 'appliances', 'automotive', 'safety'];

    categories.forEach(cat => {
        const catContacts = contactsData.filter(c => c.category === cat);
        if (catContacts.length === 0) return;

        const accordion = document.createElement('div');
        accordion.className = 'category-accordion contact-category-accordion';
        accordion.id = `contact-accordion-${cat}`;

        const header = document.createElement('button');
        header.className = 'accordion-header';
        header.setAttribute('aria-expanded', 'false');
        header.setAttribute('aria-controls', `contact-accordion-content-${cat}`);
        header.onclick = () => toggleContactAccordion(cat);

        const title = cat.charAt(0).toUpperCase() + cat.slice(1);

        header.innerHTML = `
            <div class="accordion-header-left">
                <span class="accordion-icon category-${cat}">
                    <svg viewBox="0 0 24 24">${getCategoryIconPath(cat)}</svg>
                </span>
                <span class="accordion-title">${title} Contacts</span>
            </div>
            <div class="accordion-header-right">
                <svg class="accordion-chevron" viewBox="0 0 24 24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
            </div>
        `;

        const content = document.createElement('div');
        content.className = 'accordion-content';
        content.id = `contact-accordion-content-${cat}`;

        const grid = document.createElement('div');
        grid.className = 'contacts-grid';

        catContacts.forEach(contact => {
            const card = document.createElement('div');
            card.className = 'contact-card';

            let statusClass = 'status-available';
            if (contact.status === 'On Call') statusClass = 'status-on-call';
            if (contact.status === 'Busy') statusClass = 'status-busy';

            card.innerHTML = `
                <div class="contact-info">
                    <div class="contact-header-row">
                        <span class="contact-type-badge">${contact.type}</span>
                        <span class="contact-status-badge ${statusClass}">${contact.status}</span>
                    </div>
                    <h4 class="contact-name">${contact.name}</h4>
                    <div class="contact-rating">
                        <span class="star-icon">★</span>
                        <span class="rating-val">${contact.rating}</span>
                        <span class="reviews-count">(${contact.reviews} reviews)</span>
                    </div>
                </div>
                <div class="contact-actions">
                    <a href="tel:${contact.phone.replace(/[^0-9]/g, '')}" class="btn-contact-call" aria-label="Call ${contact.name}">
                        <svg viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                        Call
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });

        content.appendChild(grid);
        accordion.appendChild(header);
        accordion.appendChild(content);
        contactsList.appendChild(accordion);
    });
}

function toggleContactAccordion(category, forceState) {
    const accordion = document.getElementById(`contact-accordion-${category}`);
    if (!accordion) return;

    const isExpanded = accordion.classList.contains('expanded');
    const header = accordion.querySelector('.accordion-header');

    const nextState = forceState !== undefined ? forceState : !isExpanded;

    if (nextState) {
        accordion.classList.add('expanded');
        header.setAttribute('aria-expanded', 'true');
    } else {
        accordion.classList.remove('expanded');
        header.setAttribute('aria-expanded', 'false');
    }
}


function openScenarioDetails(id) {
    const item = scenariosData.find(s => s.id === id);
    if (!item) return;

    activeScenarioId = id;
    localStorage.setItem('EMD_Active_Scenario_Id', id);
    switchScreen('screen-detail');

    const backButton = document.getElementById('detail-back-button');
    const badge = document.getElementById('detail-badge');
    badge.textContent = item.category;

    if (item.isEmergency) {
        badge.style.borderColor = 'var(--color-crimson-alert)';
        badge.style.color = 'var(--color-crimson-alert)';
        badge.style.backgroundColor = 'var(--color-crimson-bg)';
        backButton.className = "btn-back btn-emergency-back";
    } else {
        badge.style.borderColor = 'var(--color-slate-border)';
        badge.style.color = 'var(--color-slate-medium)';
        badge.style.backgroundColor = '#FFFFFF';
        backButton.className = "btn-back";
    }

    document.getElementById('detail-title').textContent = item.title;
    document.getElementById('detail-subtitle').textContent = item.instruction;

    const checklistContainer = document.getElementById('detail-checklist');
    checklistContainer.innerHTML = '';

    const detailButton = document.getElementById('btn-complete-detail');
    detailButton.disabled = true;
    detailButton.className = `btn-action ${item.isEmergency ? 'btn-crimson' : ''}`;
    detailButton.onclick = () => completeActiveScenario(id);

    let loadedChecks = {};
    const savedChecksStr = localStorage.getItem('EMD_Active_Detail_Checks');
    if (savedChecksStr) {
        try {
            const parsed = JSON.parse(savedChecksStr);
            if (parsed && parsed.id === id) {
                loadedChecks = parsed.checks || {};
            }
        } catch (e) {
            console.error(e);
        }
    }

    for (let k in activeDetailChecks) delete activeDetailChecks[k];
    Object.assign(activeDetailChecks, loadedChecks);

    item.steps.forEach((stepText, idx) => {
        const li = document.createElement('li');
        li.className = 'checklist-item';

        const isChecked = activeDetailChecks[idx] === true;
        if (isChecked) {
            li.classList.add('item-checked');
        }

        li.onclick = () => {
            li.classList.toggle('item-checked');
            activeDetailChecks[idx] = li.classList.contains('item-checked');

            localStorage.setItem('EMD_Active_Detail_Checks', JSON.stringify({
                id: id,
                checks: activeDetailChecks
            }));

            let checkedCount = 0;
            for (let i = 0; i < item.steps.length; i++) {
                if (activeDetailChecks[i] === true) checkedCount++;
            }
            detailButton.disabled = (checkedCount !== item.steps.length);
        };
        li.innerHTML = `
            <div class="checklist-item-left">
                <div class="custom-checkbox">
                    <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <div class="checklist-step-details">
                    <span class="checklist-text">${stepText}</span>
                </div>
            </div>
            <div class="checklist-step-image-holder">
                <svg class="step-placeholder-svg" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="3" fill="#EAECEE"/>
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="#BDC3C7"/>
                </svg>
            </div>
        `;
        checklistContainer.appendChild(li);
    });

    let checkedCount = 0;
    for (let i = 0; i < item.steps.length; i++) {
        if (activeDetailChecks[i] === true) checkedCount++;
    }
    detailButton.disabled = (checkedCount !== item.steps.length);
}

function completeActiveScenario(id) {
    const item = scenariosData.find(s => s.id === id);
    state[id] = { completed: true, timestamp: new Date().getTime() };
    activeScenarioId = null;
    localStorage.removeItem('EMD_Active_Scenario_Id');
    localStorage.removeItem('EMD_Active_Detail_Checks');
    persistState();
    switchScreen('screen-dashboard');

    if (item && item.isEmergency) {
        const modal = document.getElementById('emergency-complete-modal');
        if (modal) {
            const goContactsBtn = document.getElementById('btn-modal-go-contacts');
            if (goContactsBtn) {
                goContactsBtn.setAttribute('data-category', item.category || '');
            }
            modal.style.display = 'flex';
        }
    }
}

function loadPersistedState() {
    const savedState = localStorage.getItem('EMD_Prototype_State');
    if (savedState) {
        try { state = JSON.parse(savedState); } catch (e) { console.error(e); }
    }

    const savedActiveId = localStorage.getItem('EMD_Active_Scenario_Id');
    if (savedActiveId) {
        activeScenarioId = savedActiveId;
    }

    renderStateUI();
}

function persistState() {
    localStorage.setItem('EMD_Prototype_State', JSON.stringify(state));
    renderStateUI();
}

function hasCheckedSteps(scenarioId) {
    if (!scenarioId) return false;
    if (activeScenarioId === scenarioId) {
        return Object.values(activeDetailChecks).some(val => val === true);
    }
    const savedChecksStr = localStorage.getItem('EMD_Active_Detail_Checks');
    if (!savedChecksStr) return false;
    try {
        const parsed = JSON.parse(savedChecksStr);
        if (parsed && parsed.id === scenarioId && parsed.checks) {
            return Object.values(parsed.checks).some(val => val === true);
        }
    } catch (e) {
        console.error(e);
    }
    return false;
}

function updateTabIndicators(activeCat, isEmergency) {
    const contactsInd = document.getElementById('tab-contacts-indicator');
    const emgInd = document.getElementById('tab-emergency-indicator');
    const lookupInd = document.getElementById('tab-lookup-indicator');

    if (contactsInd) {
        contactsInd.style.display = 'none';
    }
    if (emgInd) {
        emgInd.style.display = 'none';
    }
    if (lookupInd) {
        if (activeCat && !isEmergency) {
            lookupInd.textContent = ` (${activeCat.charAt(0).toUpperCase() + activeCat.slice(1)})`;
            lookupInd.style.display = 'inline';
        } else {
            lookupInd.style.display = 'none';
        }
    }
}

function renderStateUI() {
    let completedCount = 0;
    const historyTimeline = [];

    scenariosData.forEach(item => {
        const sState = state[item.id];
        const matchedBadges = document.querySelectorAll(`[data-badge-id="${item.id}"]`);

        matchedBadges.forEach(badge => {
            if (sState && sState.completed) {
                badge.className = 'card-badge badge-done';
                badge.textContent = 'Done';
            } else {
                badge.className = 'card-badge badge-pending';
                badge.textContent = 'Pending';
            }
        });

        if (sState && sState.completed) {
            completedCount++;
            historyTimeline.push({ title: item.title, timestamp: sState.timestamp });
        }
    });

    const metricsTitle = document.getElementById('metrics-title');
    if (metricsTitle) {
        metricsTitle.textContent = `Completed Guides: ${completedCount} / ${scenariosData.length}`;
    }

    const progressBarFill = document.getElementById('progress-bar-fill');
    if (progressBarFill) {
        progressBarFill.style.width = `${(completedCount / scenariosData.length) * 100}%`;
    }

    const categoriesList = ['plumbing', 'electrical', 'appliances', 'automotive', 'safety'];

    let activeCat = null;
    let isEmergency = false;

    let currentActiveId = activeScenarioId || localStorage.getItem('EMD_Active_Scenario_Id');
    if (currentActiveId && hasCheckedSteps(currentActiveId)) {
        const activeItem = scenariosData.find(s => s.id === currentActiveId);
        if (activeItem) {
            activeCat = activeItem.category;
            isEmergency = !!activeItem.isEmergency;
        }
    }

    categoriesList.forEach(cat => {
        const badge = document.getElementById(`badge-count-${cat}`);
        const accordion = document.getElementById(`accordion-${cat}`);
        if (badge) {
            if (cat === activeCat) {
                badge.style.display = 'inline-block';
                if (accordion) accordion.classList.add('has-active-fix');
            } else {
                badge.style.display = 'none';
                if (accordion) accordion.classList.remove('has-active-fix');
            }
        }
    });

    updateTabIndicators(activeCat, isEmergency);

    const timelineContainer = document.getElementById('dashboard-history-timeline');
    if (timelineContainer) {
        timelineContainer.innerHTML = '';

        if (historyTimeline.length === 0) {
            timelineContainer.innerHTML = `<div class="history-item"><span class="fallback-text">No completed history logs</span></div>`;
        } else {
            historyTimeline.sort((a, b) => b.timestamp - a.timestamp);
            historyTimeline.slice(0, 5).forEach(item => {
                const date = new Date(item.timestamp);
                const formatted = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' ' + date.toLocaleDateString([], { month: 'short', day: 'numeric' });
                const div = document.createElement('div');
                div.className = 'history-item';
                div.innerHTML = `
                    <div class="history-status-indicator">
                        <span class="history-dot dot-active"></span>
                        <span>${item.title}</span>
                    </div>
                    <span>${formatted}</span>
                `;
                timelineContainer.appendChild(div);
            });
        }
    }
}