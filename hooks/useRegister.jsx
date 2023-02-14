
  import { useState,useEffect } from "react";
  import { supabase } from "../../lib/supabaseClient";

  const useRegister = () => {
      const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState(null);
  
  async function registerUser(){
    let { data, error } = await supabase.auth.signUp({
      email: `${email}`,
      password: `${password}`,
    })
    if (error) {
      setError(error);
      return;
    }
    console.log(data)
    return data;
}
      
      function handleSubmit(e){
          e.preventDefault();
          if (password !== passwordConfirmation) {
              setError("Passwords do not match");
              return;
            }
            if (password.length < 6) {
                setError("Password must be at least 6 characters");
                return;
            }
            // if (email.includes("@") && email.includes(".")) {
                //   setError("Email must be valid");
                //   return;
                // }
                registerUser();
            }
        }