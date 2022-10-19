const btn = document.getElementById("button");
const all = document.getElementById("all");
const intro = document.getElementById("intro");
const n_page = document.getElementById("n_page");
const desarrollo= document.getElementById("desarrollo");
const autores = document.getElementById("autores");
const caracteristicas = document.getElementById("caracteristicas");
const obras = document.getElementById("obras");
const desarrollo_absurdo = document.getElementById("desarrollo_absurdo");
const autores_absurdo = document.getElementById("autores-absurdo");
const caracteristicas_absurdo = document.getElementById("caracteristicas-absurdo");
const obras_absurdo = document.getElementById("obras-absurdo");
const conclusion = document.getElementById("conclusion");

const boton_left = document.getElementById("boton_left");
const boton_right = document.getElementById("boton_right");

var obras_body = document.getElementById("obras_body");
var obras_body_absurdo= document.getElementById("obras_body-absurdo");

const buton_p_left = document.getElementById("buton-p-left");
const buton_p_right = document.getElementById("buton-p-right");

const buton_p_left_absurdo = document.getElementById("buton-p-left-absurdo");
const buton_p_right_absurdo = document.getElementById("buton-p-right-absurdo");


const obr_text = document.getElementById("obr-text");
const obr_text_absurdo = document.getElementById("obr-text-absurdo");


/*
    Desarrollo switch
*/
const des_title = document.getElementById("des-title");
const des_text = document.getElementById("des-text");
const des_title2 = document.getElementById("des-title2");
const des_text2 = document.getElementById("des-text2");

const des_absurdo_title = document.getElementById("des-absurdo-title");
const des_absurdo_text = document.getElementById("des-absurdo-text");
const des_absurdo_title2 = document.getElementById("des-absurdo-title2");
const des_absurdo_text2 = document.getElementById("des-absurdo-text2");

var page_value = 1;
var page_quantity = 6;



btn.onclick = ()=>{
    page_value =2;
    n_page.textContent = page_value;
    all.style.display = 'none';
    intro.style.display = 'flex'; 
}
boton_left.onclick = () =>{
       
    page_value -=1;
    if(page_value < 1){
        page_value = 1; 
    }
    n_page.textContent = page_value;
    if(page_value == 1){
        all.style.display = 'flex';
        intro.style.display = 'none';

    }
    if(page_value == 2){
        all.style.display = 'none';
        intro.style.display = 'flex';
        desarrollo.style.display = 'none';
    }
    if(page_value == 3){
        intro.style.display = 'none';
        desarrollo.style.display = 'flex';
        autores.style.display = 'none';

    }
    if(page_value == 4){
        desarrollo.style.display = 'none';
        autores.style.display = 'flex';
        obras.style.display = 'none';
    }
    if(page_value ==5){
        autores.style.display = 'none';

        obras.style.display = 'flex';
        caracteristicas.style.display = 'none';
    }
     if(page_value == 6){
        obras.style.display = 'none';
        caracteristicas.style.display = 'flex';
        desarrollo_absurdo.style.display = 'none';

    }
    if(page_value == 7){
        caracteristicas.style.display = 'none';
        desarrollo_absurdo.style.display = 'flex';
        autores_absurdo.style.display = 'none';
    }
    if(page_value == 8){
        desarrollo_absurdo.style.display = 'none';
        autores_absurdo.style.display = 'flex';
        obras_absurdo.style.display = 'none';
    }
    if(page_value == 9){
        autores_absurdo.style.display = 'none';
        obras_absurdo.style.display = 'flex';
        caracteristicas_absurdo.style.display = 'none';
    }
    if(page_value == 10){
        obras_absurdo.style.display = 'none';
        caracteristicas_absurdo.style.display = 'flex';
        conclusion.style.display = 'none';
    }
    if(page_value == 11){
        caracteristicas_absurdo.style.display = 'none';
        conclusion.style.display = 'flex';
    }
}
boton_right.onclick = () =>{
    page_value +=1;
    if(page_value > page_quantity){
        page_value = page_quantity; 
    }
    n_page.textContent = page_value;
    if(page_value == 1){
        all.style.display = 'flex';
        intro.style.display = 'none';

    }
    if(page_value == 2){
        all.style.display = 'none';
        intro.style.display = 'flex';
        desarrollo.style.display = 'none';
    }
    if(page_value == 3){
        intro.style.display = 'none';
        desarrollo.style.display = 'flex';
        autores.style.display = 'none';

    }
    if(page_value == 4){
        desarrollo.style.display = 'none';
        autores.style.display = 'flex';
        obras.style.display = 'none';
    }
    if(page_value ==5){
        autores.style.display = 'none';

        obras.style.display = 'flex';
        caracteristicas.style.display = 'none';
    }
     if(page_value == 6){
        obras.style.display = 'none';
        caracteristicas.style.display = 'flex';
        desarrollo_absurdo.style.display = 'none';

    }
    if(page_value == 7){
        caracteristicas.style.display = 'none';
        desarrollo_absurdo.style.display = 'flex';
        autores_absurdo.style.display = 'none';
    }
    if(page_value == 8){
        desarrollo_absurdo.style.display = 'none';
        autores_absurdo.style.display = 'flex';
        obras_absurdo.style.display = 'none';
    }
    if(page_value == 9){
        autores_absurdo.style.display = 'none';
        obras_absurdo.style.display = 'flex';
        caracteristicas_absurdo.style.display = 'none';
    }
    if(page_value == 10){
        obras_absurdo.style.display = 'none';
        caracteristicas_absurdo.style.display = 'flex';
        conclusion.style.display = 'none';
    }
    if(page_value == 11){
        caracteristicas_absurdo.style.display = 'none';
        conclusion.style.display = 'flex';
    }
}
document.addEventListener("keydown",e=>{
    if(e.keyCode == 39){
        page_value +=1;
    if(page_value > page_quantity){
        page_value = page_quantity; 
    }
    n_page.textContent = page_value;
    if(page_value == 1){
        all.style.display = 'flex';
        intro.style.display = 'none';

    }
    if(page_value == 2){
        all.style.display = 'none';
        intro.style.display = 'flex';
        desarrollo.style.display = 'none';
    }
    if(page_value == 3){
        intro.style.display = 'none';
        desarrollo.style.display = 'flex';
        autores.style.display = 'none';

    }
    if(page_value == 4){
        desarrollo.style.display = 'none';
        autores.style.display = 'flex';
        obras.style.display = 'none';
    }
    if(page_value ==5){
        autores.style.display = 'none';
        obras.style.display = 'flex';
        caracteristicas.style.display = 'none';
    }
     if(page_value == 6){
        obras.style.display = 'none';
        caracteristicas.style.display = 'flex';
        desarrollo_absurdo.style.display = 'none';


    }
    if(page_value == 7){
        caracteristicas.style.display = 'none';
        desarrollo_absurdo.style.display = 'flex';
        autores_absurdo.style.display = 'none';
    }
    if(page_value == 8){
        desarrollo_absurdo.style.display = 'none';
        autores_absurdo.style.display = 'flex';
        obras_absurdo.style.display = 'none';
    }
    if(page_value == 9){
        autores_absurdo.style.display = 'none';
        obras_absurdo.style.display = 'flex';
        caracteristicas_absurdo.style.display = 'none';
    }
    if(page_value == 10){
        obras_absurdo.style.display = 'none';
        caracteristicas_absurdo.style.display = 'flex';
        conclusion.style.display = 'none';
    }
    if(page_value == 11){
        caracteristicas_absurdo.style.display = 'none';
        conclusion.style.display = 'flex';
    }
    }
    if(e.keyCode == 37){
        page_value -=1;
        if(page_value < 1){
            page_value = 1; 
        }
        n_page.textContent = page_value;
        if(page_value == 1){
            all.style.display = 'flex';
            intro.style.display = 'none';
    
        }
        if(page_value == 2){
            all.style.display = 'none';
            intro.style.display = 'flex';
            desarrollo.style.display = 'none';
        }
        if(page_value == 3){
            intro.style.display = 'none';
            desarrollo.style.display = 'flex';
            autores.style.display = 'none';
    
        }
        if(page_value == 4){
            desarrollo.style.display = 'none';
            autores.style.display = 'flex';
            obras.style.display = 'none';
        }
        if(page_value ==5){
            autores.style.display = 'none';
    
            obras.style.display = 'flex';
            caracteristicas.style.display = 'none';
        }
         if(page_value == 6){
            obras.style.display = 'none';
            caracteristicas.style.display = 'flex';
        desarrollo_absurdo.style.display = 'none';

        }
        if(page_value == 7){
            caracteristicas.style.display = 'none';
            desarrollo_absurdo.style.display = 'flex';
            autores_absurdo.style.display = 'none';
        }
        if(page_value == 8){
            desarrollo_absurdo.style.display = 'none';
            autores_absurdo.style.display = 'flex';
            obras_absurdo.style.display = 'none';
        }
        if(page_value == 9){
            autores_absurdo.style.display = 'none';
            obras_absurdo.style.display = 'flex';
            caracteristicas_absurdo.style.display = 'none';
        }
        if(page_value == 10){
            obras_absurdo.style.display = 'none';
            caracteristicas_absurdo.style.display = 'flex';
            conclusion.style.display = 'none';
        }
        if(page_value == 11){
            caracteristicas_absurdo.style.display = 'none';
            conclusion.style.display = 'flex';
        }
    }
})


des_title.onclick= () =>{
    des_text.style.display = 'flex';
    des_text2.style.display = 'none';
}
des_title2.onclick= () =>{
    des_text.style.display = 'none';
    des_text2.style.display = 'flex';
}

des_absurdo_title.onclick= () =>{
    des_absurdo_text.style.display='flex';
    des_absurdo_text2.style.display = 'none';
}
des_absurdo_title2.onclick= () =>{
    des_absurdo_text.style.display = 'none';
    des_absurdo_text2.style.display = 'flex';
}