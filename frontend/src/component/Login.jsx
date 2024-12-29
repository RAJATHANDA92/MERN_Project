import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)


    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={()=> document.getElementById('my_modal_3').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="mt-4 space-y-2">
                            <span>Email</span><br />
                            <input type="email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                placeholder="Enter your Email"
                                {...register("email", { required: true })}
                            /><br />
                            {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className="mt-4 space-y-2">
                            <span>Password</span><br />
                            <input type="text"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                placeholder="Enter your Password"
                                {...register("password", { required: true })}
                            /><br />
                            {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className="flex justify-around mt-4">
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700">
                                Login
                            </button>
                            <p>Not Register? <Link to='/signup' className="underline text-blue-500 cursor-pointer">SingUp</Link></p>
                        </div>
                    </form>
                </div>

            </dialog>
        </div>
    )
}

export default Login