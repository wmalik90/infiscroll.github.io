import React from 'react';
import chartdata from './chartdata';


export const FileLoading = () => {


  let arrDuplicateChartRecords=[];
  const isInArray = (value, array) => {
    return array.indexOf(value) > -1;
  }

  const filterUniqueObservationChart=()=>{
  }

  {chartdata?.map(item => {
    
     if(!isInArray(item.observationtext, arrDuplicateChartRecords)) {
       arrDuplicateChartRecords.push(item.observationtext);
    }

    return (
      <>
       {/* {console.log("isinArray",!isInArray(item.observationtext, arrDuplicateChartRecords))}
      { console.log("duplicateArr",arrDuplicateChartRecords)} */}
       
        {!isInArray(item.observationtext, arrDuplicateChartRecords) && (
          
          <div   style={{ textDecorationColor:"red", height: 300, width: 200, overflow: 'auto',  flexDirection: 'column-reverse'}}>
            <label style={{marginBottom: 10}}>{item.observationtext}</label>
            <li
              onPress={() => filterUniqueObservationChart(item, chartdata)}>
              <i className="fa fa-view" />
            </li>
          </div>
        )}
       
          
      </>
    );
  })}
}
