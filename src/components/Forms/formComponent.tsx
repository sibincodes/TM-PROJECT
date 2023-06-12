import Wrapper from "../CommonComponents/BoxWrapper/Wrapper";
import { ButtonComponent } from "../CommonComponents/Button/button";
import { DropDown } from "../CommonComponents/DropDownMenu/drop-down-menu";
import "./form.css";
import React, { useState, useEffect } from 'react'
const myFunction = () => {
    // Function logic here
    console.log("Button clicked!");
};

const FormComponent = () => {
    const item = [{ key: "academic_year", title: "Academic Year" }, { key: "type", title: "Type" }, { key: "class", title: "Class" }, { key: "division", title: "Division" }, { key: "subject", title: "Subject" }, { key: "chapter", title: "Chapter" }, { key: "posted_by", title: "Posted By" }, { key: "posted_date", title: "Posted Date" }, { key: "last_date_submission", title: "Last Date Of Submission" }]

    const [menu, setMenu] = useState({})
    useEffect(() => {
        const items: { [x: string]: { isopen: boolean, anchorElement: null } } = {};
        item.forEach((elem: { key: string, title: string }) => (
            items[elem.key] = { isopen: false, anchorElement: null }
        ))
        setMenu(items)

    }, [])

    const ButtonActionHandler = (event: React.MouseEvent<HTMLButtonElement | null>,key:string) => {
        // setMenu ((prevmenu) => ({...prevmenu, [key] : {isopen: true, anchorElement: event.currentTarget}})) }
    
    }
    const handleMenuClose = () =>{
        // setMenu ((prevmenu) => ({...prevmenu, [key] : {isopen: true, anchorElement: null}}))
    }
    const wrapperHead = <h3 className="filter__heading">Filters</h3>
    const wrapperBody =
        [<form >
            <div className="details">
                <>
                {
                    item.map((({key,title}:{key:string,title:string}) => {
                        <div className="dropdown">
                            <label htmlFor="item">{title}</label>
                            <ButtonComponent name='Add New' buttonType='add'
                                aria-controls={menu[key as keyof typeof menu]["isopen"]? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={menu[key as keyof typeof menu]["isopen"]? "true" : undefined}
                                actionHandler={(e) => ButtonActionHandler(e,key)}
                            />
                            <DropDown isOpen={menu[key as keyof typeof menu]["isopen"]} anchorEl={menu[key as keyof typeof menu]["anchorElement"]} handleMenuClose={handleMenuClose} />
                        </div>
                    }))
                }</>
  

                {/* <select name="year" id="year">
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option><option value="2017">2017</option>
                        <option value="2021">2021</option>
                    </select> */}


                <div className="dropdown">
                    <label htmlFor="item">Title/Topic</label>
                    <input type="text" name="title" ></input>
                </div>
                <div className="buttoncontainer">
                    <div className="button">
                        <button className="cancel" onClick={myFunction}>Cancel</button>
                    </div>
                    <div className="button">
                        <button className="apply" onClick={myFunction}>Apply</button>
                    </div>
                </div>
            </div>
        </form>]
    return (
        <Wrapper wrapperHead={wrapperHead} wrapperBody={wrapperBody} />

    )
}

export default FormComponent;