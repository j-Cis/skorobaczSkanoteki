// # `/Core/Functions/pobieraczListy0Archiwa.ts`

import { DOM_ } from "../Import/DenoDOM.ts";
import pobieraczHTML from "./pobieraczHTML.ts";
import PlikTOML from "../Classes/PlikTOML.ts";
import type { RecordStringUnknown } from "../Types/Record.d.ts";
import type { RecordArchiwa } from "../Types/pobieraczListy.d.ts";


/**
 * Pobieranie 
 * 
 * @returns
 */
export default async function pobieraczListy0Archiwa(ileZapytanNaMinute: number): Promise<{
    odczytData: Date;
    odczytStrona: URL;
    archiwaLista: RecordArchiwa;
}> {
  const url:URL = new URL("https://skanoteka.genealodzy.pl/opar"),
        rezultat = new PlikTOML(["Temp", "Archiwa.toml.txt"]),
        wsad:RecordStringUnknown = <RecordStringUnknown>{},
        data:Date = new Date();
  wsad.ODCZYTANO_DATA = data.toJSON();
  wsad.ODCZYTANO_Z = url;
  
  const htmlDOC:DOM_.HTMLDocument = await pobieraczHTML(url,ileZapytanNaMinute);
  const archiwa = <RecordArchiwa>{};
  if (htmlDOC) {
    const elementTbody:DOM_.Element | null = htmlDOC.querySelector("#body > div > table > tbody > tr:nth-child(3) > td > table > tbody");
    if (elementTbody) {
      const children:DOM_.HTMLCollection = elementTbody.children;

      for (const child of <IterableIterator<DOM_.Element>> Array.prototype[Symbol.iterator].call(children)) {
        const id:string = child.children[0].children[0].getAttribute("href") ?? '';
        archiwa[id] = {
          arIDENT: id,
          arNUMER: parseInt(id.split("-")[1].slice(2)),
          arNAZWA: child.children[0].children[0].innerText,
          zespILE: parseInt(child.children[1].innerText),
          skanILE: parseInt(child.children[2].innerText),
        };

        //const tmp1 = child.children[0].children[0].ownerDocument?.documentURI;  //https://skanoteka.genealodzy.pl/opar
        //const tmp2 = child.children[0].children[0].ownerDocument?.title //Skanoteka - Baza skanów dokumentów o wartości genealogicznej 
      }
    }    
  }
  wsad.ARCHIWA = archiwa;
  rezultat.tworzenie(wsad);
  rezultat.zapisywanie();
  return {
    odczytData: data,
    odczytStrona: url,
    archiwaLista: archiwa
  };
}
