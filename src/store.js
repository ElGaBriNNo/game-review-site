import {
    Store
} from "vuex";

import Vuex from "vuex";


let list = window.localStorage.getItem("list");
let gamePlayed = window.localStorage.getItem("gamePlayed");
let searchList = window.localStorage.getItem("searchList");

export default new Vuex.Store({
    state: {
        list: list ? JSON.parse(list) : [],
        gamePlayed: gamePlayed ? JSON.parse(gamePlayed) : [],
        searchList: searchList ? JSON.parse(searchList) : []
    },

    mutations: {
        addToMyList(state, game) {
            let gameExists = state.list.find(
                current => current.id == game.id
            );
            if (!gameExists) {
                state.list.push(game);
            }
            this.commit("saveData");
        },
        saveData(state) {
            window.localStorage.setItem("list", JSON.stringify(state.list));
        },
        removeData(state, game) {
            let index = state.list.indexOf(game);
            state.list.splice(index, 1);
            this.commit("saveData");
        },
        markPlayed(state, gameId) {
            let gameMarked = state.gamePlayed.find(
                current => current.id == gameId.id
            );

            if (!gameMarked) {
                state.gamePlayed.push(gameId);
            }

            this.commit("markGame");
        },
        markGame(state) {
            window.localStorage.setItem(
                "gamePlayed",
                JSON.stringify(state.gamePlayed)
            );
        },
        deletePlayed(state, game) {
            let playedDelete = state.gamePlayed.indexOf(game);
            state.gamePlayed.splice(playedDelete, 1);
            this.commit("markGame");
        },
        addToSearchList(state, games) {
            state.searchList.push(games);
            this.commit("saveSearchData");
        },
        saveSearchData(state) {
            window.localStorage.setItem("searchList", JSON.stringify(state.searchList));
        },
    }
});