<script>
    import { traderSlang, generateRandomCategory } from "./lib/phrases.js"

    let phraseParagraphRef;
    let intervalID = null;

    let selectedTicker = $state("$TSLA");
    let currentSentiment = $state(generateRandomCategory())
    let sentimentPhrase = $derived(generateSentimentPhrase(currentSentiment));

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
