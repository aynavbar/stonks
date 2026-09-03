<script>
    import "$lib/app.css";
    import { traderSlang, generateRandomSentiment, colorMap } from "$lib/phrases.js"

    import trapFocus from "$lib/attachments.js";

    let intervalID = 0;
    let isSamePhrase = false;

    /**
     * @type HTMLInputElement | undefined
     */
    let tickerInputRef = $state();

    /**
     * @type HTMLParagraphElement | undefined
     */
    let sentimentTextRef = $state();

    let selectedTicker = $state("");
    let sentimentPhrase = $state("");
    let showDialog = $derived(selectedTicker ? false : true)

    /**
     *
     * @param {"bullish" | "bearish" | "fear" | "greed" | "uncertainty" | "euphoria" | "complacency"} sentiment
     */
    function generateSentimentPhrase(sentiment) {
      const phrase = traderSlang[sentiment][Math.floor(Math.random() * traderSlang[sentiment].length)]

      if (sentimentPhrase !== phrase) {
        isSamePhrase = false;
        sentimentPhrase = phrase;
      } else {
        isSamePhrase = true
      }
    }

    $effect(() => {
      if (selectedTicker) {
        intervalID = 0;
        const rootElement = document.documentElement;
        intervalID = setInterval(() => {
            if (!isSamePhrase) sentimentTextRef?.classList.add("swap")
            const currentSentiment = generateRandomSentiment();
            setTimeout(() => {
              generateSentimentPhrase(currentSentiment)
              sentimentTextRef?.classList.remove("swap")
              rootElement.style.setProperty("--bg", colorMap[sentimentPhrase]?.bg)
              rootElement.style.setProperty("--fg", colorMap[sentimentPhrase]?.fg)
            }, 250) // change the text and color while the text is invisible
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
        <p bind:this={sentimentTextRef} class="sentiment-text" id="sentiment-text">{sentimentPhrase ? sentimentPhrase : "_ _"}</p>
    </main>
    {#if showDialog}
        <div class="dialog-overlay" {@attach trapFocus}>
            <div class="dialog">
                <label>
                    Enter a stock ticker
                    <input
                        name="ticker"
                        class="ticker-input"
                        bind:this={tickerInputRef}
                        onkeyup={(event) => {
                          const inputValue = tickerInputRef?.value.trim()
                          if (event.key === "Enter" && inputValue) {
                            selectedTicker = inputValue;
                          } else if (!inputValue) {
                            tickerInputRef?.classList.add("error");
                          }
                          setTimeout(() => {
                            tickerInputRef?.classList.remove("error")
                          }, 300)
                        }}
                        type="text">
                </label>
                <div class="dialog-controls-container">
                    <button disabled={selectedTicker === ""} onclick={() => {
                      showDialog = false;
                    }}>Close</button>
                    <button onclick={() => {
                      const inputValue = tickerInputRef?.value.trim();
                      if (inputValue) {
                        selectedTicker = inputValue;
                        tickerInputRef?.classList.remove("error")
                        return
                      }
                      tickerInputRef?.classList.add("error");
                      setTimeout(() => {
                        tickerInputRef?.classList.remove("error")
                      }, 300)
                    }}>Choose</button>
                </div>
            </div>
        </div>
    {/if}
    <footer><p class="secondary"><i>Today is going to be a great day</i></p></footer>
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
        font-family: 'Archivo Black', 'Inter', sans-serif;
        font-weight: 400;
        font-size: clamp(2.5rem, 10vw, 7rem);
        line-height: 0.95;
        letter-spacing: -0.01em;
        text-transform: uppercase;
        background-color: transparent;
        transition: color 0.6s ease, opacity 0.25s ease, transform 0.25s ease;
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

        * {
            background-color: #ffffff;
        }
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
        transition: border-color 0.2ms ease;
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
        font-size: 0.8rem;
    }
</style>
