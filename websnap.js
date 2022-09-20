let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let take_photo = document.querySelector("#take-photo");
let save_photo = document.querySelector("#save-photo");
let canvas = document.querySelector("#canvas");

const urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get('id')
console.log(photoId);
if (!photoId) { console.error('id param not found') } else {
  photoId = photoId.replace(/[^\d]+/g, 'b') // replace any nondigit characters with letter b
  photoId = photoId.slice(0, 10) // only keep the first ten characters of photoId
  console.log(photoId);
}

camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
});

take_photo.addEventListener('click', function() {
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
});

save_photo.addEventListener('click', function() {
canvas.toBlob(function(blob) {
      file = new File([blob], photoId+'.jpg', { type: 'image/jpeg' });
      let data = new FormData();

      data.append('file', file);

      let request = new XMLHttpRequest();
      request.open('POST', 'uploadpic'); 
      request.addEventListener('load', function(e) {
	      console.log(request.response);
      });
      request.send(data);
  }, 'image/jpeg');
});
