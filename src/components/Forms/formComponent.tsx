const FormComponent = () => {
    return (
        <form className="form-content">
            <label htmlFor="fname">First Name</label><br></br>
            <input type="text" id="fname" name="fname" placeholder="first name"></input><br></br>
            <label htmlFor="lname">Last Name</label><br></br>
            <input type="text" id="lname" name="lname" ></input><br></br>
            <label htmlFor="age">Age</label><br></br>
            <input type="text" id="age" name="age"></input><br></br>
            <label htmlFor="email">Email</label><br></br>
            <input type="text" id="email" name="email"></input><br></br>
            <label htmlFor="phno">Phone Number</label><br></br>
            <input type="text" id="phno" name="phno"></input><br></br><br></br>
            <input type="submit" value="submit"></input>
        </form>
    )
}

export default FormComponent;