

// player object

let player = {
	character: $("#player"),
	playerPos: 0
}

// console.log(player.playerPos)


// AI object

const ai = {
	character : $("#ai"),
	aiPos: 0
}

let playerPosition = 0;
let aiPosition = 0;


// move the player function
player.character.click(function(){
	$(this).animate({
		"left" : (playerPosition += 100)+"px"
	})
	console.log("this is the current value of player position: " +playerPosition)
	player.playerPos = playerPosition
	console.log(player.playerPos)
	result() // calls result function
})


// move the AI easy
$("#start").click(function(){
	// console.log(ai.character)
	aiMove(10)
}) 

// move the AI medium
$("#start2").click(function(){
	// console.log(ai.character)
	aiMove(50)
}) 

// move the AI hard
$("#start3").click(function(){
	$("#ai").html("../images/bugs/gif")
	aiMove(100)
}) 



// aiMOve //easy
const aiMove = (value) => {
	if(ai.aiPos <= 1000) {
		ai.character.animate({
			"left" : (aiPosition+= value) +"px"
		})
	}
	else {
		return true
	}
	console.log(ai.aiPos)
	ai.aiPos = aiPosition

	if(ai.aiPos >= 1000 || player.playerPos >= 1000) {
		return true
	}
	else {
		setTimeout(()=> aiMove(value), 500)
	}

	result()

}



// aiMOve
// medium
// const aiMove1 = () => {
// 	if(ai.aiPos <= 1000) {
// 		ai.character.animate({
// 			"left" : (aiPosition+= 100) +"px"
// 		})
// 	}

// 	else {
// 		return true
// 	}

// 	console.log(ai.aiPos)
// 	ai.aiPos = aiPosition

// 	// setTimeout(aiMove1,900)
// 	setTimeout(()=> aiMove(speed), 900)
// 	result()
// }



// aiMOve
// hard
// const aiMove2 = () => {
// 	if(ai.aiPos <= 1000) {
// 		ai.character.animate({
// 			"left" : (aiPosition+= 100) +"px"
// 		})
// 	}

// 	else {
// 		return true
// 	}

// 	console.log(ai.aiPos)
// 	ai.aiPos = aiPosition

// 	// setTimeout(aiMove2,400)
// 	setTimeout(()=> aiMove(speed), 400)
// 	result()
// }


const result = () => {

	if(ai.aiPos == 1000) {
		alert("AI won, you slowpoke")
		console.log("AI won")
		location.reload(true)
		return true

	}
	if(player.playerPos == 1000) {
		alert("player won")
		console.log("you won")
		location.reload(true)
		return true
	}
}

