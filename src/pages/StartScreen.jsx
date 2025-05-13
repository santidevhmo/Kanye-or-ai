import {FontFace, Button, Container} from 'react-nes-component';

export default function StartScreen() {

    return (
        <div className="flex flex-col items-center justify-center">
            <FontFace />
            <img src='../public/PixeTitleTest.png' className="w-50" ></img>
            <Button>Start Game</Button>
        </div>
    )
}