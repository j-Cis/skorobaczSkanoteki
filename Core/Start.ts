//# `/Core/Start.ts`

import sprawdzaczKonfiguracji_SERWER from "./Functions/sprawdzaczKonfiguracji_SERWER.ts";
const { ILE_ZAPYTAN_NA_MINUTE } = sprawdzaczKonfiguracji_SERWER(true);
import sprawdzaczKonfiguracji_GDZIE from "./Functions/sprawdzaczKonfiguracji_GDZIE.ts";
const { FOLDER_NA_POLECENIA, FOLDER_NA_REZULTATY } = sprawdzaczKonfiguracji_GDZIE(true);


