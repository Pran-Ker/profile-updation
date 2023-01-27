
import './App.css';
import { useEffect, useState } from 'react';

import uuid from 'react-uuid';
import Main from './Main';
import Sidebar from './Slidebar';


function App() {
  const [profile, setProfile] = useState(
    localStorage.profile ? JSON.parse(localStorage.profile) : []
  );
  const [activeProfile, setActiveProfile] = useState(false);

  useEffect(()=> {
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);
  
  const onAddProfile = () => {
    const newProfile = {
      id: uuid(),
      fName: "First Name",
      lName: "Last Name",
      dName: "Display Name",
      email: "Email",
      wphone: "Phone No (Work)",
      hphone: "Phone No (Home)",
      location: "Location"
    };

    setProfile([newProfile, ...profile]);
    setActiveProfile(newProfile.id);
  };

  const onUpdateProfile = (updatedProfile) => {
    const updatedProfileArr = profile.map((profile) => {
      if (profile.id === updatedProfile.id) {
        return updatedProfile;
      }

      return profile;
    });

    setProfile(updatedProfileArr);
  };
  
  const getActiveProfile = () => {
    return profile.find(({ id }) => id === activeProfile)
  }


  return (
    <div className="App">
      {/* <Sidebar
        profile={profile}
        onAddProfile={onAddProfile}
        activeProfile={activeProfile}
        setActiveProfile={setActiveProfile}
      /> */}
      <Main activeProfile={getActiveProfile()} onUpdateProfile={onUpdateProfile} />
    </div>
  );
}

export default App;
