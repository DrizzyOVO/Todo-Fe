import {Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import { userEmailState } from "../store/selectors/userEmail"; 
import { isUserLoading } from "../store/selectors/isUserLoading"; 
import TodoList from "./todoList";

export const Landing = () => {
    const navigate = useNavigate(); 
    const userEmail = useRecoilValue(userEmailState); 
    const userLoading = useRecoilValue(isUserLoading); 

    if(userEmail) { 
        return <TodoList />
    } else { 
        return (
            <>
            <h1 className="flex justify-center font-normal cursor-pointer mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl" style={{fontFamily: 'Cookie', color: 'white'}}> 
                Welcome to <span className="font-bold">&nbsp;ToDo...</span>
            </h1>
            <h1 className="flex justify-center font-normal cursor-pointer mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl" style={{fontFamily: 'Cookie', color: 'white'}}> 
                login or make an account and get <span className="font-bold">&nbsp;started!</span>
            </h1>

            <div className="absolute inset-x-0 bottom-0">
                <h1 className="flex justify-center font-normal cursor-pointer mt-10 text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl" style={{fontFamily: 'Cookie', color: 'white'}}> 
                    Limited to <span className="font-bold">&nbsp;35</span>&nbsp;users.
                </h1>
                <h1 className="flex justify-center font-normal cursor-pointer mt-10 text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl" style={{fontFamily: 'Cookie', color: 'white'}}> 
                    Once limit is reached you may need to signup once again.
                </h1>
            </div>

            </>
        )
    }
}

