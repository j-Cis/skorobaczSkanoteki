// # `/Core/Functions/sprawdzaczKonfiguracji_SERWER.ts`

import PlikTOML from "../Classes/PlikTOML.ts"
import { pusty, eText, infoZ } from "./sprawdzaczKonfiguracji.ts";
import type { RecordStringUnknown } from "../Types/Record.d.ts";
import type { Config_SERWER } from "../Types/sprawdzaczKonfiguracji.d.ts"


/** 
 * Funkcja sprawdza poprawność konfiguracji w pliku `/Config/SERWER.toml.txt' 
 * w przypadku błędów, przywraca standardową konfiguracje.
 * 
 * @param infoLog? -typu `boolean` jeśli `true` zostaną wydrukowane informacje
 * @returns zwraca wczytaną poprawną konfiguracje.
*/
export default function sprawdzaczKonfiguracji_SERWER(infoLog?:boolean): Config_SERWER {
  const plikW = new PlikTOML(["Config", "SERWER.toml.txt"]);
  const temat:string = `PLIK KONFIGURACYJNY "/Config/SERWER.toml.txt"`,
        reset:RecordStringUnknown = { ILE_ZAPYTAN_NA_MINUTE: 9};
  function daneZ(dane: RecordStringUnknown): Config_SERWER {
		return ({ 
      ILE_ZAPYTAN_NA_MINUTE: (typeof dane.ILE_ZAPYTAN_NA_MINUTE === "number") 
                                                                ? dane.ILE_ZAPYTAN_NA_MINUTE 
                                                                : parseFloat(`${dane.ILE_ZAPYTAN_NA_MINUTE}`) 
    });
	}

  try {
    if(!plikW.istnieje){
      throw new Error(eText(temat,`NIE ISTNIEJE`));
    } else {
      if (!("ILE_ZAPYTAN_NA_MINUTE" in plikW.dane)) { throw new Error(eText(temat,`NIE ZAWIERA: ILE_ZAPYTAN_NA_MINUTE`)); } 
      else if (typeof plikW.dane.ILE_ZAPYTAN_NA_MINUTE !== "number") { throw new Error(eText(temat,`ILE_ZAPYTAN_NA_MINUTE, NIE JEST LICZBĄ`)); } 
      else if (plikW.dane.ILE_ZAPYTAN_NA_MINUTE > 20) { throw new Error(eText(temat,`PODANA WARTOŚĆ W ILE_ZAPYTAN_NA_MINUTE, JEST ZBYT WYSOKA`)); } 
      else if (plikW.dane.ILE_ZAPYTAN_NA_MINUTE < 1) { throw new Error(eText(temat,`PODANA WARTOŚĆ W ILE_ZAPYTAN_NA_MINUTE, JEST ZBYT NISKA`)); } 
    }
  } catch (error) {
    console.log(pusty(temat.length+16,0));
    console.error(error);
    plikW.usuwanie();
    plikW.tworzenie(reset);
    plikW.zapisywanie();
    infoZ(true,temat,`= ZOSTAŁ ZRESETOWANY`,'');
  }
  const dane: Config_SERWER = daneZ(plikW.dane);
  infoZ(infoLog??false, temat, 'ILE_ZAPYTAN_NA_MINUTE', dane.ILE_ZAPYTAN_NA_MINUTE);

  return dane;
}
