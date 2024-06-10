import './BookCar.css';

function BookCar(){

    const onContactFormClick = (e) => {
        alert("You Booked  Car Sucssefully")
    }

    return(
        <div className='container5'>

            <h2>Contact Us</h2>
            <div className="formData">
                    <form onSubmit={onContactFormClick}>
                        <div className="title">
                            <h3>Car Rental Reservation Form</h3>
                        </div>                    
                        <input type="text" name="fullname" placeholder="Your fullname" required></input>
                
                        <input type="number" name="age" placeholder="Age" required></input>

                        <input type="email" name="email" placeholder="Email Id" required></input>

                        <input type="number" name="mobile" placeholder="Mobile Number" required></input>

                        <input type="text" name="address" placeholder="Address" required></input>
                                               
                        <input type='number' name='dates' placeholder='Pick-up date'></input>  

                        <input type='number' name='dates' placeholder='Drop-off date'></input>
                        
                        <input type='text' name='location' placeholder='Pick-up Location' required></input>

                        <input type='text' name='location' placeholder='Drop-off Location' required></input>
                        
                        <select name='members'>
                            <option value=''>Select members</option>
                            <option>5-7</option>
                            <option>8-10</option>
                            <option>11-14</option>
                        </select>
                    
                        <input type="submit" value="Book Car"></input>
                        <input type="reset" value="Cancel"></input>
                    </form>
                </div>
        </div>
    );
}
export default BookCar;