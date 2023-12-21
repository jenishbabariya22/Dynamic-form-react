import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Dynamic() {

  let id = Math.floor(Math.random() * 99)
  const [index, setindex] = useState([{
    name: "",
    email: "",
    salary: "",
  }])

  const submit = () => {
    let obj = { name: "", email: "", password: "", id }
    let ans = [...index, obj]
    setindex(ans)
    console.log(ans);
  }

  const deleteRow = (id) => {
    let copy = [...index]
    let filtered = copy.filter(val => val.id !== id)
    setindex(filtered)
    console.log(filtered);
  }

  return (
    <div className='container'>
      <h1 style={{ margin: "30px" }}>React - Add & Delete Table Rows Dynamically</h1>
      <div>
        <table className="table">
          <thead style={{ borderBottom: "1px solid black" }}>
            <tr key={5}>
              <th scope="col">Id</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Salary </th>
              <th scope="col">
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  type="button" onClick={submit} className="btn " style={{ border: "2px solid green", fontSize: "18px" }} > +</motion.button>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              index.map((val, index) => {
                if (index === 0) {
                  return (
                    <tr key={val.id}>
                      <td><input value={val.id} onChange={() => id(val.id)} type='text' placeholder='J' style={{ padding: "5px", width: "40px", border: "2px solid darkgrey", borderRadius: "50%", textAlign: 'center', }} /></td>
                      <td><input type='text' placeholder='Full Name' style={{ padding: "5px", border: "2px solid darkgrey" }} /></td>
                      <td><input type='text' placeholder='Email Address' style={{ padding: "5px", border: "2px solid darkgrey" }} /></td>
                      <td><input type='text' placeholder='Salary' style={{ padding: "5px", border: "2px solid darkgrey" }} /></td>
                    </tr>
                  )
                } else {
                  return (
                    <tr key={val.id}>
                      <td><input value={val.id} onChange={() => id(val.id)} type='text' style={{ padding: "5px", width: "40px", border: "2px solid darkgrey", textAlign: 'center' }} /></td>
                      <td><input type='text' placeholder='Full Name' style={{ padding: "5px", border: "2px solid darkgrey" }} /></td>
                      <td><input type='text' placeholder='Email Address' style={{ padding: "5px", border: "2px solid darkgrey" }} /></td>
                      <td><input type='text' placeholder='Salary' style={{ padding: "5px", border: "2px solid darkgrey" }} /></td>
                      <td><motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button" onClick={() => deleteRow(val.id)} className="btn " style={{ border: "2px solid red", fontSize: "18px", width: "50px" }} > x</motion.button></td>
                    </tr>
                  )
                }
              })
            }
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default Dynamic
