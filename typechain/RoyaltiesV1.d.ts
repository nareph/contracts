/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface RoyaltiesV1Interface extends ethers.utils.Interface {
  functions: {
    "getFeeBps(uint256)": FunctionFragment;
    "getFeeRecipients(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getFeeBps",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFeeRecipients",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getFeeBps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFeeRecipients",
    data: BytesLike
  ): Result;

  events: {
    "SecondarySaleFees(uint256,address[],uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SecondarySaleFees"): EventFragment;
}

export type SecondarySaleFeesEvent = TypedEvent<
  [BigNumber, string[], BigNumber[]] & {
    tokenId: BigNumber;
    recipients: string[];
    bps: BigNumber[];
  }
>;

export class RoyaltiesV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: RoyaltiesV1Interface;

  functions: {
    getFeeBps(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getFeeRecipients(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;
  };

  getFeeBps(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;

  getFeeRecipients(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  callStatic: {
    getFeeBps(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getFeeRecipients(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;
  };

  filters: {
    "SecondarySaleFees(uint256,address[],uint256[])"(
      tokenId?: null,
      recipients?: null,
      bps?: null
    ): TypedEventFilter<
      [BigNumber, string[], BigNumber[]],
      { tokenId: BigNumber; recipients: string[]; bps: BigNumber[] }
    >;

    SecondarySaleFees(
      tokenId?: null,
      recipients?: null,
      bps?: null
    ): TypedEventFilter<
      [BigNumber, string[], BigNumber[]],
      { tokenId: BigNumber; recipients: string[]; bps: BigNumber[] }
    >;
  };

  estimateGas: {
    getFeeBps(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getFeeRecipients(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getFeeBps(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFeeRecipients(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}