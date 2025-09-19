
// ==================== LOGIN ======================
export const userLogin = async (email, password) => {


    const url = 'https://api.escuelajs.co/api/v1/auth/login'
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        
        const data = await response.json()
        console.log(data);
        return data;
    }
    catch(error) {
        console.error("Error logging in:", error)
        throw error
    }
}

// ==================== SIGNUP ======================

export const userSignUp = async (name, email, password, avatar) => {
  const url = 'https://api.escuelajs.co/api/v1/users/';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        avatar: avatar || "https://picsum.photos/800", // fallback avatar
      }),
    });

    const data = await response.json();
    console.log("Signup response:", data);
    return data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};