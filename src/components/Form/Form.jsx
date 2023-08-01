import { Button } from "../Styled-Components/Container";
import "./Form.css";
export const Form = ({ inputVal, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input value={inputVal} onChange={handleChange} />
      <Button type="submit">
        <i className="fa-solid fa-share" style={{color: "ffffff"}}></i>
      </Button>
    </form>
  );
};
