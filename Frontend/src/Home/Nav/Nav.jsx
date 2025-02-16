import { useContext, useState } from "react";
import Hooks from "../../hooks/Hooks";
import { AuthContext } from "../../providers/authprovider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Logout completed")
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "<>Can't LogOut<>"
        });
      })
  }

  // console.log(user);
  const IsLogin = <>

    {
      user ? <>
        <button onClick={handleLogOut}>Logout</button>
      </>
        :
        <>
          <Link to={"/login"}>
            Login
          </Link>
        </>
    }
  </>

  // Step 1: Initialize a state variable to hold the search term
  const [AreaSearch, setAreaSearch] = useState("");
  const [NameSearch, setNameSearch] = useState("");
  const [phoneSearch, setPhoneSearch] = useState("");

  // Step 2: Update the state whenever the user types in the input field
  const handleAreaInput = (event) => {
    setAreaSearch(event.target.value);
  };
  const handleNameInput = (event) => {
    setNameSearch(event.target.value);
  };
  const handlePhoneInput = (event) => {
    setPhoneSearch(event.target.value);
  };

  return (
    <div className="mx-3.5 mt-6">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">TanvirBosroBitan</a>
        </div>
        <div className="flex-none gap-2">

          <div className="form-control">
            <input type="text" value={NameSearch} onChange={handleNameInput} placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://www.w3.org/assets/website-2021/svg/avatar.svg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to={'/dashboard'} className="justify-between">
                  Dashboard
                  <span className="badge">New</span>
                </Link>
              </li>
              <li >{IsLogin}</li>
            </ul>
          </div>
        </div>
      </div>
      {
        <Hooks
          // className='  Content   mx-auto'
          NameSearch={NameSearch}
        ></Hooks>
      }
    </div>
  );
};

export default Nav;