<script>
    import { traderSlang, generateRandomSentiment } from "./lib/phrases.js"

    let phraseParagraphRef, tickerInputRef;
    let intervalID = null;

    let selectedTicker = $state("");
    let sentimentPhrase = $state("");
    let showDialog = $derived(selectedTicker == false)

    function generateSentimentPhrase(sentiment) {
      const phrase = traderSlang[sentiment][Math.floor(Math.random() * traderSlang[sentiment].length)]

      sentimentPhrase = phrase;
    }

    $effect(() => {
      if (selectedTicker) {
        intervalID = null;
        intervalID = setInterval(() => {
            const currentSentiment = generateRandomSentiment();
            generateSentimentPhrase(currentSentiment)
        }, 4000)
      }

      return () => {
        if (intervalID) {
          clearInterval(intervalID)
        }
      }
    })
</script>

<div class="app-container">
    <header>
        <h1>{selectedTicker ? selectedTicker : "_ _"}</h1>
        <button
            onclick={() => {
              showDialog = true;
            }}
            class="change-ticker-button"
        >Change ticker</button>
    </header>
    <main>
        <p bind:this={phraseParagraphRef} class="sentiment-text" id="sentiment-text">{sentimentPhrase ? sentimentPhrase : "_ _"}</p>
    </main>
    {#if showDialog}
        <div class="dialog-overlay">
            <div class="dialog">
                <label>
                    Enter a stock ticker
                    <input
                        class="ticker-input"
                        bind:this={tickerInputRef}
                        onkeyup={(event) => {
                          if (event.key === "Enter" && event.target.value.trim() !== "") {
                            selectedTicker = event.target.value.trim()
                            showDialog = false;
                          }
                        }}
                        type="text">
                </label>
                <div class="dialog-controls-container">
                    <button disabled={selectedTicker === ""} onclick={() => {
                      showDialog = false;
                    }}>Close</button>
                    <button onclick={() => {
                      if (tickerInputRef.value.trim() !== "") {
                        selectedTicker = tickerInputRef.value.trim()
                        showDialog = false;
                      }
                    }}>Choose</button>
                </div>
            </div>
        </div>
    {/if}
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

    .dialog-overlay {
        position: fixed;
        top: 0;
        height: 100vh;
        width: 100%;
        background-color: #0000004d;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dialog {
        width: 25rem;
        border-radius: 0.8rem;
        padding: 1.4rem;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
    }

    .dialog label {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        font-size: 1.2rem;
        font-weight: 600;
    }

    .dialog .ticker-input {
        font-size: 0.9rem;
        outline: none;
        border: 2px solid var(--sec);
        padding-block: 0.3rem;
        padding-inline: 0.2rem;
        border-radius: 0.2rem;
    }

    .dialog .dialog-controls-container {
        display: flex;
        justify-content: flex-end;
        padding-block-start: 0.5rem;
        gap: 0.7rem;
    }

    .dialog .dialog-controls-container button {
        font-size: 0.9rem;
        border: none;
        padding-block: 0.3rem;
        padding-inline: 0.2rem;
    }

    .dialog .dialog-controls-container button:nth-child(2) {
        background-color: #000000;
        color: #ffffff;
        border-radius: 0.3rem;
    }

    footer {
        margin: auto;
    }
</style>
