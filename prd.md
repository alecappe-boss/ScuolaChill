# PRD di ScuolaChill · Alessandro Cappelletto

---

## Informazioni sul documento

| **Prodotto** | ScuolaChill, gestionale scolastico |
| --- | --- |
| **Autori** | Alessandro Cappelletto |
| **Versione** | 0.4 |
| **Data** | 09/10/2026 |
| **Stato** | Bozza |

### Storico delle versioni

| Versione | Data | Autore | Cosa è cambiato e perché |
| --- | --- | --- | --- |
| 0.1 | 30/09/2026 | A. Cappelletto | Prima stesura: prima parte, stima del carico e scelte tecnologiche. |
| 0.2 | 07/10/2026 | A. Cappelletto | Aggiunta la funzionalità **Scrutini** per completare il ciclo verifica → voto → esito. |
| 0.3 | 08/10/2026 | A. Cappelletto | Numeri della scuola ricavati da dati reali; voti con passo 0,5, bozza e pubblicazione; scrutini in due gruppi; verifiche su dispositivi personali; funzionalità del brain dump (profilo, importazione, esportazione, report, notifiche); stima del carico ricalcolata. |
| 0.4 | 09/10/2026 | A. Cappelletto | Intervista sui requisiti impliciti con 2 studenti del primo anno: 2 requisiti nuovi e 3 rafforzati. |

---

# Prima parte · Il cosa

## Scopo e perimetro

### Perché esiste ScuolaChill

**Dal lato business.** Oggi materiale didattico, verifiche, voti ed esiti di fine periodo viaggiano su canali diversi: chiavette, email, gruppi di messaggistica, carta. Lo studente non sa dove cercare, il docente ripete le stesse operazioni per ogni classe e il Direttore non ha una visione d'insieme. ScuolaChill riunisce in un unico posto, con regole chiare su chi vede cosa, il ciclo *materiale → verifica → voto → scrutinio* di ogni classe.

**Dal lato tecnico.** ScuolaChill è un'applicazione web responsive, usabile da computer e smartphone, con tre ruoli: Direttore, Docente e Studente. Gestisce anagrafiche e classi, materiale, verifiche a tempo, voti, scrutini di fine quadrimestre, notifiche, report ed esportazioni. Ogni operazione richiede l'autenticazione e i permessi sono controllati sempre nel sistema, mai solo nell'interfaccia.

### Cosa è incluso

Priorità **MoSCoW**: i *Must* coprono per intero la traccia; i *Should* sono nel perimetro e si realizzano dopo i *Must*.

- **Accesso e profilo** (Must): attivazione dell'account, accesso e uscita, recupero della password, profilo con cambio password (ACC-01…04).
- **Anagrafiche** (Must): account docente e studente, disattivazione e riattivazione (DIR-01, DIR-02, DIR-06). *Should:* importazione da file (DIR-05).
- **Organizzazione** (Must): catalogo materie, classi, assegnazioni docente-classe-materia, coordinatore di classe, trasferimento di uno studente (DIR-03).
- **Supervisione** (Must): vista complessiva del Direttore in sola lettura (DIR-04). *Should:* esportazioni e report PDF (DIR-08, DIR-09).
- **Lavoro del docente** (Must): le proprie classi, studenti e risultati (DOC-05). *Should:* esportazioni e report PDF (DOC-06, DOC-07).
- **Materiale didattico** (Must): file e link per classe e materia (DOC-01, STU-01). *Should:* pubblicazione su più classi in un'unica operazione.
- **Verifiche** (Must): domande chiuse e aperte, finestra di svolgimento, PC della scuola o dispositivo personale, salvataggio automatico, consegna automatica (DOC-02, STU-02). *Should:* estensione individuale del tempo (DSA).
- **Valutazione** (Must): voti in bozza e pubblicazione, modifica tracciata, punteggio suggerito, libretto con media indicativa, pagina iniziale dello studente (DOC-03, STU-03, STU-05).
- **Scrutini** (Should): proposte di voto, esito finale del coordinatore, pubblicazione in due gruppi (prima le classi dell'ultimo anno), rettifica tracciata (DOC-04, DIR-07, STU-04).
- **Notifiche** (Should): nell'applicazione per tutti gli eventi, via email solo per quelli importanti (ACC-05).

**Corsi ITS.** L'applicazione è valida anche per gli ITS, con le modifiche necessarie fatte ad hoc solo per loro (per esempio struttura dei corsi e valutazione), da definire in una versione successiva.

### Cosa non è incluso

- **Verbale del consiglio di classe, firme digitali, pagella ministeriale, voto di comportamento:** ScuolaChill pubblica l'esito deciso dal consiglio, ma la parte ufficiale resta nel registro elettronico.
- **Recupero dei debiti:** viene pubblicato il "giudizio sospeso" con le materie, ma l'esito dopo il recupero si registra fuori dal sistema.
- **Assenze, ritardi, giustificazioni, note disciplinari:** sono funzioni del registro elettronico.
- **Accesso per i genitori:** sarebbe un quarto ruolo con nuovi obblighi di privacy. È candidato per una versione futura.
- **Messaggistica, chat, forum, videolezioni, notifiche push, SMS:** le notifiche sono solo avvisi automatici nell'applicazione e via email.
- **Orario delle lezioni, calendario, prenotazione delle aule.**
- **Sorveglianza anti-copiatura** (blocco del browser, webcam): con i dispositivi personali non si può garantire; la sorveglianza resta del docente in aula.
- **Verifiche per singoli studenti, consegna di file nelle verifiche, soluzioni mostrate automaticamente.**
- **Più anni scolastici, più istituti, più Direttori:** un solo anno e una sola scuola. L'estensione a scuole più grandi è un obiettivo futuro dichiarato (NFR-12).
- **App native dagli store:** l'applicazione web responsive copre tutti i dispositivi.

---

## Stakeholder

| Stakeholder | Cosa fa | Cosa gli interessa | Come lo coinvolgiamo |
| --- | --- | --- | --- |
| Direttore | Crea account e classi, supervisiona, pubblica gli scrutini | Visione d'insieme in pochi minuti; inizio anno senza inserimenti a mano; sapere quali proposte mancano; report pronti | Collaudo del suo flusso; revisione di vista complessiva e report |
| Docenti | Pubblicano materiale, creano verifiche, valutano, propongono i voti finali | Non ripetere operazioni per ogni classe; verifiche che non si bloccano; correggere in bozza; esportare i voti | Collaudo con il docente coinvolto; verifica reale in classe |
| Studenti | Studiano, svolgono verifiche, consultano voti ed esiti | Trovare subito il materiale; non perdere le risposte; sapere quando esce un voto | Intervista sui requisiti impliciti; collaudo |
| Docente del corso | Valida il PRD | Decisioni motivate, coerenza fra assunzioni e dimensionamento, autorizzazioni verificabili | Presentazione e domande; demo alle milestone |
| Collaudatori del primo anno | Usano ScuolaChill come utenti reali | Interfaccia comprensibile al primo colpo, anche dal telefono | Intervista prima della validazione; collaudo osservato |
| Consiglio di classe | Decide voti finali ed esiti | Proposte complete; esito pubblicato uguale al verbale | Indiretto: il flusso DOC-04 → DIR-07 ricalca proposta → delibera → pubblicazione |
| Autore (sviluppo e manutenzione) | Progetta, realizza e tiene in esercizio il sistema da solo | Requisiti stabili, sistema diagnosticabile, costi sostenibili | Autore del PRD; reperibilità nel collaudo (NFR-31) |
| Famiglie e referente privacy (DPO) | Non usano il sistema; tutelano i dati di minorenni | Riservatezza, dati in UE, tempi di conservazione | Informativa e requisiti di conformità rivisti prima del collaudo |
| Tecnico di laboratorio | Gestisce PC, rete e Wi-Fi | Funzionamento su PC e dispositivi senza saturare il Wi-Fi | Prova in aula prima del collaudo |

---

## Destinatari e contesto d'uso

### La scuola che abbiamo immaginato

Una scuola secondaria di secondo grado statale a indirizzo tecnologico, in provincia di Venezia, con cinque anni di corso e quattro sezioni per anno. Le dimensioni sono ricavate da una scuola reale, la **SFP Don Bosco di San Donà di Piave**: 20 classi, 413 allievi e 21 formatori dipendenti nel 2024/25 (*Bilancio Sociale 2024/2025*, Fondazione Salesiani per la Formazione Professionale Italia Nord Est). Da quella sede prendiamo le dimensioni, non l'ordinamento.

|  | Valore |
| --- | --- |
| Numero di studenti | **500**: i 413 reali arrotondati per eccesso (+21%), circa 25 per classe |
| Numero di docenti | **30**: 21 dipendenti più collaboratori e compresenze; 20 classi × 30 ore = 600 ore, circa 20 a docente |
| Numero di classi | **20** (5 anni × 4 sezioni), circa 10 materie ciascuna, circa 200 assegnazioni docente-classe-materia |
| Orario scolastico | **8:00 – 14:00, dal lunedì al venerdì**; uso fuori orario 15:00 – 21:00; due quadrimestri (il 1° chiude il 31 gennaio) |
| Connettività | Fibra con circa 100 Mbit/s per la didattica; 3 aule informatiche cablate da 28 postazioni; Wi-Fi nelle aule, usato anche per le verifiche sui dispositivi personali; rete mobile degli studenti |

### Gli archetipi

| ID | Archetipo | Contesto d'uso | Competenze digitali | Dispositivo principale | Frequenza d'uso |
| --- | --- | --- | --- | --- | --- |
| ARC-001 | Direttore, 40-60 anni, poco tempo | In ufficio, fra un impegno e l'altro; picchi a settembre (account e classi) e a fine quadrimestre (scrutini, report) | Medie: email, gestionali, fogli di calcolo; non legge manuali | PC desktop; a volte tablet | Intensa nei picchi; 2-3 accessi a settimana da 5-10 minuti nel resto dell'anno |
| ARC-002 | Docente, 20-60 anni, 6-7 assegnazioni | Prepara materiale e verifiche a casa; sorveglia la verifica in aula; corregge e pubblica a casa | Molto variabili. **L'interfaccia deve funzionare per il meno esperto.** | Portatile o PC, anche in aula per seguire la verifica | Quotidiana nei periodi di verifica (2-3 accessi da 10-20 minuti); sessioni lunghe prima degli scrutini |
| ARC-003 | Studente, dai 14 anni, senza limite superiore (anche adulti dei corsi ITS); i collaudatori hanno 14 anni | Materiale, voti e notifiche dal telefono, spesso con rete instabile; verifiche in aula informatica o in classe con il proprio dispositivo | Pratico con le app social, **poco abituato a file, password ed email**; si aspetta salvataggio automatico e notifiche | **Smartphone**; PC dell'aula o dispositivo personale per le verifiche | 2-3 accessi brevi al giorno; 1-3 verifiche a settimana |

**Cosa implicano per il prodotto.** Le funzioni dello studente, verifica compresa, nascono dallo schermo dello smartphone (NFR-22). Nessuna risposta dipende da un pulsante "Salva" (FR-VER-05). Le notifiche sostituiscono il passaparola (ACC-05). Esiste un'alternativa all'email per l'attivazione (FR-ACC-02). Ogni flusso si completa in pochi passaggi, con messaggi in italiano semplice (NFR-24). La vista del Direttore risponde in una schermata a "come vanno le classi?" e "quali proposte mancano?".

---

## Panoramica e casi d'uso

### ScuolaChill in poche righe

ScuolaChill è il posto unico della scuola dove i docenti mettono il materiale, preparano le verifiche e danno i voti, e dove ogni studente trova solo ciò che riguarda la sua classe. Le verifiche si fanno in un orario stabilito, sul computer della scuola o sul proprio telefono, e le risposte si salvano da sole. I voti il docente li corregge con calma e li pubblica quando è pronto. A fine quadrimestre i docenti preparano le proposte partendo dalla media, il coordinatore propone l'esito finale e il Direttore pubblica gli scrutini: prima le quinte, poi tutte le altre classi insieme. Il Direttore crea gli account, compone le classi e vede come va la scuola, ma non modifica voti né materiale. ScuolaChill non sostituisce il registro elettronico.

**Personaggi:** la Direttrice Elena Marchetti; il prof. Davide Russo, Matematica in 1A, 1C, 2B e 5A, coordinatore della 1A; Sofia (1A), Luca (1C) e Giulia (5A).

### User flow e scenari

#### Direttore

**Storia: DIR-01 / DIR-02 · Creare gli account di docenti e studenti**

**User flow**

1. Elena apre **Persone** → **Nuovo docente** o **Nuovo studente**.
2. Inserisce nome, cognome, email e, per lo studente, la classe (facoltativa).
3. Il sistema crea l'account *In attesa di attivazione* e invia il link di attivazione, mostrando lo stato dell'invio.
4. La persona compare nell'elenco paginato, filtrabile per ruolo, classe e stato.

**Scenario principale.** Il 10 settembre Elena crea "Davide Russo" con l'email istituzionale e lo vede subito con lo stato *Email inviata*. Il giorno dopo lo stato è *Attivo*: Davide ha scelto la sua password.

**Scenari alternativi.** Email già usata, anche con maiuscole diverse: nessun account creato (FR-ACC-04). Dati incompleti: il sistema indica ogni campo errato. Servizio email non disponibile: l'account viene creato comunque ed Elena può reinviare l'invito o generare un codice da consegnare a mano (FR-ACC-02). Un docente o uno studente prova a creare un account aggirando l'interfaccia: operazione negata.

**Storia: DIR-03 · Creare le classi e comporle**

**User flow**

1. Elena gestisce il catalogo delle materie, poi apre **Classi** → **Nuova classe** (anno e sezione).
2. Aggiunge gli studenti; il sistema propone per primi quelli senza classe.
3. Associa le coppie *materia → docente* e designa il **coordinatore** fra i docenti assegnati.
4. La scheda mostra studenti, materie senza docente e coordinatore.

**Scenario principale.** Elena crea la 1A, aggiunge 25 studenti fra cui Sofia, associa Matematica al prof. Russo e lo designa coordinatore. Davide trova la 1A fra le sue classi con la sola Matematica.

**Scenari alternativi.** Studente già in un'altra classe: il sistema non lo sposta in silenzio, propone **Trasferisci** (FR-CLA-01). Compresenza: due docenti sulla stessa materia operano ciascuno sui propri contenuti. Coordinatore non assegnato alla classe: operazione negata.

**Storia: DIR-07 · Pubblicare gli scrutini** *(aggiunta)*

**User flow**

1. A fine quadrimestre Elena apre **Scrutini** e vede i gruppi **Quinte** e **Altre classi**, con l'avanzamento di ogni classe e le voci mancanti con il nome del responsabile.
2. Apre il tabellone di una classe in sola lettura e lo confronta con il verbale del consiglio.
3. Se il consiglio ha deliberato diversamente, **riapre** la voce con una motivazione; il responsabile la corregge.
4. Quando tutte le quinte sono complete preme **Pubblica quinte**; più avanti **Pubblica altre classi**.

**Scenario principale.** Il 10 giugno si chiudono i consigli delle quinte. Elena pubblica il gruppo alle 13:00 e Giulia legge "Ammessa all'esame di Stato". Il 14 giugno Elena pubblica le altre 16 classi in un'unica operazione.

**Scenari alternativi.** Una quinta incompleta: pubblicazione non disponibile, con l'elenco delle voci mancanti. Altre classi prima delle quinte: operazione negata (FR-SCR-04). Errore dopo la pubblicazione: rettifica tracciata (FR-SCR-05).

#### Docente

**Storia: DOC-01 · Caricare materiale didattico**

**User flow**

1. Davide sceglie un'assegnazione → **Materiale** → **Nuovo materiale**.
2. Inserisce titolo, descrizione facoltativa e un file o un link; *(Should)* spunta le altre classi con la stessa materia.
3. Conferma; una barra mostra l'avanzamento.
4. Il materiale compare in cima all'elenco e gli studenti ricevono una notifica.

**Scenario principale.** Domenica sera Davide carica "Equazioni di primo grado – schema.pdf" (2 MB) per la 1A e la 1C insieme. Lunedì Sofia lo trova in Matematica, segnalato come nuovo.

**Scenari alternativi.** File oltre 50 MB o di formato non ammesso: rifiutato con il limite (FR-MAT-01). Connessione che cade durante il caricamento: il materiale non compare a metà. Classe non sua: operazione negata.

**Storia: DOC-02 · Creare le proprie verifiche**

**User flow**

1. Davide sceglie l'assegnazione → **Verifiche** → **Nuova verifica**.
2. Inserisce titolo, istruzioni, data, ora di apertura e di chiusura.
3. Aggiunge domande a scelta singola (2-6 opzioni, punteggio) o aperte e vede l'anteprima, anche in formato smartphone.
4. Conferma: la verifica è *Programmata* e gli studenti ricevono notifica ed email.
5. Durante la finestra segue chi non ha iniziato, chi è in corso e chi ha consegnato.

**Scenario principale.** Davide prepara "Equazioni – 1° quadrimestre" per la 1A: 8 domande chiuse e 2 aperte, giovedì dalle 9:00 alle 9:50. Mercoledì corregge una domanda, perché la verifica non è ancora aperta. Giovedì metà classe la svolge in aula informatica e metà dal telefono.

**Scenari alternativi.** Refuso a verifica aperta: le domande non sono più modificabili, può solo prorogare la chiusura (FR-VER-03). Studente con DSA: estensione di 15 minuti (FR-VER-09). Eliminazione: solo se nessuno ha iniziato.

**Storia: DOC-03 · Assegnare i voti**

**User flow**

1. Dopo la chiusura Davide apre **Correzione** e vede le consegne con il loro stato.
2. Per le domande chiuse vede il **punteggio suggerito**, per le aperte legge le risposte.
3. Inserisce voto e commento: il voto resta in **bozza**, invisibile allo studente.
4. Preme **Pubblica voti**: il sistema elenca le consegne senza voto e chiede conferma; poi i voti diventano visibili tutti insieme.
5. Modificare un voto pubblicato richiede una motivazione, che resta nello storico.

**Scenario principale.** Giovedì Davide corregge 20 consegne su 25 e le lascia in bozza; venerdì finisce e pubblica. Sofia riceve "Nuovo voto in Matematica" e trova "7½ · Ottimo procedimento, attenzione ai segni".

**Scenari alternativi.** Voto fuori scala ("11", "6,3"): non salvato, con la scala spiegata (FR-VOT-01). Studente assente: consegna *Non svolta*, nessun voto. Correzione dopo la pubblicazione: motivazione obbligatoria, "modificato il…" e notifica (FR-VOT-02).

#### Studente

**Storia: STU-01 · Consultare il materiale didattico**

**User flow**

1. Sofia apre **Materie** e vede le materie della sua classe con il numero di materiali nuovi.
2. Apre una materia e trova il materiale di tutti i suoi docenti, dal più recente, diviso in pagine.
3. Vede dimensione e formato, poi apre il file nel browser, lo scarica o segue il link.

**Scenario principale.** Sull'autobus Sofia apre Matematica dal telefono e legge "Equazioni di primo grado – schema" nel browser.

**Scenari alternativi.** Luca riceve da un amico il link di un file della 1A: "Non hai accesso a questo materiale". Un file da 40 MB su rete lenta mostra l'avanzamento e il download si riprende senza ricominciare (NFR-27).

**Storia: STU-02 · Svolgere una verifica**

**User flow**

1. Sofia apre **Verifiche**, divise per stato: *Da svolgere*, *In corso*, *Consegnata*, *Non svolta*, *Valutata*.
2. All'ora di apertura, dal PC dell'aula o dal proprio telefono, sceglie la verifica → **Inizia**.
3. Risponde in qualsiasi ordine; ogni risposta si salva da sola e l'indicatore mostra "Salvato alle 9:12:40". Un contatore mostra il tempo rimasto.
4. Preme **Consegna**: il sistema elenca le domande senza risposta e chiede conferma, poi mostra la conferma con l'orario preciso.

**Scenario principale.** Alle 9:00 Sofia apre la verifica dal telefono in classe, insieme ad altre quattro classi in altre aule. La pagina si apre in un paio di secondi; alle 9:41 Sofia consegna.

**Scenari alternativi.** Il Wi-Fi cade per due minuti: l'indicatore segnala "Non salvato", Sofia continua e al ritorno della rete le risposte partono (FR-VER-05). Telefono scarico: Luca accede da un PC e ritrova tutto (FR-VER-05). Due schede aperte: la scheda non aggiornata viene ricaricata senza sovrascrivere nulla (FR-VER-06). Tempo scaduto: consegna automatica con le risposte salvate (FR-VER-07).

**Storia: STU-03 · Consultare i propri voti**

**User flow**

1. Sofia apre **Voti** e vede le materie con la **media indicativa** del quadrimestre.
2. Apre una materia e trova i voti pubblicati con data, verifica, docente e commento.
3. Apre un voto e rivede le proprie risposte.

**Scenario principale.** Sofia vede Matematica 7,25 (2 voti) e Inglese 6,50 (1 voto); apre Matematica e trova "7½ · Equazioni – 1° quadrimestre · prof. Russo".

**Scenari alternativi.** Voti di un compagno: operazione negata. Voto modificato: valore attuale con "modificato il…". Voto in bozza: non compare. Studente trasferito: ritrova i voti presi nella classe precedente.

---

## Requisiti funzionali

### Le user story della traccia

Gli acceptance criteria della traccia (AC-01…03) restano tutti validi. Quelli aggiunti seguono il formato *Dato che / Quando / Allora*.

| ID | Storia | AC aggiunti dal team | Note |
| --- | --- | --- | --- |
| DIR-01 | Creare account docente | **AC-04** Dato che creo un docente, Quando la creazione riesce, Allora riceve il link di attivazione e resta *In attesa di attivazione*. **AC-05** Dato che esiste `Mario.Rossi@scuola.it`, Quando creo `mario.rossi@scuola.it`, Allora la creazione è rifiutata. **AC-06** Dato che il servizio email non risponde, Quando creo un docente, Allora l'account viene creato e posso generare un codice di attivazione. | FR-ACC-01, 02, 04 |
| DIR-02 | Creare account studente | **AC-04** Come DIR-01 AC-04…06. **AC-05** Dato che creo uno studente, Quando non indico la classe, Allora resta *senza classe*: accede ma non vede contenuti. | FR-ACC-01, 02 |
| DIR-03 | Creare classi e comporle | **AC-04** Dato che lo studente è in 1A, Quando confermo il trasferimento in 1C, Allora vede solo i contenuti della 1C e conserva i voti. **AC-05** Compresenza permessa, ognuno sui propri contenuti. **AC-06** Rimossa un'assegnazione, il docente non opera più lì; i contenuti restano visibili. **AC-07** Classe con stesso anno e sezione rifiutata. **AC-08** Classe non vuota non eliminabile. **AC-09** Materia in uso non eliminabile, nomi unici. **AC-10** Coordinatore solo fra i docenti assegnati, al massimo uno. | Scelta AC-03: **trasferimento esplicito** (FR-CLA-01) |
| DIR-04 | Vedere tutto | **AC-04** Dato che apro un indicatore, Quando lo guardo, Allora vedo l'ora di aggiornamento, non più vecchia di 5 minuti. **AC-05** Tutto in sola lettura: ogni modifica è negata. **AC-06** Filtri per quadrimestre, classe e materia. **AC-07** I voti in bozza non entrano nelle statistiche. | FR-DIR-01 |
| DOC-01 | Caricare materiale didattico | **AC-04** Dato che carico un file oltre 50 MB o non ammesso, Quando confermo, Allora ricevo l'errore e nulla viene pubblicato. **AC-05** Titolo più file o link valido. **AC-06** *(Should)* Pubblicazione su più classi, solo dove sono assegnato. **AC-07** Gli studenti ricevono una notifica. | FR-MAT-01, 02 |
| DOC-02 | Creare le proprie verifiche | **AC-04** Dato che la verifica è *Aperta*, Quando provo a modificare domande o apertura, Allora è negato; posso solo prorogare la chiusura. **AC-05** Da *Programmata* lo studente vede solo titolo e orario. **AC-06** Con almeno una consegna non si elimina. **AC-07** Senza domande, con orari incoerenti o durata fuori da 10–240 minuti non si salva. **AC-08** Creazione e spostamento notificati via app ed email. | FR-VER-01…03 |
| DOC-03 | Assegnare i voti | **AC-04** Dato che lo studente non ha iniziato, Quando provo a dargli un voto, Allora è negato. **AC-05** Modifica di un voto pubblicato con motivazione, notifica e storico. **AC-06** Punteggio suggerito sulle domande chiuse. **AC-07** Commento fino a 1.000 caratteri. **AC-08** Il voto in bozza è invisibile. **AC-09** *Pubblica voti* rende visibili insieme tutti i voti in bozza della verifica. | **Assegnare = pubblicare** (FR-VOT-05) |
| STU-01 | Consultare il materiale didattico | **AC-03** Dato che ci sono più di 20 materiali, Quando apro la materia, Allora li vedo dal più recente, paginati. **AC-04** Chi non è autorizzato non apre un file nemmeno con l'indirizzo. **AC-05** Dopo un trasferimento non apro il materiale della classe precedente. | |
| STU-02 | Svolgere una verifica | **AC-04** Dato che cambio una risposta, Quando passano 5 secondi, Allora è salvata e l'indicatore mostra l'ora. **AC-05** Dopo un'interruzione riprendo anche da un altro dispositivo. **AC-06** Alla chiusura la consegna diventa *automatica*. **AC-07** Domande nascoste prima dell'apertura. **AC-08** La scheda non aggiornata viene rifiutata e ricaricata. **AC-09** Conferma con l'elenco delle domande vuote. **AC-10** Stati visibili. **AC-11** Conferma a schermo con orario preciso. | FR-VER-05…07 |
| STU-03 | Consultare i propri voti | **AC-03** Dato che ho voti in una materia, Quando apro i voti, Allora vedo la media indicativa con la dicitura "non è il voto di fine periodo". **AC-04** Dettaglio del voto e mie risposte. **AC-05** Dopo un trasferimento vedo anche i voti precedenti. | FR-VOT-03 |
| ACC-01 *(aggiunta, Must)* | *Come utente voglio attivare il mio account scegliendo la mia password, così che nessun altro la conosca.* | **AC-01** Dato che ho un link valido, Quando scelgo una password conforme a NFR-16, Allora l'account diventa *Attivo* e accedo. **AC-02** Dato che il link ha più di 72 ore o è già usato, Quando lo apro, Allora mi viene indicato di chiedere un nuovo invito. **AC-03** Dato che ho un codice dal Direttore, Quando lo inserisco con la mia email entro 72 ore, Allora attivo l'account come con il link. | FR-ACC-01, 02 |
| ACC-02 *(aggiunta, Must)* | *Come utente voglio accedere e uscire in sicurezza, così da usare ScuolaChill anche da dispositivi condivisi.* | **AC-01** Dato che inserisco credenziali errate, Quando confermo, Allora il messaggio non rivela quale campo è sbagliato. **AC-02** Dato che ho sbagliato 5 volte, Quando riprovo entro 15 minuti, Allora l'accesso è negato anche con la password giusta. | NFR-16, NFR-17 |
| ACC-03 *(aggiunta, Must)* | *Come utente voglio recuperare la password da solo, così da non dipendere dalla segreteria.* | **AC-01** Dato che chiedo il recupero, Quando inserisco un'email, registrata o no, Allora ricevo sempre la stessa risposta. **AC-02** Dato che uso il link entro 1 ora, Quando scelgo la nuova password, Allora le altre sessioni vengono chiuse; dopo 1 ora o al secondo uso il link è rifiutato. | NFR-16 |
| ACC-04 *(aggiunta, Must)* | *Come utente voglio consultare il mio profilo e cambiare la password, così da tenere sotto controllo il mio account.* | **AC-01** Dato che cambio la password, Quando quella attuale è errata o la nuova non rispetta NFR-16, Allora il cambio è rifiutato. **AC-02** Dato che provo a modificare nome, email, ruolo o classe, Quando invio, Allora l'operazione è negata. | FR-NOT-02 |
| ACC-05 *(aggiunta, Should)* | *Come utente voglio ricevere notifiche sugli eventi che mi riguardano, così da non dover controllare continuamente l'applicazione.* | **AC-01** Dato che avviene un evento di FR-NOT-01 che mi riguarda, Quando apro l'applicazione entro 1 minuto, Allora vedo la notifica non letta. **AC-02** Dato che l'evento prevede l'email, Quando avviene, Allora la ricevo entro 5 minuti, salvo FR-NOT-03. | FR-NOT-01…03 |
| DIR-05 *(aggiunta, Should)* | *Come Direttore voglio importare studenti, docenti, classi e assegnazioni da un file, così da non inserire centinaia di dati uno per uno.* | **AC-01** Dato che carico un file dal modello, Quando il sistema lo legge, Allora vedo righe valide ed errate con il motivo e nulla è creato prima della conferma. **AC-02** Dato che confermo, Quando ci sono righe errate, Allora sono create solo le valide e ricevo un riepilogo. **AC-03** Dato che il file supera 2.000 righe o 5 MB, Quando lo carico, Allora ricevo l'errore con il limite. | NFR-20, NFR-46 |
| DIR-06 *(aggiunta, Must)* | *Come Direttore voglio disattivare e riattivare un account, così da togliere l'accesso a chi lascia la scuola senza perdere i dati.* | **AC-01** Dato che disattivo un account, Quando l'utente prova ad accedere o usa una sessione aperta, Allora è negato e i dati restano integri. **AC-02** Dato che lo riattivo, Quando accede, Allora ritrova tutto. **AC-03** Dato che provo a disattivare me stesso, Quando confermo, Allora è negato. | FR-ACC-03 |
| DIR-07 *(aggiunta, Should)* | *Come Direttore voglio controllare le proposte e pubblicare gli scrutini prima delle quinte e poi delle altre classi, così che le quinte conoscano subito l'esito e le altre lo ricevano insieme.* | **AC-01** Dato che una classe del gruppo ha voci non confermate, Quando provo a pubblicare, Allora è negato e vedo le voci mancanti. **AC-02** Dato che pubblico un gruppo, Quando riesce, Allora tutti gli esiti del gruppo sono visibili nello stesso istante. **AC-03** Dato che le quinte non sono pubblicate, Quando pubblico le altre classi, Allora è negato. | FR-SCR-04, 05 |
| DIR-08 / DIR-09 *(aggiunte, Should)* | *Come Direttore voglio esportare i dati e generare report PDF su studenti, classi e valutazioni, così da analizzarli e presentarli senza costruirli a mano.* | **AC-01** Dato che esporto voti, Quando ci sono voti in bozza, Allora il file contiene solo quelli pubblicati. **AC-02** Dato che chiedo il report della scuola, Quando lo richiedo, Allora è preparato in background e ricevo una notifica. **AC-03** Dato che sono Docente o Studente, Quando chiedo dati di tutta la scuola, Allora è negato. | FR-REP-01 |
| DOC-04 *(aggiunta, Should)* | *Come Docente voglio preparare le proposte di voto finale, e come coordinatore l'esito finale, partendo dai voti, così da arrivare al consiglio con tutto pronto.* | **AC-01** Dato che il periodo è aperto, Quando apro le proposte, Allora trovo per ogni studente la media e la proposta precompilata arrotondata. **AC-02** Dato che inserisco un valore diverso da un intero 1-10 o *NC*, Quando salvo, Allora è rifiutato. **AC-03** Dato che non sono coordinatore, Quando provo a modificare un esito finale, Allora è negato. | FR-SCR-02, 09 |
| DOC-05 *(aggiunta, Must)* | *Come Docente voglio vedere le mie classi, i miei studenti e i risultati delle mie verifiche, così da capire come sta andando ogni classe.* | **AC-01** Dato che apro *Le mie classi*, Quando le consulto, Allora vedo solo le mie assegnazioni con prossime verifiche e consegne da correggere. **AC-02** Dato che non insegno in una classe, Quando ne apro studenti o risultati, Allora è negato. | NFR-15 |
| DOC-06 / DOC-07 *(aggiunte, Should)* | *Come Docente voglio esportare le valutazioni e generare report PDF delle mie classi e verifiche, così da usarli e discuterli anche fuori da ScuolaChill.* | **AC-01** Dato che esporto una mia verifica, Quando scarico il file, Allora contiene studenti, voti e punteggio per domanda. **AC-02** Dato che scelgo la versione anonima, Quando genero il report, Allora non contiene nomi. **AC-03** Dato che la classe-materia non è mia, Quando provo, Allora è negato. | FR-REP-01 |
| STU-04 *(aggiunta, Should)* | *Come Studente voglio consultare l'esito degli scrutini, così da conoscere il risultato del quadrimestre appena è pubblicato.* | **AC-01** Dato che il gruppo della mia classe è pubblicato, Quando apro gli scrutini, Allora vedo i voti finali e, nel 2° quadrimestre, l'esito finale. **AC-02** Dato che non è pubblicato, Quando apro la pagina, Allora vedo un avviso e nessuna proposta. **AC-03** Dato che provo a vedere gli esiti di un compagno, Quando invio, Allora è negato. | FR-SCR-06 |
| STU-05 *(aggiunta, Must)* | *Come Studente voglio una pagina iniziale con verifiche, voti e materiali nuovi, così da vedere subito cosa mi aspetta.* | **AC-01** Dato che accedo, Quando si apre la pagina, Allora vedo verifiche aperte e prossime 5, ultimi 5 voti pubblicati e materiali nuovi. **AC-02** Dato che un voto è in bozza, Quando apro la pagina, Allora non compare. | FR-VOT-05 |

### Le decisioni lasciate aperte dalla traccia

- [x] La scala dei voti (DOC-03) → FR-VOT-01
- [x] Il trasferimento di uno studente fra classi (DIR-03) → FR-CLA-01
- [x] La modifica di una verifica dopo lo svolgimento (DOC-02) → FR-VER-03
- [x] La connessione che cade durante una verifica (STU-02) → FR-VER-05, 06, 07
- [x] Il fallimento del servizio esterno → FR-ACC-02, FR-NOT-03
- [x] Altre decisioni del team → voti in bozza, notifiche, materiale, supervisione, scrutini

**Verifiche**

> **FR-VER-01 · Struttura** (collegato a DOC-02, STU-02)  
> Da 1 a 50 domande: **a scelta singola** (2-6 opzioni, una corretta, punteggio intero da 1 a 10) o **aperte** (fino a 5.000 caratteri).  
> *Motivazione:* coprono le verifiche scritte tipiche, permettono il punteggio suggerito e si svolgono bene dallo smartphone.  

> **FR-VER-02 · Finestra comune** (collegato a DOC-02, STU-02)  
> Data, apertura e chiusura uguali per tutta la classe, durata da 10 a 240 minuti, apertura nel futuro. Nessun timer individuale.  
> *Motivazione:* la verifica si svolge in aula a un orario preciso; "si chiude alle 9:50" è equo e chiaro per un quattordicenne.  

> **FR-VER-03 · Modifica dopo lo svolgimento** (collegato a DOC-02)  
> *Programmata*: tutto modificabile ed eliminabile. *Aperta*: si può solo spostare in avanti la chiusura. *Chiusa*: contenuto bloccato, si gestiscono solo i voti. Si elimina solo se nessuno l'ha iniziata.  
> *Motivazione:* cambiare una domanda mentre la classe risponde rende le consegne non confrontabili.  

> **FR-VER-05 · Connessione che cade** (collegato a STU-02)  
> Ogni risposta si salva entro 5 secondi. Un indicatore sempre visibile mostra *Salvato alle hh:mm:ss*, *Salvataggio in corso* o *Non salvato: connessione assente*. Senza rete le risposte restano sul dispositivo e partono al ritorno della connessione. Fino alla chiusura la verifica si riapre da qualsiasi dispositivo. Un salvataggio che arriva entro **10 secondi** dalla chiusura è accettato solo se la risposta è stata modificata prima della chiusura.  
> *Motivazione:* Wi-Fi delle aule e telefoni personali sono il punto più fragile; l'indicatore rende esplicito cosa è al sicuro.  

> **FR-VER-06 · Più schede o dispositivi** (collegato a STU-02)  
> Una sola consegna per studente. Ogni salvataggio dichiara la versione da cui parte; se nel frattempo ne esiste una più recente viene rifiutato e la scheda si aggiorna.  
> *Motivazione:* un dispositivo dimenticato aperto non deve sovrascrivere risposte più recenti.  

> **FR-VER-07 · Chiusura** (collegato a STU-02)  
> Alla chiusura le consegne iniziate diventano *Consegnate (automatica)*, chi non ha iniziato risulta *Non svolta*. Le domande sono visibili solo dall'apertura; le soluzioni non vengono mostrate.  
> *Motivazione:* chi non preme "Consegna" in tempo non perde il lavoro.  

> **FR-VER-09 · Estensione individuale** *(Should)* (collegato a DOC-02)  
> Durante la finestra il docente sposta in avanti la chiusura per singoli studenti, per esempio studenti con DSA.  
> *Motivazione:* è un diritto previsto dalla L. 170/2010 e non obbliga a prorogare per tutta la classe.  

> **FR-VER-10 · Dispositivi ammessi** (collegato a STU-02)  
> PC delle aule, laptop, tablet e smartphone personali, con le stesse funzioni e senza configurazioni del docente.  
> *Motivazione:* con 3 aule informatiche per 20 classi, senza dispositivi personali solo 3 classi potrebbero fare una verifica insieme.  

**Voti**

> **FR-VOT-01 · Scala dei voti** (collegato a DOC-03)  
> Da **1 a 10 con passo 0,5**, scritto "6½" o "6,5". Niente "+" e "−"; valori come 6,3 o 6,25 sono rifiutati.  
> *Motivazione:* il mezzo voto è la sfumatura più usata; i segni hanno valori diversi a seconda del docente.  

> **FR-VOT-02 · Modifica e annullamento** (collegato a DOC-03)  
> In bozza il voto si modifica o si cancella liberamente. Pubblicato, lo modifica solo l'autore con motivazione; non si cancella ma si **annulla**. Lo storico è visibile al docente e al Direttore.  
> *Motivazione:* una volta comunicato, ogni cambiamento deve essere spiegabile.  

> **FR-VOT-03 · Media indicativa** (collegato a STU-03)  
> Media aritmetica dei voti pubblicati e non annullati della materia nel quadrimestre, con due decimali. È il punto di partenza della proposta di voto finale.  

> **FR-VOT-05 · Bozza e pubblicazione** (collegato a DOC-03)  
> I voti in bozza sono invisibili a studenti e statistiche. **Pubblica voti** li rende visibili tutti nello stesso momento. Un voto è *assegnato*, come chiede l'AC-01 della traccia, quando viene pubblicato. Si assegna solo a una consegna *Consegnata*.  
> *Motivazione:* il docente corregge con calma e uniforma il giudizio; nessuno studente sa il voto ore prima degli altri.  

**Classi e assegnazioni**

> **FR-CLA-01 · Trasferimento di uno studente** (collegato a DIR-03)  
> Uno studente appartiene al massimo a una classe. Lo spostamento avviene solo con l'operazione esplicita *Trasferisci* del Direttore. Dopo il trasferimento lo studente vede solo la nuova classe; voti e consegne precedenti restano legati alle verifiche della vecchia e restano nel suo libretto.  
> *Motivazione:* uno spostamento implicito sarebbe un errore difficile da vedere; i voti restano dove sono nati.  

> **FR-CLA-05 · Coordinatore di classe** (collegato a DIR-03, DOC-04)  
> Il Direttore designa come coordinatore uno dei docenti della classe. Se questi perde l'assegnazione, la vista degli scrutini lo segnala.  
> *Motivazione:* è il coordinatore a preparare l'esito per il consiglio, e il Direttore resta fuori dalla valutazione.  

> **FR-ASS-01 · Rimozione di un'assegnazione** (collegato a DIR-03)  
> Il docente rimosso perde l'accesso alla coppia classe-materia; materiali e verifiche restano visibili e il subentrante li vede in sola lettura.  

**Account**

> **FR-ACC-01 · Attivazione** (collegato a DIR-01, DIR-02, ACC-01)  
> Il Direttore non conosce mai le password. Il link di attivazione vale 72 ore e si usa una volta. L'email è unica in tutto il sistema, senza distinzione di maiuscole (FR-ACC-04). Esiste un solo Direttore, creato all'installazione (FR-ACC-05).  

> **FR-ACC-02 · Fallimento del servizio esterno** (collegato a DIR-01, DIR-02)  
> L'account viene **sempre** creato. L'invio si ritenta dopo 5 minuti, 30 minuti e 2 ore, e il Direttore ne vede lo stato. Può reinviare l'invito o generare un **codice di attivazione** (8 caratteri, valido 72 ore) da consegnare a mano.  
> *Motivazione:* il fornitore esterno non deve bloccare la scuola; il codice copre anche lo studente senza accesso all'email.  

> **FR-ACC-03 · Disattivazione invece di cancellazione** (collegato a DIR-06)  
> Gli account con dati collegati si disattivano; si cancella solo un account che non ha mai prodotto dati.  

**Notifiche**

> **FR-NOT-01 · Eventi nell'applicazione** (collegato a ACC-05)  
> Nuovo materiale; verifica programmata, spostata, eliminata o aperta; voti pubblicati o modificati; scrutini pubblicati o rettificati; voce riaperta; periodo delle proposte e promemoria; report pronto; importazione o invio non riusciti. Le notifiche sono raggruppate per priorità (voti ed esiti sempre in evidenza) e conservate 90 giorni.  

> **FR-NOT-02 · Email solo per gli eventi importanti** (collegato a ACC-04, ACC-05)  
> **Obbligatorie:** attivazione, recupero password, scrutini pubblicati, voce riaperta. **Facoltative**, attive di default: verifica programmata o spostata, promemoria delle proposte. Le email contengono solo un avviso e un link, mai voti o esiti.  
> *Motivazione:* volume prevedibile e nessun voto di minorenni nel testo delle email.  

> **FR-NOT-03 · Fallimento delle notifiche email** (collegato a ACC-05)  
> La notifica nell'applicazione è sempre garantita. L'email si ritenta come in FR-ACC-02 e si scarta dopo 24 ore. Nessuna operazione, nemmeno la pubblicazione degli scrutini, attende l'invio.  

**Materiale, report e supervisione**

> **FR-MAT-01 · Formati e limiti** (collegato a DOC-01, STU-01)  
> PDF, documenti, presentazioni e fogli Office e OpenDocument, TXT, JPG, PNG, ZIP; massimo 50 MB; video solo come link. Il formato si verifica sul contenuto reale. Dimensione e formato sono visibili prima del download. Solo l'autore modifica o elimina il proprio materiale (FR-MAT-02).  

> **FR-REP-01 · Esportazioni e report** (collegato a DIR-08, DIR-09, DOC-06, DOC-07)  
> CSV (UTF-8, separatore ";") e XLSX con colonne documentate, solo dati pubblicati e solo il perimetro visibile all'utente. Report PDF di verifica e classe generati subito; report della scuola in background, notificato e scaricabile per 7 giorni. I report del docente esistono anche in versione anonima.  

> **FR-DIR-01 · Il Direttore vede tutto, ma non valuta** (collegato a DIR-04, DIR-07)  
> Il Direttore legge materiali, verifiche, voti, proposte ed esiti di tutta la scuola, ma non li crea né li modifica. Negli scrutini può solo **riaprire** una voce, con motivazione, e **pubblicare**.  

> **FR-ANN-01 · Anno e quadrimestri** (collegato a DIR-04, STU-03)  
> Un solo anno scolastico attivo con quadrimestri a date fisse; un voto appartiene al quadrimestre in cui si è svolta la verifica.  

**Scrutini** *(funzionalità aggiunta dall'autore)*

> **FR-SCR-01 · Cosa sono** (collegato a DOC-04, DIR-07, STU-04)  
> Uno scrutinio è l'insieme dei voti finali per materia di una classe in un quadrimestre e, nel 2°, degli esiti finali. ScuolaChill ne gestisce preparazione, controllo e pubblicazione; la decisione resta del consiglio di classe.  

> **FR-SCR-02 · Proposte di voto** (collegato a DOC-04)  
> Il periodo si apre 15 giorni prima della fine del quadrimestre. Una proposta per studente e materia, intero da 1 a 10 oppure *NC*, precompilata con la media indicativa arrotondata (da ,50 in su per eccesso). Note per il consiglio fino a 500 caratteri, mai visibili allo studente. In compresenza tutti i docenti assegnati possono confermare.  

> **FR-SCR-04 · Pubblicazione in due gruppi** (collegato a DIR-07)  
> Prima il gruppo **Quinte**, poi il gruppo **Altre classi**, ciascuno con un'unica operazione e solo quando **tutte** le sue voci sono confermate. Gli esiti del gruppo diventano visibili nello stesso istante. Il Direttore non scrive mai un valore: riapre la voce e il responsabile la corregge.  
> *Motivazione:* le quinte devono conoscere subito l'ammissione all'esame; tutte le altre classi ricevono gli esiti insieme e le famiglie hanno un'unica data.  

> **FR-SCR-05 · Rettifica** (collegato a DIR-07, STU-04)  
> Il Direttore riapre l'esito con motivazione, il responsabile lo corregge, il Direttore lo ripubblica. Lo studente vede "rettificato il…" e riceve una notifica; lo storico conserva tutto.  

> **FR-SCR-06 · Visibilità** (collegato a DOC-04, STU-04)  
> Lo studente vede solo i propri esiti pubblicati, mai proposte né note. Il docente vede le proprie classi-materie, il coordinatore tutta la sua classe, il Direttore tutto in lettura. Gli esiti seguono lo studente trasferito.  

> **FR-SCR-09 · Esito finale** (collegato a DOC-04, STU-04)  
> Solo nel 2° quadrimestre, confermato dal coordinatore. Quinte: *Ammesso* o *Non ammesso all'esame di Stato*. Altre classi: *Ammesso*, *Non ammesso* o *Giudizio sospeso* con le materie insufficienti. È precompilato *Ammesso* solo se tutte le proposte sono almeno 6; altrimenti resta vuoto.  
> *Motivazione:* quando ci sono insufficienze la decisione è del consiglio, e il sistema non deve suggerirla.  

---

## Requisiti non funzionali

**(TR)** indica un requisito trasversale imposto dalla traccia. I tempi sono misurati dal lato dell'utente; gli scenari di carico sono nella Stima del carico.

| ID | Famiglia | Requisito | Soglia e condizione | Come si verifica | Storie collegate |
| --- | --- | --- | --- | --- | --- |
| NFR-01 | Prestazioni | Apertura della verifica nel picco | ≤ 2 s per il 95%, con 125 studenti nello stesso minuto e 50 utenti di fondo | Test di carico "picco delle 9:00" | STU-02 |
| NFR-02 | Prestazioni | Salvataggio di una risposta | ≤ 1 s per il 95%, stesso scenario | Test di carico | STU-02 |
| NFR-03 | Prestazioni | Pagine di consultazione | ≤ 1,5 s per il 95% con 120 utenti concorrenti | Test di carico "uso normale" | STU-01, STU-03, STU-05, DOC-05 |
| NFR-04 | Prestazioni | Vista complessiva | ≤ 3 s per il 95% con un anno di dati (circa 33.000 voti) | Test con dati generati | DIR-04 |
| NFR-05 | Prestazioni | Paginazione **(TR)** | Tutti gli elenchi: 20 elementi di default, massimo 100 | Collezione di test | DIR-04, STU-01, STU-03 |
| NFR-06 | Prestazioni | Accesso nel picco | ≤ 2 s per il 95% con 125 accessi nello stesso minuto | Test di carico | ACC-02, STU-02 |
| NFR-42 | Prestazioni | Esiti dopo la pubblicazione | ≤ 1,5 s per il 95% con 160 concorrenti nei primi 5 minuti | Test di carico "scrutini" | STU-04, DIR-07 |
| NFR-44 | Prestazioni | Report ed esportazioni | Verifica o classe ≤ 5 s; report della scuola entro 2 minuti senza degradare NFR-01…03 | Test con un anno di dati | DIR-08, DIR-09, DOC-06, DOC-07 |
| NFR-07 | Disponibilità | Orario scolastico | ≥ 99,5% al mese fra le 7:30 e le 14:30 dei giorni di lezione (circa 45 minuti di fermo al massimo) | Monitoraggio esterno al minuto | STU-02, DOC-02, STU-01, ACC-02 |
| NFR-08 | Disponibilità | Nessuna perdita di dati confermati | RPO ≤ 15 minuti, RTO ≤ 2 ore | Prova di ripristino prima del collaudo, poi ogni 3 mesi | STU-02, DOC-03, DIR-07 |
| NFR-09 | Disponibilità | Manutenzione | Solo fuori orario, preavviso di 48 ore, mai durante verifiche o pubblicazione degli scrutini | Registro delle manutenzioni | STU-02, DIR-07 |
| NFR-10 | Disponibilità | Integrità delle consegne | 0 risposte mancanti rispetto all'ultimo salvataggio confermato | Confronto automatico nei test | STU-02 |
| NFR-43 | Disponibilità | Pubblicazione tutto o niente | Voti di una verifica o gruppo di scrutini: visibili tutti o nessuno, anche se l'operazione si interrompe | Test con interruzione simulata | DIR-07, DOC-03 |
| NFR-11 | Scalabilità | Capacità di progetto | 300 utenti concorrenti e 50 richieste/s per 10 minuti, rispettando NFR-01…03 e NFR-42 | Stress test | STU-02, STU-04 |
| NFR-12 | Scalabilità | Crescita degli utenti | Con circa 1.100 utenti basta aumentare le risorse, senza modifiche al codice, con ≤ 30 minuti di fermo fuori orario | Prova documentata in ambiente di prova | DIR-02, DIR-05, STU-02 |
| NFR-13 | Scalabilità | Crescita dei dati | 3 anni di dati senza interventi | Proiezione dei volumi | DOC-01, DOC-03 |
| NFR-14 | Sicurezza | Traffico cifrato **(TR)** | 100% su HTTPS, richieste in chiaro reindirizzate, valutazione TLS almeno "A" | Scansione con servizio pubblico | ACC-01, ACC-02, ACC-03, STU-03 |
| NFR-15 | Sicurezza | Autorizzazione nel sistema **(TR)** | 100% degli AC di diniego verificati con richieste dirette che aggirano l'interfaccia | Collezione di test a ogni rilascio | DIR-01…04, DOC-01…03, STU-01…03 |
| NFR-16 | Sicurezza | Credenziali | Password ≥ 10 caratteri e non comuni; hash lento per password; blocco di 15 minuti dopo 5 errori | Test automatici | ACC-01…04 |
| NFR-17 | Sicurezza | Sessione | Scade dopo 60 minuti di inattività e comunque dopo 12 ore; una verifica in corso non si perde mai; su dispositivo condiviso un nuovo accesso senza uscita richiede di nuovo la password | Test automatici | ACC-02, STU-02 |
| NFR-18 | Sicurezza | Segreti **(TR)** | 0 segreti nel codice e nella sua storia; configurazioni Development e Production separate | Scansione del repository | ACC-02, ACC-05, DIR-01 |
| NFR-19 | Sicurezza | Tracciabilità | Operazioni sensibili (account, trasferimenti, voti, proposte, scrutini) registrate con autore, data, valori prima e dopo; non modificabili, conservate 1 anno | Test automatici | DIR-01, DIR-03, DIR-07, DOC-03, DOC-04 |
| NFR-20 | Sicurezza | Validazione | 100% degli input validato nel sistema; file controllati sul contenuto; esportazioni protette dalle formule | Test con input e file malevoli | DOC-01, DIR-05, DIR-08 |
| NFR-21 | Usabilità | Apprendibilità | ≥ 90% dei collaudatori consegna una verifica dal proprio smartphone senza aiuto; ≥ 80% trova un voto in meno di 30 s | Osservazione nel collaudo | STU-02, STU-03 |
| NFR-22 | Usabilità | Uso da smartphone | Funzioni dello studente, verifica compresa, usabili a 360 px senza scorrimento orizzontale; docente e Direttore da 768 px | Prova su dispositivi reali | STU-01…05, DOC-02 |
| NFR-23 | Usabilità | Accessibilità | WCAG 2.1 AA sui flussi principali; STU-02 e STU-03 completabili da tastiera | Strumento automatico e prova manuale | STU-01…05 |
| NFR-24 | Usabilità | Lingua e messaggi | Tutto in italiano; ogni errore dice cosa è successo e cosa fare | Revisione dei testi | DIR-01, DOC-02, STU-02, ACC-02 |
| NFR-26 | Ambientale | Browser e dispositivi | Ultime 2 versioni di Chrome, Edge, Firefox, Safari; iOS ≥ 16, Android ≥ 10; nessuna installazione | Prova sui PC delle aule e su dispositivi | STU-01, STU-02, DOC-02 |
| NFR-27 | Ambientale | Reti lente | Primo caricamento ≤ 5 s a 1 Mbit/s e 150 ms; ≤ 500 KB compressi; download riprendibili | Connessione simulata | STU-01, STU-02 |
| NFR-28 | Ambientale | Orologio del dispositivo | Apertura, chiusura e tempo rimanente seguono l'ora del sistema | Test con orologio spostato | STU-02 |
| NFR-29 | Supporto | Documentazione API **(TR)** | 100% delle operazioni in OpenAPI; collezione Postman superata al 100% a ogni rilascio | Esecuzione automatica | DIR-01…04, DOC-01…03, STU-01…03 |
| NFR-30 | Supporto | Guida utente | Una guida per ruolo, al massimo 2 pagine, raggiungibile dall'applicazione | Prova con un collaudatore | DIR-03, DOC-02, STU-02 |
| NFR-31 | Supporto | Segnalazioni nel collaudo | Presa in carico entro 1 giorno lavorativo; problemi bloccanti su verifiche, voti e scrutini entro 4 ore in orario scolastico | Registro delle segnalazioni | STU-02, DOC-03, DIR-07 |
| NFR-32 | Supporto | Ambienti **(TR)** | Development e Production; un nuovo sviluppatore avvia Development in ≤ 30 minuti | Prova con una persona esterna | DIR-01, DOC-01, STU-02 |
| NFR-33 | Supporto | Diagnosticabilità | Ogni errore mostra un codice ritrovabile nei registri in meno di 5 minuti | Prova durante i test | STU-02, DOC-03, DIR-05 |
| NFR-34 | Interazione | Errori uniformi **(TR)** | 100% delle risposte di errore nello stesso formato, codici HTTP coerenti | Controllo automatico | DIR-01, DIR-02, DOC-02, STU-02 |
| NFR-35 | Interazione | Invio email | Entro 5 minuti dall'evento, nel volume del piano del servizio | Misura nel collaudo; servizio simulato in errore | DIR-01, ACC-03, ACC-05 |
| NFR-36 | Interazione | Indipendenza dal servizio esterno | Con il servizio email fuori uso tutte le altre funzioni restano operative | Test con servizio disattivato | DIR-01, DIR-02, DIR-07, ACC-05 |
| NFR-45 | Interazione | Notifiche nell'applicazione | Visibili entro 60 s dall'evento | Test end-to-end | ACC-05 |
| NFR-46 | Interazione | Formati di scambio | File esportati apribili con gli accenti corretti in Excel e LibreOffice; importazione da modello pubblicato | Prova di apertura e reimportazione | DIR-05, DIR-08, DOC-06 |
| NFR-37 | Conformità | Ruoli privacy | Scuola titolare, autore responsabile (art. 28 GDPR), servizio email sub-responsabile con accordo | Documento dei ruoli prima del collaudo | DIR-02, STU-03, STU-04, ACC-05 |
| NFR-38 | Conformità | Minimizzazione | Solo nome, cognome, email, ruolo, classe e dati didattici; per i DSA solo i minuti; al servizio email mai voti o esiti | Revisione del modello dei dati | ACC-01, ACC-05 |
| NFR-39 | Conformità | Dati in UE | Dati, backup e fornitori nell'UE | Verifica della localizzazione | DOC-01, STU-03, STU-04, DIR-08 |
| NFR-40 | Conformità | Conservazione | Dati didattici fino alla fine dell'anno successivo; account disattivati anonimizzati entro 12 mesi; notifiche e registri tecnici 90 giorni; report 7 giorni | Procedura documentata e provata | DIR-06 |
| NFR-41 | Conformità | Diritti degli interessati | Estrazione di tutti i dati di uno studente entro 30 giorni | Prova di estrazione | DIR-04, DIR-08 |

### Requisiti impliciti

Interviste del 09/10/2026 con 2 studenti del primo anno (11 e 12 minuti), sulla domanda *"Cosa daresti per scontato che un'app di questo tipo faccia sempre, o non faccia mai?"*. M.R. usa soprattutto lo smartphone, L.F. il PC, anche in laboratorio. Il campione è piccolo: le conclusioni vanno confermate nel collaudo (NFR-21, NFR-31).

| Chi abbiamo intervistato | Cosa ha detto | Requisito che ne abbiamo ricavato |
| --- | --- | --- |
| M.R., 1ªB | "se perdo tempo a riscrivere mi va il panico" | Conferma FR-VER-05, NFR-08, NFR-10 |
| M.R., 1ªB | "non voglio che un compagno veda il voto prima di me" | Conferma FR-VOT-05 e NFR-43 |
| M.R., 1ªB | "mi conta come non avessi risposto" se il tempo scade durante il caricamento | **Rafforzato** FR-VER-05: tolleranza di 10 secondi |
| M.R., 1ªB | "non deve mandarmi troppe notifiche" | **Rafforzato** FR-NOT-01: notifiche raggruppate per priorità |
| M.R., 1ªB | "spero che me lo dica l'app prima che lo sappia mia madre" | Fuori perimetro: accesso dei genitori escluso |
| M.R., 1ªB | "che mi dica cosa fare, non solo una scritta rossa" | Conferma NFR-24 |
| L.F., 1ªA | "non deve far vedere i miei voti a chi usa il PC dopo di me" | **Nuovo** in NFR-17: password richiesta di nuovo su dispositivo condiviso |
| L.F., 1ªA | "vorrei una conferma chiara che ho consegnato davvero" | **Rafforzato** STU-02 con AC-11 |
| L.F., 1ªA | "vorrei sapere quanto pesa prima di scaricarlo" | **Nuovo** in FR-MAT-01: dimensione e formato prima del download |
| L.F., 1ªA | "se è complicata la prima settimana la odi e basta" | Conferma NFR-21 |

---

## Assunzioni, vincoli e dipendenze

### Assunzioni

| ID | Assunzione | Cosa succede se è falsa |
| --- | --- | --- |
| ASS-01 | 500 studenti, 30 docenti, 20 classi, 1 Direttore | Si rifà la stima del carico; NFR-11 copre fino a circa 850 studenti, oltre vale NFR-12 |
| ASS-02 | Al massimo una verifica al giorno per classe; nel caso peggiore **5 classi** (125 studenti) iniziano nello stesso minuto | Fino a circa 8 classi le assorbe il margine di NFR-11; oltre si rivede il dimensionamento |
| ASS-03 | In media 2 verifiche a settimana per classe | Più carico, email e dati |
| ASS-04 | Ogni utente ha un'email personale (istituzionale per gli studenti) | Attivazione con codice a mano (FR-ACC-02) |
| ASS-05 | Circa 100 Mbit/s e un Wi-Fi in grado di servire una classe per aula | Primo caricamento più lento; la classe usa l'aula informatica |
| ASS-06 | Quasi tutti gli studenti hanno uno smartphone | Più verifiche in aula informatica: il picco si abbassa |
| ASS-07 | Circa 100 file all'anno per docente, media 3 MB | Crescono spazio e traffico; il limite di 50 MB fa da tetto |
| ASS-08 | Studenti: 3 accessi al giorno da 5 minuti; docenti: 2-3 da 10 minuti | Cambia l'uso normale, meno del picco delle verifiche |
| ASS-09 | Il collaudo coinvolge 1-2 classi prime, il Direttore e un docente | Si resta comunque sotto il picco di progetto |
| ASS-10 | Un solo anno scolastico (2026/27) | Servirebbe gestire più anni |
| ASS-11 | Prezzi del fornitore cloud stabili entro ±40% | Si rivaluta taglia o fornitore |
| ASS-12 | Alla pubblicazione delle *Altre classi* il 70% controlla l'esito entro 30 minuti, la metà nei primi 5 | Se arrivano tutti insieme si sale verso 300 concorrenti, ancora entro NFR-11 |
| ASS-13 | I consigli delle quinte si chiudono prima degli altri | Un ritardo delle quinte ritarda tutti (FR-SCR-04) |
| ASS-14 | L'autore consolida Vue, TypeScript e Docker prima dello sviluppo | Più tempo per le prime milestone |
| ASS-15 | Meno di 5.000 email al mese | Si passa al piano email superiore, entro VIN-08 |

### Vincoli

| ID | Vincolo | Da dove viene |
| --- | --- | --- |
| VIN-01 | Team di 1 persona | Scelta dell'autore, nei limiti della traccia |
| VIN-02 | Nessuna riga di codice prima della validazione del PRD | Traccia del progetto |
| VIN-03 | Deploy su cloud reale, raggiungibile per il collaudo | Traccia del progetto |
| VIN-04 | HTTPS, autorizzazione nel backend, OpenAPI, Postman, paginazione, errori uniformi, Development e Production senza segreti nel codice | Traccia, requisiti trasversali |
| VIN-05 | Gli acceptance criteria della traccia si estendono, non si riducono | Traccia del progetto |
| VIN-06 | Utenti minorenni: GDPR e norme sui dati scolastici | Normativa |
| VIN-07 | Accessibilità WCAG 2.1 AA | L. 4/2004 e linee guida AgID |
| VIN-08 | Tetto di **40 €/mese** per cloud e servizi esterni | Decisione dell'autore |
| VIN-09 | Date del collaudo fissate dal docente del corso | Organizzazione del corso |

### Dipendenze

| ID | Dipendenza | Serve entro | Chi se ne occupa |
| --- | --- | --- | --- |
| DIP-01 | Validazione del PRD | Inizio dello sviluppo | Docente del corso |
| DIP-02 | Intervista a studenti del primo anno | Presentazione del PRD | A. Cappelletto · **completata il 09/10/2026** |
| DIP-03 | Account sul fornitore cloud con pagamento | Primo rilascio in cloud | A. Cappelletto |
| DIP-04 | Dominio con gestione DNS | Primo rilascio in cloud | A. Cappelletto |
| DIP-05 | Servizio email attivo, dominio mittente verificato, accordo sui dati | Primo invito reale | A. Cappelletto |
| DIP-06 | Elenco dei collaudatori | 2 settimane prima del collaudo | Docente del corso / scuola |
| DIP-07 | Aula disponibile, prova di Wi-Fi e dispositivi | 1 settimana prima del collaudo | Docente del corso, tecnico di laboratorio |
| DIP-08 | Informativa privacy e documento dei ruoli approvati | Prima del collaudo | A. Cappelletto con il referente della scuola |
| DIP-09 | Email istituzionali dei collaudatori attive | Prima del collaudo | Scuola |

---

# Seconda parte · Il come

## Stima del carico

Un *utente concorrente* ha fatto almeno una richiesta negli ultimi 5 minuti. Tutti i numeri derivano dalle assunzioni.

### Utenti concorrenti

| Situazione | Utenti concorrenti | Da dove viene il numero |
| --- | --- | --- |
| Uso normale durante la giornata | **circa 120** | 2 classi in verifica (50) + 2 classi che usano il materiale (50) + consultazione individuale 500 × 3 accessi × 5 min / 360 min (20) + docenti e Direttore (4) |
| Picco delle 9:00 (verifiche) | **circa 175**; **300 di progetto** | 5 classi aprono la verifica nello stesso minuto (125) + fondo (50). Il margine di circa 1,7 copre fino a 8 classi; lo scenario della traccia (3 classi, 75 studenti) è un sottoinsieme |
| Fine quadrimestre (voti) | **circa 60** | Docenti che preparano le proposte la stessa sera (circa 4) + studenti che controllano le medie (circa 10) + uso pomeridiano |
| Pubblicazione degli scrutini, *Altre classi* | **circa 155** | 400 studenti × 70% in 30 minuti, la metà nei primi 5 (140) + fondo. Circa 4 richieste/s, solo letture leggere. Le quinte pesano circa un terzo |
| Pomeriggio e sera | **circa 15** | Studio a casa e correzioni |
| Collaudo | **≤ 55** | ASS-09 |

**Il picco delle 9:00 guida il dimensionamento.** Nei primi 30 secondi 125 studenti fanno circa 5 richieste ciascuno (≈ 21 richieste/s), più il fondo e il controllo delle notifiche: **circa 30 richieste/s**, 50 di progetto (NFR-11). Ci sono circa 4 accessi al secondo e ogni verifica di password costa volutamente 100-250 ms di CPU (NFR-16): è questa operazione, non il traffico, a fissare la CPU minima. Sul lato della scuola, 125 primi caricamenti da 500 KB richiedono circa 5 s su 100 Mbit/s: il collo di bottiglia può essere il Wi-Fi, per questo NFR-27 limita il peso e l'applicazione resta in cache.

### Profilo di carico

| Operazione | Frequente? | Pesante? | Critica? | Note |
| --- | --- | --- | --- | --- |
| Login | Sì (circa 1.600/giorno) | **Sì, CPU** | **Sì, nel picco** | Costo voluto per sicurezza, concentrato alle 9:00 |
| Apertura verifica | No (circa 200/giorno) | No | **Sì** | Concentrata in 30 secondi: è il picco |
| Salvataggio di una risposta | **Sì** (circa 20.000/giorno) | No | **Sì** | L'operazione più numerosa: leggera e mai persa |
| Consegna verifica | No | Media | **Sì** | Idempotente; la chiusura automatica la fa il sistema |
| Pubblicazione dei voti | No (circa 200 voti/giorno) | No | **Sì** | Tutto o niente (NFR-43); fino a 25 notifiche |
| Dashboard del Direttore | No | **Sì, aggregazioni** | No | Dati aggiornati entro 5 minuti, non ricalcolati a ogni apertura |
| Caricamento materiale | No (circa 15/giorno) | **Sì, rete e disco** | No | Fino a 50 MB |
| Download del materiale | Sì (circa 500/giorno) | **Sì, rete** | No | Meglio non far passare i file dal processo applicativo |
| Controllo delle notifiche | **Sì** (decine di migliaia/giorno) | No | No | Deve costare quasi zero |
| Pubblicazione di un gruppo di scrutini | No (4 all'anno) | Media (fino a circa 4.400 voci) | **Sì** | Tutto o niente; fino a 400 notifiche ed email in coda |
| Report PDF della scuola | No (decine al mese) | **Sì, CPU** | No | In background |
| Invio email | No (circa 3.500/mese) | No, ma dipende da un servizio esterno | Solo attivazione e scrutini | Sempre in coda, mai durante la richiesta dell'utente |

**Volumi di dati.** File del materiale: circa 9 GB all'anno. Traffico in uscita: circa 45 GB al mese. Dati strutturati (circa 33.000 consegne e voti, 330 MB di risposte, 10.500 voci di scrutinio, 50.000 notifiche): sotto 1 GB all'anno. Email: circa 35.500 all'anno, in media 3.500 al mese e circa 4.000 nei mesi di picco.

---

## Scelte tecnologiche

Criteri usati nei confronti: competenze dell'autore (consolidate in JavaScript, Node.js, Express, MySQL, REST, Git e pattern DAO; di base, in uso durante lo stage, in Vue, TypeScript e Docker), ecosistema, costi, adeguatezza ai requisiti non funzionali, rischio per una persona sola.

| Area | Scelta | Alternativa considerata | Perché abbiamo scelto così |
| --- | --- | --- | --- |
| Backend | Node.js (LTS) + Express, in TypeScript | NestJS; ASP.NET Core | Competenza già consolidata; carico di tipo I/O, ideale per Node.js. Livelli `routes → controllers → services → repositories` imposti a mano e controllati in pipeline. NestJS aggiungerebbe una curva di apprendimento mentre l'autore consolida Vue e TypeScript; ASP.NET richiederebbe linguaggio e framework nuovi |
| Frontend | Vue 3 + Vite, Vue Router, Pinia, PrimeVue | React + Vite; Vuetify | Già in uso durante lo stage; router e store ufficiali; build leggera (NFR-27); PrimeVue ha tabelle paginate e componenti accessibili (NFR-23) |
| Database | MySQL 8.4 LTS con Prisma ORM | PostgreSQL; Knex o DAO scritti a mano | Competenza consolidata; transazioni e vincoli bastano (pubblicazione tutto o niente, scala dei voti, una consegna per studente). Prisma dà query parametrizzate, tipi e migrazioni versionate, e rende economico un eventuale passaggio a PostgreSQL |
| Provider cloud | Hetzner Cloud | Microsoft Azure (Azure for Students) | Costo basso e fisso entro 40 €/mese per tutto l'anno; azienda europea (NFR-39). Azure ha crediti limitati e costi variabili alla scadenza |
| Servizi cloud | 1 Cloud Server con Docker Compose (Caddy, backend, worker, database) + Object Storage S3 per i file + backup | PaaS gestito; Kubernetes | Adeguato a circa 300 concorrenti e a una persona sola. Il server unico è un rischio accettato: NFR-07 chiede il 99,5%, i backup limitano la perdita a 15 minuti, NFR-12 traccia il percorso di crescita. PaaS supera il tetto di costo; Kubernetes è sproporzionato |
| Regione | Falkenstein, Germania; backup a Helsinki | Unica località; regioni USA | Dati in UE, bassa latenza dall'Italia, backup in un'altra località |
| Servizio esterno | Brevo, API per email transazionali, piano di base a pagamento | Resend; Amazon SES | Azienda europea; il piano di base copre le circa 3.500 email/mese senza limite giornaliero (il gratuito, 300 al giorno, non regge i 400 esiti pubblicati insieme). Nascosto dietro un'interfaccia `EmailSender` e sempre in coda |
| Report PDF | pdfmake nel backend | Servizio SaaS; Gotenberg | I voti dei minorenni non escono dal sistema; nessun costo né fallimento esterno; il report della scuola gira nel worker |
| Validazione e documentazione | Zod, con OpenAPI 3.1 generato e Swagger UI | Joi; OpenAPI scritto a mano | Un solo schema per validazione, tipi e documentazione, che non può divergere dal codice |
| Sicurezza | argon2id; JWT di breve durata + token di rinnovo in cookie `HttpOnly`; Caddy per HTTPS | bcrypt; sessioni lato server; Nginx + Certbot | Hash progettato per le password; backend senza stato e replicabile; certificati automatici |
| Attività in background e notifiche | Coda su database con un worker; notifiche lette dal client ogni 60 s | Redis + BullMQ; WebSocket | Volumi bassi e una sola VM: ogni componente in meno è un rischio in meno; 60 s rispettano NFR-45 |
| Test, CI e monitoraggio | Vitest + Supertest, Postman con Newman, k6, GitHub Actions, UptimeRobot | Jest; JMeter; rilascio manuale | Test, collezione Postman e rilascio automatici; scenari di carico versionati; un controllo esterno rileva anche la caduta del server |

**Rischio sulle competenze.** Vue, TypeScript e Docker sono a livello base: la prima milestone è uno scheletro completo (accesso, un elenco paginato, deploy in cloud) che li tocca tutti e tre. Con una sola persona, i *Must* coprono la traccia e i *Should* vengono dopo.
