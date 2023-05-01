import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Services/StatsService";


const Header = () => {
  const navigate = useNavigate();

  function onLogoutUser() {
    logoutUser();
    navigate('/');
  }
  return (
    <div>
        <button className="gameButton" onClick={() => navigate('/select')}>Select Category</button>
        <button className="gameButton" onClick={() => navigate('/stats')}>View User Stats</button>
        <button className="gameButton" onClick={onLogoutUser}>Log Out</button>
    </div>
  );
}

export default Header;