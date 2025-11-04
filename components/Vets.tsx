function Vets({price}) {

    console.log(price)



    return (
        <>
            <div>
                <div>
                    <img src="/" alt="imagen producto" />
                </div>
                <div className="col-8" >
                    <h3>{Vets.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto doloribus nam distinctio voluptatibus odio 
                    deleniti illo vitae nesciunt, nihil est molestiae? Iste tenetur accusantium amet exercitationem dolor inventore laborum!</p>
                    <p></p>
                    <button
                        type="button"
                        className="btn btn-dark w-100"
                    >Agregar al carro</button>
                </div>
            </div>
        </>
    )
}

export default Vets;