
import "./style.css";

const vehicle = {
  name: "SHELBY PREDATOR GT",
  edition: "LE MANS EDITION",
  designation: "SP-GT / 427",
  configuration: "OPEN COCKPIT · CENTERLINE SINGLE SEAT",
  dimensions: {
    wheelbase: "3,000 mm",
    width: "2,000 mm",
    height: "1,100 mm"
  }
};

const systems = [
  {
    id: "powertrain",
    name: "427 POWERTRAIN",
    code: "SP-427",
    description: "427 Block powered by the 427 Protocol. Ford motor and transmission integration is the design intent.",
    status: "CONCEPT",
    color: "orange"
  },
  {
    id: "chassis",
    name: "CARBON MONOCOQUE",
    code: "SP-CF01",
    description: "Centerline single-seat carbon-fiber structural concept and rear-mid layout.",
    status: "CONCEPT",
    color: "blue"
  },
  {
    id: "driver",
    name: "COBRA DRIVERSENSE",
    code: "CDS-01",
    description: "Driver interface and intelligence concept, including the Marvell-based suit architecture.",
    status: "PLANNED",
    color: "purple"
  },
  {
    id: "hud",
    name: "MICROSOFT HUD",
    code: "SP-HUD",
    description: "Proposed driver-facing display and vehicle information interface.",
    status: "PLANNED",
    color: "blue"
  },
  {
    id: "aero",
    name: "VIAF AERO SYSTEM",
    code: "VIAF-01",
    description: "Vehicle ingress, distributed aerodynamic fabric concept, and rear egress architecture.",
    status: "CONCEPT",
    color: "orange"
  },
  {
    id: "thermal",
    name: "HEXCORE / VTSE",
    code: "VTSE-01",
    description: "Thermal management architecture for the vehicle and its integrated systems.",
    status: "PLANNED",
    color: "purple"
  },
  {
    id: "digital",
    name: "VENOM RWA PLATFORM",
    code: "VRWA-01",
    description: "Proposed digital asset and vehicle data ecosystem, connected to Shelby Chain.",
    status: "PLANNED",
    color: "green"
  }
];

const skins = [
  { name: "WHITE DEFI", detail: "SHELBY CHAIN", color: "#e8edf5" },
  { name: "BLACK DEFI", detail: "STEALTH FINISH", color: "#343b49" },
  { name: "MOTHERBOARD", detail: "CIRCUIT GRAPHICS", color: "#35d9c3" },
  { name: "BLUE DEFI", detail: "PERFORMANCE BLUE", color: "#2786ff" },
  { name: "PURE BLACK", detail: "BLACKOUT FINISH", color: "#111318" }
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="shell">
    <header class="topbar">
      <a class="brand" href="#overview">
        <span class="brand-mark">S</span>
        <span>
          <strong>SHELBY PREDATOR</strong>
          <small>VEHICLE DEVELOPMENT DIVISION</small>
        </span>
      </a>
      <div class="top-status">
        <span class="pulse"></span>
        CONCEPT COMMAND ONLINE
      </div>
      <div class="top-right">427 <span>PROTOCOL</span></div>
    </header>

    <main>
      <section class="hero" id="overview">
        <div class="hero-copy">
          <div class="eyebrow"><span></span> VEHICLE PROGRAM / 001</div>
          <h1>SHELBY PREDATOR <em>GT</em></h1>
          <div class="edition">${vehicle.edition}</div>
          <p class="hero-description">
            One machine. One integrated architecture.
            A new approach to the endurance racing platform.
          </p>
          <div class="hero-tags">
            <span>OPEN COCKPIT</span>
            <span>REAR-MID LAYOUT</span>
            <span>427 PLATFORM</span>
          </div>
          <div class="hero-actions">
            <button class="primary-btn" data-scroll="systems">EXPLORE SYSTEMS <span>↗</span></button>
            <button class="secondary-btn" data-scroll="specs">VEHICLE SPECIFICATIONS</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="visual-grid"></div>
          <div class="visual-ring ring-one"></div>
          <div class="visual-ring ring-two"></div>
          <div class="car-placeholder">
            <div class="car-label">SP-GT / 427</div>
            <svg viewBox="0 0 720 310" role="img" aria-label="Stylized top-down racing vehicle silhouette">
              <defs>
                <linearGradient id="carPaint" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stop-color="#dce6f2"/>
                  <stop offset=".45" stop-color="#68798d"/>
                  <stop offset="1" stop-color="#202b3b"/>
                </linearGradient>
                <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stop-color="#70dfff" stop-opacity=".7"/>
                  <stop offset="1" stop-color="#182c49" stop-opacity=".9"/>
                </linearGradient>
              </defs>
              <g transform="translate(35 15)">
                <path d="M85 155 L118 125 L190 110 L240 68 L330 52 L420 68 L475 110 L555 125 L590 155 L555 185 L475 198 L420 239 L330 254 L240 239 L190 198 L118 185 Z"
                  fill="url(#carPaint)" stroke="#b6c9df" stroke-width="3"/>
                <path d="M225 112 L275 76 L385 76 L435 112 L460 155 L435 198 L385 234 L275 234 L225 198 L200 155 Z"
                  fill="url(#glass)" stroke="#7adfff" stroke-width="2"/>
                <path d="M285 88 L375 88 L402 155 L375 222 L285 222 L258 155 Z"
                  fill="#101c2e" stroke="#8bb9d6" stroke-width="2"/>
                <path d="M305 110 L355 110 L370 155 L355 200 L305 200 L290 155 Z"
                  fill="#28394f" stroke="#a6c3da" stroke-width="2"/>
                <path d="M70 133 L160 119 L180 155 L160 191 L70 177 Z" fill="#141c28"/>
                <path d="M500 119 L610 133 L610 177 L500 191 L480 155 Z" fill="#141c28"/>
                <path d="M130 104 L210 91 L220 119 L155 137 Z" fill="#080d16"/>
                <path d="M130 206 L210 219 L220 191 L155 173 Z" fill="#080d16"/>
                <path d="M455 91 L535 104 L510 137 L445 119 Z" fill="#080d16"/>
                <path d="M455 219 L535 206 L510 173 L445 191 Z" fill="#080d16"/>
                <path d="M80 155 H610" stroke="#d5e8f7" stroke-opacity=".45" stroke-width="2" stroke-dasharray="8 9"/>
                <path d="M330 52 V254" stroke="#6fe4ff" stroke-opacity=".8" stroke-width="2" stroke-dasharray="5 7"/>
                <circle cx="330" cy="155" r="7" fill="#65e8ff"/>
              </g>
            </svg>
            <div class="car-caption">DIGITAL VEHICLE STUDY <span>01 / 05</span></div>
          </div>
          <div class="visual-coordinate">36° 50' 00" N<br/>SHELBY DESIGN GRID</div>
        </div>
      </section>

      <section class="metric-strip">
        <div><small>PROGRAM ID</small><strong>SP-GT / 427</strong></div>
        <div><small>VEHICLE CLASS</small><strong>LE MANS CONCEPT</strong></div>
        <div><small>COCKPIT</small><strong>1 SEAT / CENTERLINE</strong></div>
        <div><small>ARCHITECTURE</small><strong>INTEGRATED PLATFORM</strong></div>
      </section>

      <section class="section" id="specs">
        <div class="section-heading">
          <div>
            <div class="eyebrow">01 / VEHICLE FOUNDATION</div>
            <h2>THE MACHINE <span>FRAME</span></h2>
          </div>
          <p>Initial design parameters. All dimensions and performance targets remain subject to engineering validation.</p>
        </div>

        <div class="spec-layout">
          <div class="spec-feature">
            <div class="feature-number">427</div>
            <div class="feature-title">THE HEART OF THE MACHINE</div>
            <p>427 Block powered by the 427 Protocol.</p>
            <div class="feature-line"></div>
            <small>POWERTRAIN DESIGN INTENT</small>
          </div>
          <div class="spec-grid">
            <div class="spec-card"><small>WHEELBASE</small><strong>3,000 <i>mm</i></strong><span>PROVISIONAL</span></div>
            <div class="spec-card"><small>OVERALL WIDTH</small><strong>2,000 <i>mm</i></strong><span>PROVISIONAL</span></div>
            <div class="spec-card"><small>OVERALL HEIGHT</small><strong>1,100 <i>mm</i></strong><span>PROVISIONAL</span></div>
            <div class="spec-card"><small>CHASSIS</small><strong>CARBON <i>FIBER</i></strong><span>MONOCOQUE CONCEPT</span></div>
            <div class="spec-card"><small>ENGINE POSITION</small><strong>REAR <i>MID</i></strong><span>LAYOUT CONCEPT</span></div>
            <div class="spec-card"><small>DRIVER POSITION</small><strong>CENTER <i>LINE</i></strong><span>SINGLE SEAT</span></div>
          </div>
        </div>
      </section>

      <section class="section" id="systems">
        <div class="section-heading">
          <div>
            <div class="eyebrow">02 / INTEGRATED VEHICLE ARCHITECTURE</div>
            <h2>THE SYSTEMS <span>STACK</span></h2>
          </div>
          <p>Every system has a defined role. The goal is to engineer the vehicle as one coordinated platform.</p>
        </div>
        <div class="system-grid" id="systemGrid"></div>
      </section>

      <section class="section skin-section" id="skins">
        <div class="section-heading">
          <div>
            <div class="eyebrow">03 / VEHICLE IDENTITY</div>
            <h2>CHOOSE YOUR <span>SKIN</span></h2>
          </div>
          <p>Five visual identities for the Shelby Predator GT concept.</p>
        </div>
        <div class="skin-grid" id="skinGrid"></div>
        <div class="skin-preview">
          <div class="skin-swatch" id="skinSwatch"></div>
          <div>
            <small>SELECTED FINISH</small>
            <strong id="skinName">WHITE DEFI</strong>
            <span id="skinDetail">SHELBY CHAIN</span>
          </div>
          <div class="skin-index" id="skinIndex">01 / 05</div>
        </div>
      </section>

      <section class="section integration-section">
        <div class="section-heading">
          <div>
            <div class="eyebrow">04 / ENTERPRISE CONNECTION</div>
            <h2>THE VEHICLE <span>ECOSYSTEM</span></h2>
          </div>
          <p>The vehicle is designed to connect with the broader Shelby Predator Enterprise architecture.</p>
        </div>
        <div class="ecosystem">
          <div class="eco-node central">
            <span>SP</span>
            <strong>SHELBY PREDATOR GT</strong>
            <small>VEHICLE PLATFORM</small>
          </div>
          <div class="eco-branches">
            <div class="eco-node"><b>01</b><strong>COBRA DRIVER INTELLIGENCE</strong><small>DRIVER SYSTEMS</small></div>
            <div class="eco-node"><b>02</b><strong>VEME</strong><small>ENGINEERING & MANUFACTURING</small></div>
            <div class="eco-node"><b>03</b><strong>VENOM RWA</strong><small>DIGITAL PLATFORM</small></div>
            <div class="eco-node"><b>04</b><strong>SHELBY CHAIN</strong><small>BLOCKCHAIN PLATFORM</small></div>
          </div>
        </div>
      </section>

      <section class="closing">
        <div class="eyebrow">THE COBRA WAY / 427 PROTOCOL</div>
        <h2>ENGINEER THE <span>IMPOSSIBLE.</span></h2>
        <p>One vehicle. Multiple systems. One integrated architecture.</p>
        <div class="closing-mark">SHELBY PREDATOR GT — LE MANS EDITION</div>
      </section>
    </main>

    <footer>
      <span>SHELBY PREDATOR ENTERPRISE</span>
      <span>VEHICLE DEVELOPMENT / CONCEPT PROTOTYPE</span>
      <span>SP-GT-427</span>
    </footer>
  </div>

  <div class="modal-backdrop" id="modalBackdrop">
    <div class="system-modal">
      <button class="modal-close" id="modalClose">×</button>
      <div class="eyebrow" id="modalCode">SYSTEM DETAILS</div>
      <h2 id="modalTitle">SYSTEM NAME</h2>
      <p id="modalDescription"></p>
      <div class="modal-status" id="modalStatus"></div>
      <small>CONCEPT ARCHITECTURE — NOT A VALIDATED VEHICLE SYSTEM</small>
    </div>
  </div>
`;

const systemGrid = document.querySelector("#systemGrid");

systemGrid.innerHTML = systems.map((system, index) => `
  <button class="system-card ${system.color}" data-system="${system.id}">
    <div class="system-top"><span>0${index + 1} / 07</span><span class="system-dot"></span></div>
    <div class="system-code">${system.code}</div>
    <h3>${system.name}</h3>
    <p>${system.description}</p>
    <div class="system-bottom">
      <span>${system.status}</span>
      <b>VIEW SYSTEM ↗</b>
    </div>
  </button>
`).join("");

const skinGrid = document.querySelector("#skinGrid");

skinGrid.innerHTML = skins.map((skin, index) => `
  <button class="skin-card ${index === 0 ? "active" : ""}" data-skin="${index}">
    <span class="skin-color" style="--skin:${skin.color}"></span>
    <strong>${skin.name}</strong>
    <small>${skin.detail}</small>
  </button>
`).join("");

function selectSkin(index) {
  const skin = skins[index];
  document.querySelectorAll(".skin-card").forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
  document.querySelector("#skinSwatch").style.background = skin.color;
  document.querySelector("#skinName").textContent = skin.name;
  document.querySelector("#skinDetail").textContent = skin.detail;
  document.querySelector("#skinIndex").textContent =
    `0${index + 1} / 05`;
}

document.querySelectorAll("[data-skin]").forEach(button => {
  button.addEventListener("click", () => {
    selectSkin(Number(button.dataset.skin));
  });
});

const backdrop = document.querySelector("#modalBackdrop");

function openSystem(systemId) {
  const system = systems.find(item => item.id === systemId);
  if (!system) return;

  document.querySelector("#modalCode").textContent = system.code;
  document.querySelector("#modalTitle").textContent = system.name;
  document.querySelector("#modalDescription").textContent = system.description;
  document.querySelector("#modalStatus").textContent =
    `DEVELOPMENT STATUS: ${system.status}`;
  backdrop.classList.add("show");
}

document.querySelectorAll("[data-system]").forEach(button => {
  button.addEventListener("click", () => openSystem(button.dataset.system));
});

document.querySelector("#modalClose").addEventListener("click", () => {
  backdrop.classList.remove("show");
});

backdrop.addEventListener("click", event => {
  if (event.target === backdrop) backdrop.classList.remove("show");
});

document.querySelectorAll("[data-scroll]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.scroll)?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

selectSkin(0);

