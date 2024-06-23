//# `/Core/Error/sprawdza-konfiguracje-serwer.ts`

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
 * 
*/
import { pathIsChildUnderParentPath, pathIsChildUnderParentsPaths } from "../Tools/pathIsChildUnder.ts";

/** 
 * 
*/
export function SprawdzaczKonfiguracji_Serwer():void {
  const CZY: RecordStringBoolean = <RecordStringBoolean>{};
  CZY.ISTNIEJE_PLIK = FS.existsSync(PATH.resolve(Deno.cwd(), "Config", "SERWER.toml.txt"), { isReadable: true, isFile: true });  
  
  try {
    const OBIEKT:RecordStringUnknown = TOML.parse(Deno.readTextFileSync(PATH.resolve(Deno.cwd(), "Config", "SERWER.toml.txt")));
    CZY.WSKAZANO_ILE_ZAPYTAN = (typeof OBIEKT.ILE_ZAPYTAN_NA_MINUTE === "number") && OBIEKT.ILE_ZAPYTAN_NA_MINUTE>20;
    if(!CZY.WSKAZANO_ILE_ZAPYTAN){
      throw new Error('ŹLE ZDEFINIOWANY PLIK USTAWIEŃ');
    }
  } catch (_error) {    
    if(CZY.ISTNIEJE_PLIK){
      Deno.removeSync(PATH.resolve(Deno.cwd(), "Config", "SERWER.toml.txt"))
    }
    Deno.writeTextFileSync(PATH.resolve(Deno.cwd(), "Config", "SERWER.toml.txt"),TOML.stringify({ ILE_ZAPYTAN_NA_MINUTE: 9},{keyAlignment:true}));
    console.log(C.bgRgb8(C.black(C.bold("PRZYWRÓCONO DOMYŚLNE KONFIGURACJE 'SERWER > ILE_ZAPYTAN_NA_MINUTE' , BO ALBO BYŁY NIE CZYTELNE, ALBO USUNIĘTE")),231));
  } finally {
    const OBIEKT:RecordStringUnknown = TOML.parse(Deno.readTextFileSync(PATH.resolve(Deno.cwd(), "Config", "SERWER.toml.txt")));
    console.log();
    console.log(C.bgRgb8(" ".repeat(52),0));
    console.log(C.white(C.bgRgb8(C.bold("-> NA SERWER BĘDZIE WYSYŁANE TYLE ZAPYTAŃ NA MINUTE "),0)));
    console.log(C.bgRgb8(" ".repeat(`  ${OBIEKT.ILE_ZAPYTAN_NA_MINUTE}  `.length),235));
    console.log(C.white(C.bgRgb8(`  ${OBIEKT.ILE_ZAPYTAN_NA_MINUTE}  `,235)));
    console.log(C.bgRgb8(" ".repeat(`  ${OBIEKT.ILE_ZAPYTAN_NA_MINUTE}  `.length),235));
    console.log();
  }
}

SprawdzaczKonfiguracji_Serwer();
