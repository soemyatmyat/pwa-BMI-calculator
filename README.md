## pwa-BMI-calculator
Installable as an app, Network Independent Progressive Web App: BMI Calculator 
https://soemyatmyat.github.io/pwa-BMI-calculator/

## objective
To demostrate the workable and yet a simple version of PWA

## what it does
The project follows the App Shell Concept: a mix of Server-side rendering (SSR) and client-side rendering (CSR) with the approach of "offline first".
It loads a minimal UI and content asap and caching it so that it’s available offline for subsequent visits before loading the remainder of the app’s content.

## Architecture
1. index.html: serves the UI to visitors 
2. js > app.js: initalize the app - it generates the app's displayed content and registers the service worker (sw.js)
3. sw.js: Upon service worker install completion, load data files (if any) and caches the minimal contents required for the app to function offline
4. manifest.json: Provides info about the web app in JSON, necessary for the web app to be downloaded and be presented to the user similarly to a native app.

## how to run 
1. Download the source code to your computer
2. Host the app locally<br>
For Mac Users, macOS comes with PHP pre-installed and it has built-in web server, To host the app, open Terminal.app and then 
```
cd your/project/dir
php -S localhost:{port}
```
Then, navigate to http://localhost:{port}/ and would see index.html page loaded. <br>

3. Input height and weight to get the BMI result
4. Launch Chrome developer console and goto Application Tab and navigate to Cache Storage > BMI-calculator to see the cached files/data
5. Goto Application > Mainifest to see the offline-information related for the app such as name, entry point, Theme color, Background color and icons
6. Goto Application > Service Workers to check the status of sw installed with the app
7. In Chrome, go to three dots setting and Click on "Install BMI Calculator..". BMI calculator will be installed locally to your computer. <br>
This app works perfectly fine without any network connection as all the necessary files have been cached.
8. Launch BMI calculator.app from your computer. 

Alternatively, goto https://soemyatmyat.github.io/pwa-BMI-calculator/

### Screencaps

1. A clean and simple web app, downloadable as an app to computing devices (laptops, phones, tablets, etc.)<br/>
![How it looks in Browser](https://github.com/soemyatmyat/pwa-BIM-calculator/blob/master/OnChromeBrowser.png?raw=true)
2. Works without an internet (all necessary files are cached) 
![As An App](https://github.com/soemyatmyat/pwa-BIM-calculator/blob/master/AppMacOS.png?raw=true)
![App Open](https://github.com/soemyatmyat/pwa-BIM-calculator/blob/master/OnInstallableApp.png?raw=true)


## References
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers<Br>
https://web.dev/service-worker-caching-and-http-caching/<br>
https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/App_structure#architecture_of_an_app



