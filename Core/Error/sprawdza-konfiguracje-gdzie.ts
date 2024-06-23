//# `/Core/Error/sprawdza-konfiguracje-gdzie.ts`

/** @see {@link  https://jsr.io/@std/fs@1.0.0-rc.1/doc/}  */
import * as FS from "@std/fs";

/** @see {@link  https://jsr.io/@std/path@1.0.0-rc.2/doc} */
import * as PATH from "@std/path";

/** @see {@link  https://jsr.io/@std/toml@1.0.0-rc.2/doc/} */
import * as TOML from "@std/toml";

// https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit
/** @see {@link  https://jsr.io/@std/fmt@0.225.4/doc/colors/} */
import * as C from "@std/fmt/colors";


/** 
 * 
*/
import type { RecordStringBoolean, RecordStringString, RecordStringUnknown } from "../Types/uniwersalne.d.ts";

/** 
 * jj
*/
import { pathIsChildUnderParentPath, pathIsChildUnderParentsPaths } from "../Tools/pathIsChildUnder.ts";

/** 
 * 
*/
export function SprawdzaczKonfiguracji_Gdzie():void {
  const CZY: RecordStringBoolean = <RecordStringBoolean>{};
  CZY.ISTNIEJE_PLIK = FS.existsSync(PATH.resolve(Deno.cwd(), "Config", "GDZIE.toml.txt"), { isReadable: true, isFile: true });  
  const ZAKAZANE_LOKALIZACJE: string[] = [
    PATH.resolve(Deno.cwd(), ".git"),
    PATH.resolve(Deno.cwd(), ".vscode"),
    PATH.resolve(Deno.cwd(), "Config"),
    PATH.resolve(Deno.cwd(), "Core"),
    PATH.resolve(Deno.cwd(), "Helper"),
    PATH.resolve(Deno.cwd(), "Start"),
    PATH.resolve(Deno.cwd(), "Temp")
  ];
  try {
    const ADRES:RecordStringString=<RecordStringString>{};
    const OBIEKT:RecordStringUnknown = TOML.parse(Deno.readTextFileSync(PATH.resolve(Deno.cwd(), "Config", "GDZIE.toml.txt")));
    CZY.POSIADA_FOLDER_Z_ZADANIAMI = (typeof OBIEKT.ZADANIA_W_FOLDERZE === "string") && OBIEKT.ZADANIA_W_FOLDERZE.trim().length>0;
    CZY.POSIADA_FOLDER_Z_ARCHIWUM = (typeof OBIEKT.ARCHIWUM_W_FOLDERZE === "string") && OBIEKT.ARCHIWUM_W_FOLDERZE.trim().length>0;
    if(!CZY.POSIADA_FOLDER_Z_ZADANIAMI || !CZY.POSIADA_FOLDER_Z_ARCHIWUM){
      throw new Error('ŹLE ZDEFINIOWANY PLIK USTAWIEŃ');
    }
    ADRES.FOLDER_Z_ZADANIAMI = PATH.resolve(Deno.cwd(),`${OBIEKT.ZADANIA_W_FOLDERZE}`);
    ADRES.FOLDER_Z_ARCHIWUM = PATH.resolve(Deno.cwd(),`${OBIEKT.ARCHIWUM_W_FOLDERZE}`);
    if(pathIsChildUnderParentsPaths(ADRES.FOLDER_Z_ZADANIAMI, ZAKAZANE_LOKALIZACJE) || pathIsChildUnderParentsPaths(ADRES.FOLDER_Z_ARCHIWUM, ZAKAZANE_LOKALIZACJE)){
      throw new Error('USTAWIONO NIEDOZWOLONĄ LOKALIZACJĘ');
    }
  } catch (_error) {    
    if(CZY.ISTNIEJE_PLIK){
      Deno.removeSync(PATH.resolve(Deno.cwd(), "Config", "GDZIE.toml.txt"))
    }
    Deno.writeTextFileSync(PATH.resolve(Deno.cwd(), "Config", "GDZIE.toml.txt"),TOML.stringify({ ZADANIA_W_FOLDERZE:"Batch", ARCHIWUM_W_FOLDERZE:"Archive"},{keyAlignment:true}));
    console.log(C.bgRgb8(C.black(C.bold("PRZYWRÓCONO DOMYŚLNE KONFIGURACJE 'GDZIE > FOLDER_Z_ZADANIAMI' ORAZ 'GDZIE > FOLDER_Z_ARCHIWUM' , BO ALBO BYŁY NIE CZYTELNE, ALBO USUNIĘTE")),231));
  } finally {
    const ADRES:RecordStringString=<RecordStringString>{};
    const OBIEKT:RecordStringUnknown = TOML.parse(Deno.readTextFileSync(PATH.resolve(Deno.cwd(), "Config", "GDZIE.toml.txt")));
    ADRES.FOLDER_Z_ZADANIAMI = PATH.resolve(Deno.cwd(),`${OBIEKT.ZADANIA_W_FOLDERZE}`);
    ADRES.FOLDER_Z_ARCHIWUM = PATH.resolve(Deno.cwd(),`${OBIEKT.ARCHIWUM_W_FOLDERZE}`);

    FS.existsSync(ADRES.FOLDER_Z_ZADANIAMI);
    FS.existsSync(ADRES.FOLDER_Z_ARCHIWUM);
    console.log();
    console.log(C.bgRgb8(" ".repeat(42),18));
    console.log(C.white(C.bgRgb8(C.bold("-> PROGRAM ZADANIA ODCZYTA Z FOLDERU      "),18)));
    console.log(C.bgRgb8(" ".repeat(ADRES.FOLDER_Z_ZADANIAMI.length+4),235));
    console.log(C.white(C.bgRgb8("  "+C.underline(ADRES.FOLDER_Z_ZADANIAMI)+"  ",235)));
    console.log(C.bgRgb8(" ".repeat(ADRES.FOLDER_Z_ZADANIAMI.length+4),235));
    console.log();
    console.log(C.bgRgb8(" ".repeat(42),52));
    console.log(C.white(C.bgRgb8(C.bold("-> PROGRAM PLIKI ZAPISZE WEWNĄTRZ FOLDERU "),52)));
    console.log(C.bgRgb8(" ".repeat(ADRES.FOLDER_Z_ARCHIWUM.length+4),235));
    console.log(C.white(C.bgRgb8("  "+C.underline(ADRES.FOLDER_Z_ARCHIWUM)+"  ",235)));
    console.log(C.bgRgb8(" ".repeat(ADRES.FOLDER_Z_ARCHIWUM.length+4),235));
    console.log();
  }
}

SprawdzaczKonfiguracji_Gdzie();
