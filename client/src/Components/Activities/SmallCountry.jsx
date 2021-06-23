import style from "./smallCountry.module.css"


export const SmallCountry = ({name, flagimg, id}) => {


    return (
        <div>
            <div>
                 
                <img className={style.imgContainer}src={flagimg}/>
                <p className={style.text}>{name}</p>
                <p>{id}</p>

    
                
            </div>
        </div>
    )
}

    

