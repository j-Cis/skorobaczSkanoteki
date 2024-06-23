//# `/Core/Functions/sprawdzaczKonfiguracji_GDZIE.ts`


import PlikTOML from "../Classes/PlikTOML.ts"
import { pusty, eText, infoZ, ZAKAZANE_LOKALIZACJE } from "./sprawdzaczKonfiguracji.ts";
import type { RecordStringUnknown } from "../Types/Record.d.ts";
import type { Config_GDZIE } from "../Types/sprawdzaczKonfiguracji.d.ts"
import czyFolderJestW from "./czyFolderJestW.ts";

/** 
 * Funkcja sprawdza poprawność konfiguracji w pliku `/Config/GDZIE.toml.txt' 
 * w przypadku błędów, przywraca standardową konfiguracje.
 * 
 * @param infoLog? -typu `boolean` jeśli `true` zostaną wydrukowane informacje
 * @returns zwraca wczytaną poprawną konfiguracje.
*/
export default function sprawdzaczKonfiguracji_GDZIE(infoLog?:boolean):Config_GDZIE {
  const plikW = new PlikTOML(["Config", "GDZIE.toml.txt"]),
        temat:string = `PLIK KONFIGURACYJNY "/Config/GDZIE.toml.txt"`,
        reset:RecordStringUnknown = { FOLDER_NA_POLECENIA: "Batch", FOLDER_NA_REZULTATY:"Archive"};
  function daneZ(dane: RecordStringUnknown): Config_GDZIE {
		return ({ 
      FOLDER_NA_POLECENIA: `${dane.FOLDER_NA_POLECENIA}`,
      FOLDER_NA_REZULTATY: `${dane.FOLDER_NA_REZULTATY}`, 
    });
	}

  try {
    if(!plikW.istnieje){
      throw new Error(eText(temat,`NIE ISTNIEJE`));
    } else {
      if (!("FOLDER_NA_POLECENIA" in plikW.dane) || !("FOLDER_NA_REZULTATY" in plikW.dane)) { throw new Error(eText(temat,`NIE ZAWIERA WSKAZANEGO: FOLDER_NA_POLECENIA LUB FOLDER_NA_REZULTATY`)); } 
      else if (typeof plikW.dane.FOLDER_NA_POLECENIA !== "string" || typeof plikW.dane.FOLDER_NA_REZULTATY !== "string") { throw new Error(eText(temat,`FOLDER_NA_POLECENIA LUB FOLDER_NA_REZULTATY, MA NIEPOPRAWNY FORMAT`)); } 
      else if (plikW.dane.FOLDER_NA_POLECENIA.trim().length <1 || plikW.dane.FOLDER_NA_REZULTATY.trim().length <1) { throw new Error(eText(temat,`FOLDER_NA_POLECENIA LUB FOLDER_NA_REZULTATY, MA ZA KRÓTKĄ NAZWĘ`)); } 
      else if (czyFolderJestW(plikW.dane.FOLDER_NA_POLECENIA.trim(), ZAKAZANE_LOKALIZACJE.FOLDER_NA_POLECENIA)) { throw new Error(eText(temat,`PODANY FOLDER W FOLDER_NA_POLECENI MA NIEDOZWOLONĄ LOKALIZACJĘ`)); }
      else if (czyFolderJestW(plikW.dane.FOLDER_NA_REZULTATY.trim(), ZAKAZANE_LOKALIZACJE.FOLDER_NA_REZULTATY)) { throw new Error(eText(temat,`PODANY FOLDER W FOLDER_NA_REZULTATY MA NIEDOZWOLONĄ LOKALIZACJĘ`)); } 
    }
  } catch (error) {
    console.log(pusty(temat.length+16,0));
    console.error(error);
    plikW.usuwanie();
    plikW.tworzenie(reset);
    plikW.zapisywanie();
    infoZ(true,temat,`= ZOSTAŁ ZRESETOWANY`,'');
  }
  const dane: Config_GDZIE = daneZ(plikW.dane);
  infoZ(infoLog??false, temat, 'FOLDER_NA_POLECENIA', dane.FOLDER_NA_POLECENIA);
  infoZ(infoLog??false, temat, 'FOLDER_NA_REZULTATY', dane.FOLDER_NA_REZULTATY);

  return dane;
}
