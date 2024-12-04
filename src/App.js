
import './App.css';
import { Usuario } from './componentes/Usuario';
import foto from './assets/img/foto.webp';

function App() {
  return (
    <div className="App">
      <header>
        <h1 id="techo">We are committed expert partners</h1>
        <p id="textoTecho">We place huge value on strong relationships and have seen the benefit they bring to our business. Customer feedback is vital in helping us to get it right</p>
      </header>
      <div class="row">
            <div class="container">
                <div class="row py-5" id="cuadrito1">
                    <div class="col-3">
                        <img src={foto} id='fotico'></img>
                    </div>
                    <div class="col-9 text-center" id="textito">
                    <Usuario texto="vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravidad in fermentum. Praesent semper feugiat nibh sed pulvinar proin" nombre="Nat Reynolds"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="row py-5" id="cuadrito2">
                    <div class="col-3">
                        <img src={foto} id='fotico'></img>
                    </div>
                    <div class="col-9 text-center" id="textito">
                    <Usuario texto="vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravidad in fermentum. Praesent semper feugiat nibh sed pulvinar proin" nombre="CELIA ALMEDA"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="row py-5" id="cuadrito3">
                    <div class="col-3">
                        <img src={foto} id='fotico'></img>
                    </div>
                    <div class="col-9 text-center" id="textito">
                    <Usuario texto="vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravidad in fermentum. Praesent semper feugiat nibh sed pulvinar proin" nombre="BOB ROBERTS"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default App;
