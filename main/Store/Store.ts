import electron from 'electron';
import path from 'path';
import fs from 'fs';

import { StoreStructure, StoreData } from '../types';
import ConfigFile from './ConfigFile';



type StoredValue = StoreData['words'] | StoreData['voices'] | StoreData['lastLine'] | StoreData['darkMode'];
type StoredKey = keyof StoreData;

export default class Store {
  public data: StoreData;

  private configFile!: ConfigFile;

  constructor(initialState: StoreStructure) {
    const userDataPath = (electron.app || electron.remote.app).getPath('userData');
    this.configFile = new ConfigFile(
      path.join(userDataPath, initialState.configName + '.json'),
      initialState.defaults,
    );
    this.data = this.configFile.read();
    console.log('Store initialized to use ' + this.configFile.filePath);
    console.log('Dark mode set to ', this.data.darkMode);
  }

  get(key: StoredKey):StoredValue {
    return this.data[key];
  }
  
  set(key: StoredKey, val: StoredValue) {
    this.data[key] = val;
    this.configFile.write(this.data);
  }
}
