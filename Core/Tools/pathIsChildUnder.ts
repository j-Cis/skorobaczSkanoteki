//# `/Core/Tools/pathIsChildUnder.ts`

/**  @see {@link  https://jsr.io/@std/path@1.0.0-rc.2/doc} */
import * as PATH from "@std/path";


/**
 * Sprawdza czy ścieżka, jest dzieckiem innej ścieżki.
 *
 * @param checkDir  - sprawdzana ścieżka typu `string`.
 * @param ofParent  - ścieżka rodzica typu `string`.
 * @returns jeżeli zawiera się otrzymamy `true` a gdy nie `false`.
 */
export function pathIsChildUnderParentPath(checkDir:string, ofParent:string): boolean {
  const relative = PATH.relative(ofParent, checkDir);
  return (relative && !relative.startsWith('..') && !PATH.isAbsolute(relative)) ? true : false;
}

/**
 * Sprawdza czy ścieżka, jest dzieckiem którejkolwiek, z listy innych ścieżek.
 *
 * @param checkDir  - sprawdzana ścieżka typu `string`.
 * @param ofParent  - lista ścieżek rodzica typu `string[]`.
 * @returns jeżeli zawiera się w którejkolwiek otrzymamy `true` a gdy nie `false`.
 */
export function pathIsChildUnderParentsPaths(checkDir:string, ofParents: string[]): boolean {
  const tab = new Set([...ofParents.map(ofParent => pathIsChildUnderParentPath(checkDir, ofParent))]);
  return tab.has(true) ? true : false; 
}