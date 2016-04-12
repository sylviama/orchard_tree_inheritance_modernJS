// var Plant= function(){
// 	this.height = 0;
// 	// this.increaseHeight = function(growth){
// 	// 	height += growth;
// 	// };
// 	// this.decreaseHeight = function(amount){
// 	// 	height-= amount;
// 	// };
// };

var Tree= function(){
	var branches =0;
	var height =0;
	var above10Height=0;
	this.grow = function(amount){
	height += amount;

	//grow by 10, gain one more branch
	above10Height+=amount;
	if(above10Height>=10){
		branches+=1;
		above10Height-=10;
	};

	$("#tree").append("<div>"+Tree.name+" tree is now: "+height+" inches tall, and has "+branches+"branches</div>");
	// console.log(name);
	}

	//trim function
	this.trim = function(amount){
		branches -= 1;
		height -= amount;
		console.log("Trimed!!")
	};
};


// Tree.prototype = new Plant();

var PearTree = new Tree();
PearTree.name = "Pear";

var OakTree = new Tree();
OakTree.name = "Oak";

//generate integar, give the small one to pear and larger to oak
function integarGenerator(callBackFunction1, callBackFunction2){
	var pearInt =0;
	var oakInt =0;

	var int1 = Math.floor(Math.random()*10+1);
	var int2 = Math.floor(Math.random()*10+1);

	if(int1<=int2){
		pearInt = int1;
		oakInt = int2;
	} else {
		pearInt = int2;
		oakInt = int1;
	}
	console.log("pearInt", pearInt);
	console.log("oakInt", oakInt);
	callBackFunction1(pearInt);
	callBackFunction2(oakInt);
	$("#tree").append("<br>");
};

//run
var intervalTree = window.setInterval(treeStrategy, 1000);

//controller
var growCount =0;
var above10Count =0;
function treeStrategy(){
	integarGenerator(PearTree.grow, OakTree.grow);
	growCount+=1;

	//every 10 time trigger trim
	above10Count+=1;
	if(above10Count>=4){
		above10Count-=4;
		integarGenerator(PearTree.trim, OakTree.trim);
	}

	//max grow 30 times
	if(growCount>=15){
	window.clearInterval(intervalTree);
	};
};

//could stop growing anytime
$("#stop").click(function(){
	window.clearInterval(intervalTree);
});




// var intervalID = window.setInterval(myCallback, 1000);
// window.clearInterval(intervalID);