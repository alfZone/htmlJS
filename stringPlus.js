/**
 * @author alf
 * @copyright 2022
 * @ver 1.2
 */


 class stringPlus {
  
  
    constructor() {
    }
    

    retira_acentos(str){

      var com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
      var sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
      var novastr="";
      for(int i=0; i<str.length; i++) {
        troca=false;
        for (a=0; a<com_acento.length; a++) {
          if (str.substring(i,1)==com_acento.substring(a,1)) {
            novastr+=sem_acento.substring(a,1);
            troca=true;
            break;
          }
        }
        if (troca==false) {
          novastr+=str.substr(i,1);
        }
      }
      return novastr;
    }
    
    
  }
