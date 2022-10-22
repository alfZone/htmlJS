/**
 * @author alf
 * @copyright 2022
 * @ver 1.0
 * 
 * Object to control data time in pt
 */


 class dateTime {

	get getDataH(){
		let dataH;
		let d = new Date();
		let m=d.getMonth()*1 +1
		dataH=d.getDate() + "/" + m + "/" + d.getFullYear() ;
		return dataH;
	}
	
	get getData(dt){
	  let data;
	  let d = new Date(dt);
	  let me= 1 +d.getMonth()*1 
	  data=d.getDate() + "/" + me + "/" + d.getFullYear() ;
	  return data;
	}
	
	get getDiaSemana(dt){
	  let dias[];
	  dias[0] = "Segunda";
	  dias[1] = "Terça";
	  dias[2] = "Quarta";
	  dias[3] = "Quinta";
	  dias[4] = "Sexta";
	  dias[5] = "Sábado";
	  dias[6] = "Domingo";
	  var n = dias[dt.getDay()];
	  return n;
	}

}
