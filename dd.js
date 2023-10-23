var str = "&nbsp;";
var ress = "";
var vlojen = 0; 
function func(elem,o) {
    if (elem.nodeType == 1) {
        o++;
        var child = elem.firstChild;
    while (child) {
        if (child.nodeType == 1) {
            str ="&nbsp;".repeat(o);
            ress += str + child.nodeName+"</br>";
            console.log(child.nodeName);
            func(child,o);
            };
        child = child.nextSibling;
        };
    };
};

window.onload = function () {
    document.getElementById("start").onclick = function (o) {
    console.log("started");
    func(document.getElementById("2"),vlojen);
    document.getElementById("result").innerHTML=ress;
    }
}