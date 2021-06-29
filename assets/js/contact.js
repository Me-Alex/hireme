let input = document.querySelectorAll(".input1");

let submit = document.getElementById('submit');

let name2 = localStorage.getItem("nume");
const eemail = localStorage.getItem('email');
if (name2 && eemail) {
    input[0].value = name2;
    input[1].value = eemail;
}
submit.onclick = () => {
    for (let i = 0; i < input.length; i++) {
        if (input[i].value == "") {
            alert("complete all fields");
            break;
        } else {
            email = input[1].value;
            subject=input[2].value;
            localStorage.setItem('nume', input[0].value);
            localStorage.setItem('email', input[1].value);
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "floreaalexandru2002@gmail.com",
                Password: "E4AC4800BCA66CF4ABDFCBF8608C7298603B",
                To: 'floreaalexandru2002@gmail.com',
                From: "floreaalexandru2002@gmail.com",
                Subject: "maat",
                Body: "nume: \n"+input[0].value+"\n"+email+" \n"+subject
                })

            const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const t = res.test(String(email).toLowerCase());
            if (!t)
                alert('email:' + email + 'not valide');
            else
                alert("email was sent to" + email + "");
            break;
        }
        console.log(input[i].value);

    }

}