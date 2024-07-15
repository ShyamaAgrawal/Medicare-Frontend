/* eslint-disable react/prop-types */
import { formateDate } from "../../utils/formateDate.js";
const DoctorAbout = ({ name, about, qualifications, experiences }) => {
  return (
    <div>
      <div>
        <h2 className="text-[18px] font-bold">
          About <span className="text-irisBlueColor">{name}</span>
        </h2>
        <p className="mt-3 text-textColor">{about ? about : 'You have not added anything about you'}</p>
      </div>

      <div>
        <h3 className="text-[18px] font-bold mt-4 text-headingColor">
          Education
        </h3>

        <ul className="pt-4 lg:p-5">
          {qualifications?.map((item, index) => {
            {/* {console.log(item)} */}
            return <li
              key={index}
              className="flex sm:justify-between sm:items-center flex-col sm:flex-row mb-4"
            >
              <div>
                <span className="text-irisBlueColor leading-6 font-semibold">
                  {formateDate(item.startingDate)} - {" "}
                  {formateDate(item.endingDate)}
                </span>
                <p className="font-medium leading-6 text-textColor">
                  {item.degree}
                </p>
              </div>

              <p className="font-medium leading-6 text-textColor">
                {item.university}
              </p>
            </li>;
          })}
        </ul>
      </div>

      <div>
        <h3 className="text-[18px] font-bold mt-4 text-headingColor">
          Experience
        </h3>
        <ul className="pt-4 lg:p-5 grid sm:grid-cols-2 gap-[30px]">
          {experiences?.map((item, index) => {
            return <li key={index} className="bg-[#fff9ea] p-4 rounded">
              <span className="text-yellowColor leading-6 font-semibold">
                {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
              </span>
              <p className="font-medium leading-6 text-textColor">
                {item.position}
              </p>
              <p className="font-medium leading-6 text-textColor">
                {item.hospital}
              </p>
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
