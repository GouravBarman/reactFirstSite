import React from 'react';

const Contact=()=>{
    return(
        <>
         <div className='contact'>
            <main>
                <h1>
                    Contact Us
                </h1>
                <form>
                      <div>
                        <label> Name :- </label>
                        <input type="text" required placeholder='Enter name' />
                      </div>

                      <div>
                        <label> Email :-</label>
                        <input type="email" required placeholder='Enter Your Mail' />
                      </div>

                      <div>
                        <label> Query :- </label>
                        <input type="text" required placeholder='Enter Your Query....' />
                      </div>

                      <button type='submit'>Connect With Us</button>
                </form>
            </main>
         </div>
        </>
    )
}

export default Contact;