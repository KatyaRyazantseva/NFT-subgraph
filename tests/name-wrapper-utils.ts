import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/NameWrapper/NameWrapper"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createControllerChangedEvent(
  controller: Address,
  active: boolean
): ControllerChanged {
  let controllerChangedEvent = changetype<ControllerChanged>(newMockEvent())

  controllerChangedEvent.parameters = new Array()

  controllerChangedEvent.parameters.push(
    new ethereum.EventParam(
      "controller",
      ethereum.Value.fromAddress(controller)
    )
  )
  controllerChangedEvent.parameters.push(
    new ethereum.EventParam("active", ethereum.Value.fromBoolean(active))
  )

  return controllerChangedEvent
}

export function createExpiryExtendedEvent(
  node: Bytes,
  expiry: BigInt
): ExpiryExtended {
  let expiryExtendedEvent = changetype<ExpiryExtended>(newMockEvent())

  expiryExtendedEvent.parameters = new Array()

  expiryExtendedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  expiryExtendedEvent.parameters.push(
    new ethereum.EventParam("expiry", ethereum.Value.fromUnsignedBigInt(expiry))
  )

  return expiryExtendedEvent
}

export function createFusesSetEvent(node: Bytes, fuses: BigInt): FusesSet {
  let fusesSetEvent = changetype<FusesSet>(newMockEvent())

  fusesSetEvent.parameters = new Array()

  fusesSetEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  fusesSetEvent.parameters.push(
    new ethereum.EventParam("fuses", ethereum.Value.fromUnsignedBigInt(fuses))
  )

  return fusesSetEvent
}

export function createNameUnwrappedEvent(
  node: Bytes,
  owner: Address
): NameUnwrapped {
  let nameUnwrappedEvent = changetype<NameUnwrapped>(newMockEvent())

  nameUnwrappedEvent.parameters = new Array()

  nameUnwrappedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  nameUnwrappedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return nameUnwrappedEvent
}

export function createNameWrappedEvent(
  node: Bytes,
  name: Bytes,
  owner: Address,
  fuses: BigInt,
  expiry: BigInt
): NameWrapped {
  let nameWrappedEvent = changetype<NameWrapped>(newMockEvent())

  nameWrappedEvent.parameters = new Array()

  nameWrappedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  nameWrappedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromBytes(name))
  )
  nameWrappedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  nameWrappedEvent.parameters.push(
    new ethereum.EventParam("fuses", ethereum.Value.fromUnsignedBigInt(fuses))
  )
  nameWrappedEvent.parameters.push(
    new ethereum.EventParam("expiry", ethereum.Value.fromUnsignedBigInt(expiry))
  )

  return nameWrappedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}
