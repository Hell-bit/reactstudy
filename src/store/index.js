import * as React from 'react';
import TaskStore from './task';
import { configure } from 'mobx';
configure({ enforceActions: 'always' }); // 任何状态都能只能通过actions来修改，在实际开发中也包括新建状态。
let taskStore = new TaskStore();
export const store = { taskStore };

export const storesContext = React.createContext(store);
export const useStores = () => React.useContext(storesContext);
export const StoresProvider = storesContext.Provider;
