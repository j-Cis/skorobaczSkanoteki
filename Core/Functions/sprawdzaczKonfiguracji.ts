//# `/Core/Functions/sprawdzaczKonfiguracji.ts`

import {C_,PATH_} from "../Import/DenoStd.ts";
import type { RecordStringStrings } from "../Types/Record.d.ts";
export function pusty(a: number, b: number): string {
	return C_.bgBlue(" ".repeat(a)) + ' ' + C_.bgBrightRed(" ".repeat(b === 0 ? 0 : b + 2));
}
export function eText(temat: string, opis: string): string {
	return '!>> ' + C_.bgBlue(C_.brightYellow(` ${temat} `)) + ' >> ' + C_.bgBrightRed(C_.bold(C_.black(` ${opis} `)));
}
export function infoZ(czy: boolean, temat: string, opis: string, info: string | number): void {
	if (czy) {
		console.log(pusty(temat.length + 9, opis.length + 3 + `${info}`.length));
		console.log(eText(temat, `${opis} = ${info}`));
		console.log(pusty(temat.length + 9, opis.length + 3 + `${info}`.length));
	}
}

const ZAKAZANE_LOKALIZACJE_X: string[] = [
	PATH_.resolve(Deno.cwd(), ".git"),
	PATH_.resolve(Deno.cwd(), ".vscode"),
	PATH_.resolve(Deno.cwd(), "Config"),
	PATH_.resolve(Deno.cwd(), "Core"),
	PATH_.resolve(Deno.cwd(), "Helper"),
	PATH_.resolve(Deno.cwd(), "Start"),
	PATH_.resolve(Deno.cwd(), "Temp")
];

export const ZAKAZANE_LOKALIZACJE:RecordStringStrings = {
	FOLDER_NA_POLECENIA: [Deno.cwd(), "Archive",...ZAKAZANE_LOKALIZACJE_X],
	FOLDER_NA_REZULTATY: [Deno.cwd(), "Batch",...ZAKAZANE_LOKALIZACJE_X]
};

