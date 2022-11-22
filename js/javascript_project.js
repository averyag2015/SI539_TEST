///////////////////////SWAP BLEACHERS PHOTO///////////////////////////////////
function changeBleacher(){
  varId1='bleachers_album';
  if (varId1=="bleachers_album"){
      varId1='bleachers_fade';
      document.getElementById("img_bleacher").src='images/'+varId1+'.png';
      document.getElementById("img_bleacher").atl="second bleachers cover"
      console.log(varId1);
      console.log(document.getElementById("img_bleacher").src);
  }

    else{
      varId1='bleachers_fade';
      document.getElementById("img_bleacher").src='images/'+varId1+'.png'
      console.log(varId1);
    }
}
img_src=document.getElementById("img_bleacher");
img_src.addEventListener("click",changeBleacher);
console.log('test')

////////////////////////////////////////////////////////////
/////////////////////SWAP BLACK ALBUM///////////////////////
function changeBlack(){
  varId2='black_album';
  if (varId2=="black_album"){
      varId2='black_album2';
      document.getElementById("img_black").src='images/'+varId2+'.png';
      document.getElementById("img_black").atl="second MCR cover"
      console.log(varId1);
      console.log(document.getElementById("img_black").src);
  }

    else{
      varId2='black_album2';
      document.getElementById("img_black").src='images/'+varId2+'.png'
      console.log(varId2);
    }
}
img_src2=document.getElementById("img_black");
img_src2.addEventListener("click",changeBlack);
console.log('test')
