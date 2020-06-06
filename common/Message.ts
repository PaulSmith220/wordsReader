import { IMessage } from './types';

export default class Message implements IMessage {
  static FromEvent(event: string) {
    const [command, data] = event.split('||');
    return new Message(command, JSON.parse(data));
  }

  constructor(public command: string, public argument: null | any) {}

  public toString() {
    return this.command + '||' + JSON.stringify(this.argument) 
  }
}