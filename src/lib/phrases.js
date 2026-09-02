const traderSlang = {
  bullish: [
    "Mooning",       // price rocketing up
    "Pumping",       // rapid upward move
    "Ripping",       // fast, aggressive rally
    "Melting up",    // slow relentless grind higher
    "Breakout",      // clearing resistance
    "Squeeze",       // shorts forced to cover, price spikes
    "FOMO",          // fear of missing out, chasing the move
    "Diamond hands", // holding through volatility, refusing to sell
    "To the moon",   // extreme bullish exuberance
    "Printing"       // easily making money
  ],
  bearish: [
    "Dumping",       // sharp sell-off
    "Rekt",          // got wrecked / heavy losses
    "Bagholding",    // stuck holding a losing position
    "Capitulation",  // panic selling, giving up
    "Bloodbath",     // brutal red day across the board
    "Rug pull",      // sudden collapse, often orchestrated
    "Dead cat bounce", // brief recovery in a downtrend
    "Puking",        // forced/panicked selling
    "Getting smoked", // taking heavy losses
    "Underwater"     // position below entry price
  ],
  fear: [
    "Paper hands",   // selling out of fear too early
    "Shook",         // rattled by volatility
    "Panic selling",
    "De-risking",
    "Flight to safety",
    "Risk-off",
    "Sweating bullets",
    "Nervous chop"   // choppy price action causing anxiety
  ],
  greed: [
    "YOLO",          // all-in, high-risk bet
    "Degen",         // reckless, high-risk trading behavior
    "Levering up",   // taking on excessive leverage
    "Chasing",       // buying after a big move out of greed
    "Aping in",      // buying impulsively without research
    "Sending it",
    "Cope and hope"  // holding a bad trade on hope, tinged with denial
  ],
  uncertainty: [
    "Chop",          // sideways, directionless price action
    "No man's land",
    "Coin flip",
    "Wait and see",
    "Range-bound",
    "Indecision candle" // doji-like price action
  ],
  euphoria: [
    "Euphoric top",  // sentiment peak, often a reversal signal
    "Vertical",      // straight-up price move
    "Parabolic",
    "Blow-off top",
    "Melt-up mania"
  ],
  complacency: [
    "Buy the dip",
    "BTFD",
    "Sleepy market",
    "Low vol grind",
    "Priced in"
  ]
};

const colorMap = {
  "Mooning": { bg: "#12321f", fg: "#3ee87f" },
  "Pumping": { bg: "#0f3d2e", fg: "#4ade80" },
  "Breaking out": { bg: "#0b3d3a", fg: "#2dd4bf" },
  "Melting up": { bg: "#123024", fg: "#22c55e" },
  "Dumping": { bg: "#3d0f14", fg: "#f87171" },
  "Rekt": { bg: "#450a12", fg: "#ff5c66" },
  "Capitulating": { bg: "#3a0d18", fg: "#fb7185" },
  "Bloodbath": { bg: "#420a10", fg: "#ef4444" },
  "Shook": { bg: "#2b2b33", fg: "#c7c7d1" },
  "Panic selling": { bg: "#26262e", fg: "#a3a3ad" },
  "Risk-off": { bg: "#2d2d35", fg: "#b8b8c2" },
  "Greedy": { bg: "#3d2e05", fg: "#facc15" },
  "Degen mode": { bg: "#3a2a08", fg: "#fbbf24" },
  "Sending it": { bg: "#3d3105", fg: "#fde047" },
  "Choppy": { bg: "#1b2740", fg: "#7dd3fc" },
  "Indecisive": { bg: "#1e293b", fg: "#93c5fd" },
  "Range-bound": { bg: "#1c2b45", fg: "#60a5fa" },
  "Euphoric": { bg: "#3d0a30", fg: "#f472b6" },
  "Parabolic": { bg: "#420c35", fg: "#ec4899" },
  "Blowoff top": { bg: "#3a0a2c", fg: "#f9a8d4" },
  "Neutral": { bg: "#1a1a1a", fg: "#ffffff" },
  "Ripping": { bg: "#0e3b23", fg: "#34d399" },
  "Breakout": { bg: "#0b3d3a", fg: "#2dd4bf" },
  "Squeeze": { bg: "#113821", fg: "#4ade80" },
  "FOMO": { bg: "#14361c", fg: "#6ee7b7" },
  "Diamond hands": { bg: "#0f332c", fg: "#5eead4" },
  "To the moon": { bg: "#103f26", fg: "#86efac" },
  "Printing": { bg: "#13381a", fg: "#4ade80" },
  "Bagholding": { bg: "#3d1114", fg: "#fca5a5" },
  "Capitulation": { bg: "#3a0d18", fg: "#fb7185" },
  "Rug pull": { bg: "#4a0b12", fg: "#f87171" },
  "Dead cat bounce": { bg: "#381216", fg: "#fda4af" },
  "Puking": { bg: "#420a10", fg: "#ef4444" },
  "Getting smoked": { bg: "#450a12", fg: "#ff5c66" },
  "Underwater": { bg: "#3b1619", fg: "#fecdd3" },
  "Paper hands": { bg: "#2d2d38", fg: "#d1d5db" },
  "De-risking": { bg: "#24242d", fg: "#9ca3af" },
  "Flight to safety": { bg: "#272730", fg: "#cbd5e1" },
  "Sweating bullets": { bg: "#32291d", fg: "#fcd34d" },
  "Nervous chop": { bg: "#262b36", fg: "#93c5fd" },
  "YOLO": { bg: "#3d2904", fg: "#fef08a" },
  "Degen": { bg: "#3d2c06", fg: "#fde047" },
  "Levering up": { bg: "#3d3205", fg: "#fef08a" },
  "Chasing": { bg: "#3a2505", fg: "#fde047" },
  "Aping in": { bg: "#3d2703", fg: "#fef08a" },
  "Cope and hope": { bg: "#332c10", fg: "#fde047" },
  "Chop": { bg: "#1c283b", fg: "#38bdf8" },
  "No man's land": { bg: "#1a2436", fg: "#60a5fa" },
  "Coin flip": { bg: "#1b253b", fg: "#93c5fd" },
  "Wait and see": { bg: "#202a3d", fg: "#bae6fd" },
  "Indecision candle": { bg: "#1d273a", fg: "#7dd3fc" },
  "Euphoric top": { bg: "#400a31", fg: "#f472b6" },
  "Vertical": { bg: "#3d092d", fg: "#f472b6" },
  "Melt-up mania": { bg: "#420b33", fg: "#f9a8d4" },
  "Buy the dip": { bg: "#123024", fg: "#4ade80" },
  "BTFD": { bg: "#0f3325", fg: "#22c55e" },
  "Sleepy market": { bg: "#262626", fg: "#a1a1aa" },
  "Low vol grind": { bg: "#22252a", fg: "#94a3b8" },
  "Priced in": { bg: "#212429", fg: "#cbd5e1" }
};

const categories = Object.keys(traderSlang)

function generateRandomSentiment() {
  return categories[Math.floor(Math.random() * categories.length)]
}

export { traderSlang, generateRandomSentiment, colorMap }
