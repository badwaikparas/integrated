// import React, { useRef, useState } from 'react';
// // import './EmailTemplates.css';

// const templates = {
//   INVOICES: [
//     { title: "Send Invoice to Customer", subject: "Invoice with number {invoice_number} created", status: "Inactive" },
//     { title: "Invoice Payment Email", subject: "Invoice Payment Recorded", status: "Inactive" },
//     { title: "Recurring Invoice Created (Sent to Customer)", subject: "Recurring Invoice with number {invoice_number} created", status: "Inactive" },
//   ],
//   CUSTOMERS: [
//     { title: "New Contact Added (Welcome Mail)", subject: "Welcome to our service", status: "Inactive" },
//     { title: "Customer Follow-Up Email", subject: "Follow-up on recent activity", status: "Inactive" },
//   ],
//   TICKETS: [
//     { title: "New Ticket Opened (Sent to Customer)", subject: "New Ticket Opened", status: "Inactive" },
//     { title: "New Ticket Created (Created by Customer, Sent to Admin)", subject: "New Ticket Created", status: "Inactive" },
//     { title: "New Ticket Assigned (Sent to Staff)", subject: "New ticket has been assigned to you", status: "Inactive" },
//     { title: "Ticket Reply (Sent to Staff)", subject: "Ticket reply.", status: "Inactive" },
//     { title: "New Ticket Created- Autoresponse", subject: "New Ticket Opened", status: "Inactive" },
//     { title: "Ticket Reply (Sent to Customer)", subject: "New Ticket Reply", status: "Inactive" },
//   ],
//   PROPOSALS: [
//     { title: "Send Proposal to Customer", subject: "Proposal with Number{proposal-number) Created", status: "Inactive" },
//     { title: "Thank You Mail (Sent to Customer After Accept)", subject: "Thank You for Accepting Proposal", status: "Inactive" },
//     { title: "Proposal Accepted (Sent to Staff)", subject: "Customer Accepted Proposal", status: "Inactive" },
//     { title: "Proposal Rejected (Sent to Staff)", subject: "Customer Declined Proposal", status: "Inactive" },
//   ],
//   PROJECTS: [
//     { title: "Project Created (Sent to customer)", subject: "New Projected Created", status: "Active" },
//   ],
// };

// const categories = ["INVOICES", "CUSTOMERS", "TICKETS", "PROPOSALS", "PROJECTS", "TASKS", "STAFF", "LEADS", "EXPENSES", "DEPOSITS", "ORDERS", "Quotes", "Purchases"];

// const EmailTemplates = () => {
//   const [selectedCategory, setSelectedCategory] = useState("INVOICES");
//   const categoriesRef = useRef(null);

//   const scrollCategories = (direction) => {
//     if (categoriesRef.current) {
//       const scrollAmount = 150; // Adjust this value to match button width + margin
//       categoriesRef.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className="email-templates">
//       <h2>Email Templates</h2>
//       <p>Manage Email Templates</p>
//       <div className="categories-wrapper">
//         <button className="scroll-button" onClick={() => scrollCategories('left')}>{'<'}</button>
//         <div className="categories" ref={categoriesRef}>
//           {categories.map((category, index) => (
//             <button
//               key={index}
//               className={category === selectedCategory ? 'active' : ''}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//         <button className="scroll-button" onClick={() => scrollCategories('right')}>{'>'}</button>
//       </div>
//       <div className="templates">
//         {templates[selectedCategory]?.map((template, index) => (
//           <div className="template-card" key={index}>
//             <div className="template">
//               <div>
//                 <input type="radio" name="template" />
//                 <span>{template.title}</span>
//               </div>
//               <div>
//                 <span>{template.subject}</span>
//                 <span className={`status ${template.status.toLowerCase()}`}>{template.status}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EmailTemplates;
