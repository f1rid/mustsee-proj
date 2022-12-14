import React, { Component } from 'react';
import './Favorites.css';
import store from '../../redux/store';

class Favorites extends Component {
    state = {
        title: 'Новый список',
        movies: []
    }

    componentDidMount() {
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                movies: state.favoriteList
            });
        });
    }

    render() { 
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.state.movies.map((item) => {
                        return <li key={item.id}>{item.title} ({item.year})</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}
 
export default Favorites;