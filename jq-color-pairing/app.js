
/*1ere étape 
Les boutons doivent avoir leur fond de la couleur qui se trouvve dans le
data attribute data-color*/

var x=$("input");
console.log(x);

for (var i = 0;i<x.length; i++) {

	var y = $(x[i]).data("color");
	$(x[i]).css("backgroundColor",y);

}

/*2e étape 
Un click sur le bouton doit mettre cette couleur en fond*/

$("input").click(function(){
	var z=$(this).data("color");
	if (checked()){
		$("body").css("color",z);
	}
	else{
		$("body").css("background-color",z);
	}
});
/* 3e étape
quand la case #modify-texte est cochée, la couleur du texte
doit etre modifiée*/
function checked(){

	return $("#modify-texte").is(":checked");

}
it 