import Leave from "../component/Leave";
import Worker from "../component/Worker";

const Workers = () => {
  return (
    <div id="body" className="bg-custom-dark-blue pt-4 w-[75vw]">
      <div id="onleave" className="mb-4">
        <p className="text-5xl text-custom-orange font-bold ml-6">On leave</p>
        <div className="bg-custom-gray h-[35vh] mt-5 w-[50vw] ml-6 rounded-lg">
          <ul >
          <li className="border-b text-custom-dark-blue border-black pt-2 font-bold pb-2 mb-2">
          <li className="pl-3 grid grid-cols-6 gap-4">
      <p >Name</p>
      <p >Type</p>
      <p >PhoneNumber</p>
      <p >Days</p>
      <p >from</p>
      <p >Till</p>
    </li>
            </li>
            <li className="border-b border-black pb-2 mb-2">
              <Worker 
                name="suyash shukla" 
                phoneNumber={78622262868} 
                type="Electrician" 
                Days={2} 
                from="24/5/2024" 
                to="29/5/2024"
              />
            </li>
            <li className="border-b border-black pb-2 mb-2">
              <Worker 
                name="suyash" 
                phoneNumber={78622262868} 
                type="Electrician" 
                Days={2} 
                from="24/5/2024" 
                to="29/5/2024"
              />
            </li>
            {/* Add more Worker components here with similar <li> wrappers */}
          </ul>
        </div>
      </div>
      <div id="leaveApplication">
      <p className="text-5xl text-custom-orange font-bold mb-3 ml-6">Leave Application</p>
        <div className="bg-custom-gray h-[35vh] mt-5 w-[70vw] ml-6 rounded-lg">
          <ul >
          <li className="border-b text-custom-dark-blue border-black pt-2 font-bold pb-2 mb-2 h-[60px] ">
          <li className="pl-3 grid grid-cols-8 gap-4">
      <p  >Name</p>
      <p >Type</p>
      <p >PhoneNumber</p>
      <p >Days</p>
      <p >from</p>
      <p >Till</p>
    </li>
            </li>
            <li className="border-b border-black pb-2 mb-2">
              <Leave 
                name="suyash shukla" 
                phoneNumber={78622262868} 
                type="Electrician" 
                Days={2} 
                from="24/5/2024" 
                to="29/5/2024"
              />
            </li>
            <li className="border-b  border-black pb-2 mb-2">
              <Leave 
                name="suyash" 
                phoneNumber={78622262868} 
                type="Electrician" 
                Days={2} 
                from="24/5/2024" 
                to="29/5/2024"
              />
              
            </li>
            {/* Add more Worker components here with similar <li> wrappers */}
          </ul>
        </div>
        {/* Add content for leave application here */}
      </div>
    </div>
  );
}

export default Workers;



// <div className="h-[30vh] w-[75vw]">
// <p className="text-5xl text-custom-orange font-bold ml-6">Electricians</p>

// </div>
// <div className="h-[30vh] w-[75vw]">
// <p className="text-5xl text-custom-orange font-bold">Cleaners</p>
// <div>
//   <ul>
//     <li>
//       <p>Arnav Sharma on-duty</p>
//       <p>off-duty</p>
//     </li>
//   </ul>
// </div>
// </div>
// <div className="h-[30vh] w-[75vw]">
// <p className="text-5xl text-custom-orange font-bold">Carpenters</p>
// <div>
//   <ul>
//     <li>
//       <p>Shubham kumar Singh</p>
//       <p>on-duty</p>
//     </li>
//   </ul>
// </div>
// </div>