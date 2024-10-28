---
title: 'Finn og endre akronymer automatisk'
date: '2012-07-17T21:55:46+02:00'
status: publish
permalink: /2012/07/17/finn-og-endre-akronymer-automatisk
author: Alexander
excerpt: ''
type: post
id: 7
category:
    - Design
tag:
    - Akronym
    - GREP
    - 'Lange dokumenter'
    - Triks
post_format: []
_yoast_wpseo_focuskw:
    - 'akronym, akronymer, GREP, kapiteler, versaler, majuskler'
_yoast_wpseo_linkdex:
    - '70'
_yoast_wpseo_content_score:
    - '30'
_yoast_wpseo_primary_category:
    - ''
---
Jobber du med korte eller lange tekstdokumenter i InDesign så er det alltid lurt å gå over dokumentet og ta bort unødig «skrot» som har blitt med på veien fra Word/forfatter. En vanlig rutine er å gå gjennom dokumentet for å fjerne doble mellomrom. Til og med i relativt korte dokumenter kan det være vanskelig å fange opp alle tilfeller ved å gjøre dette manuelt. Den enkle måten å gjøre dette på er å bruke et tekstsøk i Find/Change-panelet til InDesign. Men hva om du vil gjøre noe litt mer avansert, som å finne alle forekomster av akronymer?

Det fine med Find/Change-panelet er at det støtter GREP-søk. Uten å gå så dypt inn på hva GREP er, så kan jeg si at det benytter noe som heter *regulære uttrykk*, vanlig i programmering. GREP-søk kan derfor finne forekomster av forskjellige typer strukturer i et dokument.

Med hjelp av GREP ville jeg forsøke å finne alle forekomster av akronymer – forkortelser som NRK, USA, PC o.l. som står i versaler – i dokumentet. Jeg kunne ha søkt de opp med et vanlig tekstsøk, men når jeg hadde funnet dem så ville jeg at de skulle få riktig typografi som i utgangspunktet er kapitéler med optisk sperring i motsetning til brødteksten som er i minuskler med metrisk sperring.

For å få til dette var det første jeg gjorde å lage et GREP-søk som isolerte alle instanser av versaler i løpende brødtekst, siden jeg anså det som høyst sansynlig at alle disse tilfellene egentlig var akronymer. Det hadde vært mulig å søke opp alle instanser av versaler ved hjelp av ett tekstsøk, men da måtte jeg ha tilegnet hvert enkelt tilfelle en tegnstil manuelt, noe som ikke er nødvendig.

Det fine er at det er mulig å bygge inn GREP-søk i avsnittsstiler (paragraph style). Dermed kan en avsnittsstil med ett GREP-søk innebygd automatisk plukke opp forekomster som samsvarer med GREP-søket som er definert i stilen og tilegne dem en tegnstil (character style).

GREP-søket jeg kom opp med kan du se nedenfor. Enkelt sagt finner det alle forekomster av versaler i tekst som har avsnittsstilen *Brødtekst* og legger til tegnstilen *Kapiteler* på det som samsvarer med søket. Tegnstilen endrer teksten til OpenType Small Caps (fungerer bare med godt utbygde OpenType-skrifter) med en optisk sperring på 20 og rød skrift – for eksemplets skyld.  
`uu+`

Forklaring av søket
-------------------

GREP-søket er i grunn ganske enkelt. `u` er GREP-koden for å finne versaler. `+`-tegnet betyr *eller flere*. `uu+` kan da oversettes til: se etter minimum to versaler eller flere.

En oversikt over hvilke koder som kan brukes i InDesign sitt GREP-søk finner du på [Jetsetcom](https://jetsetcom.net/images/downloads/grep_codes_and_examples_indesign_cs55.pdf "GREP and Metacharacters i Find/Change-panelet til InDesign CS5 & 5.5").

Hva mener du. Er dette nyttig?

```
            <figure><a href="http://ap.local/wp-content/uploads/2012/07/Skjermbilde-2012-07-17-kl.-22.00.07.png" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="a990aef" data-elementor-lightbox-index="0"><img src="http://ap.local/wp-content/uploads/2012/07/Skjermbilde-2012-07-17-kl.-22.00.07-768x626.png" alt="Finn kapiteler automatisk med GREP" /></a></figure><figure><a href="http://ap.local/wp-content/uploads/2012/07/Skjermbilde-2012-07-17-kl.-21.59.43.png" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="a990aef" data-elementor-lightbox-index="1"><img src="http://ap.local/wp-content/uploads/2012/07/Skjermbilde-2012-07-17-kl.-21.59.43.png" alt="Skjermbilde-2012-07-17-kl.-21.59.43" /></a></figure><figure><a href="http://ap.local/wp-content/uploads/2016/09/Skjermbilde-2012-07-17-kl.-20.34.31.png" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="a990aef" data-elementor-lightbox-index="2"><img src="http://ap.local/wp-content/uploads/2016/09/Skjermbilde-2012-07-17-kl.-20.34.31.png" alt="Tegnstil for kapiteler" /></a></figure>

```