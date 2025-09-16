const form1 = document.querySelector('#contactForm');
const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;


form1.onsubmit = (e)=>{
    e.preventDefault();

    let lauki = document.querySelectorAll("input,textarea");
    let errors = [];


     

    if(lauki[0].value.length <2){
        errors.push("Ievadiet lūdzu vārdu");
        lauki[0].classList.add('error');
    }else{
        lauki[0].classList.remove('error');
    }


    // Epasta pārbaude

    if(!lauki[1].value.match(emailRegex)){
        errors.push("ievadiet pareizu epastu");
        lauki[1].classList.add('error');
    }else{
        lauki[1].classList.remove('error');
    }


    if(lauki[3].value.length <10){
        errors.push("Ievadiet lūdzu ziņojumu");
        lauki[3].classList.add('error');
    }else{
        lauki[3].classList.remove('error');
    }
       
        if( form1.querySelector(".errorDiv")){
            form1.querySelector(".errorDiv").remove();
        }

        // console.log(form1.querySelector(".errorDiv"));

        if(errors){
            form1.innerHTML +=`
                <div class="error errorDiv">
                    <ul >
                    </ul>
                </div>
            `;
            for(error of errors){
                form1.querySelector(".error ul").innerHTML +=`
                    <li>${error}</li>
                `
            }
        }else{
            form1.querySelector(".errorDiv").remove();
            form1.submit();
        }
    
        // console.log(lauki,errors);



}