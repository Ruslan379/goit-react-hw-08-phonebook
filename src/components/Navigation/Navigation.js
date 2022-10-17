// import { NavLink } from 'react-router-dom'; //? если import css from './Navigation.module.css';

import { useAuth } from 'hooks';

// import css from './Navigation.module.css';
import { LinkHome, LinkContacts } from './Navigation.styled.js'; //! "components/Navigation/Navigation.styled";




//? import css from './Navigation.module.css';
export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <LinkHome to="/" end>
                Home
            </LinkHome>
            {isLoggedIn && (
                <LinkContacts to="/contacts">
                    Contacts
                </LinkContacts>
            )}
        </nav>
    );
};


//? import css from './Navigation.module.css';
// export const Navigation = () => {
//     const { isLoggedIn } = useAuth();

//     return (
//         <nav>
//             <NavLink className={css.link} to="/">
//                 Home
//             </NavLink>
//             {isLoggedIn && (
//                 <NavLink className={css.link} to="/contacts">
//                     Contacts
//                 </NavLink>
//             )}
//         </nav>
//     );
// };