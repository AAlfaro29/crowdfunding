import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const CreatePledgeForm = () => {
  const history = useHistory();
  const [pledgeInfo, setPledgeInfo] = useState({
    amount: '',
    comment: '',
    anonymous: '',
    project_id: '',
    date_created: new Date(),
  });
  const handleChange = (event) => {
    const { id, value } = event.target;
    setPledgeInfo((prevProject) => {
      return {
        ...prevProject,
        [id]: value,
      };
    });
  };
  const postData = async () => {
    console.log('Im posting a pledge to your API');
    const token = window.localStorage.getItem('token');
    console.log("What is token: ", token)
    const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
      method: 'post',
      headers: {
        "Authorization": `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pledgeInfo),
    });
    return response.json();
  };
  const handleSubmit = (e) => {
      console.log("This is my data",pledgeInfo)
    e.preventDefault();
    // if (window.localStorage.getItem('token')) {
    postData().then((response) => {
      console.log('response from our API --------', response);
      // window.localStorage.setItem('token', response.token);
      // history.push('/');
    });
    // }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='pledgeAmount'>Pledge Amount:</label>
        <input
          type='text'
          id='title'
          placeholder='Enter pledge amount'
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='pledgeDescription'>Description:</label>
        <input
          type='text'
          id='description'
          placeholder='Description'
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='Anonymous'>Anonymous:</label>
        <input
          type='text'
          id='anonymous'
          placeholder='Anonymous'
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='project_id'>Project Id:</label>
        <input
          type='text'
          id='project_id'
          placeholder='Project Id'
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Submit New Project</button>
    </form>
  );
};
export default CreatePledgeForm;