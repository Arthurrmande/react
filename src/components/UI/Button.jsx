function Button ({children}) {
    return (
        <button className = "ml-auto rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"> 
          {children}
        </button>
    );
}

export default Button;