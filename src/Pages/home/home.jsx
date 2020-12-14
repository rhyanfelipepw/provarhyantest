import react from 'react';
import '../../Style/home.css'


import minhavida from '../../data/minhavida.json'

const jaysoun = minhavida.pagina1[0]
function App() {
  return (
<div className="h1force">
<h1>{jaysoun.txt1}</h1>
   <div className="Home">
          <table className="table">
                <tr>
                  <th>{jaysoun.txt3}</th>
                  <th>{jaysoun.txt2}</th>
                  <th>{jaysoun.txt5}</th>
                </tr>
                <tr>
                  <td> {jaysoun.txt6}</td>
                  <td>{jaysoun.txt7}</td>
                  <td>{jaysoun.txt2}</td>
                </tr>
                <tr>
                  <td>{jaysoun.txt8}</td>
                  <td>{jaysoun.txt9}</td>
                  <td>{jaysoun.txt3}</td>
                </tr>
                <tr>
                  <td>{jaysoun.txt10}</td>
                  <td>{jaysoun.txt11}</td>
                  <td>{jaysoun.txt2}</td>
                </tr>
                <tr>
                  <td>{jaysoun.txt12}</td>
                  <td>{jaysoun.txt13}</td>
                  <td>{jaysoun.txt4}</td>
                </tr>
                <tr>
                  <td> {jaysoun.txt14}</td>
                  <td>{jaysoun.txt15}</td>
                  <td>{jaysoun.txt2}</td>
                </tr>
                <tr>
                  <td>{jaysoun.txt16}</td>
                  <td>{jaysoun.txt17}</td>
                  <td>{jaysoun.txt3}</td>
                </tr>

          </table>
    
   </div>
</div>
  );
}

export default App;
