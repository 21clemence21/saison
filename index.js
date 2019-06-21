const input = document.getElementById('input');
const saison = document.getElementById('saison');
console.log(input);


input.addEventListener('change', ()=> {
    console.log("sault");
    var inputVal = input.value ;
    console.log(inputVal);
    var moonlanding = new Date(inputVal);
     var mois = moonlanding.getMonth();
     var total = mois + 1;
     var day = moonlanding.getDate();
     console.log(total);
     console.log(day);
     let image = document.getElementById('image');
    
    if (total < 3){
      saison.innerHTML = "nous sommes en hiver";
      image.setAttribute("src","image.jpg");
    }else if( total === 3 && day <= 21 ) {
      saison.innerHTML= "nous sommes en hiver aussi";
      image.setAttribute("src","image.jpg");
    } else if (total ===3 && day >= 21){
      saison.innerHTML= "nous sommes au Printemps";
      image.setAttribute("src","printemps.jpeg");
    } else if (total < 6 & total > 3){
      saison.innerHTML ="Nous sommes au Printemps";
      image.setAttribute("src","printemps.jpeg");
    } else if(total === 6 && day <= 21){
      saison.innerHTML= "Nous sommes toujours au Printemps mais en Juin";
      image.setAttribute("src","printemps.jpeg");
    } else if (total === 6 && day >= 21){
      saison.innerHTML="Nous sommes en Ete en juin";
      image.setAttribute("src","ete.jpg");
    } else if(total<9 & total >6){
      saison.innerHTML="Nous sommes en Ete";
      image.setAttribute("src","ete.jpg");
    }else if(total ===9 && day <= 22){
      saison.innerHTML="Nous sommes en Ete";
      image.setAttribute("src","ete.jpg");
    }else if( total < 12 & total > 6 ){
      saison.innerHTML="Nous sommes en Automne";
      image.setAttribute("src","automne.jpeg");
    } else if(total === 12 && day < 22){
      saison.innerHTML="Nous sommes toujours en Automne mais au mois de Décembre";
      image.setAttribute("src","automne.jpeg");
    } else if (total === 12 && day >= 22 ) {
      saison.innerHTML="Nous sommes en Hiver";
      image.setAttribute("src","image.jpg");
    } else {
      saison.innerHTML ="Ta saison n'existe pas";
    }
  

 //   var today = new Date();
//var spring = new Date(today.getFullYear(), 2, 21);
//var summer = new Date(today.getFullYear(), 5, 21);
//var autumn = new Date(today.getFullYear(), 8, 21);
//var winter = new Date(today.getFullYear(), 11, 21);

//if (today < spring && today >= winter) {
  // code pour hiver
//}



})