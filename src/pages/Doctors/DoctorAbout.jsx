import { formateDate } from '../../utils/formateDate.js'
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h2 className="text-[18px] font-bold">About <span className="text-irisBlueColor">Alexander Maxwell</span>
        </h2>
        <p className="mt-3 text-textColor">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit totam quis ratione eum deserunt voluptatibus id. Doloremque sapiente non rem quasi fugiat aperiam architecto! Delectus iusto vero reiciendis praesentium dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corrupti odit sit natus voluptatum cum voluptatem atque architecto error. Laudantium nesciunt iste quos id placeat suscipit minus illum nihil dolores!
        </p>
      </div>

      <div>
        <h3 className="text-[18px] font-bold mt-4 text-headingColor">Education
        </h3>

        <ul className="pt-4 lg:p-5">
          <li className="flex sm:justify-between sm:items-center flex-col sm:flex-row mb-4">
            <div>
              <span className="text-irisBlueColor leading-6 font-semibold">{formateDate("09-13-2015")} - {formateDate("09-13-2017")}</span>
              <p className="font-medium leading-6 text-textColor">PHD in Surgeon</p>
            </div>

            <p className="font-medium leading-6 text-textColor">New Apollo Hospital, New York</p>
          </li>

          <li className="flex justify-between items-center">
            <div>
              <span className="text-irisBlueColor leading-6 font-semibold">{formateDate("07-04-2010")} - {formateDate("05-13-2012")}</span>
              <p className="font-medium leading-6 text-textColor">PHD in Surgeon</p>
            </div>

            <p className="font-medium leading-6 text-textColor">New Apollo Hospital, New York</p>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-[18px] font-bold mt-4 text-headingColor">Experience
        </h3>
        <ul className="pt-4 lg:p-5 grid sm:grid-cols-2 gap-[30px]">
          <li className="bg-[#fff9ea] p-4 rounded">
            <span className="text-yellowColor leading-6 font-semibold">{formateDate("07-04-2019")} - {formateDate("08-12-2021")}
            </span>
            <p className="font-medium leading-6 text-textColor">Sr. Surgeon</p>
            <p className="font-medium leading-6 text-textColor">New Apollo Hospital, New York</p>
          </li>
          <li className="bg-[#fff9ea] p-4 rounded">
            <span className="text-yellowColor leading-6 font-semibold">{formateDate("07-04-2019")} - {formateDate("08-12-2021")}
            </span>
            <p className="font-medium leading-6 text-textColor">Sr. Surgeon</p>
            <p className="font-medium leading-6 text-textColor">New Apollo Hospital, New York</p>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default DoctorAbout