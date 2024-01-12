import { useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isAllValid, setIsAllValid] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValid(validator.isEmail(event.target.value));
    check()
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
    check()
  };

  const handleClick = () => {
    if (isAllValid) {
      navigate("/products");
    }
  };

  const check = () =>{
    if( pass.length >=8 && isValid){
      setIsAllValid(true)
    } else{
      setIsAllValid(false)
    }
  }

  return (
    <>
      <div>
        <h1>Login</h1>
        Insira seu e-mail:
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        Insira sua senha:
        <input
          type="password"
          name="senha"
          id="senha"
          onChange={handlePassChange}
        />
        <br />
        {isAllValid ? (
          <>
            <p style={{ color: "green" }}>E-mail ou senha válido(s)!</p>
            <button id="enviar" onClick={handleClick}>
              Enviar
            </button>
          </>
        ) : (
          <>
            <p style={{ color: "red" }}>E-mail  ou senha inválido(s)!</p>
            <button id="desativado" onClick={handleClick}>
              Enviar
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
