import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-white flex justify-center items-center p-4' name='contact'>
        <form method='POST' action="https://getform.io/f/3fa6a99d-8d38-4ecb-b1bb-f957f05673db" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>Contact</p>
                <p className='py-4 pt-5'>// Submit the form below or email me ( <a href='' className='underline text-yellow-400 hover:text-yellow-500'>aungchitminn.dev@gmail.com</a> )</p>
            </div>
            <input type='text' placeholder='Name' name='name' className='bg-[#dddddd] p-2' />
            <input type='email' placeholder='Email' name='email' className='my-4 p-2 bg-[#dddddd]' />
            <textarea className='border bg-[#dddddd] p-2' placeholder='Message' name='message' row='10'></textarea>
            <button type='submit' className='border border-[#2e2e2e] hover:bg-yellow-400 hover:border-yellow-400 px-4 py-3 my-8 mx-auto'>
                Let's Collaborate
            </button>
        </form>
    </div>
  )
}

export default Contact