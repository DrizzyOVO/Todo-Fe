import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./components/Signin"; 
import Signup from "./components/Signup";
import Appbar from "./components/Appbar";
import TodoList from "./components/todoList"; 
import { useEffect, useState } from 'react';
import axios from "axios";
import { useSetRecoilState, RecoilRoot } from 'recoil';
import { userState } from './store/atoms/user';
import { Landing } from './components/Landing';


function App() {

    return (
        <RecoilRoot>
            <div style={{width: "100vw",
                height: "100vh",
                backgroundColor: 'rgba(17 24 39 / 1.0)'
            }}
            >
                    <Router>
                        <Appbar /> 
                        <InitUser />
                        <Routes>
                            <Route path={"/signin"} element={<Signin />} />
                            <Route path={"/signup"} element={<Signup />} />
                            <Route path={"/"} element={<Landing />} />
                        </Routes>
                    </Router>

            </div>
        </RecoilRoot>
    );
}

function InitUser() { 
    const setUser = useSetRecoilState(userState); 
    const init = async () => {
        try { 
            const response = await axios.get('/auth/me', {
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

export default App;