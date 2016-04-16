"use strict"

var Plant= function(){;
	this.height= 0;
	this.branches =0;
	this.name= null;
};

Plant.prototype.increaseHeight = function(amount){
	this.height += amount;
	$("#tree").append("<div>"+this.name+" tree is now: "+this.height+" inches tall, and has "+this.branches+" branches</div>");
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

Tree.prototype.grow = function(amount){
	this.increaseHeight(amount);

	//grow by 10, gain one more branch
	this.above10Height+=amount;
	while (this.above10Height>=10){
		this.branches+=1;
		this.above10Height-=10;
	};
}

Tree.prototype.trim = function(amount,name){
	branches -= 1;
	this.height -= amount;

	$("#tree").append("<div>"+name+" tree is now: "+height+" inches tall, and has "+branches+" branches</div>");
	// console.log("Trimed!");
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
  
	// console.log("pearInt: ", pearInt);
	// console.log("oakInt: ", oakInt);
	//call either the grow or trim function
	// PearTree.grow(pearInt);
	// OakTree.grow(oakInt);
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
	// integarGenerator(PearTree.grow, OakTree.grow);
	PearTree.grow(7);
	OakTree.grow(8);
	$("#tree").append("<br>");

	// integarGenerator();
	growCount+=1;

	//every 10 time trigger trim
	above10Count+=1;
	if(above10Count>=10){
		above10Count-=10;
		PearTree.trim(4);
		OakTree.trim(6);
		// integarGenerator(PearTree.trim, OakTree.trim);
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






