import "../style/main.scss";
import Plus from '../assets/plus.png';
import Rem from '../assets/rem.png';
import Nuke from '../assets/nuke.png';
import { useState } from 'react';

export default function Main() {
    const ls = localStorage;
    const len = localStorage.length;
    const [input, setInput] = useState();
    const addTD = () => {
        ls.setItem("key"+len, input);
        window.location.reload();
    }

    const eraseTD = () => {
        alert("Toutes les notes sont effacées");
        localStorage.clear();
        window.location.reload();
    }

    const remTD = (key) => {
        ls.removeItem(key);
        window.location.reload();
    }


    return (
        <div className="page-area">
            <div className="td-area">
                <div className="topbar-area">
                    <div className="btn-area">
                        <div className="quit-btn"></div>
                        <div className="min-btn"></div>
                        <div className="max-btn"></div>
                    </div>
                    <div className="infos-area"></div>
                </div>
                <div className="sct-area">
                    <div className="typing-area">
                        <div className="input-area">
                            <div className="input-text">
                                <input type="text" placeholder="Taper votre tâche ici..." className="text-sct"onChange={e => setInput(e.target.value)}></input>
                            </div>
                            <dic className="input-btn">
                                <img src={Plus} onClick={addTD} className="btn-sct"></img>
                                <img src={Nuke} onClick={eraseTD} className="rm-sct"></img>
                            </dic>
                        </div>
                    </div>
                    <div className="list-area">
                        <div className="block-area">
                            {Object.keys(ls).map(key =>
                                <div className="td" key={key}>
                                        <h1 className="td-h1">{ls.getItem(key)}</h1>
                                        <img src={Rem} onClick={() => remTD(key)} className="rem-btn"></img>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}