// # '/Core/Functions/pobieraczHTML.ts' 

import { DOM_ } from "../Import/DenoDOM.ts";
import ochraniaczSerwera from "./ochraniaczSerwera.ts";

export default async function pobieraczHTML(url:URL, ileZapytanNaMinute: number):Promise<DOM_.HTMLDocument> {
  await ochraniaczSerwera(ileZapytanNaMinute);
  const stronaTEXT: string = await fetch(url).then((res: Response):Promise<string> =>  res.text());
  await DOM_.initParser();
  const stronaHTML:DOM_.HTMLDocument = new DOM_.DOMParser().parseFromString(stronaTEXT, "text/html");
  return stronaHTML;
}