import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import './App.css';
function App() {

  const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((res) => {
                console.log(res.data.results);
                setData(res.data.results)
            })
            .catch((error) => {
                alert(error);
            })
    }, [])

  return (
    <div className="App table">
        <table className='container'>
                <div className="flex just-center">
                    {
                        data.map((el) => {
                            return <tr className='tr'>
                                <td className='img'><img className="imag" src={el.image} alt=""  /></td>
                                <td className='td'>
                                    <ul>
                                        <li className='Name'>{el.name}</li>
                                        <div className="flex">
                                            <div className="dot"style={{background: el.status == "Alive" ? "rgb(20, 226, 20)" : el.status == "Dead" ? "red" : "rgb(158, 158, 158)",}}></div>
                                            <li className='Alive'>{el.status}-{el.species}</li>
                                        </div>
                                        <li className='Location'>Last known location:</li>
                                        <li className='Expanse'>{el.location.name}</li>
                                        <li className='Seen'>First seen in:</li>
                                        <li className='Schwifty'>{el.origin.name}</li>
                                    </ul>
                                </td>
                            </tr>

                        })
                    }
                </div>
            </table>
    </div>
  );
}

export default App;
