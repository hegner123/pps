
  import { useState, useEffect } from "react";
  import { useSupabaseClient } from "@supabase/auth-helpers-react";

  const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const supabaseClient = useSupabaseClient();

    async function loginUser() {
      let { data, error } = await supabaseClient.auth.signInWithPassword({
        email: `${email}`,
        password: `${password}`,
      });
      if (error) {
        setError(error);
        return;
      }
      console.log(data);
      return data;
    }

    function handleSubmit(e) {
      e.preventDefault();
      if (password !== passwordConfirmation) {
        setError("Passwords do not match");
        return;
      }

      loginUser();
    }

    return { email, password, error, setEmail, setPassword, handleSubmit };
  };

        
export default useLogin;