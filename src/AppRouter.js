import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import { HookApp } from './HookApp';
import { NavBar } from './NavBar';

// Examples
import { MultipleCustomHooks } from '././components/examples/MultipleCustomHooks';

// useEffect
import { Message } from '././components/useEffect/Message';
import { SimpleForm } from '././components/useEffect/SimpleForm';
import { FormWithCustomHook } from '././components/useEffect/FormWithCustomHook';

// Memos
import { Father } from '././components/memo/Father';
import { CallbackHook } from '././components/memos/CallbackHook';
import { MemoHook } from '././components/memos/MemoHook';
import { Memorize } from '././components/memos/Memorize';

// useLayoutEffect
import { Layout } from '././components/useLayoutEffect/Layout';

// useReducer
import { TodoApp } from '././components/useReducer/TodoApp';

// useRef
import { FocusScreen } from '././components/useRef/FocusScreen';
import { RealExampleRef } from '././components/useRef/RealExampleRef';

// useState
import { CounterApp } from '././components/useState/CounterApp';

export const AppRouter = () => {

    return (
        <Router>
            <NavBar/>
            <div>                
                <div className="container mt-5">
                    <Switch>
                        <Route exact path="/" component={ HookApp } />
                        <Route exact path="/multiple-custom-hooks" component={ MultipleCustomHooks } />
                        <Route exact path="/message" component={ Message } />
                        <Route exact path="/simple-form" component={ SimpleForm } />
                        <Route exact path="/form-with-custom-hook" component={ FormWithCustomHook } />
                        <Route exact path="/father" component={ Father } />
                        <Route exact path="/callback-hook" component={ CallbackHook } />
                        <Route exact path="/memo-hook" component={ MemoHook } />
                        <Route exact path="/memorize" component={ Memorize } />
                        <Route exact path="/layout" component={ Layout } />
                        <Route exact path="/to-do-app" component={ TodoApp } />
                        <Route exact path="/focus-screen" component={ FocusScreen } />
                        <Route exact path="/ref-example" component={ RealExampleRef } />
                        <Route exact path="/counter-app" component={ CounterApp } />                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    );

};