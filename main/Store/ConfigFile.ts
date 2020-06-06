import * as fs from 'fs';
import { StoreData } from '../types';


export default class ConfigFile {
  public filePath: string = '';

  constructor(filePath: string, defaults: StoreData) {
    this.filePath = filePath;
    if (!this.checkExists()) {
      this.write(defaults);
    }
  }

  private checkExists() {
    return fs.existsSync(this.filePath);
  }

  public read() {
    const fileContents = fs.readFileSync(this.filePath) as unknown as string;
    return JSON.parse(fileContents);
  }

  public write(data: StoreData) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, '\t'));
  }
}