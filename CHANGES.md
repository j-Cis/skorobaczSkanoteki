# REJESTR ZMIAN OD WERSJI v0.0.1-rc.1

> - `:🟫:` - drobne zmiany
> - `:🟪:` - dodanie czegoś nowego mało istotnego
> - `:🟥:` - dodanie czegoś nowego istotnego
> - `:🟨:` - zmieniono coś istotnego

## `ce338cbee218cec052bb3703817368805a11c2ad` --> `f344ac3fb4bdebdb201521f6f258acff6e4c670f`

> - `:🟫:` przeniesiono dokumentacje (stary `/README.md` oraz `/docs/**`) wraz z instrukcją do nowo utworzonego folderu `/Helper/**` i `/Helper/**/imgs`
> - `:🟫:` dodano pliku `/README.md` stosowne linki odsyłające do dokumentacji i instrukcji dotyczącej wersji v0.0.1-rc.1

## `f344ac3fb4bdebdb201521f6f258acff6e4c670f` --> `a4914e49dc2e7dc638e74588b7df4832bd6c9962`

> - `:🟪:` dodano plik `/CHANGES.md` z rejestrem zmian.
> - `:🟫:` tymczasowo zmieniono nazwe folderu `Icons` na `Ic_ons`, gdyż github nie zaakceptował poprzedniej zmiany z `isons` na `Icons`.

## `a4914e49dc2e7dc638e74588b7df4832bd6c9962` --> `0fc06968fc0439f33e1fda5e849df0a0bbd7661b`

> - `:🟪:` dodano nową wersję ikony zawierającej nazwę `/Icons/icon.jpg` oraz zmieniono nazwę folderu z małej na wielką literę.
> - `:🟫:` dodano kodowanie kolorów do `/CHANGES.md`
> - `:🟥:` dodano nową strukturę folderów
>
>   - `/Archive` - folder na zapisane skany
>   - `/Batch` - folder na zlecone zadania
>   - `/Config` - folder na ustawienia
>   - `/Temp` - folder na zapisywane tymczasowe informacje
>   - `/Core/App` - folder na zasadniczy kod aplikacji
>   - `/Core/Error` - folder na skrypty weryfikujące poprawność,zapobiegające błędom.
>   - `/Core/Tools` - folder na różne skrypty uniwersalnej użyteczności
>   - `/Core/Types` - folder na wszystkie dodatkowe typy użyte w programie.
> - `:🟥:` dodano plik z ustawieniami `/Config/GDZIE.toml.txt`
>
>   ```toml
>   ZADANIA_W_FOLDERZE  = "Batch"
>   ARCHIWUM_W_FOLDERZE = "Archive"
>   ```
>
> - `:🟥:` dodano funkcje synchroniczne `pathIsChildUnderParentPath(checkDir:string, ofParent:string): boolean` i  `pathIsChildUnderParentsPaths(checkDir:string, ofParents: string[]): boolean`, sprawdzającą czy dana ścieżka jest podścieżką innej lub innych `/Core/Tools/pathIsChildUnder.ts`
> - `:🟥:` dodano funkcję synchroniczną `SprawdzaczKonfiguracji_Gdzie():void` weryfikującą poprawność wprowadzonych danych w ustawieniu `/Config/GDZIE.toml.txt` gdy jest niepoprawne resetuje go do ustawień domyślnych. `/Core/Error/sprawdza-konfiguracje-gdzie.ts`.
> - `:🟥:` dodano typy uniwersalne do `/Core/Types/uniwersalne.d.ts`.
> - `:🟨:` zaktualizowano plik`/deno.json` dodając zależności.

## `0fc06968fc0439f33e1fda5e849df0a0bbd7661b` --> `5d9e4515dfbde9c9f8653cd099a3e45b094daa13`

> - `:🟨:` poprawiono import w pliki `/Core/Error/sprawdza-konfiguracje-gdzie.ts`.

## `5d9e4515dfbde9c9f8653cd099a3e45b094daa13` -->

> - `:🟥:` dodano plik z ustawieniami `/Config/SERWER.toml.txt`
>
>   ```toml
>   ILE_ZAPYTAN_NA_MINUTE  = 6
>   ```
>
> - `:🟥:` dodano funkcję synchroniczną `SprawdzaczKonfiguracji_Serwer():void` weryfikującą poprawność wprowadzonych danych w ustawieniu `/Config/SERWER.toml.txt` gdy jest niepoprawne resetuje go do ustawień domyślnych. `/Core/Error/sprawdza-konfiguracje-serwer.ts`.
> - `:🟫:` zmieniono nazwy niektórych plików i funkcji by zachować spójność.
