//khai báo
// 4 let
//điều kiện
// 4 đk
//in ra

function ChangeMoney(){
    let amountt =document.getElementById("Amount").value;
    let fromm = document.getElementById("From").value;
    let to = document.getElementById("To").value;
    let result;

    if(fromm == "USD" && to == "VND"){
        result = 'result: '+(amountt * 23000) + "Đ";
    }else if(fromm == "VND" && to == "USD"){
        result = ' result:' + (amountt / 23000) + "S";
    }else if(fromm == "VND"){
        result = 'result:' + amountt + "Đ"
    }else{
        result = 'result:' + amountt + "$"
    }
    document.getElementById("Result").innerHTML = result;
}
