function putPicOnCard() {
	console.log(document.getElementsByTagName('img'));
	var imgElement = document.getElementsByTagName('img');
	//imgElement[1].src = '../assets/brocoli.png'

	var i;
	for (i = 0; i < imgElement.length; i++){
		imgElement[i].src = '../assets/brocoli.png';

	}
	var randomNum1 = Math.floor(Math.random() * (imgElement.length - 0)) + 0;
	var randomNum2 = Math.floor(Math.random() * (imgElement.length - 0)) + 0;
	console.log(randomNum1);
	console.log(randomNum2);
	if (randomNum1 === randomNum2) {
		randomNum2 = Math.floor(Math.random() * (imgElement.length - 0)) + 0;
		console.log(randomNum2);
	}
	imgElement[randomNum1].src = '../assets/cake.png';
	imgElement[randomNum2].src = '../assets/cake.png';

}

putPicOnCard();