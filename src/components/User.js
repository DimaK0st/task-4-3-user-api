import React from "react";

function User(props) {

    // console.log(props)
    return (
        <div>
            {proverka(props.data.picture, "large")}
            <br/>
            {proverka(props.data.name, "title") + " " + proverka(props.data.name, "first") + " " + proverka(props.data.name, "last")}

        </div>
    );


}

function proverka(object, info) {
    return object !== undefined ? object[`${info}`] : ''
}

export default User;
