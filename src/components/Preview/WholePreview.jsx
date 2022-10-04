const WholePreview = props => { 
    return ( 
        <div className="relative">
            <img
              className=" max-w-xl z-[-1] rounded-xl"
              src="duckie_bits/Duckie.jpg"
            />
            <img
              className=" max-w-xl top-0 absolute z-10 rounded-xl"
              src="duckie_bits/EyesClosed.png"
            />
          </div>
    )
}

export default WholePreview