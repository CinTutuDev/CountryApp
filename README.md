# <img src="https://img.icons8.com/?size=512&id=oa4PbudmGzeQ&format=png" width="70">CountryApp
Proyecto hecho con: [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

 ##  <img src="https://github.com/CinTutuDev/CountryApp/assets/71487857/a2decbc6-4a0c-4968-9a90-e147198ad735" width="20">Sitio Web
### Hosting URL:  [CountryApp](https://app-country-explore.netlify.app/) 

##  🐦Servidor

Ejecutar `ng serve` ó `ng s -o`para un servidor de desarrollo. Navegue a `http://localhost:4200/


##  🎮 Crear Componente y Módulos por comandos

* Módulo:
  ```
  ng g m shared
  ```
* Componente
  ```
  ng g c shared/pages/aboutPage
  ```
* Componente sin archivo de prueba y sin hoja de stilos
  ```
  ng g c shared/pages/aboutPage --inline-style --skip-tests
  ```
    

## 🛠 Build

Para construir el proyecto `ng build` to build the project. Se almacenarán en la carpeta  `dist/` directory.

##  URL Importantes
### Diseño:  [Bootstrap](https://getbootstrap.com/) 
### Tutorial NETLIFY: [Publicar WEB NETLIFY](https://www.youtube.com/watch?v=7W6-jSOFMgM) 
### API Restcountries: [Restcountries](https://restcountries.com/) 
### RxJS: [librería Observables](https://rxjs.dev/)
### Loader: [Loader](https://github.com/Klerith/angular-gif-app/blob/fin-seccion-8/src/assets/loader.svg)

## 👀 Ejemplo de uso en Postman
* Por capital:
![postmanCapital](https://github.com/CinTutuDev/CountryApp/assets/71487857/490ca5f0-9234-4dbe-9353-1a2641ed967e)
![postmanCapitalMuestra](https://github.com/CinTutuDev/CountryApp/assets/71487857/72cf07e4-a093-426b-8278-5e7d3892436e)

* Interfaces<br>
  Para crear la interfaces copiamos el resultado de la consulta del Postman <br>
  Nos vamos a VCode, creamos 'country.ts' le damos a paleta de comandos en Paste JSON as Code<br>
* Servicio<br>
  Creamos contries.service.ts, y con 'a-service-HttpClient' + entre creamos la estructura para el servicio con peticion http







