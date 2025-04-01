import { useAuth } from "../utils/AuthContext"
import { BsLadder } from "react-icons/bs";

const Header = () => {
    const { user, handleLogout } = useAuth();


  return (
    <main>
        {
           user ? (
            <>
            Welcome {user.name}
            <BsLadder onClick={handleLogout}/>
            </>
           ) : (
            <button>Login</button>
           )
        }
    </main>
  )
}

export default Header