

    $(document).ready(function() {
     
        $("#owl-demo").owlCarousel({
       
            autoPlay: 3000, //Set AutoPlay to 3 seconds
       
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3]
       
        });
       
      });
  
  // ............typing Animation..................
var typed = new Typed(".typing", {
    strings: ["make", "repair", "alter"],
    typeSpeed: 140,
    backSpeed: 60,
    loop: true
  });

//   ------comment form-------

  
// const name = document.getElementById('name')
// const email = document.getElementById('email')
// const message = document.getElementById('message')
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e) => {
//     let errorMsg = []
//     if (name.value === '' || name.value === null) {
//         errorMsg.push('name is required!')
//     }
//     if (message.value === '' || message.value === null) {
//         errorMsg.push('message is required!')
//     }
//     if (errorMsg.length > 0) {
//         e.preventDefault()
//         errorElement.innerText = errorMsg.join(' , ')
//     }
// })

// function validation() {
//     let firstName = document.forms["comment"]["nameame"].value;
//     let v = 0;
//     if (firstName == "") {
//         document.getElementById("firstNameMsg").innerHTML = "Enter your name";
//     } else {
//         document.getElementById("firstNameMsg").innerHTML = "";
//         v = v+1;
//     }

//     let email = document.forms["comment"]["email"].value;
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (email.match(mailformat)) {
//         document.getElementById("emailMsg").innerHTML = "";
//         v = v+1;
//     } else {
//         document.getElementById("emailMsg").innerHTML = "Enter a valid email";
//     }

//     let msg = document.forms["comment"]["nameame"].value;
//     if (msg == "") {
//         document.getElementById("Msg").innerHTML = "Leave a comment;
//     } else {
//         document.getElementById("Msg").innerHTML = "";
//         v = v+1;
//     }

//     if (v == 3) {
//         alert("Successfully submitted");
//     }
// }

function validation() {
    let firstName = document.forms["survey"]["firstName"].value;
    let v = 0;
    if (firstName == "") {
        document.getElementById("firstNameMsg").innerHTML = "Enter your first name";
    } else {
        document.getElementById("firstNameMsg").innerHTML = "";
        v = v+1;
    }

    let email = document.forms["survey"]["email"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
        document.getElementById("emailMsg").innerHTML = "";
        v = v+1;
    } else {
        document.getElementById("emailMsg").innerHTML = "Enter a valid email";
    }

    let msg = document.forms["survey"]["message"].value;
    if (msg == "") {
        document.getElementById("textMsg").innerHTML = "Leave a comment for us";
    } else {
        document.getElementById("textMsg").innerHTML = "";
        v = v+1;
    }

    if (v == 3) {
        alert("Successfully sent");
    }
}