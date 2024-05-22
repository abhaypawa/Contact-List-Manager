
// redux hooks
import { useDispatch, useSelector } from "react-redux";
// actions and state from Contact Reducer
import { contactSelector, setShowAddContact } from "../Redux/Reducers/contactReducer";


// render the navbar
const Navbar = () => {
    // to dispatch an action
    const dispatch = useDispatch();

    // function to show add contact section on clicking on button
    const {showAddContact} = useSelector(contactSelector);


    // render the navbar
    return(
        // container
        <div className="bg-[#d2a914] h-[50px] flex justify-between 
                        md:justify-center items-center px-1 sticky 
                        left-0 top-0 right-0">

            {/* heading inside the navbar */}
            <h1 className="text-syan text-lg" >
               CONTACT MANAGER
            </h1>

            {/* add contact button */}
            {/* visible only on smaller screen  */}
            <button className="bg-green-300 rounded p-[2px] md:hidden" 
                    onClick={() => dispatch(setShowAddContact())}>

                {/* set the value of button on condition */}
                {showAddContact ? "Cancel"
                                    : "Add Contact" }

            </button>
            
        </div>
    )
}

export default Navbar;