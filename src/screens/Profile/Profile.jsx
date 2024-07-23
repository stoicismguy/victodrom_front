import CommonHeader from "../../shared/Header/Header";
import MenuList from "../../shared/MenuList/MenuList";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";

function Profile () {
    return (
        <>
            <CommonHeader></CommonHeader>
            <MainWrapper>
                <MenuList></MenuList>
                <ProfileInfo></ProfileInfo>
            </MainWrapper>        
        </>
    );
}

export default Profile