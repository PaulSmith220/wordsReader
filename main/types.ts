
export type StoreStructure = {
  configName: string
  defaults: {
    words: string[]
    lastLine: number
    voices: [string, string]
    darkMode: boolean
    [key: string]: any
  }
}

export type StoreData = StoreStructure['defaults'];
