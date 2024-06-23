// # `/Core/Types/pobieraczListy.d.ts` 

export interface Archiwum {
  arIDENT: string;
  arNUMER: number;
  arNAZWA: string;
  zespILE: number;
  skanILE: number;
}

export type RecordArchiwa = Record<string,Archiwum>;
