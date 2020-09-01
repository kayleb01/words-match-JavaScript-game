 

 const init = function(img) {
 	let area = document.querySelector('.area')
 	let textCont = area.appendChild(img)
 	let uploader = document.querySelector("#imageUploader")
 	let button 	 = document.querySelector("#image_button") 
 	document.body.removeChild(uploader)
 	document.body.removeChild(button)
 }

let action = document.querySelector('.toolbar')
action.addEventListener('click', function(e) {
if (e.target !== e.currentTarget) {
	let command = e.target.dataset.type
	if(e.target.dataset.type == "bold") document.execCommand(command, false, command)
		else if( command == "italic") document.execCommand(command, false, command)
			else if(command == "strikeThrough") document.execCommand(command, false, command)
				else if( command == "link"){
					const url = prompt("Please insert a link:","http:\/\/")
					document.execCommand("createLink", false, url)
					}else if(command == "image") {
						document.execCommand("insertImage", false, imageUpload())
					}
	else{
		document.execCommand(command,false, null)
	}
}
});
 
 function imageUpload(){
 	let inputField 	= document.createElement("input")
	 	inputField.type = "file"
	 	inputField.id 	= "imageUploader"
	 	 document.body.appendChild(inputField)
	 	
	 	 let imageButton 	= document.createElement("button")
	 	 imageButton.onclick = loadImage
	 	 imageButton.id = "image_button"
	 	 imageButton.textContent = "Load image"
	 	  document.body.appendChild(imageButton)
 }

 function loadImage(){
 	let imageToUpload = document.querySelector("#imageUploader").files
 	if(imageToUpload.length > 0){
 		let imageToLoad = imageToUpload[0]

 		if (imageToLoad.type.match("image.*")) {
 			let fileReader = new FileReader(); 
 			fileReader.onload = function(fileLoadEvent){
 				let loadedImage = document.createElement("img")
 				loadedImage.src = fileLoadEvent.target.result
 				init(loadedImage)
 			} 
 			fileReader.readAsDataURL(imageToLoad)
 		}
 	}
 }