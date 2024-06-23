// # `/Core/Functions/czyFolderJestW.ts`

import {PATH_} from "../Import/DenoStd.ts";

function czyFolderJestPodInnym(folder:string, rodzic:string) {
  const relative = PATH_.relative(rodzic, folder);
  return (relative && !relative.startsWith('..') && !PATH_.isAbsolute(relative)) ? true : false;
}

/**
 * Sprawdza czy ścieżka, jest dzieckiem innej ścieżki lub ścieżek.
 *
 * @param folder  - sprawdzana ścieżka typu `string`.
 * @param rodzic  - ścieżka lub ścieżki rodzica typu `string` lub `string[]`.
 * @returns jeżeli zawiera się otrzymamy `true` a gdy nie `false`.
 */
export default function czyFolderJestW(folder:string, rodzic:string | string[]) {
  if (Array.isArray(rodzic)) {
    const tab = new Set([...rodzic.map(rodzicX => czyFolderJestPodInnym(folder, rodzicX))]);
    return tab.has(true) ? true : false;
  } else {
    return czyFolderJestPodInnym(folder, rodzic); 
  }
}