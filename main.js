var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];
 
 function createForm(){
     var form = document.querySelector(".field")
            
    
     for (let i=0; i< formData.length; i++){
         if(formData[i].type === "text"||formData[i].type === "email"){
           
           option(i, form);   
         }
    
         else if (formData[i].type === "tel"){
                        
             option(i, form)
            }

             
        else if (formData[i].type === "select"){
             var newInput = document.createElement("select");
             newInput.type=formData[i].type;
             newInput.id = formData[i].id;
             newInput.value = formData[i].label
             form.appendChild(newInput);
            
             for (let x=-1; x<formData[i].options.length; x++){
                 if(x != -1){
                 var newOption = document.createElement("option")  ;
                 newOption.value = formData[i].options[x].value;
                 newOption.textContent = formData[i].options[x].label;
                  newInput.appendChild(newOption);}
                  else {
                       var newOption = document.createElement("option");
                       newOption.textContent = formData[i].label
                       newInput.appendChild(newOption);}
                }
        }
                else if (formData[i].type === "textarea"){
                    var newOption = document.createElement("textarea");
                    newOption.type = formData[i].type;
                    newOption.id = formData[i].id;
                    newOption.placeholder = formData[i].label
                    form.appendChild(newOption);
                    



            }

 }
  
 
}

function option(i,form){
   var newInput = document.createElement("input");
    newInput.type=formData[i].type;
             newInput.id = formData[i].id;
             newInput.placeholder = formData[i].label;
             form.appendChild(newInput);
             return;
}

 
 console.log(formData[0].type);
 console.log(formData[0].id);
createForm()