# Prog II
## Api
Api on liides, mille kaudu süsteemid **saavad infot omavahel jagada**. Nt Front-end <-> Backend.  
CRUD Api:  
* Create
* Read
* Update
* Delete  

## Node.js  
Node.js on js, mis töötab serveris  
**Asünkroonne** tähendab, et ülesanded on reas, ja sooritatakse, kuid ei oodata, millal mõni pikk ülesanne oma töö lõpetab  

## Typescript - tüpieeritud javascript
Javascript lubab kõike. Typescript on ära tüpiseeritud.  
nt:  
let age: number = 30;  
Kui nüüd siia tekstiline väärtus panna, siis annab vea  
Aga enne käivitamist ta muudetakse ikkagi javascriptiks. Seega on ta mõeldud arendajale abiks.  
Javascript jookseb seal sees ka.  

## node käivitamine
Kuidas käivitada node - node index.js
### käsud
--save-dev ainult arenduseks  
npx tsc --init //typescripti install ja seadistus  
npm install --save-dev ts-node
npm install --save-dev nodemon - vaatab, kas muudatusi on toimunud ja siis käivitab ise

## Ekspress
import express from 'express'; // import muutuja-nimi kust. Node otsib automaatselt node_modules kaustast  
Ekspress tegeleb http meetoditega  
vt [express](expressjs.com) lehelt ka juhendeid  
 npm install --save-dev @types/express 

## Teine loeng
### Tagasiside esimesele kodutööle
#### mis võiks olla
* aruanne, kirjeldus, kuidas ma midagi tegin, mis mul peas oli, mis olid probleemid.
* Minul jäi puudu see, et kuidas need endpointid omavahel siduda
* ma tegelikult ei saanud aru, kuhu liikuda, et kas piisab sellest, mis me tunnis tegime või vaja midagi rohkemat.
* Interface on mall

* Kood - vaatad kaks kuud hiljem ja enam aru ei saa miks ja mida tegid.
* openAPI Swagger - dokumentatsiooni tegemiseks. Järgmisel korral peaks omna tööd, apit dokumenteerima
* Oleks vaja olnud lihtsalt kõike, mida on võimalik kätte saada. Sellega ma panin võssa    
  


### Loeng ise
Endpointi sisse topid kõik need ühe kategooria asjad - get, post, put, delete  
Teise loengu kaustas on ka **example_app**  

### Struktuur
* routes
* controllers
* services
* helpers
* middleware

### Modules
nt myModule.ts  
Eksportimine  
Otsing ./ nt, et otsi samast katyaloogist, kus ise asud. Pannakse see ette, sest ilma milletagi, otsitakse automaatselt Node_modules kaustast.  
export default ekspordib kõik  

### Praktiline osa
src kataloogi teha folder components. Users controller
