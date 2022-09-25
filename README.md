# websnap - a javascript/node example of using the camera to send a picture back to the server
NOTE: opening camera requires a "secure context" meaning this won't work in your home network unless it's on localhost.

*"[getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
 is a powerful feature which can only be used in secure contexts...in short, a page loaded using HTTPS or the file:/// URL scheme, or a page loaded from localhost."*

you have to do this (in chrome at least):

`chrome://flags/#unsafely-treat-insecure-origin-as-secure`
select "Enabled" for this option, and then in the textbox, add your node server address WITH http and port:
`http://192.168.0.17:8081`
Relaunch chrome (a button will appear at the bottom right), as seen here:

[https://stackoverflow.com/questions/40696280/unsafely-treat-insecure-origin-as-secure-flag-is-not-working-on-chrome](https://stackoverflow.com/questions/40696280/unsafely-treat-insecure-origin-as-secure-flag-is-not-working-on-chrome)

"You can and should put it behind an nginx or apache reverse proxy that takes care of the https" -juul
[https://www.howtogeek.com/devops/how-to-set-up-a-reverse-proxy-with-apache/](https://www.howtogeek.com/devops/how-to-set-up-a-reverse-proxy-with-apache/)
Then you can use certbot to add an ssl cert.
[https://web.dev/how-to-use-local-https/](https://web.dev/how-to-use-local-https/)
[https://www.npmjs.com/package/mkcert](https://www.npmjs.com/package/mkcert)

Henner says we can just use the HTML method of accessing the camera:
[https://www.w3.org/TR/html-media-capture/](https://www.w3.org/TR/html-media-capture/)

## created with guidance from juul

based on examples from here:
[https://usefulangle.com/post/352/javascript-capture-image-from-camera](https://usefulangle.com/post/352/javascript-capture-image-from-camera)
[https://usefulangle.com/post/353/javascript-canvas-image-upload](https://usefulangle.com/post/353/javascript-canvas-image-upload)
or this is another way
[https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture](https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture)
and here's an example of uploading a Blob if you end up needing that
[https://stackoverflow.com/questions/51825088/uploading-a-blob-with-nodejs](https://stackoverflow.com/questions/51825088/uploading-a-blob-with-nodejs)

about canvas element:
[https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)

to get info from URL parameters:
[https://www.sitepoint.com/get-url-parameters-with-javascript/](https://www.sitepoint.com/get-url-parameters-with-javascript/)

to run:
`npm install
npm start`

visit the page with an id parameter to determine the filename to save locally
[http://localhost:8081/?id=505](http://localhost:8081/?id=505)
will result in 505.jpg being saved on the server
