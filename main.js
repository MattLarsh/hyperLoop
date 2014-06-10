var motionLines = function(id){
  var e = document.getElementById(id);
  var r = {};
  r.x1Base = e.x1.baseVal.value; 
  r.x2Base = e.x2.baseVal.value;
  r.y1Base = e.y1.baseVal.value;
  r.y2Base = e.y2.baseVal.value;
  
  Object.defineProperty(r, 'x1', {
    get: function(){return e.x1.baseVal.value;},
    set: function(val){e.x1.baseVal.value = val;}
  });
  Object.defineProperty(r, 'x2', {
    get: function(){return e.x2.baseVal.value;},
    set: function(val){e.x2.baseVal.value = val;}
  });
  Object.defineProperty(r, 'y1', {
    get: function(){return e.y1.baseVal.value;},
    set: function(val){e.y1.baseVal.value = val;}
  });
  Object.defineProperty(r, 'y2', {
    get: function(){return e.y2.baseVal.value;},
    set: function(val){e.y2.baseVal.value = val;}
  });
  Object.defineProperty(r, 'cx', {
    get: function(){return e.cx.baseVal.value;},
    set: function(val){e.cx.baseVal.value = val;}
  });
  Object.defineProperty(r, 'cy', {
    get: function(){return e.cy.baseVal.value;},
    set: function(val){e.c2.baseVal.value = val;}
  });

  return r;
};

var motionCircle = function(id){
	var e = document.getElementById(id);
	var r = {};
  Object.defineProperty(r, 'cx', {
    get: function(){return e.cx.baseVal.value;},
    set: function(val){e.cx.baseVal.value = val;}
  });
  Object.defineProperty(r, 'cy', {
    get: function(){return e.cy.baseVal.value;},
    set: function(val){e.cy.baseVal.value = val;}
  });
  return r;
};

var lineOne = motionLines('motionLine1');
var lineTwo = motionLines('motionLine2');
var lineThree = motionLines('motionLine3');
var lineFour = motionLines('motionLine4');
var lineFive = motionLines('motionLine5');
var lineSix = motionLines('motionLine6');
var lineSeven = motionLines('motionLine7');

var treeBase1 = motionLines('treeBase1');
var treeTop1 = motionCircle('treeTop1');
var treeBase2 = motionLines('treeBase2');
var treeTop2 = motionCircle('treeTop2');

var straightLineList = [lineTwo, lineThree, lineFour, lineFive, lineSix, lineSeven];
var straightLineListLength = straightLineList.length;
var tree1Ahead = 'no';
var tree2Ahead = 'no'; 
function tree1(){
	setTimeout(function(){
    tree1Ahead = 'yes';
	}, 6000 * Math.random());
}
function tree2(){
	setTimeout(function(){
    tree2Ahead = 'yes';
	}, 6000 * Math.random());
}
tree1();
tree2();
var animate = function(){
  for(var i=0;i<straightLineListLength;i++){
    straightLineList[i].x1 += 35;
    straightLineList[i].x2 += 35;
    if(straightLineList[i].x2 > 800){
    	straightLineList[i].x1 = straightLineList[i].x1Base;
    	straightLineList[i].x2 = straightLineList[i].x2Base;
    }
  }
  lineOne.x1 += 3.6563;
  lineOne.x2 += 3.6563;
  lineOne.y1 -= 2.25;
  lineOne.y2 -= 2.25;
  if(lineOne.x1 > 125){
  	lineOne.x1 = lineOne.x1Base;
  	lineOne.x2 = lineOne.x2Base;
  	lineOne.y1 = lineOne.y1Base;
  	lineOne.y2 = lineOne.y1Base;
  }
  if(tree1Ahead === 'yes'){
  	treeTop1.cx += 35;
  	treeBase1.x1 += 35;
  	treeBase1.x2 += 35;
  }
  
  if(treeTop1.cx > 820){
  	treeTop1.cy = 800 * Math.random();
    treeBase1.y1 = treeTop1.cy - 5;
    treeBase1.y2 = treeTop1.cy + 70
  	treeTop1.cx = -100;
  	treeBase1.x1 = -100;
  	treeBase1.x2 = -100;
  	tree1Ahead = 'no';
  	tree1();
  }
  if(tree2Ahead === 'yes'){
  	treeTop2.cx += 35;
  	treeBase2.x1 += 35;
  	treeBase2.x2 += 35;
  }
  
  if(treeTop2.cx > 820){
  	treeTop2.cy = 800 * Math.random();
    treeBase2.y1 = treeTop2.cy - 5;
    treeBase2.y2 = treeTop2.cy + 110
  	treeTop2.cx = -100;
  	treeBase2.x1 = -100;
  	treeBase2.x2 = -100;
  	tree2Ahead = 'no';
  	tree2();
  }
  requestAnimationFrame(animate);
};




requestAnimationFrame(animate);