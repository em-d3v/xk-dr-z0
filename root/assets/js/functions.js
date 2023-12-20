/**
    * @description      : 
    * @author           : eVmPr
    * @group            : 
    * @created          : 11/12/2023 - 16:21:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/12/2023
    * - Author          : eVmPr
    * - Modification    : 
**/

function togglesection(id) {
    //if (dataType == "")
    let e = $(id);
    if (e.attr("data-toggle") == "on") {
        e.attr("data-toggle", "off");
    } else {
        e.attr("data-toggle", "on");
    }
}
/**
 * 
 * @param {string} id element Id
 */
function toggle_display(id) {
    let elem = document.getElementById(id);
    let attr = elem.getAttribute("data-toggle");
    if (attr === "on") {
        elem.setAttribute("data-toggle", "off");
    } else {
        elem.setAttribute("data-toggle", "on");
    }
}