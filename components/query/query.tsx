import React from "react";
import faq from "./faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Query() {
  return (
    <section className="bg-white dark:bg-gray-900 px-3 md:px-20 py-20">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h1>
      <div className="py-10">
        <Accordion type="single" collapsible>
        <div className="">
        <AccordionItem value="faq1">
            <AccordionTrigger>{faq.faqs.faq1.q}</AccordionTrigger>
            <AccordionContent>{faq.faqs.faq1.a}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq2">
            <AccordionTrigger>{faq.faqs.faq2.q}</AccordionTrigger>
            <AccordionContent>{faq.faqs.faq2.a}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq3">
            <AccordionTrigger>{faq.faqs.faq3.q}</AccordionTrigger>
            <AccordionContent>{faq.faqs.faq3.a}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq4">
            <AccordionTrigger>{faq.faqs.faq4.q}</AccordionTrigger>
            <AccordionContent>{faq.faqs.faq4.a}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq5">
            <AccordionTrigger>{faq.faqs.faq5.q}</AccordionTrigger>
            <AccordionContent>{faq.faqs.faq5.a}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq6">
            <AccordionTrigger>{faq.faqs.faq6.q}</AccordionTrigger>
            <AccordionContent>{faq.faqs.faq6.a}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq7">
            <AccordionTrigger>{faq.faqs.faq7.q}</AccordionTrigger>
            <AccordionContent>{faq.faqs.faq7.a}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq8">
            <AccordionTrigger>{faq.faqs.faq8.q}</AccordionTrigger>
            <AccordionContent>{faq.faqs.faq8.a}</AccordionContent>
          </AccordionItem>
        </div>
        </Accordion>
      </div>
    </section>
  );
}

export default Query;



// function query2() {

//     return (
//       <section className="bg-white dark:bg-gray-900 px-3 md:px-20 py-10">
//     <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
//         <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
//         <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
//             <div>
//                 <div className="mb-10">
//                     <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
//                         <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
//                         {faq.faqs.faq1.q}
//                     </h3>
//                     <p className="text-gray-500 dark:text-gray-400">{faq.faqs.faq1.a}</p>
//                 </div>
//                 <div className="mb-10">                        
//                     <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
//                         <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
//                         {faq.faqs.faq2.q}
//                     </h3>
//                     <p className="text-gray-500 dark:text-gray-400">{faq.faqs.faq2.a}</p>
//                 </div>
//                 <div className="mb-10">
//                     <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
//                         <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
//                         {faq.faqs.faq3.q}
//                     </h3>
//                     <p className="text-gray-500 dark:text-gray-400">{faq.faqs.faq3.a}</p>
  
//                 </div>
//                 <div className="mb-10">
//                     <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
//                         <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
//                         {faq.faqs.faq4.q}
//                     </h3>
//                     <p className="text-gray-500 dark:text-gray-400">{faq.faqs.faq4.a}</p>
//                 </div>
//             </div>
//             <div>
//                 <div className="mb-10">
//                     <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
//                         <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
//                         {faq.faqs.faq5.q}
//                     </h3>
//                     <p className="text-gray-500 dark:text-gray-400">{faq.faqs.faq5.a}</p>
//                 </div>
//                 <div className="mb-10">
//                     <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
//                         <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
//                         {faq.faqs.faq6.q}
//                     </h3>
//                     <p className="text-gray-500 dark:text-gray-400">{faq.faqs.faq6.a}</p>
                    
//                 </div>
//                 <div className="mb-10">
//                     <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
//                         <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
//                         {faq.faqs.faq7.q}
//                     </h3>
//                     <p className="text-gray-500 dark:text-gray-400">{faq.faqs.faq7.a}</p>
                  
//                 </div>
//                 <div className="mb-10">
//                     <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
//                         <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
//                         {faq.faqs.faq8.q}
//                     </h3>
//                     <p className="text-gray-500 dark:text-gray-400">{faq.faqs.faq8.a}</p>
                   
//                 </div>
//             </div>
//         </div>
//     </div>
  
    
//   </section>
//     )
//   }