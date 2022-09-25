NOTE: opening camera requires a "secure context" meaning this won't work in your home network unless it's on localhost
https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
"getUserMedia() is a powerful feature which can only be used in secure contexts; in insecure contexts, navigator.mediaDevices is undefined, preventing access to getUserMedia(). A secure context is, in short, a page loaded using HTTPS or the file:/// URL scheme, or a page loaded from localhost."

you have to do this (in chrome at least):
chrome://flags/#unsafely-treat-insecure-origin-as-secure
select "Enabled" for this option, and then in the textbox, add your node server address WITH http and port:
http://192.168.0.17:8081
Relaunch chrome (a button will appear at the bottom right)
as seen here:
https://stackoverflow.com/questions/40696280/unsafely-treat-insecure-origin-as-secure-flag-is-not-working-on-chrome

created with guidance from juul

based on examples from here:
https://usefulangle.com/post/352/javascript-capture-image-from-camera
https://usefulangle.com/post/353/javascript-canvas-image-upload
or this is another way
https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture
and here's an example of uploading a Blob if you end up needing that
https://stackoverflow.com/questions/51825088/uploading-a-blob-with-nodejs

about canvas element:
https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement

to get info from URL parameters:
https://www.sitepoint.com/get-url-parameters-with-javascript/

to run:
npm install
npm start

visit the page with an id parameter to determine the filename to save locally
http://localhost:8081/?id=505
will result in 505.jpg being saved on the server
