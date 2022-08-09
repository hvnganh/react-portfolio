import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '~/work/Redux/TodoList/todosSlice';
import filterSlice from '~/work/Redux/Filters/filterSlice';
import ProductCartSlice from '~/EShop/ShopComponents/ShopItems/ProductCartSlice';

export const store = configureStore({
    reducer: {
        todoList: todosSlice.reducer,
        filters: filterSlice.reducer,
        productList: ProductCartSlice.reducer,
    },
});
