
class Ejemplo{
    constructor(){}

    render(dom){
        const $template = `
            <div class="container">
            
                <h1>hola mundo</h1>
            </div>
        `

        return dom.innerHTML += $template
    }
}

window.onload = ()=>{
    new Ejemplo().render(document.getElementById("app"))
}
