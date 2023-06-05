
const Banner = ({item}) => {

    return ( 
        <div className="banner"
        style={{backgroundImage:
            'url('+`${item.MAIN_IMG_NORMAL
            }`+')',
            
            
            }}
        >

        </div>
    );
}

export default Banner;