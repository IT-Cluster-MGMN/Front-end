import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';
import FilterSideBar from './FilterSideBar';


const TestPage = () => {

  const config = {headers: { Authorization: `Bearer ${Cookies.get('accessToken')}` }};
  const [usersData, setUsersData] = useState(null);

  const bodyParameters = {
    key: "value"
  };

  const customRequest = axios.create({
    baseURL: 'http://localhost:8000/api/data/info',
    headers: {'RequestOrigin': 'http://localhost:8000'},
    withCredentials:true
  })

  const handleDataReveal = () => {customRequest.get('http://localhost:8000/api/data/info')
  .then((res) => {
    // ''    ''     ''      ''
    console.log((res.data));
    setUsersData(res.data)
  })
  .catch((err) => {
    console.log(err);
  })}

  return(
    <>
      <FilterSideBar/>
    </>
  );
};
export default TestPage;