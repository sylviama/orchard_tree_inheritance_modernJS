"use strict"

var Plant= function(){;
	this.height= 0;
};

Plant.prototype.increaseHeight = function(amount){
	this.height += amount;
	};

Plant.prototype.decreaseHeight = function(amount){
	this.height-= amount;
	
};


var Tree= function(){
	this.branches =0;
	this.above10Height=0;
	this.name= null;
};

Tree.prototype = new Plant();

//need to pass the Tree because of the callback
Tree.prototype.grow = function(amount, TreePass){
	
	//grow by 10, gain one more branch
	TreePass.above10Height+=amount;
	while (TreePass.above10Height>=10){
		TreePass.branches+=1;
		TreePass.above10Height-=10;
	};

	TreePass.increaseHeight(amount);
	$("#tree").append("<div>"+TreePass.name+" tree is now: "+TreePass.height+" inches tall, and has "+TreePass.branches+" branches</div>");
}

Tree.prototype.trim = function(amount,TreePass){
	TreePass.branches -= 1;
	TreePass.decreaseHeight(amount);
	$("#tree").append("<div>"+TreePass.name+" tree is now: "+TreePass.height+" inches tall, and has "+TreePass.branches+" branches</div>");

	console.log("trimed!!");
};



var PearTree = new Tree();
PearTree.name = "Pear";

var OakTree = new Tree();
OakTree.name = "Oak";

//generate integar, give the small one to pear and larger to oak
function integarGenerator(callBackFunction1, callBackFunction2){
// function integarGenerator(){
	var pearInt =0;
	var oakInt =0;

	var int1 = Math.floor(Math.random()*20+1);
	var int2 = Math.floor(Math.random()*20+1);

	if(int1<=int2){
		pearInt = int1;
		oakInt = int2;
	} else {
		pearInt = int2;
		oakInt = int1;
	}
 
 	console.log("pearInt", pearInt);
 	console.log("oakInt", oakInt);
	//call either the grow or trim function
	callBackFunction1(pearInt,PearTree);
	callBackFunction2(oakInt, OakTree);
	$("#tree").append("<br>");
};

//run
var intervalTree = window.setInterval(treeStrategy, 1000);

//controller
var growCount =0;
var above10Count =0;

function treeStrategy(){
	growCount+=1;
	console.log(growCount);

	// integarGenerator();
	integarGenerator(PearTree.grow, OakTree.grow);

	//every 10 time trigger trim
	above10Count+=1;
	if(above10Count>=10){
		above10Count-=10;
		integarGenerator(PearTree.trim, OakTree.trim);
	}

	//max grow 30 times
	if(growCount>=30){
	window.clearInterval(intervalTree);
	};
};

//could stop growing anytime
$("#stop").click(function(){
	window.clearInterval(intervalTree);
});






