import React, { Component } from 'react';
import './App.css';
import firebaseConf from './Firebase';
import img1 from './assets/icon1.png';
import img2 from './assets/icon2.png';
import img3 from './assets/icon3.png';
import lamp1 from './assets/lamp1.png';
import lamp2 from './assets/lamp2.png';
import lamp3 from './assets/lamp3.png';
import lamp4 from './assets/lamp4.png';
import lamp5 from './assets/lamp5.png';
import lamp6 from './assets/lamp6.png';
import lamp8 from './assets/lamp7.png';
import lamp7 from './assets/lamp8.png';
import img4 from './assets/img4.png';
import imgE from './assets/elige.png';
import imgC from './assets/cap.png';
import imgN from './assets/nos.png';
import imgP from './assets/pro.png';
import {SocialIcon} from 'react-social-icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000)
  }

  resetForm() {
    this.refs.contactForm.reset();
  }

  componentWillMount() {
    let formRef = firebaseConf.database().ref('form').orderByKey().limitToLast(6);
    formRef.on('child_added', snapshot => {
      const { name, email} = snapshot.val();
      const data = { name, email};
      this.setState({ form: [data].concat(this.state.form) });
    })
  }

  sendMessage(e) {
    e.preventDefault();
    const params = {
      name: this.inputName.value,
      email: this.inputEmail.value,
    };
    if (params.name && params.email) {
      firebaseConf.database().ref('form').push(params).then(() => {
        this.showAlert('success', 'Your message was sent successfull');
      }).catch(() => {
        this.showAlert('danger', 'Your message could not be sent');
      });
      this.resetForm();
    } else {
      this.showAlert('warning', 'Please fill the form');
    };
  }
  render() {
    return (
      <div class="back-o">
        {/*wiity*/}
        <div className="slide">
          <div class="perro"></div>
        </div>
        {/*nosotros*/}
        <div class="about-c">
          <div class="card">
            <h1 class="about-t">Nosotros</h1>
            <div class="about-con">
            <p class="about-p">Somos una empresa dedicada a desarrollar el potencial humano en las organizaciones, por medio de cursos, talleres, conferencias y asesorías multidisciplinarias.</p>
            </div>
          </div>
        </div>
        <div class="about-c">
          <h1 class="why">¿Por qué ser parte de Wiity?</h1>
        </div>

        <div class="thre-cont">
        <div class="thre">
          <div class="img">
            <img src={img1} alt=""/>
            <p class="pt">Aprende</p>
            <div class="ptt-container">
              <p class="ptt">Ya sea aplicando en alguno de los cursos que tenemos para ti, o aprender a diseñar cursos de capacitación y formación de manera preofesional.</p>
            </div>
          </div>
          <div class="img">
            <img src={img3} alt=""/>
            <p class="pt">Conoce</p>
            <div class="ptt-container">
              <p class="ptt">Inscribiendote a los cursos, podras conocer y conectarte con otros estudiantes e instructores que ya forman parte de la comunidad.</p>
            </div>
          </div>
          <div class="img">
            <img src={img2} alt=""/>
            <p class="pt">Destaca</p>
            <div class="ptt-container">
              <p class="ptt">Ademas de tu aprendezaje, obtendras reconocimiento con las constancias de valor curricular para que compartas con tus futuros empleadores.</p>
            </div>
          </div>
        </div>
        </div>
        <div class="back-o2">
        </div>
        <div class="back-o3">
          <div class="lamp-c">
            <div class="lamp">
              <div class="imgs-cont">
                <img src={lamp1} alt=""/>
                <img src={lamp2} alt="" class="img-top"/>
              </div>
              <div class="prueba">
                <div class="prueba-sep">
                  <div class="prueba-w2">
                    <p class="sep-t2c">DE LA COOPERACIÓN A LA COLABORACIÓN EN EQUIPOS DE TRABAJO</p>
                    <p class="sep-t2c2">¿Cómo transformar el trabajo cooperativo al colaborativo?</p>
                  </div>
                  <div class="prueba-w2">
                    <p class="sep-t2c">EL CONTAMINANTE SILENCIOSO DE LAS ORGANIZACIONES</p>
                    <p class="sep-t2c2">¿Cómo combatir al síndrome de “Burn out” en las organizaciones?</p>
                  </div>
                  <div class="prueba-w2">
                    <p class="sep-t2c">LA TECNOLOGÍA COMO UN MEDIO Y NO COMO UN FIN PARA EL APRENDIZAJE</p>
                    <p class="sep-t2c2">¿Cómo innovar mi labor de enseñanza por medio de nuevas herramientas tecnológicas?</p>
                  </div>
                  <div class="prueba-w2">
                    <p class="sep-t2c">ESTRATEGIAS DE ENDOMÁRKETING EN LAS ORGANIZACIONES</p>
                    <p class="sep-t2c2">¿Cómo mantener a mis colaboradores enterados sobre lo que sucede en la organización y fortalecer la identidad organizacional?</p>
                  </div>
                  <div class="prueba-w2">
                    <p class="sep-t2c">CONOCER EC0217 Y EC0301 PARA LA INSTRUCCIÓN Y DISEÑO DE CURSOS DE FORMACIÓN Y CAPACITACIÓN</p>
                    <p class="sep-t2c2">¿Cómo diseñar e impartir cursos de formación y capacitación de manera profesional para el logro de objetivos y metas organizacionales?</p>
                  </div>
                  <div class="prueba-w2">
                    <p class="sep-t2c">DEL AUTOCONOCIMIENTO A LA GESTIÓN EFICIENTE DE LAS EMOCIONES. LA ALFABETIZACIÓN EMOCIONAL</p>
                    <p class="sep-t2c2">¿Cómo ser emocionalmente más inteligente?</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="lamp">
              <div class="imgs-cont">
                <img src={lamp3} alt=""/>
                <img src={lamp4} alt="" class="img-top"/>
              </div>
              <div class="prueba2">
                <div class="prueba-sep">
                  <div class="prueba-w2">
                    <p class="sep-t2c">DE UNA IDEA AL EMPRENDIMIENTO</p>
                    <p class="sep-t2c2">¿Tienes una idea de negocio y no sabes por dónde comenzar?</p>
                  </div>
                  <div class="prueba-w2">
                    <p class="sep-t2c">GESTIÓN INTELIGENTE DE LAS EMOCIONES EN LA EMPRESA</p>
                    <p class="sep-t2c2">¿Cómo gestionar inteligentemente las emociones en mi empresa?</p>
                  </div>
                  <div class="prueba-w2">
                    <p class="sep-t2c">APRENDE A DISEÑAR, IMPLEMENTAR E INTERPRETAR INSTRUMENTOS DE EVALUACIÓN</p>
                    <p class="sep-t2c2">¿Cómo eficientar mis procesos de evaluación?</p>
                  </div>
                  <div class="prueba-w2">
                    <p class="sep-t2c">APRENDE A LEER A LAS PERSONAS Y LOGRA RELACIONES EXITOSAS</p>
                    <p class="sep-t2c2">¿Qué es el lenguaje corporal? Y ¿Cómo utilizarlo para aprender a leer a las personas y lograr relaciones exitosas?</p>
                  </div>
                  <div class="prueba-w2">
                    <p class="sep-t2c">ERRORES EN EL PROCESO DE COMUNICACIÓN Y SU ANTÍDOTO</p>
                    <p class="sep-t2c2">¿No te entienden? O ¿No te das a entender?</p>
                  </div>
                  <div class="prueba-w2">
                    <p class="sep-t2c">COACHING VOCACIONAL</p>
                    <p class="sep-t2c2">¿Quién soy?, ¿En dónde estoy? y exactamente… ¿A dónde voy?</p>
                  </div>
                  <div class="prueba-w2">
                    <p class="sep-t2c">LA INFLUENCIA DE LAS CREENCIAS LIMITANTES EN TU VIDA</p>
                    <p class="sep-t2c2">Lo que estás creyendo… ¿Te destruye o te transforma?</p>
                  </div>
                  <div class="prueba-w2">
                    <p class="sep-t2c">LAS DIFERENCIAS DE GÉNERO PARA EL CUMPLIMIENTO DE METAS</p>
                    <p class="sep-t2c2">¿Por qué tú y yo no?</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="lamp">
              <div class="imgs-cont">
                <img src={lamp5} alt=""/>
                <img src={lamp6} alt="" class="img-top"/>
              </div>
              <div class="prueba3">
                <div class="prueba-sep">
                  <div class="prueba-w2">
                    <p class="sep-t2c">"CONFERENCIA:  EL PAPEL DEL MIEDO EN MI VIDA"</p>
                    <p class="sep-t2c2">¿Cómo gestionar el miedo para escapar de mi zona de confort?</p>
                  </div>
                  <div class="prueba-w3">
                    <p class="sep-t2c">"CONFERENCIA: LENGUAJE CORPORAL"</p>
                    <p class="sep-t2c2">¿Cómo reconocer y gestionar nuestras emociones y estado de ánimo con ayuda del lenguaje corporal?</p>
                  </div>
                  <div class="prueba-w3">
                    <p class="sep-t2c">"CONFERENCIA: COACHING VOCACIONAL"</p>
                    <p class="sep-t2c2">¿Quién soy?, ¿En dónde estoy? y exactamente… ¿A dónde voy? </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="lamp">
              <div class="imgs-cont">
                <img src={lamp7} alt=""/>
                <img src={lamp8} alt="" class="img-top"/>
              </div>
              <div class="prueba4">
                <div class="text-4">
                  <div class="prueba-w2">
                    <p class="sep-t2c">EN “DISEÑO DE PROGRAMAS DE CAPACITACIÓN O PROFESIONALIZACIÓN DEL CAPITAL HUMANO”</p>
                    <p class="sep-t2c3">EN “IMPARTICIÓN DE CURSOS DE CAPACITACIÓN O PROFESIONALIZACIÓN DEL CAPITAL HUMANO DE MANERA PRESENCIAL GRUPAL”</p>
                    <p class="sep-t2c">EN “DISEÑO DE DEMO PARA IMAGEN EMPRESARIAL Y PROYECTOS PERSONALES”</p>
                    <p class="sep-t2c3">EN “PERSONALIZACIÓN DE CURRÍCULUM VITAE CREATIVO E INNOVADOR”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="back-3"></div>
        <img src={img4} alt="" class="imgt"/>
        <img src={imgE} alt="" class="elige"/>
        <img src={imgC} alt="" class="elige"/>
        <img src={imgN} alt="" class="elige"/>
        <img src={imgP} alt="" class="elige"/>
        {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
          <div class="container">
            {this.state.alertData.message}
          </div>
        </div>}
        <div class="container" style={{padding: '40px 0px'}}>
          <div>
            <h1 class="contact">Contáctanos</h1>
            <form class="conct" onSubmit={this.sendMessage.bind(this)} ref='contactForm'>
              <div class="cont-2">
                <input class="form-c" type='text' id='name' placeholder='Name' ref={name => this.inputName = name} />
                <input class="form-c2" type='email' id='email' placeholder='Email' ref={email => this.inputEmail = email} />
              </div>
              <div>
                <button type='submit' class="boton-color3">Enviar</button>
              </div>
            </form>
            <div class="conct" style={{marginTop: '50px'}}>
              <SocialIcon url="https://www.facebook.com/wiitymexico/" style={{width: 50, height: 50, bottom: 8, marginLeft: 20}} bgColor="#FFF" fgColor="#000"/>
              <SocialIcon url="https://www.instagram.com/wiitymex/" style={{width: 50, height: 50, bottom: 8, marginLeft: 20}} bgColor="#FFF" fgColor="#000"/>
              <SocialIcon url="https://twitter.com/wiitymex" style={{width: 50, height: 50, bottom: 8, marginLeft: 20}} bgColor="#FFF" fgColor="#000"/>
              <SocialIcon url="https://api.whatsapp.com/send?phone=5217715660789&text=&source=&data=" style={{width: 50, height: 50, bottom: 8, marginLeft: 20}} bgColor="#FFF" fgColor="#000"/>
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
