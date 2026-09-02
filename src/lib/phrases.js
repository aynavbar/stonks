const traderSlang = {
  bullish: [
    "mooning",       // price rocketing up
    "pumping",       // rapid upward move
    "ripping",       // fast, aggressive rally
    "melting up",    // slow relentless grind higher
    "breakout",      // clearing resistance
    "squeeze",       // shorts forced to cover, price spikes
    "FOMO",          // fear of missing out, chasing the move
    "diamond hands", // holding through volatility, refusing to sell
    "to the moon",   // extreme bullish exuberance
    "printing"       // easily making money
  ],
  bearish: [
    "dumping",       // sharp sell-off
    "rekt",          // got wrecked / heavy losses
    "bagholding",    // stuck holding a losing position
    "capitulation",  // panic selling, giving up
    "bloodbath",     // brutal red day across the board
    "rug pull",      // sudden collapse, often orchestrated
    "dead cat bounce", // brief recovery in a downtrend
    "puking",        // forced/panicked selling
    "getting smoked", // taking heavy losses
    "underwater"     // position below entry price
  ],
  fear: [
    "paper hands",   // selling out of fear too early
    "shook",         // rattled by volatility
    "panic selling",
    "de-risking",
    "flight to safety",
    "risk-off",
    "sweating bullets",
    "nervous chop"   // choppy price action causing anxiety
  ],
  greed: [
    "YOLO",          // all-in, high-risk bet
    "degen",         // reckless, high-risk trading behavior
    "levering up",   // taking on excessive leverage
    "chasing",       // buying after a big move out of greed
    "aping in",      // buying impulsively without research
    "sending it",
    "cope and hope"  // holding a bad trade on hope, tinged with denial
  ],
  uncertainty: [
    "chop",          // sideways, directionless price action
    "no man's land",
    "coin flip",
    "wait and see",
    "range-bound",
    "indecision candle" // doji-like price action
  ],
  euphoria: [
    "euphoric top",  // sentiment peak, often a reversal signal
    "vertical",      // straight-up price move
    "parabolic",
    "blow-off top",
    "melt-up mania"
  ],
  complacency: [
    "buy the dip",
    "BTFD",
    "sleepy market",
    "low vol grind",
    "priced in"
  ]
};

const categories = Object.keys(traderSlang)

function generateRandomCategory() {
  return categories[Math.floor(Math.random() * categories.length)]
}

export { traderSlang, generateRandomCategory }
