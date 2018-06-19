var database = firebase.database().ref();

//record form submissions
$("#form-submit-button").on("click", function () {
    event.preventDefault();
    
    var newMessage = {
        name: $("#form-name").val(),
        email: $("#form-email").val(),
        message: $("#form-message").val()
    }

    if(newMessage.name && newMessage.email && newMessage.message){
        database.push(newMessage);
        $(".form-control").val("");
        alert("Thanks for the message! I'll look into it and get back to you. - D")
    } else {
        alert("Please complete all fields before hitting 'submit'.")
    }
})
