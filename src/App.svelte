<script>
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

  let phraseParagraphRef;
  let intervalID = null;

  let selectedTicker = $state("$TSLA");
  let currentSentiment = $state(generateRandomCategory())
  let sentimentPhrase = $derived(generateSentimentPhrase(currentSentiment));

  function generateRandomCategory() {
    return categories[Math.floor(Math.random() * categories.length)]
  }

  function generateSentimentPhrase(sentiment) {
    const phrase = traderSlang[sentiment][Math.floor(Math.random() * traderSlang[currentSentiment].length)]

    return phrase;
  }

  $effect(() => {
    if (!intervalID) {
      intervalID = setInterval(() => {
        currentSentiment = generateRandomCategory();
      }, 4000)

      return () => {
        clearInterval(intervalID)
      }
    }
  })
</script>

<div class="app-container">
    <header>
        <h1>{selectedTicker}</h1>
        <button class="change-ticker-button">Change ticker</button>
    </header>
    <main>
        <p bind:this={phraseParagraphRef} class="sentiment-text" id="sentiment-text">{sentimentPhrase}</p>
    </main>
    <footer class="mocking-text"><p class="secondary"><i>Today's going to be a great day</i></p></footer>
</div>

<style>
    .app-container {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 1.7rem;
    }

    main {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-size: 1rem;
    }

    .change-ticker-button {
        padding-inline: 0.5rem;
        padding-block: 0.7rem;
        border-radius: 2rem;
        border: 0.13rem solid var(--fg);
        background-color: transparent;
        font-weight: 600;
        cursor: pointer;
    }

    p {
        padding-block: 1.1rem;
    }

    p.sentiment-text {
        font-size: clamp(2rem, 8vw, 5rem);
    }

    footer {
        margin: auto;
    }
</style>
