//# `/Core/Functions/PlikTOML.ts`

import {TOML_, FS_, PATH_} from "../Import/DenoStd.ts";
import type { RecordStringUnknown} from "../Types/Record.d.ts";

export default class PlikTOML {

  readonly adres: string;
  istnieje:boolean;
  dane:RecordStringUnknown = <RecordStringUnknown>{};
  constructor(adres: string[]) {
    this.adres = PATH_.resolve(Deno.cwd(), ...adres);
    this.istnieje = FS_.existsSync(this.adres);
    if (this.istnieje) {
      this.wczytywanie();
    }
  }

  wczytywanie():void {
    this.dane = TOML_.parse(Deno.readTextFileSync(this.adres));    
  }

  zapisywanie():void {
    Deno.writeTextFileSync(this.adres,TOML_.stringify(this.dane,{keyAlignment:true}));
  }

  tworzenie(wsad:RecordStringUnknown):void {
    this.dane = wsad;
  }

  usuwanie():void {
    if (this.istnieje) {
      Deno.removeSync(this.adres);
      this.dane = <RecordStringUnknown>{};
    }
  }

}