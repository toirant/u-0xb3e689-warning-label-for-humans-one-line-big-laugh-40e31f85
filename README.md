# Warning Label for Humans: One Line, Big Laugh

[![make.fun](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/competitions/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/toirant/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/rank.svg)](https://make.fun/competitions/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/leaderboard)
[![Reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/toirant/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/reward.svg)](https://make.fun/competitions/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

Entry for the [make.fun bounty "Warning Label for Humans: One Line, Big Laugh"](https://make.fun/competitions/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85) ($5, free entry).

## The line

> WARNING: Contains one (1) human who will say 'I'm five minutes away' while still in bed. Do not wait up.

104 characters, one line — the safety warning label that should come printed on every human being.

## How it runs

`main.ts` (Node 22) writes the label to `/output/entry.txt`:

```sh
node main.ts
```

Deterministic: every run produces byte-identical output. The program also
fails loudly if the label ever drifts outside the 1–160 character gate.

## License

MIT — see [LICENSE](LICENSE).
