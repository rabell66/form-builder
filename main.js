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
         if(formData[i].type === "text"){
             var newInput = document.createElement("input");
             newInput.type=formData[i].type;
             newInput.id = formData[i].id;
             newInput.placeholder = formData[i].label;
             form.appendChild(newInput);
         }
         else if (formData[i].type === "email"){
             var newInput = document.createElement("input");
             newInput.type=formData[i].type;
             newInput.id = formData[i].id;
             form.appendChild(newInput);
     }
         else if (formData[i].type === "tel"){
             var newInput = document.createElement("input");
             newInput.type=formData[i].type;
             newInput.id = formData[i].id;
             form.appendChild(newInput);}
             else if (formData[i].type === "select"){
        
             var newInput = document.createElement("select");
             newInput.type=formData[i].type;
             newInput.id = formData[i].id;
             form.appendChild(newInput);
             
             for (let x=0; x<formData[0,[x]].length; x++)

             {var newOption = document.createElement("option")  
                 newOption.value = formData[0,[x]].value;
                 newOption.label = formData[0,[x]].label;
                 form.appendChild(newOption);
                 alert("no");
                }
            }

 }
  
 
}



 
 console.log(formData[0].type);
 console.log(formData[0].id);
createForm()