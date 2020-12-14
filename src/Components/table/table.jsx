import React from 'react'
import './table.css'

function Inputs() {
    return(
    <>
 <table id="grid">
				<thead>
					<tr>
						<th>Nome:</th>
						<th>Email:</th>
						<th>Telefone:</th>
                        <th>Data de nascimento:</th>
					</tr>
					<tr>
						<td>Rhyam</td>
						<td>rhyanfelipepw@hotmail.com</td>
						<td>45 999622319:</td>
                        <td>09072001:</td>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
    </>
    );
}
export default Inputs;