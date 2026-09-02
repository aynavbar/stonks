<main>
    <div class="ticker-container"><h1>$TSLA</h1></div>
    <div class="change-ticker-button-container"><button>Change ticker</button></div>
    <div><p class="sentiment-text" id="sentiment-text">Paper Hands</p></div>
    <div class="mocking-text"><p class="secondary"><i>Today's going to be a great day</i></p></div>
</main>

<style>
    main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .ticker-container, .change-ticker-button-container {
        padding: 1.7rem;
        position: absolute;
        top: 0;
    }

    .ticker-container {
        left: 0;

        h1 {
            font-size: 1rem;
        }
    }

    .change-ticker-button-container {
        right: 0;

        button {
            padding-inline: 0.5rem;
            padding-block: 0.7rem;
            border-radius: 2rem;
            border: 0.13rem solid var(--fg);
            background-color: transparent;
            font-weight: 600;
            cursor: pointer;
        }
    }

    p {
        padding-block: 1.1rem;
    }

    p.sentiment-text {
        font-size: clamp(2rem, 8vw, 5rem);
    }

    .mocking-text {
        position: absolute;
        bottom: 0.8rem;
    }
</style>
