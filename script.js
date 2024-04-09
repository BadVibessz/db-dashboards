const baseUrl = "http://localhost:5000/db-dashboards/api/v1/"

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response.json();
}


function loginBtnClick() {
    email = document.getElementById("email_input").value
    pass = document.getElementById("pass_input").value

    postData(baseUrl + "auth/register", {
        email: email,
        password: pass,
        confirm_password: pass
    }).then((data) => { alert(data) })
}