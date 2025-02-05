import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FcGoogle } from "react-icons/fc";

export default function Signin({ isOpen, setIsOpen }) {


    function closeModal() {
        setIsOpen(false)
    }


    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        SignIn
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <button className='flex items-center gap-2 w-full border p-2 rounded-lg border-gray-400 bg-white text-gray-700 hover:bg-gray-100'>SignUp With Google <FcGoogle /></button>
                                        <form className='flex flex-col gap-3 mt-3'>
                                            <div className='w-full flex flex-col gap-3'>
                                                <label htmlFor="email">Email:</label>
                                                <input className='focus:outline-none' type="email" id="email" name="email" placeholder='email@gmail.com' required />
                                            </div>
                                            <div className='w-full flex flex-col gap-3'>
                                                <label htmlFor="password">Password:</label>
                                                <input className='focus:outline-none' type="password" id="password" name="password" placeholder='**********' required />
                                            </div>
                                            <div className='w-full flex flex-col gap-3 mt-3'>
                                         <button className='w-full bg-zomato-400 text-white py-2 rounded'>Signin</button>
                                            </div>

                                        </form>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
