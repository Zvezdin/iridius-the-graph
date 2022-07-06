# Iridius's The Graph Data Feed

This repositor is responsible to build an HTTP API to query Iridius' on-chain smart contract and receive the certifications for the software verified by Iridius. In its current demo version, the smart contract is a simple storage contract, storing one hash, which is stored and returned by The Graph subgraph. 

## Setup

```bash
yarn install
yarn codegen
yarn build
```

Then deploy as per The Graph's documentation. Keep in mind that if you want to deploy to non-ETH networks, you should use The Graph's hosted service instead. 

## Current Deployment

The smart contract is deployed on Moonbeam testnet at [`0x1d9fBDc6f9959451e0F8D83d3F6182c816eE79c8`](https://moonbase.moonscan.io/address/0x1d9fbdc6f9959451e0f8d83d3f6182c816ee79c8)

A demo service is available at `https://api.thegraph.com/subgraphs/name/zvezdin/iridius` and can be queried, for example, to retrieve the latest consensus-approved version of a given app ID via:
```bash
curl 'https://api.thegraph.com/subgraphs/name/zvezdin/iridius' -X POST -H 'content-type: application/json' --data '{"query": "{latestVersions(where: {id: \"0xae661efa81f8f0fcbf52ca880275249854040aecefca06a19633756a0e1733df\"}) { id hash }}"}'
```
