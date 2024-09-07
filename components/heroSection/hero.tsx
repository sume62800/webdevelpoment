import Image from 'next/image';
import AppointmentForm from './form';
import HeroBanner from './herobanner';


const hero = () => {
  return (
    <>
    <div className="w-full min-h-svh bg-[url('/building.jpg')] bg-cover">
        <div className="w-full min-h-svh bg-black/70 bg-cover grid place-items-center md:grid-cols-2">
                <div className='w-full px-10 min-h-64'>
                  <HeroBanner/>
                </div>
                <div className=''>
                  <AppointmentForm/>
                </div>
        </div>
    </div>
    </>
  );
};

export default hero;
