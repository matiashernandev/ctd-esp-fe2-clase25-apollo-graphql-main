import ListadoPokemons from "./components/ListadoPokemons";

import "./styles.css";

export default function App() {
    return (
        <div className="App">
            <h1>Pokédex</h1>
            <div id="bandejaDeEntrada">
                <div style={{display: 'flex', flexDirection:'column', flexGrow: 1}}>
                    <div style={{display: 'flex', flexDirection:'row'}}>
                        <ListadoPokemons/>
                    </div>
                </div>
            </div>
        </div>
    );
}
