
class Ejemplo{
    constructor(){}

    render(dom, name){
        const $template =
         `
         <div class="card">
         <img src="/img/img_avatar.png" alt="Avatar" style="width:100%">
         <div class="container">
           <h4><b>${name}</b></h4>
           <p>Architect & Engineer</p>
         </div>
       </div>
        `
        return dom.innerHTML += $template
    }
}

window.onload = ()=>{
    new Ejemplo().render(document.getElementById("app"), document.getElementById('name').value )
}
