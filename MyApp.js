import './MyApp.css';
import IGlogo from './instagram-2.png';
import { MyButton, DivGenerator, SectionGenerator } from './functions/functions';

function MyHeader(){
    return(
        <div>
            <h1>Test</h1>
            <p>
                ciao!
            </p>
        </div>
    );
}

function MyFooter(){
    return(
        <h2>
            Questo è il footer
        </h2>
    );
}

export default function MyApp(){
    const message = <p>Questo è un messaggio di testo</p>;
    const image = <img src={IGlogo} className='App-logo' alt='no image'></img>
    return(
    <div className='wrapper'>
        <header>
            <MyHeader />
        </header>
        <body>
            <SectionGenerator content={message}/>
            <SectionGenerator content={image}/>
            <SectionGenerator content={DivGenerator()}/>
            <SectionGenerator content={MyButton()}/>
        </body>
        <footer>
            <MyFooter />
        </footer>
    </div>
    );
}