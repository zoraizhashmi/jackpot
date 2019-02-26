
// cycle images in the following order: CHERRY --> LEMON --> ORANGE
function nextImage(el){
	if (el.src.match("images/cherry_slot.PNG")){
		// if the image is a cherry, change it to a lemon!
		el.src = "images/lemon_slot.PNG";
	} else if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/orange_slot.PNG";
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
		// if the image is an orange, change it to a cherry!
	} else {
		// do nothing
	}
}

// LEMON --> BAR --> CHERRY
function nextImage2(el){
	if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/bar_slot.PNG";
	} else if (el.src.match("images/bar_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
	} else {
		// do nothing
	}
}


// ORANGE --> CHERRY --> SEVEN --> WATERMELON
function nextImage3(el){
	if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/seven_slot.PNG";
	} else if (el.src.match("images/seven_slot.PNG")){
		el.src = "images/watermelon_slot.PNG";
	} else if (el.src.match("images/watermelon_slot.PNG")){
		el.src = "images/orange_slot.PNG";
	} else {
		// do nothing
	}
}

function playSound(el){
	if (document.getElementById("slot1").src.match("images/cherry_slot.PNG") && document.getElementById("slot2").src.match("images/cherry_slot.PNG") && document.getElementById("slot3").src.match("images/cherry_slot.PNG")){ 
	document.getElementById('you-win').play();
	console.log("You Won't Like This, Eric");
	document.getElementById("slot1").src = "images/lakers.png";
	document.getElementById("slot2").src = "images/gt.png";
	document.getElementById("slot3").src = "images/hou.png";
	document.getElementById("slot1").classList.add("opaque");
	document.getElementById("slot2").classList.add("opaque");
	document.getElementById("slot3").classList.add("opaque");
	} else {
	}
}