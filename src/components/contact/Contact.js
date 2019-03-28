import React from 'react';
import './Contact.css';
import {SocialIcon} from 'react-social-icons';

export const Contact = ({onSave, errors, onChangeMessage, name, email, red, cursos, taller, conferencias, asesorias}) => {
  return (
    <div style={{backgroundColor: '#162941', height: '700px'}}>
      <div class="conct">
        <h1 class="contact">Contáctanos</h1>
      </div>
      <div class="conct">
        <div style={{marginTop: '-5px'}}>
          <input class="form-c" value={name} onChange={onChangeMessage} type="text" name="nombre" placeholder="Nombre" id="name" required data-validation-required-message="Porfavor ingresa tu nombre"/>
          <input class="form-c2" value={email} onChange={onChangeMessage} type="email" name="email"  placeholder="Email" id="email" required data-validation-required-message="Porfavor ingresa tu e-mail"/>
        </div>
        <div>
          <button type='submit' class="boton-color3">Enviar</button>
        </div>
      </div>
      <div class="conct">
        <p class="text-color">Marca las casillas sobre la información que te gustaria recibir: </p>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{float: 'left', display: 'flex', width: '30%'}}>
          <input value={red} name="red" type="checkbox" onChange={onChangeMessage} id="red"/>
          <p class="text-check">Forma parte de nuestra red de instructores</p>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{float: 'left', display: 'flex', width: '30%'}}>
          <input value={cursos} name="cursos" type="checkbox" onChange={onChangeMessage} id="cursos"/>
          <p class="text-check">Cursos</p>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{float: 'left', display: 'flex', width: '30%'}}>
          <input value={taller} name="taller" type="checkbox" onChange={onChangeMessage} id="taller"/>
          <p class="text-check">Talleres</p>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{float: 'left', display: 'flex', width: '30%'}}>
          <input value={conferencias} name="conferencias" type="checkbox" onChange={onChangeMessage} id="conferencias"/>
          <p class="text-check">Conferencias</p>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{float: 'left', display: 'flex', width: '30%'}}>
          <input value={asesorias} name="asesorias" type="checkbox" onChange={onChangeMessage} id="asesorias"/>
          <p class="text-check">Asesorias Multidisciplinarias</p>
        </div>
      </div>
      <div class="conct">
        <h1 class="contact2">Conéctate con nosotros </h1>
      </div>
      <div class="conct">
        <p class="text-color2">Síguenos en las redes sociales</p>
      </div>
      <div class="conct">
        <SocialIcon url="https://www.facebook.com/wiitymexico/" style={{width: 50, height: 50, bottom: 8, marginLeft: 20}} bgColor="#FFF" fgColor="#000"/>
        <SocialIcon url="https://www.instagram.com/wiitymex/" style={{width: 50, height: 50, bottom: 8, marginLeft: 20}} bgColor="#FFF" fgColor="#000"/>
        <SocialIcon url="https://twitter.com/wiitymex" style={{width: 50, height: 50, bottom: 8, marginLeft: 20}} bgColor="#FFF" fgColor="#000"/>
        <SocialIcon url="https://www.youtube.com/channel/UCUs4gkUPlStP8b3OjaSR_8w?view_as=subscriber" style={{width: 50, height: 50, bottom: 8, marginLeft: 20}} bgColor="#FFF" fgColor="#000"/>
      </div>
    </div>
  );
}
