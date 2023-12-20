/**
    * @description      : 
    * @author           : eVmPr
    * @group            : 
    * @created          : 08/12/2023 - 16:47:27
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 08/12/2023
    * - Author          : eVmPr
    * - Modification    : 
**/

/**
 * 
 * @param {Element} e element
 * @param {string} attribute Attribute type
 * 
 */
let toggle = function(e, attribute){
    console.log("to be implemented");
    // if (e.attr(attribute)=="on")
    if (attribute==="data-link"){
        // if e.attr()
    }
}

let togglesection = function(id){
    let s = document.getElementsByTagName("section");
    let e = $(id);
    for (let i=0; i < s.length;i++){
        if (s[i].id === e.id){
            if (e.attr("data-toggle")==="on"){
                e.css("style","none");
            }else{
                e.css("display","block");
            }
        }else{
            if (e.css("display")==="block"){
                e.attr("data-toggle","off");
                e.css("style","none");
            }
        }
    }
    
}
let typewrite=function(message,container){

}
