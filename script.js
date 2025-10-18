const COOKIE_NAME = "hades2Keepsakes";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // one year

const keepsakeData = {
  olympians: [
    {
      id: "zeus",
      name: "Zeus",
      keepsake: "Cloud Bangle",
      blurb: "Offer Nectar to the stormbringer and he lends you a ring of thunder.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/dd/CodexPortrait_Zeus.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c2/Cloud_Bangle.png",
    },
    {
      id: "hera",
      name: "Hera",
      keepsake: "Iridescent Fan",
      blurb: "Queen Hera's ornate fan helps rarify her boons for one night.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/09/CodexPortrait_Hera.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/31/Iridescent_Fan.png",
    },
    {
      id: "poseidon",
      name: "Poseidon",
      keepsake: "Vivid Sea",
      blurb: "The lord of waves grants a keepsake that coaxes his watery blessings.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/d3/CodexPortrait_Poseidon.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/ed/Vivid_Sea.png",
    },
    {
      id: "demeter",
      name: "Demeter",
      keepsake: "Barley Sheaf",
      blurb: "Demeter's bundle brings a touch of harvest to your future boons.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/19/CodexPortrait_Demeter.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/9a/Barley_Sheaf.png",
    },
    {
      id: "apollo",
      name: "Apollo",
      keepsake: "Harmonic Photon",
      blurb: "Apollo's radiant shard nudges his light-filled boons to higher tiers.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/0b/CodexPortrait_Apollo.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/7e/Harmonic_Photon.png",
    },
    {
      id: "artemis",
      name: "Artemis",
      keepsake: "White Antler",
      blurb: "The huntress shares an antler that sharpens your critical prowess.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/8e/CodexPortrait_Artemis.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/06/White_Antler.png",
    },
    {
      id: "aphrodite",
      name: "Aphrodite",
      keepsake: "Beautiful Mirror",
      blurb: "Aphrodite's mirror polishes her boons into rarer, lovelier forms.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/d1/CodexPortrait_Aphrodite.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/9b/Beautiful_Mirror.png",
    },
    {
      id: "ares",
      name: "Ares",
      keepsake: "Sword Hilt",
      blurb: "The war god's hilt ensures his boons appear when battle calls.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/ee/CodexPortrait_Ares.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/8e/Sword_Hilt.png",
    },
    {
      id: "hephaestus",
      name: "Hephaestus",
      keepsake: "Adamant Shard",
      blurb: "A razor of adamant guides you toward the smith's reforging boons.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/74/CodexPortrait_Hephaestus.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/d7/Adamant_Shard.png",
    },
    {
      id: "hestia",
      name: "Hestia",
      keepsake: "Everlasting Ember",
      blurb: "Keep Hestia's hearthfire close to rarify the warmth of her boons.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/b0/CodexPortrait_Hestia.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/9d/Everlasting_Ember.png",
    },
    {
      id: "hermes",
      name: "Hermes",
      keepsake: "Metallic Droplet",
      blurb: "Hermes' quicksilver droplet speeds your stride and channels.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/d6/CodexPortrait_Hermes.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/8c/Metallic_Droplet.png",
    },
    {
      id: "athena",
      name: "Athena",
      keepsake: "Gorgon Amulet",
      blurb: "Athena's charm ensures her wisdom arrives when defiance runs low.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/d1/CodexPortrait_Athena.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/68/Gorgon_Amulet.png",
    },
    {
      id: "dionysus",
      name: "Dionysus",
      keepsake: "Fig Leaf",
      blurb: "A carefree leaf from Dionysus may part the crowds for a room or two.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/84/CodexPortrait_Dionysus.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/73/Fig_Leaf.png",
    },
  ],
  chthonic: [
    {
      id: "hecate",
      name: "Hecate",
      keepsake: "Silver Wheel",
      blurb: "Your mentor gifts a silver wheel to guide you through each crossroads.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/ab/CodexPortrait_Hecate.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/49/Silver_Wheel.png",
    },
    {
      id: "odysseus",
      name: "Odysseus",
      keepsake: "Knuckle Bones",
      blurb: "The famed tactician shares dice that sap guardians of their strength.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/81/CodexPortrait_Odysseus.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/61/Knuckle_Bones.png",
    },
    {
      id: "schelemeus",
      name: "Schelemeus",
      keepsake: "Luckier Tooth",
      blurb: "Skelly's surface counterpart offers another shot when fate turns.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/50/CodexPortrait_Skelly.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/85/Luckier_Tooth.png",
    },
    {
      id: "dora",
      name: "Dora",
      keepsake: "Ghost Onion",
      blurb: "Dora's onion steadily restores your vitality between locations.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/90/CodexPortrait_Dora.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/84/Ghost_Onion.png",
    },
    {
      id: "nemesis",
      name: "Nemesis",
      keepsake: "Evil Eye",
      blurb: "Nemesis marks the foe who last felled you for swift retribution.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/4e/CodexPortrait_Nemesis.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/27/Evil_Eye.png",
    },
    {
      id: "charon",
      name: "Charon",
      keepsake: "Gold Purse",
      blurb: "Charon's purse quietly bulges with obols for the night ahead.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/87/CodexPortrait_Charon.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/7c/Gold_Purse.png",
    },
    {
      id: "moros",
      name: "Moros",
      keepsake: "Engraved Pin",
      blurb: "Doom himself gives a pin that grants a desperate second chance.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/fc/CodexPortrait_Moros.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e0/Engraved_Pin.png",
    },
    {
      id: "eris",
      name: "Eris",
      keepsake: "Discordant Bell",
      blurb: "Every clash you survive with Eris' bell heightens risk and reward.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/49/CodexPortrait_Eris.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/5d/Discordant_Bell.png",
    },
    {
      id: "selene",
      name: "Selene",
      keepsake: "Moon Beam",
      blurb: "The moonlit titan guides you toward her luminous gifts.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/35/CodexPortrait_Selene.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e9/Moon_Beam.png",
    },
    {
      id: "arachne",
      name: "Arachne",
      keepsake: "Silken Sash",
      blurb: "Arachne's sash weaves extra armor as you step through each room.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e0/CodexPortrait_Arachne.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/3f/Silken_Sash.png",
    },
    {
      id: "narcissus",
      name: "Narcissus",
      keepsake: "Aromatic Phial",
      blurb: "Narcissus' fragrant phial sweetens fountains and upgrades a boon.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/49/CodexPortrait_Narcissus.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/33/Aromatic_Phial.png",
    },
    {
      id: "echo",
      name: "Echo",
      keepsake: "Concave Stone",
      blurb: "Echo's stone may echo a boon draft, letting you choose twice.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/25/CodexPortrait_Echo.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/83/Concave_Stone.png",
    },
    {
      id: "heracles",
      name: "Heracles",
      keepsake: "Lion Fang",
      blurb: "Heracles' fang floods you with damage that slowly fades with each bout.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/84/CodexPortrait_Heracles.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/d9/Lion_Fang.png",
    },
    {
      id: "medea",
      name: "Medea",
      keepsake: "Blackened Fleece",
      blurb: "Medea's fleece powers Ω moves after you've endured enough harm.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/08/CodexPortrait_Medea.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/7b/Blackened_Fleece.png",
    },
    {
      id: "circe",
      name: "Circe",
      keepsake: "Crystal Figurine",
      blurb: "Circe's figurine activates dormant Arcana cards after a guardian.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/57/CodexPortrait_Circe.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/7c/Crystal_Figurine.png",
    },
    {
      id: "icarus",
      name: "Icarus",
      keepsake: "Experimental Hammer",
      blurb: "Icarus tinkers a temporary Daedalus hammer into your arsenal.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/fb/CodexPortrait_Icarus.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/fd/Experimental_Hammer.png",
    },
    {
      id: "hades-persephone",
      name: "Hades & Persephone",
      keepsake: "Jeweled Pom",
      blurb: "The royal couple's pom enhances boons while fate's whim is active.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/53/CodexPortrait_Hades.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/83/Jeweled_Pom.png",
    },
    {
      id: "zagreus",
      name: "Zagreus",
      keepsake: "Calling Card",
      blurb: "Zagreus' card lets you rarify Olympian boons repeatedly at fate's whim.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/29/CodexPortrait_Zagreus.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/17/Calling_Card.png",
    },
    {
      id: "chronos",
      name: "Chronos",
      keepsake: "Time Piece",
      blurb: "Chronos' time piece lets you cash out rewards for extra coin.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e7/CodexPortrait_Chronos.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/56/Time_Piece.png",
    },
    {
      id: "chaos",
      name: "Chaos",
      keepsake: "Transcendent Embryo",
      blurb: "Chaos gifts a shifting blessing that renews every few encounters.",
      image:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/5c/CodexPortrait_Chaos.png",
      keepsakeImage:
        "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/73/Transcendent_Embryo.png",
    },
  ],
};

function readCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const entry of cookies) {
    if (!entry) continue;
    const [cookieName, ...valueParts] = entry.split("=");
    if (cookieName === name) {
      try {
        return decodeURIComponent(valueParts.join("="));
      } catch (err) {
        console.warn("Could not decode cookie", err);
        return null;
      }
    }
  }
  return null;
}

function writeCookie(name, value, maxAgeSeconds) {
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAgeSeconds}; path=/`;
}

function loadState() {
  const raw = readCookie(COOKIE_NAME);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed ? parsed : {};
  } catch (err) {
    console.warn("Failed to parse keepsake cookie, resetting.", err);
    return {};
  }
}

function persistState(state) {
  writeCookie(COOKIE_NAME, JSON.stringify(state), COOKIE_MAX_AGE_SECONDS);
}

function createCard(entry, pantheonLabel, state) {
  const card = document.createElement("button");
  card.className = "card";
  card.type = "button";
  card.dataset.id = entry.id;
  card.dataset.pantheon = pantheonLabel;

  const isCollected = Boolean(state[entry.id]);
  if (isCollected) {
    card.classList.add("active");
  }
  card.setAttribute("aria-pressed", String(isCollected));

  const portraitAlt = `${entry.name} portrait from Hades II`;
  const keepsakeAlt = `${entry.keepsake} keepsake icon from Hades II`;
  card.innerHTML = `
    <span class="card-highlight" aria-hidden="true"></span>
    <span class="card-visual">
      <img
        class="card-portrait"
        src="${entry.image}"
        alt="${portraitAlt}"
        loading="lazy"
        decoding="async"
        referrerpolicy="no-referrer"
      />
      <span class="keepsake-token">
        <img
          src="${entry.keepsakeImage}"
          alt="${keepsakeAlt}"
          loading="lazy"
          decoding="async"
          referrerpolicy="no-referrer"
        />
      </span>
      <span class="card-check" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false" role="presentation">
          <path d="M20.285 6.708a1 1 0 0 0-1.57-1.248l-8.258 10.396-4.172-4.172a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.497-.084z" />
        </svg>
      </span>
    </span>
    <span class="card-content">
      <span class="card-header">
        <h3>${entry.name}</h3>
        <span class="pantheon-tag">${pantheonLabel}</span>
      </span>
      <p class="keepsake"><strong>Keepsake:</strong> ${entry.keepsake}</p>
      <p>${entry.blurb}</p>
      <span class="status">${isCollected ? "Collected!" : "Tap to track"}</span>
    </span>
  `;

  card.addEventListener("click", () => {
    const currentlyCollected = Boolean(state[entry.id]);
    if (currentlyCollected) {
      delete state[entry.id];
    } else {
      state[entry.id] = true;
    }
    persistState(state);
    card.classList.toggle("active", !currentlyCollected);
    card.setAttribute("aria-pressed", String(!currentlyCollected));
    card.querySelector(".status").textContent = !currentlyCollected
      ? "Collected!"
      : "Tap to track";
  });

  return card;
}

function renderCards() {
  const state = loadState();
  const olympianContainer = document.getElementById("olympian-grid");
  const chthonicContainer = document.getElementById("chthonic-grid");

  keepsakeData.olympians.forEach((entry) => {
    const card = createCard(entry, "Olympian", state);
    olympianContainer.appendChild(card);
  });

  keepsakeData.chthonic.forEach((entry) => {
    const card = createCard(entry, "Ally", state);
    chthonicContainer.appendChild(card);
  });

  const resetButton = document.getElementById("reset-progress");
  resetButton.addEventListener("click", () => {
    const confirmed = window.confirm("Reset all keepsake progress?");
    if (!confirmed) return;
    const ids = [
      ...keepsakeData.olympians.map((entry) => entry.id),
      ...keepsakeData.chthonic.map((entry) => entry.id),
    ];
    ids.forEach((id) => delete state[id]);
    persistState(state);
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("active");
      card.setAttribute("aria-pressed", "false");
      const statusEl = card.querySelector(".status");
      if (statusEl) statusEl.textContent = "Tap to track";
    });
  });
}

try {
  renderCards();
} catch (err) {
  console.error("Failed to render keepsake checklist", err);
}