function submit () {
    var k = 0;
    if (document.getElementById("input1").value !== "") {
        if (document.getElementById("input2").value !== "") {
            if (document.getElementById("input3").value !== "") {
                if (document.getElementById("input4").value !== "") {
                    alert("Success")
                }
                else {
                    k=1;
                }
            }
            else {
                k=1;
            }
        }
        else {
            k=1;
        }
    } 
    else {
        k=1;
    }

    if (k==1) {
        alert("Failed")
    }

    
    
}


