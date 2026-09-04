import { json } from '@sveltejs/kit';

import { PRIVATE_FINNHUB_KEY } from '$env/static/private';

export async function GET({ url }) {
  const symbol = url.searchParams.get("symbol")

  if (!symbol) {
    return json({error: "Missing Symbol"}, {status: 400})
  }

  const upstream = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${PRIVATE_FINNHUB_KEY}`)

  const data = await upstream.json()
    .catch(() => {message: "error"})

  return json(data, {status: upstream.status})
}
