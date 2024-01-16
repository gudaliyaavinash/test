import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
export const Ricky_onecard = () => {
    let param = useParams();
    let [data1, Setdata1] = useState([]);
    let [data2,Setdata2] = useState([]);
    let [data3,Setdata3] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://rickandmortyapi.com/api/character/" + param.name)
        .then((res) => {
          console.log(res.data);
          Setdata1(res.data);
          Setdata2(res.data.location);
          Setdata3(res.data.origin);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    return (
      <div className=" w-[100%]  pt-[50px] max-1250:pt-[20px] bg-[rgb(39,43,51)] h-[100vh]
      max-1250:h-[auto]
      ">
        <h1
          className=" 
          text-[white]
          text-[5em] 
          max-1250:text-[4.5em] 
          font-[900] 
          max-770:text-[4em]
          text-center
          "
        >
          {data1.name} - Details
        </h1>
        <div
          className="w-[100%]   mt-[40px] pt-[10px]
      max-1250:pt-[10px] max-1250:mt-[20px]
      pb-[20px]
      "
        >
          <div
            className="1250:w-[1250px] max-1250:w-[100%] 
             max-1250:block 
               m-auto  flex flex-wrap gap-[30px] justify-center"
          >
            <div
              className="
                 
  
                   rounded-[15px]
                    bg-[hsl(225,6%,25%)] 
                   
                    w-[700px]
                    max-1250:h-[auto]
                    max-1250:mx-[auto]
                    max-1250:my-[20px]
                    max-702:w-[90%]
                    max-702:mx-[auto]
                    max-949:mx-[auto]
                    "
            >
              <div className="flex  max-702:block  rounded-[15px] w-[100%]">
                <div className="w-[40%]  max-702:w-[100%]">
                <img src={data1.image} className='flex
                               max-702:rounded-[15px_15px_0px_0px]
                               rounded-[15px_0px_0px_15px] 1250:h-[auto] 
                              max-1250:h-[auto] max-702:w-[100%]  max-702:h-[380px]
                              max-550:h-[270px]
                              max-418:h-[200px]
                              
                              '/>
                </div>
                <div className="ml-[20px] ">
                  <h1
                    className="text-[white]
                              max-702:ml-[30px]
                              max-418:ml-[10px]
                              text-left
                               font-[800] 
                               text-[1.8em] 
                               pt-[7px]
                               max-418:pt-[5px]
                               pt-[15px] 
                               hover:text-[orange] 
                               duration-[400ms] 
                               transition-colors">{data1.name}
                  </h1>
                  <div
                    className="
                               mt-[7px]
                               h-[13px]
                               max-418:ml-[10px]
                              w-[13px]
                              relative
                              top-[9px]
                              max-418:top-[2px]
                              rounded-[50%]
                              max-702:ml-[30px]
                               w-[10px]
                               h-[10px]
                               text-left
                               float-left
                               "
                    style={{
                      background:
                        data1.status === "Alive"
                          ? "green"
                          : data1.status === "Dead"
                          ? "red"
                          : "grey",
                    }}
                  ></div>
  
                  <div
                    className="
                    max-418:mt-[2px]
                               mt-[7px]
                              text-[white]
                              font-[600]
                             pl-[10px]
                              text-left
                              float-left
  
  
                              "
                  >
                    {data1.status} - {data1.species}
                  </div>
                  <p
                    className="clear-both
                               max-702:ml-[30px]
                               max-418:ml-[10px]
                               max-418:pt-[11px]
                               pt-[24px]
                               text-left
  
                               pt-[10px]
                               text-[1.1em]
                               text-[grey]
                               "
                  >
                    Last known location:
                  </p>
  
                  <div
                    className="
                               ml-[0px]
                               mt-[7px]
                               max-418:ml-[10px]
                               max-418:mt-[2px]
                                  text-left
                                  max-702:ml-[30px]
                                  text-[white]
                                  font-[500]
                                  text-[1.2em]
                                  hover:text-[orange] 
                               duration-[400ms] 
                               transition-colors
                               "
                  >
                    {data2.name}
                  </div>
  
                  <p
                    className="clear-both
                              pt-[24px]
                              max-702:ml-[30px]
                              max-418:ml-[10px]
                               max-418:pt-[11px]
                               text-left
                               pt-[10px]
                               text-[1.1em]
                               text-[grey]
                               "
                  >
                    Last known location:
                  </p>
  
                  <div
                    className="
                               max-702:ml-[30px]
                              mt-[7px]
                              max-418:ml-[10px]
                               max-418:mt-[2px]
                                  text-left
                                  text-[white]
                                  font-[500]
                                  text-[1.2em]
                                  hover:text-[orange] 
                               duration-[400ms] 
                               transition-colors
                               max-702:pb-[20px]
  
                               "
                  >
                    {data3.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
