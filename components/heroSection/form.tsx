"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';


const appointmentSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  mobileNumber: z.string().min(10, 'Mobile number must be at least 10 digits'),
  address: z.string().min(1, 'Address is required'),
  businessName: z.string().min(1, 'Business name is required'),
});

type AppointmentSchema = z.infer<typeof appointmentSchema>;

const AppointmentForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentSchema>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = (data: AppointmentSchema) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent py-5">
      <div className="bg-white p-8 rounded-lg shadow-md w-screen md:w-full max-w-md shadow-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Make Appointment</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                {...register('name')}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-600 mt-1 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                {...register('email')}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-600 mt-1 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input
              type="text"
              {...register('mobileNumber')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Mobile Number"
            />
            {errors.mobileNumber && (
              <p className="text-red-600 mt-1 text-sm">{errors.mobileNumber.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              {...register('address')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Address"
            />
            {errors.address && (
              <p className="text-red-600 mt-1 text-sm">{errors.address.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Your Business Name</label>
            <input
              type="text"
              {...register('businessName')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Business Name"
            />
            {errors.businessName && (
              <p className="text-red-600 mt-1 text-sm">{errors.businessName.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
