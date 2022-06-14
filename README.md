# Iridius's The Graph Data Feed

This repositor is responsible to build an HTTP API to query Iridius' on-chain smart contract and receive the certifications for the software verified by Iridius. In its current demo version, the smart contract is a simple storage contract, storing one hash, which is stored and returned by The Graph subgraph. 

## Setup

```bash
yarn install
yarn codegen
yarn build
```

Then deploy as per The Graph's documentation. 

## Current Deployment

The smart contract is deployed on Rinkeby at [`0x3a0831e2d474c0739dbc56c68d63780c3a818c80`](https://rinkeby.etherscan.io/address/0x3a0831e2d474c0739dbc56c68d63780c3a818c80#code)

A demo service is available at `https://api.studio.thegraph.com/query/29027/iridius/0.0.1` and can be queried, for example, via:
```bash
curl 'https://api.studio.thegraph.com/query/29027/iridius/0.0.1' -X POST -H 'content-type: application/json' --data '{"query": "{latestHashes(first: 1) {hash}}"}'
```
