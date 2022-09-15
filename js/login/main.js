//import "./style.css" 


 class Login{
   
    constructor(){
        
    }
    iniciarLogin(dom){
        const usua = 'jean'
        const pass = '12344'
        let div = document.createElement('div')
        div.setAttribute('class', 'contenedor')
        div.style.cssText = `
        
        
        `;
      
        const $template = `
        <div class="container-login">
        <div class="login">
          <form id="form_login">
            <div class="login-info">
              <label class="text_login">Email Adress</label><br>
              <input class="input_login" type="email" id="email" placeholder="correo@correo.com"><br>
              <label class="text_login">Password</label><br>
              <input class="input_login" type="password" id="password" placeholder="***********" autocomplete="off"><br>
              <button class="btn-login" type="submit">Log in</button>
            </div>
          </form>
        </div>
        <div class="extra_login">
          <label class="forgot">forgot my passsword</label>
          <br>
          <button class="btn-singup" type="submit" href="#">Sign up</button>
        </div>
      </div>
      <style>
      :root {
        --white: #fff;
        --purple: #7b2abf;
        --purple-dark: #02021C;
        --purple-dark-shadow: rgba(2, 2, 28, .5);
        --purple-bg: #030328;
        --purple-input: #110E35;
        --red-warning: #E45871;
        --gray-primary: #C7C7C7;
        --gray-secondary: #797979;
        --purple-fil: invert(22%) sepia(83%) saturate(2189%) hue-rotate(260deg) brightness(87%) contrast(102%);
        --purple-gray-fil: invert(17%) sepia(51%) saturate(842%) hue-rotate(207deg) brightness(94%) contrast(88%);
    }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Quicksand', sans-serif;
        }
        h1 {
            color:red;
        }
        body{
            background-color: #030328;
        }
        #login{
            margin-top: 84px;
            margin: auto;
        }
        .container-login{
            margin-top: 10%;
        }
        .login{
            max-width: 850px;
            width: 25%;
            position: relative;
            margin: auto;
        }
        
        .text_login{
            color:white;
            font-family: 'Quicksand';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
        }
        
        .input_login{
            color: white;
            width: 100%;
            padding: 1rem 0rem 1rem 1rem;
            border: none;
            font-size: 16px;
            border-radius: 10px;
            background-color: var(--purple-input);
            margin-top: 2%;
            margin-bottom: 10%;
        }
        .input_login:focus{
            outline: none;
            border: 1px solid purple;
            transition: ease-in .4s;
        }
        
            
        .btn-login{
            width: 100%;
            border-radius: 10px;
            border: none;
            background-color: purple;
            color: white;
            padding: 1rem 7rem ;
            font-size: 20px;
            cursor: pointer;
            border: 2px solid purple;
        }
        .btn-login:hover{
            border: 2px solid white;
            transition: ease-in-out .2s ;
        }
        .extra_login{
            text-align: center;
            margin-top: 5%;
            margin-bottom: 10%;
        }
        .forgot{
            font-weight: 200;
            font-size: 20px;
            cursor: pointer;
            justify-content: center;
            color:#7b2abf;
        }
        .forgot:hover{
            color:#fff;
            transition: ease-in .3s;
        }
        
        .btn-singup{
            width: 25%;
            margin-top: 4%;
            background-color: rgba(255, 255, 255, 0);
            border:2px solid white;
            border-radius: 10px;
            padding: 1rem 7rem;
            color:white;
            cursor: pointer;
            font-size: 15px;
            font-weight: 700;
            text-decoration: none;
        }
        
        .btn-singup:hover{
            background-color: rgba(255, 255, 255, 1);
            color: #7b2abf;
            transition: ease-in 0.4s;
        }
        
        
        @media screen and ( max-width: 10250px){
        
            #login{
                margin-top: 80px;
            }
        
            .login{
                max-width: 350px;
                min-width: 349px;
                margin: auto;
            }
            .btn-singup{
                min-width: 349px;
                padding: 1rem 2rem;
            }
            .btn-login{
                padding: 1rem 6rem
            }
        
            
        }
        @media screen and ( max-width: 850px){
        
            #login{
                margin-top: 80px;
            }
        
            .login{
                max-width: 350px;
                min-width: 349px;
                margin: auto;
            }
            .btn-singup{
                padding: 1rem 2rem;
            }
            .btn-login{
                padding: 1rem 2.8rem
            }
            
        }
        
      </style>
      
        `
        div.insertAdjacentHTML('afterbegin', $template)
        return dom.appendChild(div)

    }
}

export default Login

