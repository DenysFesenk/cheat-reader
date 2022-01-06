import { Component } from "react";
import './Sidebar.scss';

class Sidebar extends Component {
    render() {
        return(
            <div className="sidebar">
                <h1 className="sidebar__title">My App: </h1>
                <ul className="sidebar__list">
                    <li className="sidebar__item">Набиралка</li>
                    <li className="sidebar__item">Калькулятор</li>
                    <li className="sidebar__item">Конвертер вал ют</li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;