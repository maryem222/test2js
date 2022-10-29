SearchName=document.getElementById('SearchName');
search=document.getElementById('search');
rowData=document.getElementById('row');
row2=document.getElementById('row2');
row3=document.getElementById('row3');
row44=document.getElementById('row4');
SearchLetter=document.getElementById('SearchLetter');
container1=document.getElementById('container1');
container2=document.getElementById('container2');
container3=document.getElementById('container3');
container4=document.getElementById('container4');
categ=document.getElementById('categ');
area=document.getElementById('area');
contact=document.getElementById('contact');
ing=document.getElementById('ing');
categLayer=document.getElementById('row3');
divCat=document.querySelectorAll('.layer2 p');
var arrayP=[];
let category=0;
let arrayCategory=[];
let text=document.getElementById('text');
let namef=document.getElementById('namef');
let mail=document.getElementById('mail');
let pass=document.getElementById('pass');
let repass=document.getElementById('repass');
let phone=document.getElementById('phone');
let age=document.getElementById('age');
let inval=document.getElementById('inval');
let invalname=document.getElementById('invalname');
let invalpass=document.getElementById('invalpass');
let invalrepass=document.getElementById('invalrepass');
let invalage=document.getElementById('invalage');
let invalphone=document.getElementById('invalphone');
let invalmail=document.getElementById('invalmail');
let submit=document.getElementById('submit');




///////////////navbar animation code////////////


$(document).ready(function(){
    $('.sidebarbtn').click(function(){
        $('.sidebar').toggleClass('active');
        $('.sidebarbtn').toggleClass('toggle');
    })
    

})


$(document).ready(function(){
    $('#search').click(function(){
        $('.sidebar').toggleClass('active');
        $('.sidebarbtn').toggleClass('toggle');
    })
    

})

$(document).ready(function(){
    $('#categ').click(function(){
        $('.sidebar').toggleClass('active');
        $('.sidebarbtn').toggleClass('toggle');
    })
    

})
$(document).ready(function(){
    $('#area').click(function(){
        $('.sidebar').toggleClass('active');
        $('.sidebarbtn').toggleClass('toggle');
    })
    

})
$(document).ready(function(){
    $('#contact').click(function(){
        $('.sidebar').toggleClass('active');
        $('.sidebarbtn').toggleClass('toggle');
    })
    

})



$('.sidebarbtn').click(function(){
             $('#lists').animate({
top:'0'
             },1000)})



console.log(categLayer);

//(1)Fetch Data of finding meal by name
async function getData1(q){
    let apiData1=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`);
    console.log(apiData1);
     array1=await apiData1.json();
    console.log(array1);
    
    showData();
}



//(2)Fetch Data of finding meal by first letter
async function getData2(a){
    let apiData2=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${a}`);
    console.log(apiData2);
     array2=await apiData2.json();
    console.log(array2);
    
    showData2();
}


//(3)Fetch Data of Categories
async function getData3(){
    let apiData3=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    console.log(apiData3);
     array3=await apiData3.json();
    console.log(array3);
    
    showData3();
}

//(4)Fetch Data of Filter by category
async function getData4(x){
    let apiData4=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`);
    console.log(apiData4);
    array4=await apiData4.json();
    console.log(array4);
    
    showData4();
   
}


//(42)Fetch Data of Filter by category
async function getData42(x){
    let apiData42=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${x}`);
    console.log(apiData42);
    array42=await apiData42.json();
    console.log(array42);
    
    showData42();
   
}







//(6)Fetch Data of Filter by Ingredients
async function getData6(x){
    let apiData6=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    console.log(apiData6);
    array6=await apiData6.json();
    console.log(array6);
    
    showData6();
   
}

//(7)Fetch Data of Discription of Ingredients
async function getData7(x){
    let apiData7=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${x}`);
    console.log(apiData7);
    array7=await apiData7.json();
    console.log(array7);
    
    showData7();
   
}



//(8)Fetch Data of Area
async function getData8(){
    let apiData8=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    console.log(apiData8);
    array8=await apiData8.json();
    console.log(array8);
    
    showData8();
   
}


//(8)Fetch Data of Filter by Area
async function getData9(x){
    let apiData9=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${x} `);
    console.log(apiData9);
    array9=await apiData9.json();
    console.log(array9);
    
    showData9();
   
}








//Search by name
SearchName.addEventListener('keyup',  function(){
    var word=SearchName.value;
    getData1(word);
    
    console.log(word);

   


})

//Search by letter
SearchLetter.addEventListener('keyup',  function(){
    var letter=SearchLetter.value;
   
    
    console.log(letter);

    getData2(letter);


})




// start of showData of search by name
function showData(){
    var divs='';
    var sizes = array1.meals.length;
    container1.classList.remove('d-none');
    container2.classList.add('d-none')
    for (let k=0;k<sizes ;k++){
       divs+= `<div class="col-md-3 item-layer " >
       <img class="w-img " src="${array1.meals[k].strMealThumb}">
       <div class="layer" id=${array1.meals[k].strMeal}>
       <p class=' ms-2' >${array1.meals[k].strMeal}</p>
       </div>
     </div>`
    }

     rowData.innerHTML=divs

console.log(sizes)
}
// end of showData of search by name





// start of showData of search by letter
function showData2(){
    var divss='';
    var size = array2.meals.length;
    container1.classList.add('d-none');
    container2.classList.remove('d-none')
   for (let i=0;i<size ;i++){
       divss += `<div class="col-md-3 item-layer " >
       <img class="w-img " src="${array2.meals[i].strMealThumb}">
       <div class="layer "id=${array2.meals[i].strMeal} >
       <p class=' ms-2'>${array2.meals[i].strMeal}</p>
       </div>
 
     </div>`

     
     
    }


     row2.innerHTML=divss;


}
// end of showData of search by letter






// start of showData of Categories
function showData3(){
    let divsCateg='';
    let size = array3.categories.length;
    container1.classList.add('d-none');
    container2.classList.remove('d-none')
   for (let i=0;i<size ;i++){
    divsCateg += `<div  class="col-md-3 item-layer   ">
       <img class="w-img shadow " src="${array3.categories[i].strCategoryThumb}">
       <div id="categLayer" class="layer2   ">
       
       <p id=${array3.categories[i].strCategory}  class=' ms-2 textCat h-40 mt-2'><span id=${array3.categories[i].strCategory} class='size32 mb-2'>${array3.categories[i].strCategory}</span><br>  ${array3.categories[i].strCategoryDescription}</p>

       </div>
 
     </div>`

     
     
    }


     row3.innerHTML=divsCateg;
     console.log(divCat)


     //trial of making array of category name start
     for (let i=0;i<size ;i++){
        console.log(array3.categories[i].idCategory)
        console.log(array3.categories[i].strCategory)
        category=array3.categories[i].strCategory;
        arrayCategory.push(category)

     }
     
     console.log(arrayCategory);



     //trial end


}
// end of showData of search by letter





// start of showData of filter by category
let filterarr=[];
function showData4(){
    let divsCategf='';
    let size = array4.meals.length ;
    container1.classList.add('d-none');
    container2.classList.remove('d-none');
    
   for (let i=0;i<size ;i++){
    divsCategf += `<div  class="col-md-3 item-layer   ">
       <img class="w-img border border-dark " src="${array4.meals[i].strMealThumb}">

       <div id="categLayer" class="layer2   ">
        <p   class=' ms-2 textCat h-40 mt-2'><span  class='size32 mb-2'>${array4.meals[i].strMeal}</span></p>

       </div>
 
     </div>`
     //to make array of divs its name is filterarr
     filterarr.push(divsCategf)
     
     
    }
 console.log(filterarr);

     row3.innerHTML=divsCategf;


}
// end of showData of filter by category



// start of showData of filter by ingredients
let filterarr2=[];
function showData42(){
    let divsCategff='';
    let size = array42.meals.length ;
    container1.classList.add('d-none');
    container2.classList.remove('d-none');
    
   for (let i=0;i<size ;i++){
    divsCategff += `<div  class="col-md-3 item-layer   ">
       <img class="w-img border border-dark " src="${array42.meals[i].strMealThumb}">

       <div id=${array42.meals[i].idMeal} class="layer2   ">
        <p id=${array42.meals[i].idMeal}   class=' ms-2 textCat h-40 mt-2'><span id=${array42.meals[i].idMeal}  class='size32 mb-2'>${array42.meals[i].strMeal}</span></p>

       </div>
 
     </div>`
     //to make array of divs its name is filterarr
     filterarr2.push(divsCategff)
     
     
    }
 console.log(filterarr2);

     row3.innerHTML=divsCategff;


}
// end of showData of filter by ingredients







// start of showData of Ingredients
function showData6(){
    var divss='';
    var size = 20;
    container1.classList.add('d-none');
    container2.classList.add('d-none');

    
   for (let i=0;i<size ;i++){
//start of limiting paragraph
let z=array6.meals[i].strDescription;
let ParagraphWords=z.split(' ');
let paragraph=document.getElementById('paragraph');

let sum=''

for(let i=0;i<20;i++){

   sum+=ParagraphWords[i]+' ';
   
}
console.log(sum);
//end of limiting paragrapg




       divss += `<div id=${array6.meals[i].strIngredient}  class="col-md-3  w-25 text-center   ">
       <div  class='  mt-5 bg-black  '>
       <icon id=${array6.meals[i].strIngredient}  class='fa-solid fa-bowl-food fa-3x color '></icon>
       
       <p id=${array6.meals[i].strIngredient}   class=' ms-2 size32 text-white'>${array6.meals[i].strIngredient} </p>
       <span id=${array6.meals[i].strIngredient}   class='text-white' id='paragraph '>${sum}</span>
       
       
       </div>
     </div>`

     

     
    }

     row3.innerHTML=divss;


}
// end of showData of Ingredients




// start of showData of Description of ingredient
let filterarr3=[];
function showData7(){
    let divsCategf='';
    let size = array7.meals.length ;
    container1.classList.add('d-none');
    container2.classList.remove('d-none');
    
   for (let i=0;i<size ;i++){
    divsCategf += 
    `    <div class="col-md-4 ">
        <img class= 'w-100 mb-1' src='${array7.meals[i].strMealThumb}'>
        <h2 class='whitetext'>${array7.meals[i].strMeal}</h2>

        </div>
        




        <div class="col-md-6 ms-2 whitetext">
        <h2>Instructions</h2>
        <p>${array7.meals[i].strInstructions}</p>
    <ul>
        <li>Area <span>:${array7.meals[i].strArea}</span></li>
        <li>Category<span>:${array7.meals[i].strCategory}</span></li>
    </ul>
    <h2>Recipes</h2>
    <div class='btng'>
    <button>${array7.meals[i].strIngredient1}</button>
    <button>${array7.meals[i].strIngredient2}</button>
    <button>${array7.meals[i].strIngredient3}</button>
    <button>${array7.meals[i].strIngredient4}</button>

    <br>
    <button>${array7.meals[i].strIngredient5}</button>
    <button>${array7.meals[i].strIngredient6}</button>
    <button>${array7.meals[i].strIngredient7}</button>
    <button>${array7.meals[i].strIngredient8}</button>
    <button>${array7.meals[i].strIngredient9}</button>
    <br>
    <button>${array7.meals[i].strIngredient10}</button>
    <button>${array7.meals[i].strIngredient11}</button>
    <button>${array7.meals[i].strIngredient12}</button>
    <button>${array7.meals[i].strIngredient13}</button>

    </div>

    <h2>Tags :</h2>
    <a href='${array7.meals[i].strTags}'><button>tag</button></a> <br>

    <a  href='${array7.meals[i].strSource}'><button class='greenb '>Source</button></a>
    <a  href='${array7.meals[i].strYoutube}'><button class='redb'>YouTube</button></a>

        </div>`
 
 
 

     //to make array of divs its name is filterarr
     filterarr3.push(divsCategf)
     
     
    }
 console.log(filterarr3);

     row3.innerHTML=divsCategf;


}
// end of showData of Description of ingredient








// start of showData of Area
function showData8(){
    var divss='';
    var size = array8.meals.length ;
    
    container1.classList.add('d-none');
    container2.classList.add('d-none');

    
   for (let i=0;i<size ;i++){

       divss += `<div id=${array8.meals[i].strArea} class="col-md-3  w-25 text-center    ">
       <div  class='  mt-5 bg-black  '>
       <icon id=${array8.meals[i].strArea}  class='fa-solid fa-city  fa-3x colorred '></icon>
       
       <p id=${array8.meals[i].strArea}  class=' ms-2 size32 text-white'>${array8.meals[i].strArea} </p>
       
       
       
       </div>
     </div>`

     
    }

     row3.innerHTML=divss;


}
// end of showData of Ingredients






// start of showData of filter by Area
let filterarr4=[];
function showData9(){
    let divsCategff='';
    let size = array9.meals.length ;
    container1.classList.add('d-none');
    container2.classList.remove('d-none');
    
   for (let i=0;i<size ;i++){
    divsCategff += `<div  class="col-md-3 item-layer    ">
       <img class="w-img border border-dark " src="${array9.meals[i].strMealThumb}">

       <div id=${array9.meals[i].idMeal} class="layer2   ">
        <p id=${array9.meals[i].idMeal}   class=' ms-2 textCat h-40 mt-2'><span id=${array9.meals[i].idMeal}  class='size32 mb-2'>${array9.meals[i].strMeal}</span></p>

       </div>
 
     </div>`
     //to make array of divs its name is filterarr
     filterarr2.push(divsCategff)
     
     
    }
 console.log(filterarr4);

     row3.innerHTML=divsCategff;


}
// end of showData of filter by Area





//pressing on search in navbar
search.addEventListener('click',function(){
    SearchLetter.classList.remove('d-none');
    SearchName.classList.remove('d-none');
    row2.classList.add('d-none');
    row3.classList.add('d-none');
    
   

})

















//pressing on category in navbar
categ.addEventListener('click',function(){
    SearchLetter.classList.add('d-none');
    SearchName.classList.add('d-none');
    row2.classList.add('d-none');
    row3.classList.remove('d-none');
    getData3();

})



 //filter by category eveeeeent start
 container3.addEventListener('click',function(e){
    SearchLetter.classList.add('d-none');
    SearchName.classList.add('d-none');
   
//to get the inner text from tag
let u= e.target.id;
console.log(u);
getData4(u);


   
})
//filter by category eveeeeent end




//pressing on ingred in navbar
ing.addEventListener('click',function(){
    SearchLetter.classList.add('d-none');
    SearchName.classList.add('d-none');
    row2.classList.add('d-none');
    row3.classList.remove('d-none');
    getData6();

})



//filter by ingredient eveeeeent start
container3.addEventListener('click',function(e){
    SearchLetter.classList.add('d-none');
    SearchName.classList.add('d-none');
   
//to get the inner text from tag
let u= e.target.id;
// alert(u);
getData42(u);


   
})
//filter by category eveeeeent end



//filter by Description ingredient eveeeeent start
container3.addEventListener('click',function(e){
    SearchLetter.classList.add('d-none');
    SearchName.classList.add('d-none');
   
//to get the inner text from tag
let u= e.target.id;
// alert(u);
getData7(u);


   
})
//filter by Description ingredient end



//pressing on Area in navbar
area.addEventListener('click',function(){
    SearchLetter.classList.add('d-none');
    SearchName.classList.add('d-none');
    row2.classList.add('d-none');
    row3.classList.remove('d-none');
    getData8();

})


//filter by Areaaaa start
container3.addEventListener('click',function(e){
    SearchLetter.classList.add('d-none');
    SearchName.classList.add('d-none');
    row2.classList.add('d-none');
//to get the inner text from tag
let u= e.target.id;
// alert(u);
getData9(u);
  
})
//filter by Areaaaa end

                                ////////contact section//////////////


//pressing on contact
contact.addEventListener('click',function(){
    SearchLetter.classList.add('d-none');
    SearchName.classList.add('d-none');
    row2.classList.add('d-none');
    row4.classList.remove('d-none');
    showData10()

})

// start of showData of contact

// function showData10(){
//     let divsCategff='';
    
//     container1.classList.add('d-none');
//     container2.classList.remove('d-none');
//     container3.classList.add('d-none');
    
   
//     divsCategff = `<div class="col-md-9 m-auto mt-5  ">
//       <h2 class="text-center mb-5">Contact Us ...</h2>
//       <div class="d-flex flex-row ">

//         <input id="namef" type="text" class="form-control pb-2 me-5" placeholder="Enter your Name" aria-label="First name">
      
        
      
      
//         <input id="mail" type="text" class="form-control pb-2" placeholder="Enter E-mail" aria-label="First name">

      
//     </div>

//     <div class="d-flex flex-row ">
//       <div id="invalname" class="alert alert-danger w-50 d-none  ">
//         <p>The name is invalid</p>
//       </div>

//       <div id="invalmail" class=" alert alert-danger w-50  d-none ms-left  ">
//         <p>Enter valid email. *Ex: xxx@yyy.zzz</p>
//       </div>
//     </div>

    
  




//     <div class="d-flex flex-row mt-3 ">

//       <input id="phone" type="text" class="form-control pb-2 me-5" placeholder="Enter Phone" aria-label="First name">
//       <input id="age" type="text" class="form-control pb-2" placeholder="Enter Age" aria-label="First name">
      

//     </div>

//     <div class="d-flex flex-row ">
//       <div id="invalphone" class="alert alert-danger w-50  d-none  ">
//         <p>Enter valid Phone Number</p>
//       </div>

//       <div id="invalage" class=" ms-left alert alert-danger w-50  d-none ">
//         <p>Enter valid Age</p>
//       </div>
//     </div>


//     <div class="d-flex flex-row mt-3 ">

//       <input id="pass" type="text" class="form-control pb-2 me-5" placeholder="Enter Password" aria-label="First name">
//       <input id="repass" type="text" class="form-control pb-2" placeholder="Enter RePassword" aria-label="First name">
      

//     </div>


//     <div class="d-flex flex-row ">
//       <div id="invalpass" class="alert alert-danger w-50  d-none  ">
//         <p>Enter valid password *Minimum eight characters, at least one letter and one number:*</p>
//       </div>

//       <div id="invalrepass" class=" ms-left alert alert-danger w-50  d-none  ">
//         <p>Enter valid Repassword</p>
//       </div>
//     </div>


//     <button id="submit" disabled class="btn btn-danger position-relative mid mt-3  ">Submit</button> 
// </div>
// `
     
// row44.innerHTML=divsCategff; 
     
     
//     }

    



// end of showData of contact








///////contaaaaact section from getting attributes to the end




function nameValidate(){
    let nameValid= /^[a-zA-Z]+$/;
    let nameValue=namef.value;
    let z2=nameValid.test(nameValue);
    if(z2){
        invalname.classList.add('d-none');
        
        return(true);
    }
    else{
        invalname.classList.remove('d-none');
       return(false);
    }
}

namef.addEventListener('blur',nameValidate);


function mailValidate(){
    let mailValid= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let mailValue=mail.value;
    let z3=mailValid.test(mailValue);
    if(z3){
        invalmail.classList.add('d-none');
        return(true)
    }
    else{
        invalmail.classList.remove('d-none');
      

        return(false)
    }
}

mail.addEventListener('blur',mailValidate);


function ageValidate(){
    let ageValid=/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/ ;
    let ageValue=age.value;
    let z3=ageValid.test(ageValue);
    if(z3){
        invalage.classList.add('d-none');
        return(true)
    }
    else{
        invalage.classList.remove('d-none');
        return(false)
    }
}

age.addEventListener('blur',ageValidate);


function phoneValidate(){
    let phoneValid=/^\d{11}$/ ;
    let phoneValue=phone.value;
    let z3=phoneValid.test(phoneValue);
    if(z3){
        invalphone.classList.add('d-none');
        return(true)
    }
    else{
        invalphone.classList.remove('d-none');
        return(false)
    }
}

phone.addEventListener('blur',phoneValidate);


function passValidate(){
    let passValid=/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/ ;
    let passValue=pass.value;
    let z3=passValid.test(passValue);
    if(z3){
        invalpass.classList.add('d-none');
        return(true)
    }
    else{
        invalpass.classList.remove('d-none');
        return(false)
    }
}

pass.addEventListener('blur',passValidate);


function repassValidate(){
   
    let repassValue=repass.value;
    let passValue=pass.value;
    if(repassValue==passValue){
        invalrepass.classList.add('d-none');
        return(true)
    }
    else{
        invalrepass.classList.remove('d-none');
        return(false)
    }
}

repass.addEventListener('blur',repassValidate);


function submitable(){
    if((nameValidate()&&passValidate()&&ageValidate()&&passValidate()&&repassValidate()&&ageValidate())==true){
submit.removeAttribute('disabled');

    }
    else{
        submit.setAttribute('disabled','');
    }

}

repass.addEventListener('blur',submitable);






