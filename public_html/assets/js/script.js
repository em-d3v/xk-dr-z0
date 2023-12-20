/**
    * @description      : 
    * @author           : eVmPr
    * @group            : 
    * @created          : 07/12/2023 - 22:05:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/12/2023
    * - Author          : eVmPr
    * - Modification    : 
**/
/* 
 * 
 * Project: My Java Lib
 * Team Member(s): Elena
 * Date: For "...(...)" callee: Expected a method or function, but this has evaluated to a string (wrapper: f.t.SimpleScalar):
 ==> date?string  [in template "file:///C:/Users/eVmPr/Documents/NetBeansProjects/xk-dr-z0/nbproject/licenseheader.txt" at line 7, column 25]
 
 ----
 FTL stack trace ("~" means nesting-related):
 - Failed at: ${date?string("mm/dd/yyyy")}  [in template "file:///C:/Users/eVmPr/Documents/NetBeansProjects/xk-dr-z0/nbproject/licenseheader.txt" at line 7, column 23]
 - Reached through: #include "${project.licensePath}"  [in template "Templates/ClientSide/javascript.js" at line 28, column 1]
 ----
 */
/**
 * 
 * @param {Element} container 
 * @param {String} msg 
 */
function Typewrite(container,msg){
    let length = msg.length;
    var i=0;
    for (i=0;i<length;i++){
        container.innerHTML += msg.charAt(i);
    }
    
}
/**
 * 
 * @param {Element} e 
 */
function toggleSection(e){
    let dest = e.getAttribute("link");
    console.log("Link: "+dest);
}
/**
 * 
 * @param {Element} e 
 */
function toggle(e){

}



