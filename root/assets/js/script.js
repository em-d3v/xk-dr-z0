/**
    * @description      : 
    * @author           : eVmPr
    * @group            : 
    * @created          : 10/12/2023 - 18:37:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/12/2023
    * - Author          : eVmPr
    * - Modification    : 
**/

function output(msg) {
    console.log(msg);
}
function x(id){

}
/**
 * 
 * @param {string} id 
 */
function changeSection(id){
    let es = document.getElementsByClassName("sec-btn");
    let e = document.getElementById(id);
    console.log("function success");
}
$(document).ready(evt => {
    // let navbox = document.getElementById("nav-box");
    
    $("#nav-toggle").on("click", function () {
        console.log("Button Clicked");
        let toggle = $("aside.toggle");
        if (toggle.attr('data-toggle') == "on") {
            toggle.attr("data-toggle", "off");
        } else {
            toggle.attr("data-toggle", "on");
        }
    });

    $("section").change(evt=>{

    });
    // $("section").each((num,elem)=>{
    //     var e = null;
    //     if (elem instanceof Element){
    //         e = document.getElementById(elem.id);
    //        e.setAttribute("onchange", '')
    //     }
    // });
    $(".sect-btn").click(function(){
        changeSection($(".sec-btn").id);
    });
    
    $(".sect-btn").each(function(num,elem){
        // let a = elem.attr("data-link");
        // elem.attr("onclick", 'changeSection("'+a+'");');
        let e = $(elem);
        elem.click(function(evt){
            output("Button Clicked");
        });
        e.on("click",output("button clicked"));
    });
    // $(".sec-btn").each((num, e) => {
    //     let id = e.getAttribute("data-link");
    //     console.log(e);
    //     // let 
    //     let section = "#" + id;
      
    //     let element = $(e);
    //     element.click(evt => {
    //         togglesection(id);

    //         if ($(section).attr("data-toggle") == "on") {
    //             // e.setAttribute("data-active","");
    //             element.attr("data-active","");
    //         }else{
    //           element.removeAttr("data-active"); 
    //         }
    //     });
       

    //     // $(e).on("click", togglesection(id));

    //     // if (e instanceof Element){
    //     //     e.on("click", togglesection(id));
    //     // }

    //     // e.
    // });
    // $(".sect-btn").click(evt=>{
    //     console.log($(this));
    // });
    // $("section")
});