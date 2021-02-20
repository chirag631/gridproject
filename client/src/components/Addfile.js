import React, { Fragment, useState } from 'react';

import axios  from 'axios';

const Addfile = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [filename, setFilename] = useState('');
  const [title, setTitle] = React.useState('');
  const [discription, setDiscription] = React.useState('');
  const [userid,setUserid]=React.useState('');
  const [fetchdata,setFetchdata]=React.useState('');
 const [text,setData]=useState("chirag")
  const onChange = e => {
    
    setFilename(e.target.files[0]);
    setName(e.target.files[0].name)
  };
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDiscription = (event) => {
    setDiscription(event.target.value);
  };
const handleChangeUserid = e => {
  setUserid(e.target.value);
};
  const onSubmit =  e => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('articalImage',filename)
    formData.append('title', title);
    formData.append('discription',discription)
    formData.append('userid', userid);
    formData.append('name',name)
    console.log(title);
    
      
    

  axios.post('/uploadimg',formData ,{'title':title,'discription':discription,'userid':userid,'name':name, 
  },
    
  ).then(res=>{
    const message=res.data.message;
    console.log(message)
  } 
  )
  .catch(err=>console.log(err));
 

    
    /*
    
    async function fetchData() {
      const requestOptions = {
          method: 'POST',
          headers: {  
            'Content-Type':'multipart/form-data',
          boundary:'----WebKitFormBoundaryIn312MOjBWdkffIM',
          Accept:'application/json'
            },
          
      };
    
    const response = await fetch('/uploadimg',formData,requestOptions);
    const body = await response.json();
    console.log(body);
    
    setFetchdata(body);
    
    }
    fetchData().then(()=>{
      alert("dsfdsd")
    })*/
     /* axios.post('/uploadimg', formData ).then((res)=>
        res.json()
      ).then((res)=>{
        setMessage(res.register)
      }).catch((err)=>{
            console.log(err);
      });*/
  };
  console.log(name)
  const handleClose = () =>{
    setTitle('');
    setDiscription('');
    setUserid('');
}


console.warn(fetchdata);
  return (
    <Fragment>
      
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <div className='custom-file mb-4'>
        <label>title</label>
        <input
            type='text'
            className='custom-file-input'
            id='vvhjv'
            name="title"
            value={title}
            onChange={handleChangeTitle}
          />
          <label>discription</label>
          <input
            type='text'
            className='custom-file-input'
            id='cgg'
            name="discription"
            value={discription}
            onChange={handleChangeDiscription}
          />
<label>userid</label>
          <input
            type='text'
            className='custom-file-input'
            id='ffyf'
            name="userid"
            value={userid}
            onChange={handleChangeUserid}
          />
          <input
            type='file'
            filename="articalImage"
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            
          </label>
        </div>

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      
    </Fragment>
  );
};

export default Addfile;

