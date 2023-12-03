Lab 10
Overview

This application's entire purpose is to show of these 6 concepts:

    State
    Store
    Reducer
    Action
    Dispatch
    Subscribe

The application is a simple counter that allows the user to increment and decrement the count. The application's state is managed using Redux.

The application consists of the following files:

    store.js: Creates the Redux store using configureStore and defines the initial state.
    reducer.js: Defines the reducer using createSlice, specifying how state changes for the counter.
    actions.js: Contains action creators (increment and decrement) using createSlice.
    App.js: Renders the counter application, dispatches actions, and manages state updates.