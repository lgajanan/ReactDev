const UserCard = (props) =>{

    return(
        <div className="user-card">
            <p>Name: {props.name }</p>
            <p>Location: Pune</p>
            <p>Contact:708082522</p>
        </div>
    );
}
export default UserCard;