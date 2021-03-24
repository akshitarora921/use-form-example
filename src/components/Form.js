function Form({ onSubmit, register, handleSubmit }) {
  const styles = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div>
      <h1>Form</h1>
      <form style={styles} onSubmit={handleSubmit(onSubmit)}>
        <input name='id' hidden ref={register} />
        <input name='userName' placeholder='username' ref={register} />
        <input
          name='emailAddress'
          placeholder='Email'
          type='email'
          ref={register}
        />
        <input
          name='age'
          placeholder='age'
          type='number'
          ref={register({ min: 0, max: 110 })}
        />
        <select name='eyeColor' placeholder='eyeColor' ref={register}>
          <option value='brown'>brown</option>
          <option value='blue'>blue</option>
          <option value='black'>black</option>
        </select>
        <input
          name='balance'
          placeholder='balance'
          type='number'
          ref={register}
        />
        <input type='submit' />
      </form>
    </div>
  );
}

export default Form;
