function calculate() {
    var n1= parseInt(document.getElementById("n1").value);
    var n2= parseInt(document.getElementById("n2").value);
    var op= document.getElementById("op").value;
    var res= 0;

    if (op== "Addition (+)") {
        res=n1+n2;
    }
    else if (op== "Subtraction (-)") {
        res=n1-n2;
    }
    else if (op== "Multiplication (x)") {
        res=n1*n2;
    }
    else if (op== "Division (/)") {
        res=n1/n2;
    }

    document.getElementById("res1").innerText = res;
    event.preventDefault();
}