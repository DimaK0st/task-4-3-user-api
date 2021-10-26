import React from "react";

function Weather(props) {
    let res=[];

    props.data.list.map((item, i)=>{
        res.push(<div>
                    <span key={i}>
                        {console.log("item.main.temp",item.main.temp)}
                        {item.main.temp-273.15}
                    </span>
        </div>)
    })

    return (
        <div>
            12312312312312312312312312312312321
            {console.log(res)}
            {res}


        </div>
    );


}

function proverka(object, info) {
    return object !== undefined ? object[`${info}`] : ''


}

export default Weather;
