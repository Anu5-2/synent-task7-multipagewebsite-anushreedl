async function send() {

    let data = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        message: document.getElementById("message").value

    };

    let res = await fetch("/contact", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    });

    let msg = await res.text();

    alert(msg);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

}