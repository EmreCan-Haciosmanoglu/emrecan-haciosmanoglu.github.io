const name = document.querySelectorAll('#name path');


for(var i = 0; i < name.length; i++)
    console.log(`Letter ${i} is ${name[i].getTotalLength()}`);