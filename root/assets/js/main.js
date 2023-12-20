/**
    * @description      : 
    * @author           : eVmPr
    * @group            : 
    * @created          : 10/12/2023 - 18:57:56
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/12/2023
    * - Author          : eVmPr
    * - Modification    : 
**/
const element_tags = {
    btn:"BUTTON",
    sect: "SECTION"
}
function output(msg="", e){
    console.log(msg);
}
/**
 *  
 * @param {string} id 
 */
function changeSection(id){
    console.log("success: "+id);
    let sections = document.getElementsByTagName("section");
    var section = null;
    let btn =  $('.sect-btn[data-link="'+id+'"]');
    let btns = document.getElementsByClassName('sec-btn');
    //TODO: Toggle Sections
    // [ONLY ONE SECTION CAN BE VISIBLE AT A TIME]
    var i;
    for ( i=0;i<sections.length;i++){
        if (sections[i].id == id){
        sections[i].setAttribute("data-toggle","on");
        }else{
            sections[i].setAttribute("data-toggle","off");
        }
    }
    for (i=0;i<btns.length;i++){
        if (btns[i].getAttribute("data-link") == id){
            btns[i].setAttribute("data-active","");
        }else{
            btns[i].removeAttribute("data-active");
        }
    }
}

$(document).ready((evt)=>{
    $("#content section").each(function(num,element){
        
    });
    document.getElementById("nav-list").setAttribute("data-toggle","off");
    $(".sec-btn").each(function(num,e){
        if (e instanceof Element){
            let x = e.getAttribute("data-link");
            console.log(x);
            if (e.tagName.toUpperCase == element_tags.btn){
                console.log(e.getAttribute("data-link"));
            }            
            e.setAttribute("onclick", "changeSection('"+x+"');");
        }

    });
    document.getElementById("nav-toggle").setAttribute("onclick","toggle_display('nav-list');");
    // $("#nav-toggle").click(toggle_display("nav-box"));
    
});