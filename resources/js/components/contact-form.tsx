import { useForm } from "@inertiajs/react";

type Props = {
    onSuccess: () => void;
}

export default function ContactForm({ onSuccess }: Props) {
    const { data, setData, post, errors, reset, processing } = useForm({
        name: '',
        email:'',
        phone: '',
        gender: ''
    });

    function submit(e: React.FormEvent<HTMLFormElement> ) {
        e.preventDefault()
        post('/contacts', {
            onSuccess: () => {
                reset();
                onSuccess();
            }
        })
    }

    return (
        <div className="p-6">
            <form onSubmit={submit}>
                <div className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                        <label 
                            htmlFor="name"
                            className='block mb-2 text-sm font-medium '
                        >
                            Name
                        </label>
                        <input 
                            type="text" 
                            value={data.name}
                            onChange={ (e) => setData('name', e.target.value) }
                            name="name"
                            id="name"
                            className="w-full border p-3 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-2  focus:ring-blue-200"
                            placeholder="John Doe"
                        />

                        { errors.name && <p className="errors text-xs text-red-700"> { errors.name } * </p> }

                    </div>

                    {/* Email */}
                    <div>
                        <label 
                            htmlFor="email"
                            className='block mb-2 text-sm font-medium '
                        >
                            Email
                        </label>
                        <input 
                            type="email" 
                            value={data.email}
                            onChange={ (e) => setData('email', e.target.value) }
                            name="email" 
                            id="email" 
                            className="w-full border p-3 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-2  focus:ring-blue-200"
                            placeholder="johndoe@gmail.com"
                        />

                        { errors.email && <p className="errors text-xs text-red-700"> { errors.email } * </p> }

                    </div>

                    {/* Phone */}
                    <div>
                        <label 
                            htmlFor="phone"
                            className='block mb-2 text-sm font-medium'
                        >
                            Phone
                        </label>
                        <input 
                            type="tel"
                            value={data.phone}
                            onChange={ (e) => setData('phone', e.target.value)}
                            name="phone"
                            id="phone"
                            className="w-full border p-3 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-2  focus:ring-blue-200"
                            placeholder="09123456789"
                        />

                        { errors.phone && <p className="errors text-xs text-red-700"> { errors.phone } * </p> }

                    </div>

                    {/* Gender */}
                    <div>
                        <label 
                            htmlFor="gender"
                            className="block mb-2 text-sm font-medium"
                        >
                            Gender
                        </label>

                        <div className="flex gap-1 ">
                            {/* Male */}
                            <div className="border p-2 flex-1 rounded">
                                <label 
                                    htmlFor="male"
                                    className="flex items-center gap-1 hover:cursor-pointer"
                                >
                                    <input 
                                        type="radio" 
                                        value="male"
                                        name="gender"
                                        id="male"
                                        onChange={ (e) => setData('gender', e.target.value)}
                                        
                                    />
                                    Male
                                </label>
                            </div>

                            {/* Female */}
                            <div className="border p-2 flex-1 rounded">
                                <label 
                                    htmlFor="female"
                                    className="flex items-center gap-1 hover:cursor-pointer"
                                >   
                                    <input 
                                        type="radio" 
                                        value="female"
                                        name="gender"
                                        id="female"
                                        onChange={ (e) => setData('gender', e.target.value)}
                                    />
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className={`border py-2 px-4 rounded font-medium cursor-pointer transition-all duration-300 ${
                                processing
                                    ? 'bg-gray-300 cursor-not-allowed'
                                    : 'hover:bg-blue-500 hover:text-white'
                            }`}
                        >
                            { processing ? 'Adding contact...' : 'Add contact'}
                        </button>
                    </div>
                </div>

                
            </form>
        </div>
    )
}