<div class="app-container">
    <header>
        <div class="ticker-container"><h1>$TSLA</h1></div>
        <div class="change-ticker-button-container"><button>Change ticker</button></div>
    </header>
    <main>
        <div><p class="sentiment-text" id="sentiment-text">Paper Hands</p></div>
    </main>
    <div class="mocking-text"><p class="secondary"><i>Today's going to be a great day</i></p></div>
</div>

<style>
    .app-container {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
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

    .ticker-container h1 {
        font-size: 1rem;
    }

    .change-ticker-button-container button {
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

    /*.mocking-text {
        position: absolute;
        bottom: 0.8rem;
    }*/
</style>
