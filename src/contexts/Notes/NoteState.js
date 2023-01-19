import noteContext from "./noteContext";
const NoteState = (props) => {
  const Lhost = "https://backend-lsmp.vercel.app"
  
  //USED TO LOGIN 
  const loginAcc=async (email,password)=>
  {
      const response = await fetch(`${Lhost}/api/auth/login`, {
          method: 'POST',
           headers: {
            'Content-Type': 'application/json',
           },
           body: JSON.stringify({email,password})
          });
          const json=await response.json();
          console.log(json)
          return json;
      //console.log(json)
  }

  //uSED TO SIGN UP 
  const signAcc=async (name,email,password)=>
  {
      const response = await fetch(`${Lhost}/api/auth/createuser`,{
          method: 'POST',
           headers: {
            'Content-Type': 'application/json',
           },
           body: JSON.stringify({name,email,password})
          });
      const json=await response.json();
      return json;
  }

  const getDetails=async()=>
  {
    const response = await fetch(`${Lhost}/api/auth/account`,{
      method: 'POST',
       headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
       },
      });
  const json=await response.json();
  return json;
  }
  const ChangePwd=async(oldPwd,newPwd)=>
  {
    const response = await fetch(`${Lhost}/api/auth/changepwd`,{
      method: 'POST',
       headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
       },
       body: JSON.stringify({oldPwd,newPwd})
      });
  const json=await response.json();
  return json;
  }

  return (
        <noteContext.Provider value={{loginAcc,signAcc,getDetails,ChangePwd }}>
      {props.children}
    </noteContext.Provider>
  )
}
export default NoteState;