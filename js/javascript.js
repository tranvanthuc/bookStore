


function check(){
	
	var nearBy = new Array();
	nearBy[0]="z-nameBook";
	nearBy[1]="z-nameAuthor";
	nearBy[2]="z-yearPub";
	var error = new Array();
	error[0] = "Please enter Book name";
	error[1] = "Please enter Author";
	error[2] = "Please enter Publishing year";

	var data = new Array();
	data[0] = document.getElementById('nameBook').value;
	data[1] = document.getElementById('nameAuthor').value;
	data[2] = document.getElementById('yearPub').value;
	for(var i in data){
		if(data[i]===""){
			document.getElementById(nearBy[i]).innerHTML=error[i];
		}
		else {
			document.getElementById(nearBy[i]).innerHTML="";
		}
	}
	for(var i in data)
		if(data[i]==="")
			return false;
	return true;
};
function reset(){
	var nearBy = new Array();
	nearBy[0]="z-nameBook";
	nearBy[1]="z-nameAuthor";
	nearBy[2]="z-yearPub";
	document.getElementById('nameBook').value = "";
	document.getElementById('nameAuthor').value = "";
	document.getElementById('yearPub').value = "";
	for(var i=0; i<nearBy.length; i++)
		document.getElementById(nearBy[i]).innerHTML="";
};



function save(){
	if(check()){
		var data = new Array();
	data[0] = document.getElementById('nameBook').value;
	data[1] = document.getElementById('nameAuthor').value;
	data[2] = document.getElementById('yearPub').value;
	var dong = document.createElement('tr');
	for(var i=0;i<3;i++){
		var cot = document.createElement('td');
		var text = document.createTextNode(data[i]);
		cot.appendChild(text);
		dong.appendChild(cot);
	}
	var hienThi= document.getElementById('show');

	hienThi.appendChild(dong);
	reset();
	/*var btnDelete = document.createElement("input");
  	btnDelete.type="button";
  	btnDelete.value="Delete";
  	document.getElementById('btnDel').appendChild(btnDelete);
  	alert(typeof btnDelete);*/
	$("#myModal").modal("hide");
	}
	
};

function create(){
  var soDong=3;
  var soCot=3;
  var vungHT = document.getElementById("show");
  var bang = document.createElement("table");
  var data =  new Array();
  data[0]= ["Toi tai gioi, ban cung the","Tran Van Thuc", 1996];
  data[1]=	["Hay kien tri", "Do Xuan Mai", 1987];
  data[2]=	["Hoc gioi tieng anh khong kho","Huynh Ba Loc ", 1985];
 
  for(var i=0; i<soDong; i++){
    var colTemp= document.createElement("tr");
    for(var j=0;j<soCot;j++){
      var rowTemp = document.createElement("td");
      var text = document.createTextNode(data[i][j]);
      rowTemp.appendChild(text);
      colTemp.appendChild(rowTemp);
    }
    vungHT.appendChild(colTemp); 
  }

};
window.onload="create()";