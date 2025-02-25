import RolldownViteButton from 'rolldown-vite/button'
import WebpackButton from 'webpack/button';

export default function App() {
    return (
        <div className="App">
          <header className="App-header">
            <h1>Hello Rolldown Vite + Module Federation</h1>
            <div>
              <h2>Rolldown Vite Remote</h2>
              <RolldownViteButton />
            </div>
            <div>
              <h2>Webpack Remote</h2>
              <WebpackButton/>
            </div>
          </header>
        </div>
    )
}