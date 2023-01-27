

function Main({activeProfile, onUpdateProfile}) {

    const onEditFeild = (key, value) => {

        onUpdateProfile({
            ...activeProfile,

            [key]: value,
        })
    };

    if(activeProfile)
    return <div className= "no-active-note"> No active Profile</div>

    return (
        <div className="app-main">
            <div className="app-main-profile-edit">
            <input type="test" 
                id="fname" 
                value={activeProfile.fname} 
                // onChange={(e) => onEditFeild("", e.target.value)}
                // autoFocus
                placeholder="First Name" />

            </div>
            <div className="app-main-profile-preview">
                <h1 className="preview-name">{activeProfile.fname}</h1>
                <div className="preview">
                    {activeProfile.fname}
                    </div>    
            </div>
        </div>
    )
}

export default Main