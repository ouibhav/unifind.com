const searchFun = () =>{
  let filter = document.getElementById('myInput').value;
  let myTable = document.getElementById('myTable');
  let tr = myTable.getElementsByTagName('tr');

  for(var i=0; i<tr.length; i++){
    let td = tr[i].getElementsByTagName('td')[3];

    if(td){
      let textvalue = td.textContent || td.innerHTML;
      if(parseInt(textvalue) >= parseInt(filter)){
        tr[i].style.display="";
      }else{
        tr[i].style.display = "none";
      }
    }

  }
}