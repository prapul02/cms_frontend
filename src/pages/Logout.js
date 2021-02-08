import React, {useEffect} from "react"

const Logout = () => {
    useEffect(() => {
        fetch("https://safe-hollows-51478.herokuapp.com/logout")
          .then((res) => {
            console.log(res);
            alert("Logged out Successfully");
            window.location.href = "/";
          })
      }, []);

      return(
          <div>
              <h2>Logout successful</h2>
          </div>
      )
}

export default Logout