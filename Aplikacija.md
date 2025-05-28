# Dokumentacija projekta: Hero Shooter Vue App

---

## Tehnologije i alati

Projekt koristi sljedeće moderne web tehnologije i alate:

- **Vue 3** – progresivni JavaScript framework za izradu korisničkog sučelja.
- **Vue Router 4** – za upravljanje rutama (navigacijom) između pogleda.
- **Pinia** – službeni state management alat za Vue 3.
- **Babel** – za transpilaciju modernog JavaScript koda.
- **ESLint** – alat za statičku analizu i održavanje konzistentnog stila koda.

---

## Struktura projekta

Direktorij `src/` sadrži ključne dijelove aplikacije:

- **main.js** – ulazna točka aplikacije (inicijalizira Vue, Router i Pinia).
- **App.vue** – glavna komponenta aplikacije, učitava navigaciju i prikazuje odabrani pogled.
- **components/** – višekratno upotrebljive komponente:
  - **AbilityList.vue** – prikazuje sposobnosti heroja, koristi polimorfizam prilikom prikaza i korištenja sposobnosti.
  - **NavbarComponent.vue** – navigacijska traka, omogućuje lako prebacivanje između ruta.
- **views/** – pogledi koji se povezuju s rutama:
  - **HomeView.vue** – početna stranica s opisom igre i funkcionalnosti.
  - **LoginView.vue** – forma za prijavu korisnika.
  - **RegisterView.vue** – registracija novog korisnika uz validaciju.
  - **HeroView.vue** – prikaz svih heroja i njihovih sposobnosti; koristi polimorfizam za sposobnosti.
- **models/** – osnovne klase za polimorfizam sposobnosti (npr. `Ability.js`).
- **router/index.js** – definira sve aplikacijske rute i povezuje ih s odgovarajućim pogledima.
- **stores/user.js** – Pinia store za upravljanje korisničkim stanjem (prijava, odjava, podaci korisnika).

---

## Polimorfizam u aplikaciji

Aplikacija koristi **polimorfizam** za modeliranje sposobnosti (abilities) heroja:

- Svaka sposobnost je instanca klase koja nasljeđuje osnovnu klasu `Ability`.
- Svaka izvedena klasa (npr. `FireballAbility`, `ShieldAbility`) implementira vlastitu metodu `use()`, koja definira što se događa kada se ta sposobnost koristi.
- Komponenta `AbilityList.vue` koristi polimorfne metode – kad korisnik klikne na gumb "Use", poziva se odgovarajuća metoda `use()` za tu sposobnost, a rezultat se prikazuje korisniku.
- Time se omogućuje da različite sposobnosti imaju različito ponašanje, iako ih aplikacija tretira na isti način (kroz zajedničko sučelje).

**Primjer polimorfizma:**
```js
// models/Ability.js
export class Ability {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
  use() {
    return `${this.name} ability used!`;
  }
}
export class FireballAbility extends Ability {
  constructor() {
    super('Fireball', 'Throw a ball of fire at enemies.');
  }
  use() {
    return 'Casting a blazing fireball!';
  }
}
```

---

## Ostali detalji

- **Component Pattern:** Svaka Vue komponenta je izolirana i višekratno upotrebljiva, što omogućuje čistu organizaciju UI dijelova.
- **State Management Pattern:** Pinia centralizira korisničko stanje, olakšava upravljanje login/logout funkcionalnostima i omogućuje reaktivnost kroz cijelu aplikaciju.
- **Router Pattern:** Vue Router omogućuje pregledno i deklarativno definiranje navigacije kroz aplikaciju, te povezivanje URL-ova s odgovarajućim pogledima i komponentama.
- **Validation Pattern:** Kod registracije se koristi validacija korisničkog unosa (npr. provjera e-maila, dužine lozinke i jedinstvenosti korisničkog imena).

---

## Proširivanje i održavanje

- **Dodavanje novih heroja:** Potrebno je samo definirati novog heroja i njegove sposobnosti koristeći postojeće klase ili kreirati nove izvedene klase sposobnosti.
- **Dodavanje novih sposobnosti:** Kreiranjem nove klase koja nasljeđuje `Ability`, moguće je jednostavno proširiti funkcionalnost bez izmjene postojećeg koda.
- **Održavanje stila:** Zahvaljujući ESLintu i komponentnoj arhitekturi, održavanje konzistentnog i čitljivog koda je jednostavno.