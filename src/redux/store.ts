import { configureStore } from "@reduxjs/toolkit";
import {ticketsApi} from './ticketsApi';

export const store = configureStore({ 
	reducer:{
		[ticketsApi.reducerPath]:ticketsApi.reducer,
	},
	middleware: (getDefaultMidlleware) =>getDefaultMidlleware().concat(ticketsApi.middleware)
})
