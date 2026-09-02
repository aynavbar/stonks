<main>
    <div class="ticker-container"><h1>$TSLA</h1></div>
    <div class="change-ticker-button-container"><button>Change ticker</button></div>
    <div><p class="sentiment-text" id="sentiment-text">Paper Hands</p></div>
    <div class="mocking-text"><p><i>Today's going to be a great day</i></p></div>
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
        padding: 30px;
        position: absolute;
        top: 0;
    }

    .ticker-container {
        left: 0;
    }

    .change-ticker-button-container {
        right: 0;
    }

    p {
        padding-block: 20px;
    }

    .mocking-text {
        position: absolute;
        bottom: 10px;
    }
</style>
