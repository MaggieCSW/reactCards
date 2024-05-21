const Header = ()=> {
    
    return(
        <header>
            <h1 className="h1-header">must watch movies</h1>
            

<div className="card w-25">
    <img src="/images/scoop.jpg" className="card-img-top img-fluid img" alt="#"/>
    <div className="card-body">
        <h5 className="card-title">title</h5>
        <p className="card-text">text about the movies genre....</p>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">rated</li>
        <li className="list-group-item">year released</li>
        <li className="list-group-item">director</li>
    </ul>
</div>


        </header>

    )
}

export default Header