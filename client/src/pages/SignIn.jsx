import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.id]: e.target.value
                // here [e.target.id] is  dynamic jey 
            }
        )
        // console.log(formData)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await fetch('/api/auth/signin',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });
            const data = await res.json()
            console.log(data)
            if (data.success === false) {
                setError(data.message)
                setLoading(false)
                return
            }
            setLoading(false);
            setError(null);
            navigate('/')
            // console.log(data.error);
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    };
    return (
        <div className='p-3 max-w-lg mx-auto mt-auto' style={{ marginTop: "5%" }}>
            <h1 className='text-3xl text-center font-semibold my-7'>
                Sign In
            </h1>
            <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <input type="email" name="" id="email" placeholder='E-mail'
                    className='border p-3 rounded-lg'
                    onChange={handleChange} />
                <input type="password" name="" id="password" placeholder='Password'
                    className='border p-3 rounded-lg'
                    onChange={handleChange} />
                <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 transition delay-200 disabled:opacity-70'>{loading ? 'Loading...' : 'Login'}</button>
            </form>
            <div className="flex gap-2 mt-5">
                <p>Dont have Account?</p>
                <Link to={"/sign-up"}>
                    <span className='text-blue-700'>Sign Up</span>
                </Link>
            </div>
            {error && <p className='bg-red-600 text-stone-100 text-center rounded-lg py-2'>{error}</p>}
        </div>
    )
}

export default SignIn
