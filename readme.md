# How to start
Sign up and get an API key (APPID) on your account page.
use fetch or axios to call the api 
## Example of the Api
``` `http://api.openweathermap.org/data/2.5/weather?q=Nyeri&appid=apikey` ```

### Remember to enable the cors 
* This is what i use to enable cors:

```  const proxy ="https://cors-anywhere.herokuapp.com/" ```
* Then add the proxy to the url, my url will look like this:

```  `${proxy}http://api.openweathermap.org/data/2.5/weather?q=Nyeri&appid=apikey` ``` 

🎉🎉🎉🎉🎉🎉🎉 ``` we've successfully learnt how to fetch data from an api```