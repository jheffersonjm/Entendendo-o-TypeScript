fetch("/api/mensagem")
.then(response => response.json())
.then(data => {
    document.getElementById("msg").textContent = data.msg;
})
.catch(() => { 
document.getElementById("msg").textContent = "erro ao caregar a mensagem";
});