class Ejemplo{
    constructor(){}

    render(dom){
        $template = `
            <div class="container">
            
                <h1><%= variable %></h1>
            </div>

        `
        return dom.innerHTML += $template
    }
}
export default Ejemplo