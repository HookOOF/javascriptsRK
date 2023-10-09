document.addEventListener('DOMContentLoaded',function() {
    var newRow = document.createElement("tr");
    var cell1 = document.createElement("td");
    newRow.appendChild(cell1);
    document.getElementById("tabb").appendChild(newRow);
    document.getElementById("start").onclick = function (o) {
        var avgsumm = 0 ;
        var counter = 0 ; 

        var splitted_text = document.getElementById('1_1').value.split(' ');
        for (var i = 0; i <= splitted_text.length - 1; i++){
            if (!parseInt(splitted_text[i])){
                alert('Item cant be placed')
                return
            }
            if (parseInt(splitted_text[i])>=0){
                avgsumm+=parseInt(splitted_text[i]);
                counter++;
            }

        }
        avgsumm/=counter;
        splitted_text[parseInt((splitted_text.length - 1)/2)]=avgsumm;
        var result = splitted_text.join(' ');
        cell1.textContent = result;
    }
});
