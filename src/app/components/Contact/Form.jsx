
'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';


export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = ( params ) => {

const toastId = toast.loading('Sending your message, pleace wait...')
  
//Funcion para mandar correo, limitado a mandar solo un correo cada 5 segundos

    emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        params,
      {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
          throttle: 5000, // you cant no send more then 1 email per second
        }
      })
      .then(
        () => {
          toast.success('I have received your messsage, I will get back to you soon', {
            id : toastId,
          });
        },
        (error) => {
          toast.error('There was an error sending your message, please try again later!', {
            id : toastId,
          });
        },
      );
  };

// enviamos el posteo del formulario
  const onSubmit = data => {
    console.log(data, 'data')

    // no pasaremos los datos a la funcion sendEmail directamente, si no que haremos un constante que contenga el objeto de los datos que mandaremos al template del sendEmail

    const sendParamsEmail = {
      to_name: 'Javier Mills',
      from_name: data.name,
      reply_to: data.email,
      message: data.message
    }
console.log(sendParamsEmail, 'params')

    sendEmail(sendParamsEmail);
  };
  console.log(errors);
  
  return (
   <>
    <form className='max-w-md w-full flex flex-col items-center justify-center space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <input className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 costom-bg' type="text" placeholder="name" {...register("name", {
        required: 'This field is required',
        minLength:{
          value: 3,
          message: 'Name Should be atleast 3 characters long'
        }
      })} />
      { errors.name && <span className='inline-block self-start text-accent'>{errors.name.message}</span>}

      <input className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 costom-bg' type="email" placeholder="email" {...register("email", {
        required: 'This field is required'})} />
      { errors.email && <span className='inline-block self-start text-accent'>{errors.email.message}</span>}

      <textarea className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 costom-bg' type="text" placeholder="message" {...register("message", {
        required: 'This field is required', maxLength: {
          value:256,
          message: 'Message should be less than 500 charactes'
        }, minLength: {
          value:50,
          message: 'Message should be more than 50 charactes'
        }})} />
      { errors.message && <span className='inline-block self-start text-accent'>{errors.message.message}</span>}

      <input value={'Mensaje'} className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm 
      text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize
      ' type="submit" />
    </form>
   <Toaster position="bottom-center" richColors={ true } />

   </>
  );
}