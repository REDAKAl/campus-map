// Initialize map at Alma College coordinates
var map = L.map('map').setView([43.3785, -84.6695], 16);

// Add map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

// Add markers
var places = [
  {
    name: "Library",
    coords: [43.3785, -84.6695],
    desc: "Main library with study spaces."
  },
  {
    name: "Dining Hall",
    coords: [43.3780, -84.6702],
    desc: "Open 7 AM – 8 PM daily."
  },
  {
    name: "Stone Recreation Center",
    coords: [43.3792, -84.6685],
    desc: "Gym, pool, and sports facilities."
  }
];

// Loop through places and add them
places.forEach(p => {
  L.marker(p.coords).addTo(map)
    .bindPopup(`<b>${p.name}</b><br>${p.desc}`);
});
