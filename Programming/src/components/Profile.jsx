import image from "./assets/react.svg";
import "./Styles.css";

function Profile(props){
    return <>
        <div>
            <div>
                <div className="H-F-card">
                    <img src={image} style={{height: "inherit", width: "inherit", borderRadius:"50%"}}/>
                </div>
                <div>
                    <div>Name: </div>
                    <div>DOB: </div>
                    <div></div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </>
}

export default Profile;
