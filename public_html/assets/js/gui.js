/**
    * @description      : 
    * @author           : eVmPr
    * @group            : 
    * @created          : 08/12/2023 - 16:51:35
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 08/12/2023
    * - Author          : eVmPr
    * - Modification    : 
**/

// import "jquery";
class PopupBox{
    constructor(){
        this.title;

    }
}

/**
 * @class GUIWindow
 * creates a new gui window
 */
class GuiWindow{
    length="150px";
    width = "150px";
    constructor(){
        this.name="";
        this.title="";
        // this.length="";
        // this.width="";
        this.content=null;

    }
    generate(){
        let panel= document.createElement("div");
        panel.style.width=this.width;
        panel.style.height=this.width;
        panel.style.display="block";
        
    }
    /**
     * toggles window on or off
     */
    toggle(){

    }
}