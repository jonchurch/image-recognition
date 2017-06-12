var fs = require('fs')
 var cognitiveServices = require('cognitive-services');

const computerVision = cognitiveServices.computerVision({
    API_KEY: process.env.API_KEY 
})
 
const parameters = {
    visualFeatures: "Categories"
};
/* Input passed within the POST body. Supported input methods: raw image binary or image URL. 
 
Input requirements: 
 
Supported image formats: JPEG, PNG, GIF, BMP. 
Image file size must be less than 4MB.
Image dimensions must be at least 50 x 50.
 */
const body =  {url: 'https://amart539.files.wordpress.com/2013/03/800px-tiziano_-_venere_di_urbino_-_google_art_project.jpg'};

 
computerVision.analyzeImage({
        parameters,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });
