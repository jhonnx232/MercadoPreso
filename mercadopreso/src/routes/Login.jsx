
function Login () {
    return(
        <>
        <div>
            <h1>Login</h1>
            <form>
                 insira seu email <input type="email" name="email" id="email" />
                 <br />
                insira sua senha <input type="password" name="senha" id="senha" />
                <br />
                <button id="enviar" >enviar</button>
            </form>
        </div>
        </>
    )
}

export default Login