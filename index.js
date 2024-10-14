
let taskbox=document.querySelector(".contant_box")
let addbtn=document.querySelector("#add_btn")
let tasklist=document.querySelector("#tasklist")
let input_field=document.querySelector("#text")
let time_input=document.querySelector("#number")
let i



addbtn.addEventListener("click",()=>{

    if(input_field.innerText="" || !time_input.value){
        alert("Write something!")
    }

    else{
        const newtask=document.createElement("li")
    tasklist.appendChild(newtask)
    newtask.innerText=input_field.value
     input_field.value=" "

    const newone=document.createElement("div")
     newtask.appendChild(newone)
     newone.innerText=parseInt(time_input.value)
     time_input.value=" "

     const startbtn=document.createElement("button")
     newtask.appendChild(startbtn)
     startbtn.innerText="Start"
     startbtn.classList.add("#start_btn")
    startbtn.setAttribute("id","startbutton")
    }
   
   const startbtn=document.querySelector("#startbutton")

    startbtn.addEventListener("click",()=>{
      setTimeout(()=>{
         for(let i=newone.value;i<=0;i--){
            newone.innerText=i
         }
      },i*1000)
    })
    
    
})



                                