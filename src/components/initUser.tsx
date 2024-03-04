import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
import axios from "axios";
import { useEffect } from "react";

function initUser() { 
    const setUser = useSetRecoilState(userState); 
    const init = async () => {
        try { 
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/me`, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }); 

            if(response.data.username){
                setUser({ 
                    isLoading: false, 
                    userEmail: response.data.username 
                })
            } else { 
                setUser({ 
                    isLoading: false, 
                    userEmail: null 
                })
            }
        } catch (e) { 
            setUser({ 
                isLoading: false, 
                userEmail: null 
            })
        }
    }; 

    useEffect(() => {
        init(); 
    }, []); 

    return <></>
    
}

export default initUser; 