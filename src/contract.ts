import { Contract, VersionUpdated } from "../generated/Contract/Contract"
import { LatestVersion } from "../generated/schema"

export function handleVersionUpdated(event: VersionUpdated): void {
  let entity = new LatestVersion(event.params.identifier);
  entity.hash = event.params.hash;

  let contract = Contract.bind(event.address);

  assert(entity.hash == contract.acceptedVersions(event.params.identifier));
  entity.save();
}
