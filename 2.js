document.addEventListener('DOMContentLoaded',function() {
    var newRow = document.createElement("tr");
    var newRow2 = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    newRow.appendChild(cell1);
    newRow2.appendChild(cell2);
    document.getElementById("tabb").appendChild(newRow);
    document.getElementById("tabb").appendChild(newRow2);
    document.getElementById("start").onclick = function (o) {
        var maxx = 0 ;
        var fstentry;
        var scndentry;
        indexes =[0,0];
        var flag = true;
        var splitted_text = document.getElementById('1_1').value.split(' ');
        if (splitted_text.length==1){
            alert('Item cant be placed')
            return
        }
        for (var i = 0,end =splitted_text.length-1; i<=end; i++,end--){
            if (!parseInt(splitted_text[i])){
                alert('Item cant be placed')
                return
            }
            if (!parseInt(splitted_text[end])){
                alert('Item cant be placed(Could have been unnecessary bcsps)')
                return
            }
            if ((parseInt(splitted_text[i])+parseInt(splitted_text[end])>maxx)&& end!=i){
                maxx = Math.max(maxx,parseInt(splitted_text[i])+parseInt(splitted_text[end]));
                indexes[0]=i;
                indexes[1]=end;
            }
            if ((parseInt(splitted_text[i])%2==0) && (flag)){
                fstentry = i ; 
                flag = false;
            }
            if ((parseInt(splitted_text[end])%2==0)){
                scndentry = end ; 
            }
        }
        if (!flag){
            splitted_text[fstentry]=maxx;
        }
        else{
            splitted_text[scndentry]=maxx;
        }
        var result = splitted_text.join(' ');
        cell1.textContent = result+" -Changed array";
        cell2.textContent = indexes.join(' ')+" -Indexes";
    }
});
