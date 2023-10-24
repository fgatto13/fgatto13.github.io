import React from "react";

export function MyButton(){
    return(
        <button>click me!</button>
    );
}

export function SectionGenerator(props) {
    return(
        <section>
            {props.content}
        </section>
    );
}

export function DivGenerator(){
    return (
        <div>
            <h1>
                Test di generazione sezione
            </h1>
            <p>
                Questo è il secondo test di generazione<br></br>
                Funziona!
            </p>
        </div>
    );
}