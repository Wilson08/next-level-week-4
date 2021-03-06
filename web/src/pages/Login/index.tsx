import React, { useEffect, useState, FormEvent } from 'react';


import { Link, useHistory } from 'react-router-dom';
import LayoutRestrictAccess from '../../components/LayoutRestrictAccess';

import {
  Session,
  Text,
  Form, 
  InputContainer, 
  Footer, 
  ContentFooter,
  Button
} from './styles';



const Login = () => {




  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemeber] = useState(false);
  const [realeaseButton, setRealeaseButton] = useState(false);

  const history = useHistory();


  useEffect(()=>{

    
    
    if(validateEmail(email) && password.length > 5){
      return setRealeaseButton(true);
    };

    return setRealeaseButton(false);


  },[email, password]);



  const validateEmail = (email: string) => {


    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
  };



  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();


    if(!realeaseButton){
      return;
    }


    
    history.push('/restrict/dashboard/orphanages');
    
 
  }


  return (  

      <LayoutRestrictAccess>
    
      <Session>



        <Form  onSubmit={handleSubmit}>

          <Text>Fazer login</Text>

          <InputContainer>

            <label htmlFor="email">E-mail</label>  
            <input 
            type="text" 
            placeholder='happy@mail.com' 
            id='email'
             value={email}
             onChange={(event) => setEmail(event.target.value)}
            
            />

          </InputContainer>

          <InputContainer>

            <label htmlFor="password" style={{marginTop: '16px'}}>Senha</label>  
            <input 
            type="password" 
            placeholder='******************' 
            id='password'
             value={password}
             onChange={(event) => setPassword(event.target.value)}
           
            
            />

          </InputContainer>


          <Footer>
            <ContentFooter>

              <input 
              type="checkbox" 
              name="remember" 
              id="remember"
              defaultChecked={remember}
              onClick={() => setRemeber(!remember)}

              />
              <label htmlFor='remember'>Lembrar-me</label>

            </ContentFooter>
              <Link to='/restrict/forgotpassword'>Esqueci minha senha</Link>
            
          </Footer>

          <Button type='submit' realease={realeaseButton}>Entrar</Button >

        </Form>



      </Session>
      
      </LayoutRestrictAccess>
  );
};



export default Login;