// class List extends HTMLElement{
//     constructor(){
//         super()
//         let shadow = this.attachShadow({mode:'open'}) //agregar elementos
//         this.divHeader = document.createElement('div')
//         this.divContent = document.createElement('div')
//         // 
//         this.modePicture = false

//         shadow.appendChild(this.divHeader)
//         shadow.appendChild(this.divContent)
//     }
//     connectedCallback(){    
//        this.divHeader.innerHTML =  this.getAttribute('data-title')
       
//        let url = this.getAttribute('data-url')
//        let field = this.getAttribute('data-field')
//        if(this.getAttribute('modePicture')){
//             this.modePicture = this.getAttribute('modePicture')
//        }

//        this.divContent.innerHTML =""
//        fetch(url).then(response => response.json())
//        .then(json => json.forEach(element => {

//             if(this.modePicture === 'true'){
//                 this.divContent.innerHTML += `
//                  <img src='${element[field]}'>
//                 `
//             }else {
//                 this.divContent.innerHTML += `
//                 <div> 
//                     ${element[field]}
//                 </div>
//             `
//             }
            
//        }))
//     }

// }

// customElements.define("app-list", List)
import Login from './login/main.js'
const app = document.getElementById("app");

const login = new Login()
// login.iniciarLogin(app)