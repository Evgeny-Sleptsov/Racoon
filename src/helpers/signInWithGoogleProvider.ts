import { auth, googleProvider } from '../firebase';
const signIn = (): void => {
  const provider = googleProvider;
  auth.signInWithRedirect(provider);
}

export default signIn;