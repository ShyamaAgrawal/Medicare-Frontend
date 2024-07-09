
const SidePanel = () => {
    return (
        <div style={{boxShadow:'10px 10px 100px lightgray'}} className="p-5 rounded">
            <div className="flex justify-between items-center mb-2">
                <p>Booking Fees</p>
                <h3 className="font-semibold">Rs. 1000</h3>
            </div>
            <hr />
            <div className="my-3">
                <h3 className="font-semibold">Available Time Slots:</h3>
                <ul>
                    <li className="flex justify-between items-center leading-9">
                        <p className="text-textColor">Sunday</p>
                        <p className="text-textColor">4:00 PM - 9:00PM</p>
                    </li>
                    <li className="flex justify-between items-center leading-9">
                        <p className="text-textColor">Sunday</p>
                        <p className="text-textColor">4:00 PM - 9:00PM</p>
                    </li>
                    <li className="flex justify-between items-center leading-9">
                        <p className="text-textColor">Sunday</p>
                        <p className="text-textColor">4:00 PM - 9:00PM</p>
                    </li>
                </ul>
                <button className="btn w-full">Book Appointment</button>
            </div>
        </div>
    )
}

export default SidePanel