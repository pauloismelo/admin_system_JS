import {Chart as ChartJS} from 'chart.js/auto'
import { useEffect, useState } from 'react';
import {Bar, Doughnut, Line} from 'react-chartjs-2'
import axios from 'axios'
import Loading from '../components/Loading';


function Home() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [dataBar, setDataBar] = useState();
    const [dataDou, setDataDou] = useState();

    useEffect(()=>{
        axios.get(apiUrl+`/home/bar`)
        .then((result)=>{
            setDataBar(result.data.datas)
        })
        .catch(e=>console.log(e))

        axios.get(apiUrl+`/home/doughnut`)
        .then((result)=>{
            setDataDou(result.data)
        })
        .catch(e=>console.log(e))
    },[])

    return (
        <>

        <div className="grid grid-cols-1 mb-4">
            <div className="rounded border-gray-400 bg-white">
                Line
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 h-3/6 text-center">
            <div className="col-1 rounded border-gray-400 bg-white text-center">
                <div>Articles's qty</div>
                
                {dataBar ? (
                    <Bar
                    data={{
                        labels: dataBar.map((data) => data.category),
                        datasets: [
                            {
                                label: "Article's qty",
                                data: dataBar.map((data) => data.qty),
                            },
                        ]
                    }}
                    />
                )
                :
                <Loading/>
                }
            </div>
            <div className="col-1 rounded border-gray-400 bg-white overflow-hidden text-center">
                {dataDou ? (
                    <Doughnut
                    data={{
                        labels: dataDou.map((data)=>data.name),
                        
                        datasets: [
                            {
                                label:"Testimonial",
                                data: [1,1],
                            }
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        }
                    }
                    />
                )
                :
                <Loading/>
                }
                

            </div>
        </div>
        </>

    );
}

export default Home;