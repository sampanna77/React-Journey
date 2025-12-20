import { useState } from "react"

function UserCard({user , theme , actions}){
return (
  <>
<div className={`
${theme.backgroundcolor} ${theme.textcolor} p-6 rounded-xl `}>
  <div className="flex gap-x-5 items-center">
   <div>
     <div className={`${theme.badgeBg} rounded-full p-3 h-fit w-fit`}>{user.avatar}   </div>
    <div>
      {<h3>{user.name}</h3>}
      {user.email}
      <div>
        {user.role} {user.status}
      </div>
    </div>
   </div>
   <div>
   {Object.entries(user.stats).map(([key , value]) => <div> {key} {value}</div>)}
   </div>
  </div>
</div>
  </>
)
}
function Complexprops() {
  const [message , setMessage] = useState("")
  const users = [
    {
      user:{
        name:"Sampanna Ghimire",
        email : "sampanna77@gmail.com",
        avatar:"👩‍🦰",
        role:"Admin",
        status:"Active",
        stats:{
          posts:123,
          followers: 32 , 
          following : 32
        }
      }  , 
      theme:{
        backgroundcolor : "bg-gradient-to-br from-purple-100 to-blue-100",
textcolor:"text-gray-800",
avatarBg:"bg-purple-300",
badgeBg:"bg-purple-200",
buttonclr:"bg-purple-600"
      },
      actions:{
        primary:{
          label:"View-profile",
          onClick:() => setMessage("viewing Alice's profile"),
          className:"bg-purple-500 text-white hover:bg-purple-600"
        },
        secondary:{
          label:"Message" , 
          onClick: () => setMessage("Opening message to Alice")
        }
      }
    },

    {
      user:{
        name:"Sampanna Ghimire",
        email : "sampanna77@gmail.com",
        avatar:"👩‍🦰",
        role:"Developer",
        status:"Active",
        stats:{
          Project:321,
          Commits: 32 , 
          Push : 32
        }
      }  , 
      theme:{
        backgroundcolor : "bg-gradient-to-br from-green-100 to-gray-100",
textcolor:"text-gray-800",
avatarBg:"bg-purple-300",
badgeBg:"bg-purple-200"
      },
      actions:{
        primary:{
          label:"View-profile",
          onClick:() => setMessage("viewing Alice's profile"),
          className:"bg-purple-500 text-white hover:bg-purple-600"
        },
        secondary:{
          label:"Message" , 
          onClick: () => setMessage("Opening message to Alice")
        }
      }
    }
  ]
  
  return (
    <div className="space-y-8">
<div>
  <h3>User Profile Card</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
    {users.map((userdata , index) => ( 
      <UserCard key={index} user={userdata.user} theme={userdata.theme} actions={userdata.actions} >  </UserCard>
    ) )}

     
  </div>
</div>
    </div>
  )
}

export default Complexprops 
