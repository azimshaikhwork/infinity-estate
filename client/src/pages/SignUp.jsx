import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>
                SignUp
            </h1>
            <form action="" className='flex flex-col gap-4'>
                <input type="text" name="" id="username" placeholder='User Name'
                    className='border p-3 rounded-lg text-red'
                />
                <input type="email" name="" id="email" placeholder='E-mail'
                    className='border p-3 rounded-lg'
                />
                <input type="password" name="" id="Password" placeholder='Password'
                    className='border p-3 rounded-lg'
                />
                <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 transition delay-200 disabled:opacity-70'>Sign Up</button>
            </form>
            <div className="flex gap-2 mt-5">
                <p>Have an Account?</p>
                <Link>
                    <span className='text-blue-700'>Sign Up</span>
                </Link>
            </div>
        </div>
    )
}

export default SignUp
