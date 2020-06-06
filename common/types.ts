
export interface IMessage {
  command: string
  argument: null | any
  toString: () => string
}