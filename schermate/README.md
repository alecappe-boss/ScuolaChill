# ScuolaChill

ScuolaChill è un gestionale scolastico web, usabile da computer e smartphone. Riunisce in un unico posto il ciclo **materiale → verifica → voto → scrutinio** di ogni classe, che oggi viaggia su canali diversi (chiavette, email, gruppi di messaggistica, carta).

Non sostituisce il registro elettronico: assenze, note disciplinari, verbali e pagella ufficiale restano fuori dal sistema.

## Ruoli

| Ruolo | Cosa fa |
| --- | --- |
| **Direttore** | Crea gli account di docenti e studenti, compone le classi, assegna docenti e materie, designa il coordinatore di classe, supervisiona la scuola in sola lettura e pubblica gli scrutini. Non modifica voti né materiale. |
| **Docente** | Pubblica materiale didattico (file e link) per classe e materia, crea verifiche, corregge e pubblica i voti, prepara le proposte di voto di fine quadrimestre. |
| **Studente** | Trova il materiale della propria classe, svolge le verifiche, consulta voti, media indicativa ed esiti degli scrutini. |

Ogni operazione richiede l'autenticazione e i permessi sono controllati sempre dal sistema, mai solo dall'interfaccia: ognuno vede solo ciò che riguarda la propria classe.

## Funzionalità

- **Accesso e profilo**: attivazione dell'account, accesso e uscita, recupero e cambio della password.
- **Anagrafiche e organizzazione**: account di docenti e studenti (disattivazione e riattivazione), catalogo materie, classi, assegnazioni docente-classe-materia, trasferimento di uno studente.
- **Materiale didattico**: file e link pubblicati per classe e materia.
- **Verifiche**: domande chiuse e aperte in una finestra di tempo stabilita, sul PC della scuola o sul proprio dispositivo. Le risposte si salvano da sole e la consegna è automatica alla scadenza.
- **Valutazione**: voti in bozza, pubblicati quando il docente è pronto; modifiche tracciate; libretto dello studente con media indicativa.
- **Scrutini**: i docenti propongono i voti partendo dalla media, il coordinatore propone l'esito finale, il Direttore pubblica in due gruppi (prima le classi dell'ultimo anno, poi le altre).
- **Notifiche**: nell'applicazione per tutti gli eventi, via email solo per quelli importanti.
- **Importazione, esportazione e report PDF** per Direttore e docenti.

## Struttura del repository

| Cartella | Contenuto |
| --- | --- |
| [prd/](../prd) | Documento dei requisiti (PRD): cosa fa il prodotto, requisiti funzionali e non funzionali, stima del carico, scelte tecnologiche. |
| [schermate/](.) | Interfaccia web (React + Vite). |
| [scuolachill-db/](../scuolachill-db) | Database PostgreSQL e pgAdmin, avviabili con Docker Compose. |

## Avvio in locale

Interfaccia:

```bash
cd schermate
npm install
npm run dev
```

Database:

```bash
cd scuolachill-db
docker compose up -d
```

PostgreSQL è raggiungibile su `localhost:5432` e pgAdmin su `http://localhost:5050`.

## Moduli dell'interfaccia

L'interfaccia è pensata per il **Docente**. È divisa in quattro moduli, ciascuno atomico (si può finire e testare da solo) e propedeutico a quello successivo.

- **Modulo Docente**: il docente ha nome, cognome ed email. I dati vengono visualizzati in alto nella pagina con un avatar (iniziali) e sono resi con i componenti base `Button`, `Badge` e `InfoRow`.
- **Modulo Classi**: le classi sono assegnate al docente e hanno nome, materia e numero di studenti. Vengono visualizzate come lista di card (`ClassCard`) generata con `map`.
- **Modulo Attività e stato**: ogni attività ("correggere una verifica", "pubblicare un voto", "caricare materiale") è collegata a una classe e ha uno stato (Da fare, In corso, Completata). Le attività da svolgere compaiono nel pannello "Da fare adesso", dentro il layout con `Sidebar` e intestazione.
- **Modulo Ricerca e dati**: il menu laterale evidenzia la voce attiva, la ricerca filtra classi e attività, e i dati vengono caricati dal server con `fetch`.
