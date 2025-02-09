import { Link } from "react-router-dom"
import Login from "./Login"
import { useForm } from "react-hook-form"

function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)


    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="border-[2px] shadow-md p-5 rounded-md modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">SignUp</h3>
                        <div className="mt-4 space-y-2">
                            <span>Name</span><br />
                            <input type="text"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                placeholder="Enter your FullName"
                                {...register("name", { required: true })}
                            /><br />
                            {errors.name && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
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
                                SignUp
                            </button>
                            <p className="text-xl">Already Register?
                                <button to='/' onClick={() => document.getElementById("my_modal_3").showModal()}
                                    className="underline text-blue-500 cursor-pointer">Login</button>
                                <Login /></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup