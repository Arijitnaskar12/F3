let buttonId=document.getElementById("adduser");
// console.log(buttonId);
let error=document.querySelector(".errorMessage");
let containerTemp=document.querySelector(".containerTemp");
let index=1;
let del=document.getElementById("del");
buttonId.addEventListener("click",()=>{
    
    let inputName=document.getElementById("name");
    let inputAge=document.getElementById("age");
    let inputProfession=document.getElementById("profession");
    if(inputName.value==""||inputAge.value==""||inputProfession.value=="")
    {
        error.innerHTML=`Error : Please Make sure All the fields are filled before adding in an employee !`;
        error.style.color="red";
    }else{
        
        del.innerHTML=``;
        error.innerHTML=`Success : Employee Added!`;
        error.style.color="green";

        let obj={};
        obj.id=Date.now();
        // index++ ;
        obj.name=`${inputName.value}`;
        obj.profession=`${inputProfession.value}`;
        obj.age=`${inputAge.value}`;
       appendUser(obj);
        inputAge.value="";
        inputName.value="";
        inputProfession.value="";
    }
});
function appendUser(obj)
{
let innerCard=` <div class="details">
  <div>${obj.id}</div>
<div>Name:${obj.name}</div>
<div>Profession:${obj.profession}</div>
<div>Age:${obj.age}</div>
</div>
<button type="button" class=" delete1" id="delete">Delete User</button>`;
let cardContainer=document.createElement("div");
    cardContainer.className="card";
    cardContainer.innerHTML=innerCard;
    containerTemp.append(cardContainer);
    let deleteButton=document.querySelectorAll(".delete1");
    for(let i=0;i<deleteButton.length;i++)
    {
        deleteButton[i].addEventListener("click",function(){
           
            deleteUser(this.parentNode);
        });
    }
      
}
function deleteUser(TobeDeleted)
{
    // if(index!=0) index--;
    TobeDeleted.remove();
  
}


