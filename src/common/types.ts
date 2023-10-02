export interface LoginCredential {
  name?: string;
  password?: string;
}

export interface Call {
  number?: string;
  state?: CallState;
  action?: CallAction;
}

export enum MessageEvent {
  // Request
  Call,
  OpenPhoneWindow,
}

export interface EmptyData {}

export interface Message<T> {
  event: MessageEvent;
  data: T;
}

export interface Contact {
  name: string;
  number: string;
}

export interface MessageResponse<T> {
  event: MessageEvent;
  code: number;
  message: string;
  data: T;
}

export enum CallState {
  RINGING,
  ANSWERED,
  COMPLETED,
  FAILED,
}

export enum CallAction {
  OUTBOUND,
  ANSWER,
  CANCEL,
  BYE,
  DTMF,
}

export interface AppSettings {
  sipDomain: string;
  sipServerAddress: string;
  sipUsername: string;
  sipPassword: string;
  sipDisplayName: string;
  apiKey: string;
}

export interface CallHistory {
  direction: SipCallDirection;
  number: string;
  duration: string;
  timeStamp: number;
}

export type SipClientStatus = "online" | "offline";
export type SipCallDirection = "" | "outgoing" | "incoming";
