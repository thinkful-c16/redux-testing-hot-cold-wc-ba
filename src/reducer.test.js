import { reducer } from './reducer';
import {restartGame, makeGuess, generateAuralUpdate} from './actions';

describe('reducer', () => {
    it('Should set the intial state when nothing is passed in', () => {
        const action = reducer(undefined, {type: '@@UNKNOWN'});
        const state = action;
        expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 7 
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const action = reducer(currentState, {type: '@@UNKNOWN'});
        const state = action;
        expect(state).toBe(currentState);
    });
});

describe('restartGame', () => {
    it('Should restart the game', () => {
        let state = {
            guesses: [4, 5, 6],
            feedback: 'Make another guess!',
            auralStatus: 'blah blah blah',
            correctAnswer: 12
        };
        const newState = reducer(state, restartGame(7));
        expect(newState).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 7 
        });
    });
});

describe('makeGuess', () => {
    it('Should add new guess to guesses', () => {
        let state = {
            guesses: [4, 5, 6],
            feedback: 'Make another guess!',
            auralStatus: 'blah blah blah',
            correctAnswer: 12
        };
        const newState = reducer(state, makeGuess(7));
        expect(newState.guesses).toEqual([...state.guesses, 7]);
    });
});

describe('generateAuralUpdate', () => {
    it('Should generate aural update', () => {
        let state = {
            guesses: [4, 5, 6],
            feedback: 'You\'re warm!',
            auralStatus: '',
            correctAnswer: 12
        };
        const newState = reducer(state, generateAuralUpdate());
        expect(newState.auralStatus).toBeTruthy();
    });
});
