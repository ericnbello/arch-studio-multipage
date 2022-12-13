/* eslint-disable */
import Image from "next/image";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function ContactForm() {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Can\'t be empty'),
        email: Yup.string()
            .required('Can\'t be empty')
            .email('Email is invalid'),
        userMessage: Yup.string()
            .required('Can\'t be empty'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        reset();
        return false;
    }

    return (
        <div className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
            <div className="">
                <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                <label className="block mb-6">
                    <input type="text" name="name" {...register('name')} 
                        className={`${errors.firstName ? 'is-invalid' : ''} block px-6 py-2 w-full mt-1 border-b-2 border-veryDarkBlue hover:border-b-2 hover:border-veryDarkBlue focus:border-b-2 focus:border-veryDarkBlue cursor-pointer form-control `}
                        placeholder="Name"
                    />
                    <span className="invalid-feedback flex font-bold text-red justify-end">{errors.name?.message}</span>
                </label>
                <label className="block mb-6">
                    <input name="email" type="email" {...register('email')} className={`${errors.email ? 'is-invalid' : ''} block px-6 py-2 w-full mt-1 border-b-2 border-veryDarkBlue hover:border-b-2 hover:border-veryDarkBlue focus:border-b-2 focus:border-veryDarkBlue cursor-pointer`} placeholder="Email"
                    />
                    <span className="invalid-feedback flex font-bold text-red justify-end">{errors.email?.message}</span>
                </label>
                <label className="block mb-6">
                    <textarea name="message" {...register('userMessage')} className={`${errors.userMessage ? 'is-invalid' : ''} block px-6 py-2 w-full mt-1 border-b-2 border-veryDarkBlue hover:border-b-2 hover:border-veryDarkBlue focus:border-b-2 focus:border-veryDarkBlue cursor-pointer`} rows="3" placeholder="Message"
                    ></textarea>
                    <span className="invalid-feedback flex font-bold text-red justify-end">{errors.userMessage?.message}</span>
                </label>
                <div className="flex justify-end -mt-6">
                    <button type="submit" className="h-10 px-4 transition-colors duration-150 items-center focus:shadow-outline bg-veryDarkBlue hover:bg-darkGrey"
                    >
                        <span className=''>
                            <Image className="text-white" src="/assets/icons/icon-arrow.svg" height="10" width="10"></Image>
                        </span>
                    </button>
                </div>
                {/* <span className="success-feedback flex font-bold text-veryDarkBlue justify-start">{}</span> */}
                </form>
            </div>
        </div>
    )
}