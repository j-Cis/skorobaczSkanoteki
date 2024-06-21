# skrobaczSkanoteki - wersja powłokowa

**Ta wersja programu charakteryzuje się minimalistyczną funkcjonalnością dzięki temu jest lżejsza. (już działa).**

Dodatkowo równolegle do tej wersji występuje wersja graficzna - która charakteryzuje się rożnymi udogodnieniami, dlatego jej objętość jest większa. (w fazie rozwoju); Rozwijana jest w gałęzi [**main-large** (https://github.com/j-Cis/skorobaczSkanoteki/tree/main-large)](https://github.com/j-Cis/skorobaczSkanoteki/tree/main-large) .

---

## 1. Pobieranie programu skrobaczSkanoteki w wersji powłokowej

## 2. Przygotowanie nowego zadania dla skrobaczSkanoteki w wersji powłokowej

- w folderze **`tasks`** utwórz plik tekstowy na wzór pliku **`test.txt`**
- ważne nie usuwaj pliku **`test.txt`**
- pamiętaj że każdy link do strony musi być w podwójnym cudzysłowie,
- pamiętaj że każdy link musi być poprzedzony wcięciem, a na końcu wersu musi znajdować się przecinek
- pamiętaj że w 1 lini musi być

```toml
  STRONY = [
```

- pamietaj że w następującej linijce po ostatnim linku, musi być

```toml
  ]

  [METRYCZKA]
  ZESPOL_SYGNATURA    = "44444"
  JEDNOSTKA_SYGNATURA = "1331"
```

- pamiętaj że w metryczce obowiązkowymi polami są pola sygnaturalne! (zamieszczone powyżej)
- Możesz dodawać dowolne inne pola do metryczki
  - pamiętając by w nazwie pola nie było
    - spacji
    - znaków specjalnych za wyjątkiem znaku podkreślenia
    - innych znaków niż znaki z alfabetu angielskiego i cyfr
  - pamietaj że wielkość znaków ma znaczenie
  - pamiętaj że tylko i wyłącznie liczby mogą być nie być w cudzysłowie
- Pamiętaj że ostatnia linia dokumentu musi być pusta

Przykładowy plik zadania

```toml
STRONY = [
  "https://sadowe.genealodzy.pl/index.php?op=pg&amp&id=2456&amp&se=5&amp&sy=18&amp&kt=&amp&plik=087.jpg",
  "https://sadowe.genealodzy.pl/index.php?op=pg&amp&id=2456&amp&se=5&amp&sy=18&amp&kt=&amp&plik=088.jpg",
  "https://sadowe.genealodzy.pl/index.php?op=pg&amp&id=2456&amp&se=5&amp&sy=18&amp&kt=&amp&plik=089.jpg",
  "https://sadowe.genealodzy.pl/index.php?op=pg&amp&id=2456&amp&se=5&amp&sy=18&amp&kt=&amp&plik=090.jpg",
  "https://sadowe.genealodzy.pl/index.php?op=pg&amp&id=2456&amp&se=5&amp&sy=18&amp&kt=&amp&plik=091.jpg",
]

[METRYCZKA]
ZESPOL_SYGNATURA = "44444"
JEDNOSTKA_SYGNATURA = "1331"
ZESPOL_OPIS = "Sądy różne - zbiór szczątków zespołów"
SERIA_OPIS = "Forum Nobilium"
JEDNOSTKA_OPIS = "Acta successionalia et pupillaria"
JEDNOSTKA_LATA_OD = 1739
JEDNOSTKA_LATA_DO = 1804

```

## 3. Pozyskiwanie listy stron do utworzenia zadania opisanego w punkcie 2

### Krok 1

![Krok 1](./docs/nowe-zadanie-krok-1.webp)

---

### Krok 2

![Krok 2](./docs/nowe-zadanie-krok-2.webp)

**Teraz otwieramy edytor tekstu, może być systemowy notatnik, a najlepiej jakby był to vsCODE. Następnie w nowym pliku tekstowym, wklejamy, uprzednio skopiowaną zawartość naszego `<tbody>` i dla bezpieczeństwa zapisujemy plik.**

---

### Krok 3

**Teraz najlepiej było by już posiadać vsCODE, lub inny zaawansowany edytor tekstu. oczywiscie można to zrobić bez jego pomocy - ręcznie, ale automatyzacja procesu była by sprawniejsza. Poniżej pokażę jak zrobić to w vsCODE. Te zaawansowane edytory tekstu (np. znam jeszcze Atom, Notepad++), działają dość podobnie, ale maja też różnice.**

![Krok 3](./docs/nowe-zadanie-krok-3.webp)

**Tekst który należy wpisać do okna wyszukiwania, można wygodnie skopiować sobie z tego miejsca `(?<=href=["|'])(.*?)(?=["|'])`  a następnie w oknie wyszukiwania wkleić. NALEŻY PAMIĘTAĆ O ZAZNACZENIU OPCJI "RegEx" KTÓRĄ NA GRAFICE POWYZEJ OZNACZYŁEM NA RÓŻOWO Z NUMEREM 3.**

---

### Krok 4

![Krok 4](./docs/nowe-zadanie-krok-4.webp)

---

### Krok 5

![Krok 5](./docs/nowe-zadanie-krok-5.webp)

**W okienku znajdź wpisujemy  `index.php`  natomiast w oknie zamień w tym przypadku  `https://sadowe.genealodzy.pl/index.php`  to co tu wpisujemy zależy od tego co uzyskamy w 4 kroku.**

---

### Krok 6

![Krok 6](./docs/nowe-zadanie-krok-6.webp)

**W okienku znajdź wpisujemy średnik  `;`  natomiast w oknie zamień wpisujemy  `&`  znak end.**

---

### Krok 7

![Krok 7](./docs/nowe-zadanie-krok-7.webp)

**W okienku znajdź wpisujemy średnik  `http`  natomiast w oknie zamień wpisujemy `|  "http` (bez znaku `|` został on użyty tylko po to bo zwrócić uwage na odstęp - 2 spacje) należy zwrócić uwagę na to że znak cudzysłowu poprzedzają 2 spacje, jest to bardzo istotne.**

---

### Krok 8

![Krok 8](./docs/nowe-zadanie-krok-8.webp)

**W okienku znajdź wpisujemy średnik  `.jpg`  natomiast w oknie zamień  `.jpg",`  wpisujemy.**

> **Tak przygotowaną listę wklejamy do pliku z zadaniem opisanym w drugim (2.) punkcie.**
>
> ```toml
> STRONY = [
>   "https://sadowe.genealodzy.pl/index.php?op=pg&amp&id=2456&amp&se=5&amp&sy=18&amp&kt=&amp&plik=087.jpg",
>   "https://sadowe.genealodzy.pl/index.php?op=pg&amp&id=2456&amp&se=5&amp&sy=18&amp&kt=&amp&plik=088.jpg",
>   "https://sadowe.genealodzy.pl/index.php?op=pg&amp&id=2456&amp&se=5&amp&sy=18&amp&kt=&amp&plik=089.jpg",
>   "https://sadowe.genealodzy.pl/index.php?op=pg&amp&id=2456&amp&se=5&amp&sy=18&amp&kt=&amp&plik=090.jpg",
>   "https://sadowe.genealodzy.pl/index.php?op=pg&amp&id=2456&amp&se=5&amp&sy=18&amp&kt=&amp&plik=091.jpg",
> ]
> 
> [METRYCZKA]
> ZESPOL_SYGNATURA = "44444"
> JEDNOSTKA_SYGNATURA = "1331"
> ZESPOL_OPIS = "Sądy różne - zbiór szczątków zespołów"
> SERIA_OPIS = "Forum Nobilium"
> JEDNOSTKA_OPIS = "Acta successionalia et pupillaria"
> JEDNOSTKA_LATA_OD = 1739
> JEDNOSTKA_LATA_DO = 1804
> 
> ```

---
