function attachEvents(){
  var modifiedNodeList=[];
  document.getElementById('shuffleBtn').addEventListener('click',function(){
    var numberList=document.getElementsByClassName("list-item");
    for (let i = numberList.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = numberList[i].innerHTML; 
      numberList[i].innerHTML = numberList[j].innerHTML;
      numberList[j].innerHTML = temp;
    }
  });
  document.getElementById('sortBtn').addEventListener('click',function(){
    var numberList=document.getElementsByClassName("list-item");;
    var ulSelector=document.getElementById('squareList');
    
      modifiedNodeList=Array.from(numberList).sort(function(a,b){
        return parseInt(a.innerText)-parseInt(b.innerText)
      });
      appendNodes(ulSelector,modifiedNodeList);
   
  });
  function appendNodes(node,nodeList){
    node.innerHTML="";
      for (let i = 0; i<nodeList.length;i++) {
        node.appendChild(nodeList[i]);
      }
  }
}
attachEvents();