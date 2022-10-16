import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  end?: boolean;
}

const lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
const lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
// const lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: '/',
    path: '',
    Component: lazy1,
    name: 'LazyPage1',
    end: true
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: lazy2,
    name: 'LazyPage2'
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: LazyPage3,
    name: 'LazyPage3'
  }
];