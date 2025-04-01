const Button = ({ onClickHandler, value, title, selectedCategory }) => {
  return (
  
      <button
        onClick={onClickHandler}
        value={value}
        className="btn-dark text-black p-1 px-4 hover:bg-[#6B0606] hover:text-white rounded-md mx-5 btn fw-bold border-2 border-[#6B0606]"
      >
        {title}
      </button>
     
   
  );
};

export default Button;
