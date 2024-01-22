import React, { useEffect, useState } from 'react';
import Docs from './doctors';
import { useNavigate, useLocation } from 'react-router-dom'

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    city: '',
    company: '',
    cc: '',
  });

  const [city, setCity] = useState('');
  const [availableDoctors, setAvailableDoctors] = useState([]);
  const [age, setAge] = useState('');
  const [isSubmit, isSetSubmit] = useState(false);

  const history = useNavigate();
  const location = useLocation();


  // Fetch available doctors from JSON
  const fetchData = async () => {
    let response = await fetch('mock.json');
    let data = await response.json();
    setAvailableDoctors(data);
    //console.log(data);
  }

  useEffect(() => {
    fetchData();
  },[]);


  // to get the url param
  useEffect(() => {
    const urlCity = new URLSearchParams(location.search).get('city');
    //console.log(urlCity);

    if (urlCity) {
      // If city param is present in the URL -> update the formData
      setCity(urlCity);
      isSetSubmit(true);
    }
  }, [location.search]);


  //runs only when page reloaded 
  useEffect(() => {
    const isReloaded = performance && performance.navigation && performance.navigation.type === 1;
    if (isReloaded) {
      // If manually reloaded, redirect to the default path
      history('');
      isSetSubmit(false);
    }
  }, [history]);


  //update and handle age param
  const handleAge=(event) => {
    setAge(event.target.value);
  }
 

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setAge('');
    setCity(formData.city);

    //setting url path as per the city/location by user input
    if(formData.city){
      history(`?city=${formData.city}`);
    }

    isSetSubmit(true);
    setFormData({
      name: '',
      contact: '',
      city: '',
      company: '',
      cc: '',
    });
  };

  //reset form data
  const handleReset=() => {
    isSetSubmit(false);
    setAge('');
    setFormData({
      name: '',
      contact: '',
      city: '',
      company: '',
      cc: '',
    });
    setCity('');
    history('');
  }

  return (
    <div className=" flex flex-col booking-form-section bg-gray-800 text-white py-8 flex items-center justify-center">
      <form className='md:max-w-lg max-w-sm mx-auto bg-gray-900 md:p-6 p-2 rounded-lg shadow-lg' disabled={isSubmit} onSubmit={handleSubmit}>
        <div className='grid md:grid-cols-2'>
          <div className='mb-5'>
            <label htmlFor="text" className='block mb-2 text-sm font-medium'>Name</label>
            <input type="text"  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className='bg-gray-700 border-dashed border-2 border-gray-500 mr-4 rounded-lg p-2 md:w-44 w-full'  />
          </div>
          <div className='mb-5'>
            <label htmlFor="text" className='block mb-2 text-sm font-medium'>Contact</label>
            <input type="text" value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})} className='bg-gray-700 border-dashed border-2 border-gray-500 rounded-lg p-2 md:w-44 w-full'  />
          </div>
        </div>
        <div className='grid md:grid-cols-3'>
        <div className='mb-5'>
            <label htmlFor="text" className='block mb-2 text-sm font-medium'>Age</label>
            <input type="text" value={age} className='bg-gray-700 border-dashed border-2 border-gray-500 rounded-lg p-2 md:w-20 w-full' onChange={handleAge} />
          </div>
          <div className='mb-5'>
            <label htmlFor="text" className='block mb-2 text-sm font-medium'>City</label>
            <input type="text" value={formData.city || ''} onChange={(e) => setFormData({...formData, city: e.target.value})} className='bg-gray-700 border-dashed border-2 border-gray-500 mr-2 rounded-lg p-2 md:w-32 w-full' />
          </div>
          <div className='mb-5'>
            <label htmlFor="text" className='block mb-2 text-sm font-medium'>Company</label>
            <input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className='bg-gray-700 border-dashed border-2 border-gray-500 rounded-lg p-2 md:w-32 w-full'  />
          </div>
        </div>
        <div className='mb-5'>
            <label htmlFor="message" className='block mb-2 text-sm font-medium'>Chief complaints</label>
            <textarea rows="3" value={formData.cc} onChange={(e) => setFormData({...formData, cc: e.target.value})} className='bg-gray-700 border-dashed border-2 border-gray-500 rounded-lg p-2 w-full' placeholder='Write here...'> </textarea>
        </div>
        {/* {
          parseInt(age > 40) && (
        <div className='mb-5'>
            <input type="checkbox" className='w-4 h-4'/>
            <label for="default-checkbox" className='block mb-2 text-sm font-medium'> Any previous experience with physiotherapy</label> 
        </div>
        )} */}
        <div className="mt-4 mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              disabled={age < 40 || age===''}
              className="form-checkbox h-4 w-4 text-blue-500"
            />
            <span className={`ml-2 ${parseInt(age) < 40 || age ==='' ? 'text-gray-600' : 'text-white'}`}>Previous experience with physiotherapy</span>
          </label>
        </div>
        <div className='flex flex-row items-center justify-evenly'>
          <button type='submit' disabled={isSubmit} className={` ${!isSubmit ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-700'} text-white font-bold py-2 px-4 rounded-full`}>Submit</button>
          <button type='reset' onClick={handleReset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">Reset</button>
        </div>
      </form>
      { isSubmit && <Docs userCity={city} allDocs={availableDoctors}/> }
    </div>
  );
}

export default BookingForm;
