---
title: Norske geografiske data
date: '2025-06-12T06:43:00+01:00'
---

En ting som har interessert meg siden jeg var liten er geografi. Kart og flagg har jeg alltid funnet spennende. I min jobb så har vi noen prosjekter som krever visning av dette, og noe av det første jeg gjorde når jeg begynte i min nåværende jobb i 2020 var å samle sammen vektorversjoner av alle fylkes- og kommunevåpen. Siden den gang har vi igjen fått noen nye gamle fylker og kommuner tilbake etter «samlingsreformen» i 201X. Så nå i 2025 er det på tide å oppdatere dette.

Som frontendutvikler så er det fint med pakker. Så med 2025-dataene bestemte jeg meg for å for første gang lage en pakke som blir offentlig publisert på NPM og GitHub. Pakken [@aprestmo/norway-geodata](https://www.npmjs.com/package/@aprestmo/norway-geodata) gir deg en oppdatert oversikt over fylkes- og kommunedata hentet fra Kartverkets API. Noe ekstra informasjon kommer fra Wikipedia (ta altså den biten med en liten klype salt) og postnummer-data fra Bring.

For å bygge dette har jeg fått laget et regneark i Google Sheets som henter data fra Karverket og Bring. Wikipedia er en manuell operasjon. Deretter har jeg laget noen script som slår sammen og konverterer dataene til ønsket format. Til slutt blir det konvertert til JSON og publisert i pakken på GitHub og NPM ved nye utgaver.
