import { useAppstore } from "../store/appStore.js"

function Navbar() {
const user = useAppstore((s) => s.user)
const theme = useAppstore((s) => s.theme)
const logout = useAppstore((s) => s.logout)
const toggletheme = useAppstore((s) => s.toggle)
    return (
        <>
        <nav>
            <span>Theme : {theme}</span>
            <button onClick={toggletheme}>Toggle Theme</button>
         {user ? (<>
         <span> Hi , {user.name}</span>
         <button onClick={logout}> Logout</button>
         </>) : (
            <span> Guest</span>
         )}

        </nav>
        </>
    )
}


export default Navbar