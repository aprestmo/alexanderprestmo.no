---
title: 'CSS Grid – Endelig et ordentlig layoutverktøy'
date: '2017-07-31T20:58:12+02:00'
status: publish
permalink: /2017/07/31/css-grid-endelig-ordentlig-layoutverktoy
author: Alexander
excerpt: ''
type: post
id: 725
category:
    - Webutvikling
tag:
    - CSS
    - 'Progressive enhancement'
post_format: []
_yoast_wpseo_content_score:
    - '60'
_yoast_wpseo_primary_category:
    - '3'
_yoast_wpseo_focuskw:
    - 'CSS Grid'
_yoast_wpseo_metadesc:
    - 'CSS Grid er layoutverktøyet vi har ventet på. Nå kan du lage magasindesign for print, på nett, og Morten Rand-Hendriksen viser deg hvordan.'
_yoast_wpseo_linkdex:
    - '84'
---
Frem til nå har vi hacket oss rundt med <abbr title="Hyper Text Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr> og noen ganger Javascript for å få til de designene vi har ønsket oss på nettsider. Tabeller, floats, position og Flexbox var aldri vært ment til å være noe layoutverktøy, men de har på sin måte fungert som det med sine begrensninger, og til tider noe mildt sagt rare oppførsel. Nå har vi endelig fått et ordentlig layoutverktøy som har god støtte i nettlesere og som fort vil endre måten vi tenker, designer og skriver kode for nettsider. Møt CSS Grid.

Etter hvert som responsive nettsider snarere ble ett krav enn et alternativ så har også rammeverk som [Bootstrap](http://getbootstrap.com/) og [Foundation](http://foundation.zurb.com/) blitt veldig populære og uten tvil hjulpet mange med å responsive sider uten for mye problemer. Men den generelle utfordringen med nevnte rammeverk har ofte vært i form av mye ekstra HTML-kode som strengt tatt aldri var nødvendig for semantikken sin del og som potensielt kunne skape trøbbel med tanke på sidens tilgjengelighet.

Et ordentlig layoutverktøy
--------------------------

Med [CSS Grid](http://caniuse.com/#search=grid) så har vi derimot fått den første spesifikasjonen som er laget for å være et layoutverktøy i CSS, og i løpet av første halvår i 2017 er det nå blitt tilgjengelig i alle nettlesere med unntak av Internet Explorer og Edge. Internet Explorer 10 og 11 har en eldre implementasjon som man kan benytte seg av om ønskelig. Edge får [full støtte](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/gridupdate/?q=grid) i løpet av andre kvartal 2017.

Under WordCamp Europe i Paris i juni så holdt [Morten Rand-Hendriksen](https://mor10.com/wceu2017/) en presentasjon med gode eksempler på hva CSS Grid er, hvordan det fungerer og hva man kan gjøre for de nettleserne som ikke støtter det. Jeg anbefaler på det sterkeste å se denne presentasjonen på en halvtime.

<span class="embed-youtube" style="text-align:center; display: block;"><iframe allowfullscreen="true" class="youtube-player" height="327" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation" src="https://www.youtube.com/embed/7kVeCqQCxlk?version=3&rel=1&showsearch=0&showinfo=1&iv_load_policy=1&fs=1&hl=nb-NO&autohide=2&wmode=transparent" style="border:0;" width="580"></iframe></span>

Kode møter design på en ny måte
-------------------------------

Med CSS Grid så er det etter min mening nå fullt mulig for designere å tilnærme seg design av nettsider på en helt annen måte enn før fordi det fungerer i mye større grad slik vi er vant til med å sette opp grid for print. Dette kan også være med på å gjøre terskelen noe lavere for de som ønsker å lære seg å lage enkle nettsider.

De tekniske begrensningene andre metoder har hatt vil i stor grad forsvinne og man kan nå designe sider som gjenspeiler for eksempel et magasindesign for print på nett, og dette med et system som er responsivt ut av boksen. Det gjør at kompetansen man i bunn og grunn trenger for å lage nettsider vil være HTML og CSS. Det er også nyttig å se på ting som semantikk og struktur i HTML, men prinsippielt sett så er det ikke dette som avgjør om du får til å lage en enkel nettside. På sikt så bør alle som vil jobbe seriøst med å lage nettsider uansett sette seg inn i regler for Universell utforming og Accessibility, men det er et annet tema.

Så ser jeg ikke bort fra at det vil komme flere forsøk på å lage rammeverk som benytter CSS Grid i tiden fremover, men det er som nevnt egentlig kun to ting man trenger å kunne for å få noe på plass; HTML og CSS. For de interesserte bør dette være fullt overkommelig selv uten en teknisk bakgrunn. Da gjenstår det bare å få snudd webdesignverden på hodet nok en gang også får vi se hvilke kule ting som blir laget med mulighetene CSS Grid gir.

Lær mer om CSS Grid
-------------------

Det finnes en del gode ressurser på temaet og [Grid by Example](https://gridbyexample.com) av Rachel Andrews er den absolutte goto. Dronningen av CSS Grid. Jen Simmons har en del eksempler på sin [Intro to CSS Grid](https://labs.jensimmons.com), [<abbr title="Mozilla Developer Network">MDN</abbr>](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) har en meget god oversikt på sin side over spesifikasjonen og CSS-tricks har en [Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/).

Jeg vil også på det sterketste anbefale å benytte [Firefox](https://www.mozilla.org) eller **aller helst** [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) til å utvikle sidene med. De har per dags dato det absolutt beste utviklerverktøyet for CSS Grid. Jen Simmons viser i videoen nedenfor hva som er tilgjengelig og hvorfor du bør benytte nevnte nettleser til utvikling.

<span class="embed-youtube" style="text-align:center; display: block;"><iframe allowfullscreen="true" class="youtube-player" height="327" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation" src="https://www.youtube.com/embed/dU7xtnzfqxQ?version=3&rel=1&showsearch=0&showinfo=1&iv_load_policy=1&fs=1&hl=nb-NO&autohide=2&wmode=transparent" style="border:0;" width="580"></iframe></span>