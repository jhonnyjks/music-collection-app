import Dashboard from './dashboard/dashboard'
import User from '../users/index'
import Profile from '../profiles/index'
import Artist from './artists/index'
import ArtistReducer from './artists/reducer'

// Reducers do projeto
export const reducers = {
    artist: ArtistReducer
}

// Rotas do projeto
export const routes = [
    { exact: true, path: '/', component: Dashboard },
    { exact: true, path: '/users', component: User },
    { exact: true, path: '/profiles', component: Profile },
    { exact: true, path: '/artists', component: Artist }
]

// Menu do projeto
export const menu = {
    '/': { title: 'Dashboard', icon: 'dashboard' },
    '/users': { title: 'Users', icon: 'user' },
    'profiles': {
        title: 'Profiles', icon: 'users',
        //Exemplo de menu cascateado
        // children: {
        //     '/permissions': { title: 'Permissions', icon: 'user' },
        // }
    },
    '/artists': { title: 'Artists', icon: 'user' },
}