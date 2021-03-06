# Prog II

## Api

Api on liides, mille kaudu süsteemid **saavad infot omavahel jagada**. Nt Front-end <-> Backend.  
CRUD Api:

- Create
- Read
- Update
- Delete

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

- aruanne, kirjeldus, kuidas ma midagi tegin, mis mul peas oli, mis olid probleemid.
- Minul jäi puudu see, et kuidas need endpointid omavahel siduda
- ma tegelikult ei saanud aru, kuhu liikuda, et kas piisab sellest, mis me tunnis tegime või vaja midagi rohkemat.
- Interface on mall

- Kood - vaatad kaks kuud hiljem ja enam aru ei saa miks ja mida tegid.
- openAPI Swagger - dokumentatsiooni tegemiseks. Järgmisel korral peaks omna tööd, apit dokumenteerima
- Oleks vaja olnud lihtsalt kõike, mida on võimalik kätte saada. Sellega ma panin võssa

### Loeng ise

Endpointi sisse topid kõik need ühe kategooria asjad - get, post, put, delete
Teise loengu kaustas on ka **example_app**

### Struktuur

- routes
- controllers
- services
- helpers
- middleware

### Modules

Et fail ei läheks liiga suureks, tükeldame ta ära.
Omakorda, et siis tükke kasutada, peame me vastavatesse vailidesse kirjutama eksport ja seal kus kasutada taghame, seal import ja näitame, kus asub.
Kui kogu kupatus eksportida, siis export default, kui vähem siis vastavad kirjed  
nt myModule.ts  
Eksportimine  
Otsing ./ nt, et otsi samast katyaloogist, kus ise asud. Pannakse see ette, sest ilma milletagi, otsitakse automaatselt Node_modules kaustast.  
export default ekspordib kõik

### Praktiline osa

- src kataloogi teha folder components. Users controller
- Import Cors (needed because of API documentation in this project)
  What is CORS?: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

import cors from 'cors';

### Moodulid

et poleks pikk kood

### Struktureerim ine

et kuhu paned koodijupid

### Mis on Middleware

Eesmärk - kui näiteks pole vastust või midagi ei sobi vms.  
Sest kui me kirjutaks otse nt kontrollerisse, läheks asi liiga pikaks.
Vaata, tegime loggerMiddleware.ts faili generali alla.  
next argument - so func, mille expressi app paneb kaasa ja mis tuleb käivitada kui muud asjad on tehtud

### Mida me tegime

Me võtsime algse ts failis oleva töö ja jaotasime ta vastavalt funktsioonidele erinevate nö mottorite alla.

## Teise loengu video

1:16:06
export import

### Kodune töö

- Struktureerimine teha kõikide ressurssidega. Praegu tegime vaid usersitega. Aga seda peaks tegema enda rakendustega.
- Kasutada vähemalt ühte Middlewaret. Nt firstName, LastName kontroll.
- API doku. Kasvõi Readme (vt moodle). Et selgitada kellelegi, mida see api teeb, mis andmed liiguvad, mis endpointid on.
- Proovi ka seda frontendi pisikest äppi

## vahelobisemised

Praktika, kokku 30 kohapeal ja 230 tundi iseseisvalt
st ca 230/4 kuud, ehk ca 60h kuus ehk 60/4 ehk ca 15h nädalas, ehk 3h tööpäevas
Javascripti mängud

API axios
