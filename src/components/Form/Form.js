import { useState, useEffect } from 'react';

export default function Form() {
  const [todoadd, setTodoadd] = useState([]);
  const [getinput, setinput] = useState('');

  //get text
  const Onchange = (e) => {
    e.preventDefault();
    setinput(e.target.value);
  }
  
  //press enter add list
  const Onsubmit = (e) => {
    e.preventDefault();
    setTodoadd([...todoadd,getinput]);
  }

  return (
    <div className="formbox border rounded-3 p-5" >
      <h1 className="text-center textcolor">Todo App</h1>
      <div>
        <div className="d-flex flex-row justify-content-start">
          <div className="d-flex justify-content-center align-items-center me-2">
            <i className="fa-solid fa-angle-down" id='clearall'></i>
          </div>
          <div className="w-100 mt-3">
            <form className="form-floating mb-3" action="" onSubmit={Onsubmit}>
              <input
                className=" ms-1 rounded-3 border border-3 border-dark form-control"
                placeholder="Whats need to be done?"
                mv-mode="edit"
                type="text"
                name=""
                id="floatingInput"
                onChange={Onchange} />
              <label htmlFor="floatingInput">Whats need to be done?</label>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
