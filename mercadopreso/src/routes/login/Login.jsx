import { useNavigate } from "react-router-dom"
import { useState } from "react"


function Login () {
    const [email , setemail] = useState('')
    const [pass , setpass] = useState('')


    const navigate = useNavigate()


  
    
    const handlechange = (event) =>{
        const newpass = event.target.value;
        setpass(newpass);
    
        
    }

    function handleClick() {
        if(pass.length >=8){
            navigate('/products')
        }
      }

    return(
        <>
        <div>
            <h1>Login</h1>
           
                 insira seu email <input type="email" name="email" id="email" onChange={({target: value}) => setemail(value)} />
                 <br />
                insira sua senha <input type="password" name="senha" id="senha" onChange={handlechange} />
                <br />
                <button id="enviar" onClick={handleClick} >enviar</button>
            
            
        </div>
        </>
    )
}

export default Login