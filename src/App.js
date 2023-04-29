import React, { useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios'
import CalendarComponent from './CalenderComponent';
import { FileLoading } from './FileLoading/FileLoading';


function App() {
  ///////comm
  // const [passengers, setPassengers] = useState([]);
  // const style = {
  //   height: 18,
  //   border: "1px solid green",
  //   margin: 6,
  //   padding: 8
  // };

  // let totalRecords = 149;
  // const  GetDataFromApi =  () => {
  
  //   let limit = 10;
  //   let offset = Math.ceil(passengers.length / limit)+1;



  //   var apiurl = `https://api.instantwebtools.net/v1/passenger?page=${offset}&size=${limit}`;

  //   axios.get(apiurl)
  //     .then((res) => {
  //       const apiresp =  res?.data;
  //       const mergeData= [...passengers,...apiresp.data];
  //       setPassengers(mergeData);
  //     })
  //     .catch((err) => {
  //   })
  // };

  // useEffect(()=>{
  //   GetDataFromApi();
   
  // },[])

  // const fetchmoreData=()=>{
  //   if(passengers.length < totalRecords)
  //   {
  //     GetDataFromApi();
  //   }
 
  // }

  return (
    <>
      {/* <CalendarComponent startingMonth={3} endingMonth={9} />
      <br></br> <br></br> <br></br> <br></br> 

       <div id="scrollableDiv" style={{ height: 300, width: 200, overflow: 'auto',  flexDirection: 'column-reverse', }}>
        <InfiniteScroll
          dataLength={passengers.length}
          next={fetchmoreData}
          hasMore={passengers.length < totalRecords}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {passengers && passengers.map((i, index) => (
            <div style={style} key={index}>
              {i.name} - #{index}
            </div>
          ))}
        </InfiniteScroll> 

       

      </div>*/}
       <FileLoading/>

    </>
  );
}

export default App;
