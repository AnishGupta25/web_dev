let Filter = (props) =>{
    return(
        <div className="col-3 ">
            <ul className="list-group m-4">
                <li className="list-group-item "> All Genre </li>
                {
                props.genreData.map((el)=>{
                    return  <li key={el._id} className="list-group-item ">{el.name}</li>
                })
                }
            </ul>
        </div>
    );
};

export default Filter;