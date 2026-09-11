<script lang="ts">
    import "$lib/app.css";
    import { traderSlang, getSentiment, colorMap } from "$lib/phrases"

    let intervalID: number = 0;
    let isSamePhrase: boolean = false;

    let tickerInputRef: HTMLInputElement | undefined = $state();
    let sentimentTextRef: HTMLParagraphElement | undefined = $state();

    let selectedTicker: string = $state("");
    let sentimentPhrase: string = $state("");
    let showDialog: boolean = $derived(selectedTicker ? false : true)

    function generatePhrase(sentiment: string) {
      if (sentiment?.length) {
        const phrase = traderSlang[sentiment][Math.floor(Math.random() * traderSlang[sentiment].length)]

      if (sentimentPhrase !== phrase) {
        isSamePhrase = false;
        sentimentPhrase = phrase;
      } else {
        isSamePhrase = true
      }
      }
    }

    async function updateSentiment() {
      const rootElement = document.documentElement;
      const currentSentiment = await getSentiment(selectedTicker);
      if (!currentSentiment?.failedToFetch) {
          if (!isSamePhrase) sentimentTextRef?.classList.add("swap")
      }
      if (!currentSentiment?.error) setTimeout(() => {
        generatePhrase(currentSentiment)
        sentimentTextRef?.classList.remove("swap")
        rootElement.style.setProperty("--bg", colorMap[sentimentPhrase]?.bg)
        rootElement.style.setProperty("--fg", colorMap[sentimentPhrase]?.fg)
      }, 250) // change the text and color while the text is invisible
    }

    $effect(() => {
      if (selectedTicker) {
        intervalID = 0;
        updateSentiment(); // immediate change
        intervalID = setInterval(() => { updateSentiment() }, 15000)
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
        <div class="dialog-overlay">
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
                            selectedTicker = inputValue.toUpperCase();
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
                        selectedTicker = inputValue.toUpperCase();
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
    <footer>
        <p class="secondary"><em>Today is going to be a great day</em></p>
        <p class="secondary"><em>*For entertainment only — not financial advice</em></p>
    </footer>
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
        padding-inline: 1rem;
    }

    p.sentiment-text {
        font-family: 'Archivo Black', 'Inter', sans-serif;
        font-weight: 400;
        font-size: clamp(2.5rem, 10vw, 7rem);
        line-height: 0.95;
        letter-spacing: -0.01em;
        text-transform: uppercase;
        text-align: center;
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
        margin-inline: 1rem;
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
        text-transform: uppercase;
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
        text-align: center;
    }
</style>
