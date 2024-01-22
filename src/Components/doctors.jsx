import React, { useState, useEffect } from 'react';

const Docs = ({ userCity, allDocs }) => {
    const [cityData, setCityData] = useState([]);
    
    useEffect(() => {
        //const values = Object.values(availableDocs);
        const filterData = allDocs.filter(data => data.location.toLowerCase() === userCity.toLowerCase());
        setCityData(filterData);
        //console.log(userCity);
    },[userCity, allDocs]);


    //console.log(cityData);

  return (
    <div id='docsScroll'>
        {cityData.length > 0 ? (
        <div>
          <h2 className="text-2xl font-extrabold mb-2 mt-16">Physiotherapists near, {userCity}</h2>
          <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-4">
            {cityData.slice(0,3).map((data, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-md">
                    <div className='pb-16'>
                        <h2 className="text-3xl font-extrabold ">{data.first_name}</h2>
                        <h2 className="text-3xl font-extrabold pb-2">{data.last_name}</h2>
                        <div className='flex flex-row justify-between'>
                            <p className='text-left text-xs'>{data.speciality}, {data.qualification}</p>
                            <p className='text-right text-xs'>{data.location}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm'>Contact: {data.contact_number}</p>
                        <p className='text-sm'>Email: {data.email}</p>
                    </div>
                </div>
            ))}
                  </div>
              </div>
          ):(
            <h2 className="text-2xl font-extrabold mb-2 mt-16">No Physiotherapists near, {userCity}</h2>
          )}
      </div>
  );
}

export default Docs;
