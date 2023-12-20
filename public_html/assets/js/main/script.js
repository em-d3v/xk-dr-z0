/**
    * @description      : 
    * @author           : eVmPr
    * @group            : 
    * @created          : 09/12/2023 - 23:44:35
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/12/2023
    * - Author          : eVmPr
    * - Modification    : 
**/

/**
 * 
 * @param {any} id
 * @param {string} tagName
 * @param {A} data -  (string) and value (string)
 */
// const toggle = function (id, tagName, data = { dataType, value },) {
//     var val;
//     let element = $(id);
//     if (data.dataType === "attr") {
//         val = element.attr(data.value);

//     }
// }
const toggleSection = function (id, att) {
    let element = $(id);
    let a = element.attr("data-toggle");
    if (a === "on") {
        element.attr("data-toggle", "off");
    } else {
        element.attr("data-toggle", "on");

    }
}

$(document).ready(evt => {

    $(".sect-btn").each((num, element) => {
        let id = element.getAttribute("data-link");
        element.on("click", toggleSection(id, "data-toggle"));

    });
});