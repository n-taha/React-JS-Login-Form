import { useState } from "react";

function Form(){
  const [Data , setData] = useState(
    {
        name : "",
        email : ""
    }
  );

  const [submitData , setSubmitData] = useState({
    name : "",
    email : "",
  })

  const handleChange = (e)=>{
     const {name , value} = e.target
      setData((preData)=>({
        ...preData,
        [name]:value
      }))
  }

  const handleSubmit = (event)=>{
      event.preventDefault();
      setSubmitData(Data)
  }
    return(
        <div>
        <div className="flex flex-col items-center justify-center mx-auto bg-slate-200 h-screen bg-cover" id="Back">
            <div className="bg-[transparent] shadow-md w-full max-w-md item-center px-5 py-14 rounded-lg" id="Effect">
                <h1 className="text-center text-2xl font-bold text-white">Login Form</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-sm block text-white mt-1">Name:</label>
                        <input type="text" className="w-full rounded-lg px-2 py-1 border border-inherit bg-inherit text-white" onChange={handleChange} name="name" value={Data.name}/>
                    </div>

                    <div>
                        <label className="text-sm block text-white mt-1">Email:</label>
                        <input type="text" className="w-full rounded-lg px-2 py-1 border bg-inherit text-white" onChange={handleChange} name="email" value={Data.email}/>
                    </div>

                    <div>
                        <label className="text-sm block text-white mt-1">Password:</label>
                        <input type="password" className="w-full rounded-lg px-2 py-1 border bg-inherit text-white" />
                    </div>

                    <button type="submit" className="bg-indigo-600 w-full text-white py-1 rounded-lg mt-5">Login</button>
                </form>

                <div className="mt-3 bg-slate-200 p-3 rounded-md">
                    <h1 className="text-center font-semibold text-slate-800">Submitted Data</h1>
                    <p>Name:{submitData.name}</p>
                    <p>Email:{submitData.email}</p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Form;