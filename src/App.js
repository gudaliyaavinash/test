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
        <>
        <div className='bg-[white] w-[100%]  pt-[50px] max-1250:pt-[20px]'>
        <h1 className=' text-center
        text-[6em] 
        max-1250:text-[5em] 
        font-[900] 
        max-770:text-[4em]
        
        '>The Rick and Morty API
</h1>
            <div className='w-[100%]  bg-[rgb(39,43,51)] mt-[40px] pt-[90px]
    max-1250:pt-[10px] max-1250:mt-[20px]
    '>
                <div className='1250:w-[1250px] max-1250:w-[100%] 
           
           max-1250:block 
             m-auto  flex flex-wrap gap-[30px]  pb-[20px]'>
                    {
                        data.map((el) => {
                            return <div to={"/onecard/" + el.id} className='
                w-[calc(50%-15px)]

                 rounded-[15px]
                 block
                  bg-[hsl(225,6%,25%)] 
                 
                  max-1250:w-[700px]
                  max-1250:h-[auto]
                  max-1250:mx-[auto]
                  max-1250:my-[20px]

                  
                  max-702:w-[90%]
                  max-702:mx-[auto]
                  max-949:mx-[auto]
                  '>
                                <div className='flex  max-702:block  rounded-[15px] w-[100%]'>
                                    <div className='w-[40%]  max-702:w-[100%]'>

                                        <img src={el.image} className='flex
                             max-702:rounded-[15px_15px_0px_0px]
                             rounded-[15px_0px_0px_15px] 1250:h-[250px] 
                            max-1250:h-[auto] max-702:w-[100%]  max-702:h-[380px]
                            max-418:h-[200px]
                            max-550:h-[270px]
                            
                            '/>
                                    </div>
                                    <div className='ml-[20px] '>
                                        <h1 className='text-[white]
                            max-702:ml-[10px]
                            text-left
                             font-[800] 
                             text-[1.8em] 
                             pt-[7px]
                             max-1250:pt-[15px]
                             max-418:pt-[8px] 
                             hover:text-[orange] 
                             duration-[400ms] 
                             transition-colors'>{el.name}</h1>

                                        <div className="
                             max-1250:mt-[7px]
                             max-1250:h-[13px]
                             max-1250:w-[13px]
                             max-418:mt-[2px]
                            relative
                            1250:top-[9px]
                            max-1250:top-[6px]
                            rounded-[50%]
                            max-702:ml-[10px]
                             w-[10px]
                             h-[10px]
                             text-left
                             float-left
                             "
                                            style={{
                                                background: el.status === "Alive" ? "green" : el.status === "Dead" ? "red" : "grey"
                                            }}
                                        >

                                        </div>

                                        <div className="
                             max-418:mt-[2px]
                             max-1250:mt-[7px]
                            text-[white]
                            font-[600]
                           pl-[10px]
                            text-left
                            float-left


                            ">
                                            {el.status} - {el.species}
                                        </div>
                                        <p className='clear-both
                             max-702:ml-[10px]
                             max-1250:pt-[24px]
                             text-left
                             max-418:pt-[10px]
                             pt-[10px]
                             text-[1.1em]
                             text-[grey]
                             '>Last known location:</p>

                                        <div className='
                             max-702:ml-[10px]
                             max-1250:mt-[7px]
                             max-418:mt-[0px]
                                text-left
                                text-[white]
                                font-[500]
                                text-[1.2em]
                                hover:text-[orange] 
                             duration-[400ms] 
                             transition-colors
                             '>
                                            {el.location.name}
                                        </div>


                                        <p className='clear-both
                            max-1250:pt-[24px]
                            max-702:ml-[10px]
                            max-418:pt-[10px]
                             text-left
                             pt-[10px]
                             text-[1.1em]
                             text-[grey]
                             '>Last known location:</p>

                                        <div className='
                            max-702:ml-[10px]
                             max-1250:mt-[7px]
                             max-418:mt-[0px]
                                text-left
                                text-[white]
                                font-[500]
                                text-[1.2em]
                                hover:text-[orange] 
                             duration-[400ms] 
                             transition-colors
                             max-702:pb-[20px]

                             '>
                                            {el.origin.name}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
                </div>
                </div>
                

        </>
    );
}

export default App;
