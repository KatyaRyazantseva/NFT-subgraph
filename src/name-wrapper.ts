import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  ControllerChanged as ControllerChangedEvent,
  ExpiryExtended as ExpiryExtendedEvent,
  FusesSet as FusesSetEvent,
  NameUnwrapped as NameUnwrappedEvent,
  NameWrapped as NameWrappedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent
} from "../generated/NameWrapper/NameWrapper"
import {
  Approval,
  ApprovalForAll,
  ControllerChanged,
  ExpiryExtended,
  FusesSet,
  NameUnwrapped,
  NameWrapped,
  OwnershipTransferred,
  TransferBatch,
  TransferSingle,
  URI
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleControllerChanged(event: ControllerChangedEvent): void {
  let entity = new ControllerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.controller = event.params.controller
  entity.active = event.params.active

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExpiryExtended(event: ExpiryExtendedEvent): void {
  let entity = new ExpiryExtended(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.node = event.params.node
  entity.expiry = event.params.expiry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFusesSet(event: FusesSetEvent): void {
  let entity = new FusesSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.node = event.params.node
  entity.fuses = event.params.fuses

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNameUnwrapped(event: NameUnwrappedEvent): void {
  let entity = new NameUnwrapped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.node = event.params.node
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNameWrapped(event: NameWrappedEvent): void {
  let entity = new NameWrapped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.node = event.params.node
  entity.name = event.params.name
  entity.owner = event.params.owner
  entity.fuses = event.params.fuses
  entity.expiry = event.params.expiry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.NameWrapper_id = event.params.id
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.value = event.params.value
  entity.NameWrapper_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
