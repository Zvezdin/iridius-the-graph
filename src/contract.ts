import { BigInt } from "@graphprotocol/graph-ts"
import { Contract, HashUpdated } from "../generated/Contract/Contract"
import { LatestHash } from "../generated/schema"

export function handleHashUpdated(event: HashUpdated): void {
  let entity = new LatestHash("abc");

  let contract = Contract.bind(event.address);

  let newHash = contract.retrieve();
  entity.hash = newHash;
  entity.save();
}
