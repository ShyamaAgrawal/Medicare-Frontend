/* eslint-disable react/prop-types */

const Error = ({errorMsg}) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
    <h3 className="text-[20px] leading-[30px] font-semibold text-red-600 ">{errorMsg}</h3>
    </div>
  )
}

export default Error