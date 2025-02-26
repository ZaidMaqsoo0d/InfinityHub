const registerUser = async(email , password , fullName) =>{

  await firebase.auth().createUserWithEmailAndPassword(email,password)
  .then(() =>{
    firebase.auth().currentUser.sendEmailVerification({
      handleCodeInApp: true,
      url:'https://fir-login-34c00.firebaseapp.com'
  })
  .then(()=>{
    alert("Check your email, verification has been Sent");
    navigation.navigate('Dashedboard');
  })
  .catch((error) =>{
    alert(alert.message);

  })
  .then(()=>{
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid)
    .set({
      fullName,
      email
    })
  })
  })
  .catch((error)=>{
    alert(error.message);
  })
  .catch((error) =>{
    alert(error.message);
  })
}