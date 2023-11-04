---
title: 'Bruk av masterstiler i InDesign'
date: '2013-04-07T20:59:21+02:00'
status: publish
permalink: /2013/04/07/bruk-av-masterstiler-i-indesign
author: Alexander
excerpt: ''
type: post
id: 350
category:
    - Design
tag:
    - 'Lange dokumenter'
    - Stiler
post_format: []
slide_template:
    - default
large:
    - large-8
_yoast_wpseo_content_score:
    - '30'
_yoast_wpseo_primary_category:
    - '2'
---
Den som jobber smart får mer tid til andre ting. Derfor skal jeg å dele et lite InDesign-tips som jeg har brukt i mange ganger når jeg skal lage lange dokumenter. Første gangen jeg støtte på dette var i studentavisen i Tromsø, men jeg har også sett omfattende bruk av det i bokbransjen.

Når du starter med et nytt dokument som du vet vil bli omfattende vil det være lurt å lage seg en eller flere mastere i avsnittsstilene først som sist. Når jeg sier en master så er det egentlig ingenting som heter for det i InDesign. Det du egentlig gjør er å lage en avsnittsstil som definerer noen utgangspunkt som i stor grad skal være mer regelen enn unntaket i dokumentet ditt.

Når jeg lager en master er alltid det første jeg gjør å velge at den er basert på «No Paragraph Style», så gir jeg den et navn – som oftest «MASTER». Deretter går jeg gjennom innstillingene som er i en avsnittsstil og justerer ofte *språk*, *orddeling,* *tekstjustering*, *register* og lignende som jeg vil ha de.

- ![](../../../../../uploads/2013/04/01-Master_InDesign.png)
- ![](../../../../../uploads/2013/04/02-Master_velg-spraak_InDesign.png)
- ![](../../../../../uploads/2013/04/03-Master_velg-spraak_InDesign.png)
- ![](../../../../../uploads/2013/04/04-Master_velg-register_InDesign.png)
- ![](../../../../../uploads/2013/04/05-Master_velg-tekstjustering_InDesign.png.png)

Hovedinnstillingene for dokumentet
----------------------------------

Når du har masteren på plass bruker jeg å lage en ny avsnittsstil som også skal være en master, men denne skal være utgangspunktet for det som blir de mest brukt innstillingene i dokumentet ditt. Jeg kaller den som oftest «Primær master» og her definerer jeg de innstillingene som jeg regner med å bruke oftest i dokumentet mitt. I tilfellet avis eller bok vil det oftest være de innstillingene som skal gjelde for brødteksten. Ofte er det kun skrifttypen jeg definerer i denne stilen, men tekstjustering kan være aktuelt spesielt om brødteksten skal stå i blokk mens andre elementer skal ha løs marg.

<div class="wp-block-image">![06-PrimaerMaster_opprett_InDesign.png](../../../../../uploads/2013/04/06-PrimaerMaster_opprett_InDesign.png.png)</div><div class="wp-block-image">![07-PrimaerMaster_basis_InDesign.png](../../../../../uploads/2013/04/07-PrimaerMaster_basis_InDesign.png.png)</div>Hvis det kun er behov for en master så kan primær masteren være master og dermed basert på nevnte «No Paragraph Style», men i de tilfellene du har flere skrifttyper anbefaler jeg å utvide systemet med en «Sekundær master» som da også bør være basert på «MASTER». I aviser og bøker vil det ofte være minst to skrifttyper som brukes sammen og da vil dette være en fornuftig løsning.

Prinsippet rundt dette er for de som kjenner til <abbr title="Cascading Stylesheet">CSS</abbr> i grunn veldig likt. Tenk på «MASTER» som forelder, mens «primær» og «sekundær» er barn av den som arver dens egenskaper. Primær- og sekundærmasterne brukes kun til å overstyrer de nedarvede egenskapene som du ikke vil at skal gjelde for den spesifikke stilen.

I mange tilfeller kan det også tenkes at det holder å definere primær- og sekundærmaster, og droppe steget med en altoverskyggende master på toppen, men dette er måten jeg foretrekker å gjøre det på. Det siste og viktigste steget er at de stilene som du skal jobbe direkte med nå skal baseres på enten primær- eller sekundærmaster. I en avis så vil du ha flere nivåer med teksthierarki og da er det viktig å lage stiler for de aktuelle typene tekst, så når jeg starter opp med et avisprosjekt bruker jeg alltid å lage stiler for «tittel», «ingress», «byline», «brødtekst uten innrykk», «brødtekst med innrykk», «mellomtittel», «bildetekst», «sitat» og lignende etter behov. Disse stilene baserer jeg på enten primær- eller sekundærmasteren min med utgangspunkt i hvilken skrifttype jeg ønsker.

<div class="wp-block-image"><figure class="alignleft">[![08-Brodtekststil_InDesign](../../../../../uploads/2013/04/08-Brodtekststil_InDesign.png)](http://ap.local/wp-content/uploads/2013/04/08-Brodtekststil_InDesign.png)</figure></div><div class="wp-block-image"><figure class="alignleft">[![09-Tittelstil_InDesign](../../../../../uploads/2013/04/09-Tittelstil_InDesign.png)](http://ap.local/wp-content/uploads/2013/04/09-Tittelstil_InDesign.png)</figure></div>Fordelen med en slik fremgangsmåte er ikke bare at du får god oversikt, men du kan altså bygge et system hvor du raskt kan teste forskjellige skrifttyper kun ved å endre den i primær- og sekundærmasteren, og se endringene i de stilene du skal jobbe direkte med. Når jeg vil sjekke hvordan tittelen min ser ut med den andre skriften jeg har valgt så endrer jeg bare mellom hvilken master de er basert på. Så enkelt, så greit. Så får du tid til så mye annet.

<div class="wp-block-image"><figure class="alignleft">[![10-Avsnittsstiler_InDesign](../../../../../uploads/2013/04/10-Avsnittsstiler_InDesign.png)](http://ap.local/wp-content/uploads/2013/04/10-Avsnittsstiler_InDesign.png)</figure></div>**bonustips**: trykker du `eple+y` (mac) eller `ctrl+y` (pc) når du har markert en tekstblokk så får du opp «storyeditoren» som viser den hvilken stil som er lagt på hvert enkelt avsnitt i teksten din. Veldig nyttig hvis du vil ha stålkontroll på at alle avsnittene dine har riktige stiler.