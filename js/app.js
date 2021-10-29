'use strict';

let obj = null;
let latitude, longitude;

window.onload = () => {
	const camera = document.querySelector('a-camera');
	window.addEventListener('gps-camera-update-position', e => {
		var newLatitude  = e.detail.position.latitude;
		var newLongitude = e.detail.position.longitude;
		if (newLatitude !== latitude && newLongitude !== longitude) {
			setPos(newLatitude, newLongitude);
			longitude = newLongitude;
			latitude = newLatitude;
		}
	});
}

function setPos(latitude,longitude) {
	if (!obj) {
		alert(`Got GPS: you are at: ${latitude} ${longitude}`);
		obj = document.createElement('a-entity');
		obj.setAttribute('gltf-model', '#magnemite');
		obj.setAttribute('animation-mixer', '');
		obj.setAttribute('scale', '0.5 0.5 0.5');
		obj.setAttribute('gps-entity-place', 'latitude: ' + (latitude + 0.0006) + '; longitude: ' + (longitude - 0.0005) + ';');
		const sceneEl = document.querySelector('a-scene');
		sceneEl.appendChild(obj);
	}

}


// vim: set ts=4 sw=4 expandtab:
