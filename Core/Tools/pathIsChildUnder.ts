/** 
 * @see {@link  https://jsr.io/@std/path@1.0.0-rc.2/doc}
*/
import * as PATH from "@std/path";


/** 
 * 
*/
export function pathIsChildUnderParentPath(checkDir:string, ofParent:string): boolean {
  const relative = PATH.relative(ofParent, checkDir);
  return (relative && !relative.startsWith('..') && !PATH.isAbsolute(relative)) ? true : false;
}

/** 
 * 
*/
export function pathIsChildUnderParentsPaths(checkDir:string, ofParents: string[]): boolean {
  const tab = new Set([...ofParents.map(ofParent => pathIsChildUnderParentPath(checkDir, ofParent))]);
  return tab.has(true) ? true : false; //[...tab];
}