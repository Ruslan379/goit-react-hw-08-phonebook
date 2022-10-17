import { useAuth } from 'hooks';
import css from './Home.module.css'




export default function Home() {
    const { user } = useAuth();
    console.log("user", user); //!

    return (
        <div className={css.container}>
            <h1 className={css.title}>
                <span className={css.spanName} role="img" aria-label="Greeting icon">
                    💁 {user.name} <br />
                </span>
                Welcome to the HW-8
                <span className={css.spanWith}>
                    &nbsp;(with createAsyncThunk)
                </span>
            </h1>
        </div>
    );
}
