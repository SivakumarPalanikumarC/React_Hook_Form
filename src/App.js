import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="App">
      <h1>User Registration</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" {...register("name", { required: true })}/><br/><br/>
        {errors?.name?.type === "required" && <p>Name required</p>}

        <label for="place">Place:</label>
        <input type="text" id="place" name="place" {...register("place", { required: true })}/><br/><br/>
        {errors?.place?.type === "required" && <p>Your place required</p>}

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" {...register("email", { required: true })}/><br/><br/>
        {errors?.email?.type === "required" && <p>Enter E-mail</p>}

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" {...register("password", { required: true, pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$" })}/><br/><br/>
        {errors?.password?.type === "required" && <p>Set Password</p>}
        {errors?.password?.type === "pattern" && (<p>Enter valid format!</p>)}

        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" {...register("confirmPassword", { required: true, pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$"  })}/><br/><br/>
        {errors?.confirmPassword?.type === "required" && <p>Confirm Password</p>}
        {errors?.confirmPassword?.type === "pattern" && (<p>Enter valid format!</p>)}

        {errors.exampleRequired && <span>Confirm Password</span>}
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default App;